<?php
/**
 * link: http://www.67930603.top/
 * copyright: Copyright (c) 2018 浙江禾匠信息科技有限公司
 * author: Alpha
 */

namespace app\plugins\pintuan\models;


use app\models\OrderDetail;

/**
 * @property OrderDetail[] $orderDetail
 * @property PintuanOrderRelation $orderRelation
 */

class Order extends \app\models\Order
{
    public function getOrderRelation()
    {
        return $this->hasOne(PintuanOrderRelation::className(), ['order_id' => 'id']);
    }

    public function getOrderDetail()
    {
        return $this->hasMany(OrderDetail::className(), ['order_id' => 'id']);
    }
}
