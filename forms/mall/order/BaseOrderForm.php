<?php
/**
 * link: http://www.67930603.top/
 * copyright: Copyright (c) 2018 浙江禾匠信息科技有限公司
 * author: xay
 */

namespace app\forms\mall\order;

use app\core\response\ApiCode;
use app\forms\common\CommonDistrict;
use app\events\OrderConfirmedEvent;
use app\events\OrderEvent;
use app\forms\common\mch\MchSettingForm;
use app\forms\common\order\CommonOrder;
use app\forms\mall\export\OrderExport;
use app\models\BaseQuery\BaseActiveQuery;
use app\models\ClerkUser;
use app\models\Express;
use app\models\GoodsAttr;
use app\models\Model;
use app\models\Order;
use app\models\OrderDetail;
use app\models\OrderDetailExpress;
use app\models\PaymentOrder;
use app\models\PaymentOrderUnion;
use app\models\Store;
use app\models\User;
use app\models\UserInfo;
use app\plugins\advance\models\AdvanceOrder;
use yii\db\Query;

abstract class BaseOrderForm extends Model
{
    public $order_id;
    public $seller_remark;

    public $user_id;
    public $keyword;
    public $keyword_1;
    public $status;
    public $is_recycle;
    public $page;
    public $limit;
    public $send_type;
    public $is_clerk;
    public $clerk_id;
    public $app_clerk;//手机端核销订单，取当前用户对应门店
    public $store_id;
    public $date_start;
    public $date_end;
    public $is_mch;
    public $mch_id;
    public $order_by;
    public $plugin;

    public $flag;
    public $fields;

    public $platform;//所属平台
    public $parent_id;

    // 前端操作 显示设置
    public $is_send_show;
    public $is_cancel_show;
    public $is_clerk_show;
    public $is_confirm_show;
    public $orderModel = 'app\models\Order';

    public function rules()
    {
        return [
            [['order_id', 'is_mch', 'mch_id'], 'integer'],
            [['seller_remark', 'flag', 'platform', 'plugin'], 'string'],
            [['keyword', 'keyword_1'], 'trim'],
            [['status', 'is_recycle', 'page', 'limit', 'user_id', 'send_type', 'store_id', 'is_clerk'], 'integer'],
            [['status',], 'default', 'value' => -1],
            [['page',], 'default', 'value' => 1],
            [['date_start', 'date_end', 'fields', 'clerk_id'], 'trim'],
            [['is_send_show', 'is_cancel_show', 'is_clerk_show', 'is_confirm_show'], 'default', 'value' => 1],
            [['send_type'], 'default', 'value' => -1]
        ];
    }

    public function search_num()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }
        $query = $this->where();

        $this->getQuery($query);

        $count = $query
            ->orderBy('o.created_at DESC')
            ->select(['o.*', 'u.nickname'])
