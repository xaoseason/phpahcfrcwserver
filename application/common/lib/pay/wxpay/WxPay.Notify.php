<?php

namespace app\common\lib\pay\wxpay;


use think\Exception;

/**
 *
 * 回调基础类
 * @author widyhu
 *
 */
class WxPayNotify extends \app\common\lib\pay\wxpay\WxPayNotifyReply
{
    /**
     *
     * 回调入口
     * @param bool $needSign 是否需要签名输出
     */
    final public function Handle($needSign = true)
    {
        $msg = 'OK';
        //当返回false的时候，表示notify中调用NotifyCallBack回调失败获取签名校验失败，此时直接回复失败
        $result = WxpayApi::notify(array($this, 'NotifyCallBack'), $msg);
        if ($result == false) {
            $this->SetReturn_code('FAIL');
            $this->SetReturn_msg($msg);
            $this->ReplyNotify(false);
            return;
        } else {
            //该分支在成功回调到NotifyCallBack方法，处理完成之后流程
            $this->SetReturn_code('SUCCESS');
            $this->SetReturn_msg('OK');
        }
        $this->ReplyNotify($needSign);
    }

    /**
     * 写日志文件
     *
     * @param string $strLevel 级别
     * @param interface $interface 内容
     * @param string $strPath 创建文件夹,留空不创建,默认位置
     * @param string $strName 文件名称
     * @return void
     * @author 一颗大萝北 mail@bugquit.com
     */
    private function writeLog($strLevel, $interface, $strPath = "", $strName = "log.txt")
    {
        if (!empty($strPath)) {
            $strPaths = $strPath;


            $strPath = '/www/wwwroot/www.ahcfrc.com/runtime/log/' . $strPath . '/' . date('Ymd') . '/';
            if (!file_exists('/www/wwwroot/www.ahcfrc.com/runtime/log/' . $strPaths)) mkdir('/www/wwwroot/www.ahcfrc.com/runtime/log/' . $strPaths, 0777);

//            $strPath = '/www/admin/fcrc.dev.debug.test.imoecg.com_80/wwwroot/runtime/log/' . $strPath . '/' . date('Ymd') . '/';
//            if (!file_exists('/www/admin/fcrc.dev.debug.test.imoecg.com_80/wwwroot/runtime/log/' . $strPaths)) mkdir('/www/admin/fcrc.dev.debug.test.imoecg.com_80/wwwroot/runtime/log/' . $strPaths, 0777);

            if (!file_exists($strPath)) mkdir($strPath, 0777);
        } else {
//            $strPath = '/www/admin/fcrc.dev.debug.test.imoecg.com_80/wwwroot/runtime/log/' . date('Ymd') . '/';
            $strPath = '/www/wwwroot/www.ahcfrc.com/runtime/log/' . date('Ymd') . '/';

            if (!file_exists($strPath)) mkdir($strPath, 0777);
        }
        if (is_array($interface)) {
            $interfaces = $interface;
            unset($interface);
            $interface = json_encode($interfaces, JSON_UNESCAPED_UNICODE);
        }

        $myFile = fopen($strPath . $strName, 'a+');
        fwrite($myFile, date('H:i:s') . '[' . $strLevel . ']' . ':' . $interface . PHP_EOL);
        fclose($myFile);
    }

