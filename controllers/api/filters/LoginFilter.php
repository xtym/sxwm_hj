<?php
/**
 * @copyright (c)天幕网络
 * @author Lu Wei
 * @link http://www.67930603.top/
 * Created by IntelliJ IDEA
 * Date Time: 2018/12/5 17:01
 */


namespace app\controllers\api\filters;


use app\core\response\ApiCode;
use yii\base\ActionFilter;

class LoginFilter extends ActionFilter
{
    public $ignore;
    public $only;

    /**
     * @param \yii\base\Action $action
     * @return bool
     */
    public function beforeAction($action)
    {
        $id = $action->id;
        if (is_array($this->ignore) && in_array($id, $this->ignore)) {
            return true;
        }
        if (is_array($this->only) && !in_array($id, $this->only)) {
            return true;
        }
        if (!\Yii::$app->user->isGuest) {
            return true;
        }
        \Yii::$app->response->data = [
            'code' => ApiCode::CODE_NOT_LOGIN,
            'msg' => '请先登录。',
        ];

        return false;
    }
}
