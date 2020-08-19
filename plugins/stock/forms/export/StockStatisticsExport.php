<?php
/**
 * link: http://www.67930603.top/
 * copyright: Copyright (c) 2018 浙江禾匠信息科技有限公司
 * author: jack_guo
 */

namespace app\plugins\stock\forms\export;

use app\core\CsvExport;
use app\forms\mall\export\BaseExport;

class StockStatisticsExport extends BaseExport
{

    public function fieldsList()
    {
        return [
            [
                'key' => 'name',
                'value' => '等级名称',
            ],
            [
                'key' => 'bonus_price',
                'value' => '分红总金额（元）',
            ],
            [
                'key' => 'order_num',
                'value' => '分红订单总数',
            ],
            [
                'key' => 'user_num',
                'value' => '股东人数',
            ],
        ];
    }

    public function export($query)
    {
        $list = $query
            ->asArray()
            ->all();
        $this->transform($list);
        $this->getFields();
        $dataList = $this->getDataList();

        $fileName = '股东分红统计' . date('YmdHis');
        (new CsvExport())->export($dataList, $this->fieldsNameList, $fileName);
    }

    protected function transform($list)
    {
        $newList = [];
        $arr = [];

        $number = 1;
        foreach ($list as $key => $item) {
            $arr['number'] = $number++;
            $item['min_price'] = floatval($item['min_price']);
            $item['initiator'] = intval($item['initiator']);

            $arr = array_merge($arr, $item);

            $newList[] = $arr;
        }
        $this->dataList = $newList;
    }

    protected function getFields()
    {
        $arr = [];
        foreach ($this->fieldsList() as $key => $item) {
            $arr[$key] = $item['key'];
        }
        $this->fieldsKeyList = $arr;
        parent::getFields(); // TODO: Change the autogenerated stub
    }
}