    /**
     *
     * 回调方法入口，子类可重写该方法
     * 注意：
     * 1、微信回调超时时间为2s，建议用户使用异步处理流程，确认成功之后立刻回复微信服务器
     * 2、微信服务器在调用失败或者接到回包为非确认包的时候，会发起重试，需确保你的回调是可以重入
     * @param array $data 回调解释出的参数
     * @param string $msg 如果回调处理失败，可以将错误信息输出到该方法
     * @return true回调出来完成不需要继续回调，false回调处理未完成需要继续回调
     */
    public
    function NotifyProcess($data, &$msg)
    {

        //TODO 用户基础该类之后需要重写该方法，成功的时候返回true，失败返回false
        if (!array_key_exists('transaction_id', $data)) {
            $msg = '输入参数不正确';
            return false;
        }
        try {
            $this->writeLog("debug", $data);
        } catch (Exception $e) {
        }
        if (!$this->Queryorder($data['transaction_id'])) {
            $msg = '订单查询失败';
            return false;
        }
        // 优先寻找人事考试库
        $objOrder = model('ExamOrder')->where([
            'out_trade_no' => ['=', $data['out_trade_no']],
        ])->find();
        if (empty($objOrder)) {
            $data['out_trade_no'] = substr($data['out_trade_no'], 4);
            $data['total_fee'] = $data['total_fee'] / 100;
            $order = model('Order')
                ->where('oid', $data['out_trade_no'])
                ->find();
            if ($order === null) {
                $order = model('OrderTmp')
                    ->where('oid', $data['out_trade_no'])
                    ->find();
                if ($order === null) {
                    $msg = '订单未找到';
                    $this->writeLog("debug", '微信支付业务 订单未找到');
                    return false;
                }

            }
            if ($order['status'] == 1) {
                return true;
            }
            if (!config('pay_test_mode') && $order['amount'] != $data['total_fee']) {
                $msg = '订单金额不一致';
                $this->writeLog("debug", '微信支付业务 订单金额不一致');
                return false;
            }
            $result = model('Order')->orderPaid(
                $data['out_trade_no'],
                'wxpay',
                time()
            );
            if ($result === false) {
                $msg = model('Order')->getError();
                return false;
            }
            return true;
        } else {
            try {
                $data['total_fee'] = $data['total_fee'] / 100;
                if ($objOrder['is_pay'] == 1) {
                    return true;
                }
                if ($objOrder['money'] != $data['total_fee']) {
                    $msg = '订单金额不一致';
                    $this->writeLog("debug", '微信支付人事考试 订单金额不一致');
                    return false;
                }
                $arrOrder = [];
                $arrOrder['is_pay'] = 1;
                $arrOrder['notify_time'] = date('Y-m-d H:i:s');
                $arrOrder['callback_money'] = $data['total_fee'];
                $arrOrder['pay_type'] = 1;
                $arrOrder['trade_no'] = $data['transaction_id'];
                $arrOrder['callback_data'] = json_encode($data);
                $result = model('ExamOrder')->where([
                    'out_trade_no' => ['=', $data['out_trade_no']],
                ])->update($arrOrder);
                if ($result === false) {
                    $msg = model('ExamOrder')->getError();
                    $this->writeLog("debug", '微信支付人事考试 入回调库错误' . $msg);
                    return false;
                }
                $objSignInfo = model("ExamSign")->where([
                    'exam_sign_id' => ['=', $objOrder['exam_sign_id']]
                ])->find();
                if (empty($objSignInfo)) {
                    $this->writeLog("debug", '微信支付人事考试 回调时找报名信息找不到' . $msg);
                    return false;
                }
                $arrSignInfo = [];
                if ($objOrder['type'] == 1) {
                    $arrSignInfo['is_pay_pen'] = 1;
                } else {
                    $arrSignInfo['is_pay_itw'] = 1;
                }
                $intShow = model("ExamSign")->where([
                    'exam_sign_id' => ['=', $objOrder['exam_sign_id']]
                ])->update($arrSignInfo);
                if (!$intShow) {
                    $this->writeLog("debug", '微信支付人事考试 回调写报名信息错误' . $msg);
                    return false;
                }
                return true;
            } catch (\Exception $e) {
                $this->writeLog("debug", '微信支付人事考试 处理回调错误' . $e->getMessage());
                return false;
            }
        }
    }

// 去微信服务器查询是否有此订单
    public
    function Queryorder($transaction_id)
    {
        $input = new WxPayOrderQuery();
        $input->SetTransaction_id($transaction_id);
        $result = WxPayApi::orderQuery($input);
        if (
            array_key_exists('return_code', $result) &&
            array_key_exists('result_code', $result) &&
            $result['return_code'] == 'SUCCESS' &&
            $result['result_code'] == 'SUCCESS'
        ) {
            return true;
        }
        return false;
    }

    /**
     *
     * notify回调方法，该方法中需要赋值需要输出的参数,不可重写
     * @param array $data
     * @return true回调出来完成不需要继续回调，false回调处理未完成需要继续回调
     */
    final public function NotifyCallBack($data)
    {
        $msg = 'OK';
        $result = $this->NotifyProcess($data, $msg);

        if ($result == true) {
            $this->SetReturn_code('SUCCESS');
            $this->SetReturn_msg('OK');
        } else {
            $this->SetReturn_code('FAIL');
            $this->SetReturn_msg($msg);
        }
        return $result;
    }

    /**
     *
     * 回复通知
     * @param bool $needSign 是否需要签名输出
     */
    final private function ReplyNotify($needSign = true)
    {
        //如果需要签名
        if ($needSign == true && $this->GetReturn_code() == 'SUCCESS') {
            $this->SetSign();
        }
        WxpayApi::replyNotify($this->ToXml());
    }
}
