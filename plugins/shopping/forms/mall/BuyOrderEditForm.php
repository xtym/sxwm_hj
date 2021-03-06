<?php
/**
 * link: http://www.67930603.top/
 * copyright: Copyright (c) 2018 浙江禾匠信息科技有限公司
 * author: Alpha
 */

namespace app\plugins\shopping\forms\mall;

use app\core\response\ApiCode;
use app\models\Model;
use app\plugins\shopping\forms\common\CommonShopping;

class BuyOrderEditForm extends Model
{
    public $id;

    public function rules()
    {
        return [
            [['id'], 'integer']
        ];
    }

    public function add()
    {
        try {
            $common = new CommonShopping();
            $res = $common->buyList($this->id);

            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '添加成功',
            ];
        } catch (\Exception $e) {
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => $e->getMessage()
            ];
        }
    }
}
