<?php

namespace app\apiadmin\controller\exam;


use Think\Db;
use think\Exception;
use UnionPay\UnionPay;

class Order extends \app\common\controller\Backend
{
    /**
     * 订单列表
     */
    public function index()
    {
        $arrWhere = [];
        $intCurrentPage = input('current_page/d', 1, 'intval');
        $intPagesize = input('pagesize/d', 10, 'intval');
        if (!empty(input('realname/s'))) {
            $arrWhere['ExamOrder.realname'] = ['like', '%' . input('realname/s') . '%'];
        }
        if (!empty(input('exam_project_id/d'))) {
            $arrWhere['ExamProject.exam_project_id'] = ['=', input('exam_project_id/d')];
        }
        if (!empty(input('trade_no/s'))) {
            $arrWhere['ExamOrder.trade_no'] = ['like', '%' . input('trade_no/s') . '%'];
        }
        if (!empty(input('is_pay/s'))) {
            $arrWhere['ExamOrder.is_pay'] = ['=', input('is_pay/d') - 1];
        } else {
            $arrWhere['is_pay'] = ['=', 1];
        }
        if (!empty(input('type/s'))) {
            $arrWhere['ExamOrder.type'] = ['=', input('type/d')];
        }
        if (!empty(input('pay_type/s'))) {
            $arrWhere['ExamOrder.pay_type'] = ['=', input('pay_type/d')];
        }
        if (!empty(input("out_trade_no/s"))) {
            $arrWhere['trade_no|out_trade_no'] = ['like', "%" . input('out_trade_no/s') . "%"];
        }
        $intTotal = model('ExamOrder')
            ->alias('ExamOrder')
            ->join(config('database.prefix') . 'member Member', 'Member.uid = ExamOrder.uid')
            ->join(config('database.prefix') . 'exam_post ExamPost', 'ExamPost.exam_post_id = ExamOrder.exam_post_id')
            ->join(config('database.prefix') . 'exam_project ExamProject', 'ExamProject.exam_project_id = ExamOrder.exam_project_id')
            ->where($arrWhere)
            ->group('trade_no')
            ->count();
        $arrList = model('ExamOrder')
            ->alias('ExamOrder')
            ->join(config('database.prefix') . 'member Member', 'Member.uid = ExamOrder.uid')
            ->join(config('database.prefix') . 'exam_post ExamPost', 'ExamPost.exam_post_id = ExamOrder.exam_post_id')
            ->join(config('database.prefix') . 'exam_project ExamProject', 'ExamProject.exam_project_id = ExamOrder.exam_project_id')
            ->field('ExamOrder.exam_order_id,ExamOrder.type,ExamOrder.service_name,ExamOrder.type,ExamOrder.out_trade_no,ExamOrder.trade_no,ExamOrder.money,ExamOrder.callback_money,ExamOrder.is_pay,ExamOrder.realname,ExamOrder.pay_type,ExamPost.name as post_name,ExamProject.name as project_name')
            ->where($arrWhere)
            ->group('trade_no')
            ->order('exam_order_id desc')
            ->page($intCurrentPage . ',' . $intPagesize)
            ->select();
        $arrReturn = [];
        $arrReturn['items'] = $arrList;
        $arrReturn['total'] = $intTotal;
        $arrReturn['current_page'] = $intCurrentPage;
        $arrReturn['pagesize'] = $intPagesize;
        $arrReturn['total_page'] = ceil($intTotal / $intPagesize);
        $this->ajaxReturn(200, '获取数据成功', $arrReturn);
    }


    public function detail()
    {
        $arrWhere = [];
        if (input('exam_order_id/d') <= 0) {
            $this->ajaxReturn(500, '请选择需要查看的订单');
        }
        $arrWhere['exam_order_id'] = ['=', input('exam_order_id/d')];
        $order = model('ExamOrder')
            ->alias('ExamOrder')
            ->join(config('database.prefix') . 'member Member', 'Member.uid = ExamOrder.uid')
            ->join(config('database.prefix') . 'exam_post ExamPost', 'ExamPost.exam_post_id = ExamOrder.exam_post_id')
            ->join(config('database.prefix') . 'exam_project ExamProject', 'ExamProject.exam_project_id = ExamOrder.exam_project_id')
            ->field('ExamOrder.*,ExamOrder.exam_order_id,ExamOrder.type,ExamOrder.service_name,ExamOrder.type,ExamOrder.out_trade_no,ExamOrder.trade_no,ExamOrder.money,ExamOrder.callback_money,ExamOrder.is_pay,ExamOrder.realname,ExamOrder.pay_type,ExamPost.name as post_name,ExamProject.name as project_name')
            ->where($arrWhere)
            ->find();
        $this->ajaxReturn(200, '获取数据成功', $order);
    }

    public function set_pay_tag()
    {
        Db::startTrans();
        $arrWhere = [];
        if (input('exam_order_id/d') <= 0) {
            $this->ajaxReturn(500, '请选择需要标记的订单');
        }
        $arrWhere['exam_order_id'] = ['=', input('exam_order_id/d')];
        $order = model('ExamOrder')->where($arrWhere)->find();
        $show = model('ExamOrder')->where($arrWhere)->update(['is_pay' => 2]);
        if ($show) {
            $updata = [];
            if ($order['type'] == 1) {
                $updata['is_pay_pen'] = $order['is_pay'] == 1 ? 0 : 1;
            } else {
                $updata['is_pay_itw'] = $order['is_pay'] == 1 ? 0 : 1;
            }
            $show = model('ExamSign')->where(['exam_sign_id' => ['=', $order['exam_sign_id']]])->update($updata);
            if ($show) {
                $objUnionPay = new UnionPay(config("UnionPay.isDev"));
                $res = $objUnionPay->Refund($order->out_trade_no, $order->bill_date, $order->money);
                if ($res['ok'] && $res['data']['errCode'] == "SUCCESS" && $res['data']['refundStatus'] == "SUCCESS") {
                    model('ExamOrder')->where($arrWhere)->update(['refund' => $res['data']['refundOrderId'], 'refund_target_order_id' => $res['data']['refundTargetOrderId']]);
                    Db::commit();
                    $this->ajaxReturn(200, '成功');
                } else {
                    Db::rollback();
                    $this->ajaxReturn(201, '失败');
                }
                $this->ajaxReturn(200, '成功');
            } else {
                Db::rollback();
                $this->ajaxReturn(201, '失败');
            }
        }
    }
}