//            ->with(['detail.refund', 'detail.goods.goodsWarehouse'])
//            ->with('clerk')
//            ->with('user.userInfo')
//            ->with('store')
            ->count();

        return $count;
    }

    public function search()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }
        $query = $this->where();
        // 自定义条件
        $query = $this->getExtraWhere($query);

        if ($this->flag == "EXPORT") {
            $new_query = clone $query;
            $this->export($new_query);
            return false;
        }

        try {
            \Yii::$app->plugin->getPlugin('mch');
            $query->with('mch.store', 'detail.goods.mch.store');
        } catch (\Exception $exception) {

        }

        if (($this->app_clerk && $this->is_clerk == 1) || $this->clerk_id) {
            $this->order_by = 'confirm_time desc,';
        }

        $list = $query->page($pagination)
            ->orderBy($this->order_by . 'o.created_at DESC')
            ->select(['o.*', 'u.nickname'])
            ->with(['detail.refund', 'detail.goods.goodsWarehouse'])
            ->with('detail.expressRelation')
            ->with('clerk', 'detailExpressRelation')
            ->with('user.userInfo')
            ->with('store', 'expressSingle')
            ->with('detailExpress.expressRelation.orderDetail.expressRelation')
            ->with('detailExpress.expressSingle')
            ->asArray()
            ->all();

        $order = new Order();
        foreach ($list as &$item) {
            $item['platform'] = $item['user']['userInfo']['platform'];
            //插件名称
            if ($item['sign'] == '' && $item['mch_id'] == 0) {
                $item['plugin_name'] = '商城';
            } elseif ($item['mch_id'] > 0) {
                $item['plugin_name'] = isset($item['mch']['store']['name']) ? $item['mch']['store']['name'] : '多商户';
            } else {
                try {
                    $item['plugin_name'] = \Yii::$app->plugin->getPlugin($item['sign'])->getDisplayName();
                } catch (\Exception $exception) {
                    $item['plugin_name'] = '未知插件';
                }
            }
            // 控制页面商家物流留言是否显示
            $isShowMerchantRemark = false;
            /** @var OrderDetailExpress $detailExpress */
            foreach ($item['detailExpress'] as &$detailExpress) {
                if ($detailExpress['merchant_remark']) {
                    $isShowMerchantRemark = true;
                }
                foreach ($detailExpress['expressRelation'] as &$expressRelation) {
                    $expressRelation['orderDetail']['goods_info'] = \Yii::$app->serializer->decode($expressRelation['orderDetail']['goods_info']);
                }
                unset($detailExpress);
            }
            $item['is_show_merchant_remark'] = $isShowMerchantRemark;
            unset($detailExpress);

            $item['order_form'] = json_decode($item['order_form'], true);
            foreach ($item['detail'] as $key => &$detail) {
                $goods_info = \Yii::$app->serializer->decode($detail['goods_info']);
                $item['detail'][$key]['attr_list'] = $goods_info['attr_list'];

                $refund_status = 0;
                if ($detail['refund']) {
                    $refund_status = $detail['refund']['status'];
                }
                $item['detail'][$key]['refund_status'] = $refund_status;
                $detail['goods_info'] = \Yii::$app->serializer->decode($detail['goods_info']);

                //插件名称
                if ($detail['goods']['sign'] == '' && $item['sign'] != 'gift') {
                    $detail['plugin_name'] = '商城';
                } elseif ($detail['goods']['mch_id'] > 0) {
                    if ($item['sign'] != 'gift') {
                        $detail['plugin_name'] = isset($detail['goods']['mch']['store']['name']) ? $detail['goods']['mch']['store']['name'] : '多商户';
                    } else {
                        $detail['plugin_name'] = $item['plugin_name'];
                    }
                } else {
                    try {
                        if ($item['sign'] != 'gift') {
                            $detail['plugin_name'] = \Yii::$app->plugin->getPlugin($detail['goods']['sign'])->getDisplayName();
                        } else {
                            $detail['plugin_name'] = $item['plugin_name'];
                        }
                    } catch (\Exception $exception) {
                        $detail['plugin_name'] = '未知插件';
                    }
                }
            }

            // 订单剩余未发货的商品数量,等于0则代表已全部发货
            $item['not_send_count'] = count($item['detail']) - count($item['detailExpressRelation']);
            // TODO 兼容旧的订单 2019-10-24
            if ($item['is_send'] == 1 && count($item['detailExpressRelation']) == 0) {
                $item['not_send_count'] = 0;
            }

            // 控制订单操作 是否显示(例如拼团)
            $item['is_send_show'] = $this->is_send_show;
            $item['is_cancel_show'] = $this->is_cancel_show;
            $item['is_clerk_show'] = $this->is_clerk_show;
            $item['is_confirm_show'] = $this->is_confirm_show;

            if (\Yii::$app->user->identity->mch_id > 0) {
                $isTrue = $this->getIsConfirmOrder();
                $item['is_confirm_show'] = $isTrue ? 1 : 0;
            }

            // 自定义额外数据
            $item['extra'] = $this->getExtra($item);

            $plugins = \Yii::$app->role->getPluginList();
            $item['plugin_data'] = [];
            foreach ($plugins as $key => $plugin) {
                if (($key == $item['sign'] || $key == 'vip_card') && method_exists($plugin, 'getOrderInfo')) {
                    $pluginDataList = $plugin->getOrderInfo($item['id']);
                    foreach ($pluginDataList as $pKey => $pItem) {
                        $item['plugin_data'][$pKey] = $pItem;
                    }
                }
            }
            // 订单操作状态
            $item['action_status'] = $order->getOrderActionStatus($item);
            // 电子面单列表
            $item['new_express_single'] = $order->getExpressSingleList($item);
        }

        $menuList = \Yii::$app->role->getShareMenu();
        foreach ($menuList as $key => $menu) {
            if ($menu['sign'] == 'mch') {
                unset($menuList[$key]);
            }
        }
        array_unshift($menuList, ['sign' => 'all', 'name' => '全部订单']);
        $list = $this->handleExtraData($list);

        return [
            'code' => ApiCode::CODE_SUCCESS,
            'data' => [
                'pagination' => $pagination,
                'list' => $list,
                'express_list' => Express::getExpressList(),
                'export_list' => $this->getFieldsList(),
                'plugins' => $menuList
            ]
        ];
    }

    /**
     * 插件处理列表展示数据
     * @param $list
     * @return mixed
     */
    protected function handleExtraData($list)
    {
        return $list;
    }

    /**
     * @param BaseActiveQuery $query
     * @return BaseActiveQuery mixed
     */
    protected function getExtraWhere($query)
    {
        return $query;
    }

    /**
     * 添加插件特殊数据
     * @param $order
     * @return array
     */
    protected function getExtra($order)
    {
        return [];
    }

    /**
     * @param Query $query
     * @return mixed
     */
    protected function getQuery($query)
    {
        return $query;
    }

    protected function export($query)
    {
        $exp = new OrderExport();
        $exp->fieldsKeyList = $this->fields;
        $exp->send_type = $this->send_type;
        $exp->export($query);
    }

    protected function getFieldsList()
    {
        return (new OrderExport())->fieldsList();
    }

    protected function where()
    {
        /** @var Order $model */
        $model = $this->orderModel;
        $query = $model::find()->alias('o')->where([
            'o.mall_id' => \Yii::$app->mall->id,
            'o.is_delete' => 0
        ])
            ->leftJoin(['u' => User::tableName()], 'u.id = o.user_id')
            ->leftJoin(['ui' => UserInfo::tableName()], 'ui.user_id = o.user_id');

        if (!$this->app_clerk && !$this->clerk_id) {
            if (\Yii::$app->user->identity->mch_id > 0) {
                $query->andWhere(['o.mch_id' => \Yii::$app->user->identity->mch_id]);
            } else {
                if ($this->is_mch) {
                    $query->andWhere(['>', 'o.mch_id', 0]);
                } else {
                    $query->andWhere(['o.mch_id' => 0]);
                }
            }
        }

        $query->keyword($this->platform, ['ui.platform' => $this->platform]);

        $query->keyword($this->status == -1, ['AND', ['o.is_recycle' => 0], ['not', ['o.cancel_status' => 1]]])
            ->keyword($this->status == 0, [
                'AND',
                ['o.is_pay' => 0, 'o.is_recycle' => 0],
                ['not', ['o.pay_type' => 2]],
                ['not', ['o.cancel_status' => 1]],
                ['o.is_send' => 0],
                ['o.sale_status' => 0],
            ])
            ->keyword($this->status == 1, [
                'AND',
                ['o.is_recycle' => 0, 'o.is_send' => 0],
                ['or', ['o.is_pay' => 1], ['o.pay_type' => 2]],
                ['o.cancel_status' => 0],
                ['o.sale_status' => 0],
            ])
            ->keyword($this->status == 2, [
                'AND',
                ['o.is_send' => 1, 'o.is_confirm' => 0, 'o.is_recycle' => 0],
                ['or', ['o.is_pay' => 1], ['o.pay_type' => 2]],
                ['not', ['o.cancel_status' => 1]],
                ['o.sale_status' => 0],
            ])
            ->keyword($this->status == 3, [
                'AND',
                ['o.is_send' => 1, 'o.is_confirm' => 1, 'o.is_recycle' => 0],
                ['or', ['o.is_pay' => 1], ['o.pay_type' => 2]],
                ['not', ['o.cancel_status' => 1]],
                ['o.sale_status' => 0],
                ['o.is_sale' => 1],
            ])
            ->keyword($this->status == 4, [
                'AND',
                ['o.cancel_status' => 2, 'o.is_recycle' => 0],
                ['o.sale_status' => 0],
            ])
            ->keyword($this->status == 5, ['o.is_recycle' => 0, 'o.cancel_status' => 1])
            ->keyword($this->status == 7, ['o.is_recycle' => 1])->keyword($this->sign, ['o.sign' => $this->sign])
            ->keyword($this->status == 8, [
                'AND',
                ['o.is_recycle' => 0, 'o.is_send' => 0],
                ['o.cancel_status' => 0]
            ]);


        ////////////////

        if ($this->user_id) {
            $query->andWhere(['o.user_id' => $this->user_id]);
        }
        if ($this->clerk_id) {
            $query->andWhere(['in', 'o.clerk_id', $this->clerk_id]);
        }
        //手机端取当前用户对应门店订单
        if ($this->app_clerk) {
            $clerk_info = ClerkUser::find()->andWhere(['user_id' => \Yii::$app->user->id, 'is_delete' => 0])->with('store')->asArray()->all();
            if (!empty($clerk_info)) {
                $arr = [];
                foreach ($clerk_info as $item) {
                    $arr[] = $item['store'][0]['id'];
                }
                if (!empty($arr)) {
                    $query->andWhere(['in', 'o.store_id', $arr]);
                }
            }
        }

        if ($this->store_id) {
            $query->andWhere(['o.store_id' => $this->store_id]);
        }

        if ($this->date_start) {
            $query->andWhere(['>=', 'o.created_at', $this->date_start]);
        }

        if ($this->date_end) {
            $query->andWhere(['<=', 'o.created_at', $this->date_end]);
        }

        if ($this->send_type != -1) {
            $query->andWhere(['o.send_type' => $this->send_type]);
        }

        if ($this->is_clerk == 1) {
            $query->andWhere(['>', 'o.clerk_id', 0]);
        }
        if ($this->is_clerk == 2) {
            $query->andWhere(['o.clerk_id' => 0]);
        }
        if ($this->plugin) {
            if ($this->plugin == 'all') {

            } elseif ($this->plugin == 'mall') {
                $query->andWhere(['o.sign' => '']);
            } else {
                $query->andWhere(['o.sign' => $this->plugin]);
            }
        }

        if ($this->keyword) {
            switch ($this->keyword_1) {
                case 1:
                    $query->andWhere(['like', 'o.order_no', $this->keyword]);
                    break;
                case 2:
                    $query->andWhere(['like', 'u.nickname', $this->keyword]);
                    break;
                case 3:
                    $query->andWhere(['like', 'o.name', $this->keyword]);
                    break;
                case 4:
                    $query->andWhere(['u.id' => $this->keyword]);
                    break;
                case 5:
                    $query->andWhere(['exists', (OrderDetail::find()->alias('od')
                        ->innerJoinWith(['goodsWarehouse gw' => function ($query1) {
                            $query1->where(['like', 'gw.name', $this->keyword]);
                        }])->where("o.id = od.order_id"))]);
                    break;
                case 6:
                    $query->andWhere(['like', 'o.mobile', $this->keyword]);
                    break;
                case 7:
                    // 门店搜索
                    $storeIds = Store::find()->where(['mall_id' => \Yii::$app->mall->id, 'is_delete' => 0])
                        ->andWhere(['like', 'name', $this->keyword])->select('id')->asArray()->all();
                    $arr = [];
                    foreach ($storeIds as $storeId) {
                        $arr[] = $storeId['id'];
                    }
                    $query->andWhere(['in', 'o.store_id', $arr]);
                    break;
                case 8:
                    // 门店搜索
                    $storeIds = Store::find()->where(['mall_id' => \Yii::$app->mall->id, 'is_delete' => 0])
                        ->andWhere(['like', 'name', $this->keyword])->select('id')->asArray()->all();
                    $arr = [];
                    foreach ($storeIds as $storeId) {
                        $arr[] = $storeId['id'];
                    }
                    $query->andWhere(['or', ['in', 'o.store_id', $arr], ['like', 'o.order_no', $this->keyword],
                        ['exists', (OrderDetail::find()->alias('od')
                            ->innerJoinWith(['goodsWarehouse gw' => function ($query1) {
                                $query1->where(['like', 'gw.name', $this->keyword]);
                            }])->where("o.id = od.order_id"))]]);
                    break;
                case 9:
                    // 商户支付订单号
                    /** @var PaymentOrderUnion $paymentOrderUnion */
                    $paymentOrderUnion = PaymentOrderUnion::find()->where(['order_no' => $this->keyword])->with('paymentOrder')->one();
                    $orderNos = [];
                    if ($paymentOrderUnion) {
                        /** @var PaymentOrder $item */
                        foreach ($paymentOrderUnion->paymentOrder as $item) {
                            $orderNos[] = $item->order_no;
                        }
                    }
                    $query->andWhere(['order_no' => $orderNos]);
                    break;
                // 商户名称搜索
                case 'mch_name':
                    $mchIds = Store::find()->where(['like', 'name', $this->keyword])
                        ->andWhere(['>', 'mch_id', 0])->select('mch_id');
                    $query->andWhere(['o.mch_id' => $mchIds]);
                    break;
                // 商品货号搜索
                case 'goods_no':
                    $orderIds = OrderDetail::find()->alias('od')->andWhere(['like', 'goods_no', $this->keyword])->select('od.order_id');
                    $query->andWhere(['o.id' => $orderIds]);
                    break;
                case 'advance_no':
                    $query->rightJoin(['ad' => AdvanceOrder::tableName()], "o.`id` = ad.`order_id` and ad.`advance_no` like '%{$this->keyword}%'");
                    break;
                default:
                    // 门店搜索
                    $storeIds = Store::find()->where(['mall_id' => \Yii::$app->mall->id, 'is_delete' => 0])
                        ->andWhere(['like', 'name', $this->keyword])->select('id')->asArray()->all();
                    $arr = [];
                    foreach ($storeIds as $storeId) {
                        $arr[] = $storeId['id'];
                    }
                    $query->andWhere(['or', ['like', 'o.order_no', $this->keyword], ['like', 'o.name', $this->keyword],
                        ['like', 'o.mobile', $this->keyword], ['like', 'u.nickname', $this->keyword], ['in', 'o.store_id', $arr],
                        ['exists', (OrderDetail::find()->alias('od')
                            ->innerJoinWith(['goodsWarehouse gw' => function ($query1) {
                                $query1->where(['like', 'gw.name', $this->keyword]);
                            }])->where("o.id = od.order_id"))]]);
            }

        }

        return $query;
    }

    public function sellerRemark()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        $order = Order::findOne([
            'mall_id' => \Yii::$app->mall->id,
            'id' => $this->order_id,
        ]);
        if (!$order) {
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => '订单不存在，请刷新后重试',
            ];
        }
        $order->seller_remark = $this->seller_remark;
        if ($order->save()) {
            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '保存成功'
            ];
        } else {
            return $this->getErrorResponse($order);
        }
    }

    public function confirm()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }

        try {
            $order = Order::findOne([
                'mall_id' => \Yii::$app->mall->id,
                'id' => $this->order_id,
                'is_delete' => 0
            ]);

            if (!$order) {
                throw new \Exception('订单不存在');
            }

            if ($order->status == 0) {
                throw new \Exception('订单进行中,不能进行操作');
            }

            $this->extraConfirmWhere();

            CommonOrder::getCommonOrder($order->sign)->confirm($order);
            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '确认收货成功'
            ];
        } catch (\Exception $exception) {
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => $exception->getMessage()
            ];
        }
    }

    protected function extraConfirmWhere()
    {
        return true;
    }

    public function addressList()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }
        $form = new CommonDistrict();
        $list = $form->search();
        return [
            'code' => ApiCode::CODE_SUCCESS,
            'data' => [
                'list' => $list,
            ]
        ];
    }

    public function orderSales()
    {
        if (!$this->validate()) {
            return $this->getErrorResponse();
        }
        try {
            $order = Order::find()->where([
                'mall_id' => \Yii::$app->mall->id,
                'id' => $this->order_id,
                'is_delete' => 0
            ])->with('refund')->one();
            /* @var Order $order */
            if (!$order) {
                throw new \Exception('订单不存在');
            }

            if ($order->status == 0) {
                throw new \Exception('订单进行中,不能进行操作');
            }

            if ($order->is_pay != 1) {
                throw new \Exception('订单未支付');
            }
            if ($order->is_confirm != 1) {
                throw new \Exception('订单未收货');
            }
            if ($order->is_sale == 1) {
                throw new \Exception('订单已过售后');
            }
            if ($order->refund) {
                foreach ($order->refund as $refund) {
                    if ($refund->status != 3 && $refund->is_confirm != 1) {
                        throw new \Exception('存在未完成的售后订单');
                    }
                }
            }
            $order->is_sale = 1;
            if (!$order->save()) {
                throw new \Exception($this->getErrorMsg($order));
            }
            \Yii::$app->trigger(Order::EVENT_SALES, new OrderEvent([
                'order' => $order
            ]));
            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '订单结束'
            ];
        } catch (\Exception $exception) {
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => $exception->getMessage()
            ];
        }
    }

    private function getIsConfirmOrder()
    {
        $isConfirmOrder = true;
        if (\Yii::$app->user->identity->mch_id) {
            $form = new MchSettingForm();
            $mchSetting = $form->search();

            $isConfirmOrder = $mchSetting['is_confirm_order'] ? true : false;
        }

        return $isConfirmOrder;
    }
}
