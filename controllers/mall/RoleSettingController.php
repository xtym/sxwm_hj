<?php
/**
 * @copyright (c)天幕网络
 * @author Lu Wei
 * @link http://www.67930603.top/
 * Created by IntelliJ IDEA
 * Date Time: 2018/11/8 18:11
 */


namespace app\controllers\mall;



use app\forms\mall\role_setting\RoleSettingEditForm;
use app\forms\mall\role_setting\RoleSettingForm;

class RoleSettingController extends MallController
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
            if (\Yii::$app->request->isGet) {
                $form = new RoleSettingForm();
                $res = $form->getDetail();

                return $this->asJson($res);
            } else {
                $form = new RoleSettingEditForm();
                $form->data = \Yii::$app->request->post('form');
                return $form->save();
            }
        } else {
            return $this->render('index');
        }
    }
}
