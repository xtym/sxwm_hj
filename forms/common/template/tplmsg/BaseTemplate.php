<?php
/**
 * Created by PhpStorm.
 * User: 风哀伤
 * Date: 2019/7/5
 * Time: 16:23
 * @copyright: (c)2019 天幕网络
 * @link: http://www.67930603.top
 */

namespace app\forms\common\template\tplmsg;


use app\forms\common\template\TemplateForm;
use app\forms\common\template\TemplateSend;
use app\models\Model;
use app\models\User;

/**
 * @property User $user
 * @property TemplateForm $templateForm
 */
abstract class BaseTemplate extends Model
{
    public $user;
    public $page;
    protected $templateTpl;
    public $templateForm;

    public function init()
    {
        parent::init(); // TODO: Change the autogenerated stub
        $this->setTemplateForm();
    }

    /**
     * @return mixed
     * @throws \Exception
     */
    abstract public function msg();

    /**
     * @return mixed
     * @throws \Exception
     * 测试发送模板消息
     */
    abstract public function test();

    /**
     * @return mixed
     * 模板消息配置
     */
    abstract public function setTemplateForm();

    /**
     * @return array
     * 获取data的键值，目前主要是微信订阅消息用到
     */
    public function dataKey()
    {
        if ($this->templateForm && $this->templateForm instanceof TemplateForm) {
            return $this->templateForm->templateInfo;
        } else {
            return [];
        }
    }

    /**
     * @return array
     * @throws \Exception
     * 发送模板消息
     */
    public function send()
    {
        try {
            $template = new TemplateSend();
            $template->user = $this->user;
            $template->page = $this->page;
            $template->data = $this->msg();
            $template->dataKey = $this->dataKey();
            $template->templateTpl = $this->templateTpl;
            return $template->sendTemplate();
        } catch (\Exception $exception) {
            \Yii::error($exception);
        }
    }
}