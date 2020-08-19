<?php
/**
 * Created by PhpStorm.
 * User: 风哀伤
 * Date: 2019/1/30
 * Time: 16:29
 * @copyright: (c)2019 天幕网络
 * @link: http://www.67930603.top
 */

namespace app\core\currency;


interface BaseCurrency
{
    // 收入
    public function add($price, $desc, $customDesc);

    // 支出
    public function sub($price, $desc, $customDesc);

    // 查询
    public function select();

    // 退款
    public function refund($price, $desc, $customDesc);
}
