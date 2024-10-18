<?php

namespace app\common\lib\pay\alipay;

use think\Exception;

class alipay
{
    protected $order_prefix;
    protected $client_ip;
    protected $_error = 0;
    protected $config;

    public function __construct($order_prefix)
    {
        $this->order_prefix = $order_prefix;
        $this->config = config('global_config.account_alipay');
        $this->client_ip = get_client_ip();
    }

    /*
    支付操作
     */
    public function callPay($data)
    {
        if (!$this->config['appid'] || !$this->config['privatekey'] || !$this->config['publickey']) {
            $this->_error = '暂不支持支付宝付款，请选择其他付款方式。';
            return false;
        }
        $return = '';
        switch ($data['platform']) {
            case 'web':
                $return = $this->_pay_from_web($data);
                break;
            case 'mobile':
            case 'wechat':
                $return = $this->_pay_from_mobile($data);
                break;
            case 'app':
                $return = $this->_pay_from_app($data);
                break;
        }
        return $return;
    }

    protected function _pay_from_web($data)
    {
        \think\Loader::import('alipay.AopClient');
        \think\Loader::import('alipay.request.AlipayTradePagePayRequest');
        $parameter = [
            'body' => $data['service_name'],
            'subject' => $data['service_name'],
            'out_trade_no' => $this->order_prefix . $data['oid'],
            'timeout_express' => '90m',
            'total_amount' => config('pay_test_mode') ? 0.01 : $data['amount'], //使用config配置
            'product_code' => 'FAST_INSTANT_TRADE_PAY',
        ];
        $aop = new \AopClient();
        $aop->gatewayUrl = 'https://openapi.alipay.com/gateway.do';
        $aop->appId = $this->config['appid'];
        $aop->rsaPrivateKey = $this->config['privatekey'];
        $aop->alipayrsaPublicKey = $this->config['publickey'];
        $aop->apiVersion = '1.0';
        $aop->signType = 'RSA2';
        $aop->postCharset = 'utf-8';
        $aop->format = 'json';
        $request = new \AlipayTradePagePayRequest();
        $request->setNotifyUrl(
            config('global_config.sitedomain') .
            config('global_config.sitedir') .
            'index/callback/alipayNotify'
        );
        $request->setReturnUrl($data['return_url']);
        $request->setBizContent(
            json_encode($parameter, JSON_UNESCAPED_UNICODE)
        );
        $result = $aop->pageExecute($request, 'GET');
        return $result;
    }

    /**
     * 触屏支付
     */
    protected function _pay_from_mobile($data)
    {
        \think\Loader::import('alipay.AopClient');
        \think\Loader::import('alipay.request.AlipayTradeWapPayRequest');
        $parameter = [
            'body' => $data['service_name'],
            'subject' => $data['service_name'],
            'out_trade_no' => $this->order_prefix . $data['oid'],
            'timeout_express' => '90m',
            'total_amount' => config('pay_test_mode') ? 0.01 : $data['amount'],
            'product_code' => 'QUICK_WAP_WAY',
        ];
        $aop = new \AopClient();
        $aop->gatewayUrl = 'https://openapi.alipay.com/gateway.do';
        $aop->appId = $this->config['appid'];
        $aop->rsaPrivateKey = $this->config['privatekey'];
        $aop->alipayrsaPublicKey = $this->config['publickey'];
        $aop->apiVersion = '1.0';
        $aop->signType = 'RSA2';
        $aop->postCharset = 'utf-8';
        $aop->format = 'json';
        $request = new \AlipayTradeWapPayRequest();
        $request->setNotifyUrl(
            config('global_config.sitedomain') .
            config('global_config.sitedir') .
            'index/callback/alipayNotify'
        );
        $request->setReturnUrl($data['return_url']);
        $request->setBizContent(
            json_encode($parameter, JSON_UNESCAPED_UNICODE)
        );
        $result = $aop->pageExecute($request, 'GET');
        return $result;
    }

    /**
     * app支付
     */
    protected function _pay_from_app($data)
    {
        \think\Loader::import('alipay.AopClient');
        \think\Loader::import('alipay.request.AlipayTradeAppPayRequest');
        $parameter = [
            'body' => $data['service_name'],
            'subject' => $data['service_name'],
            'out_trade_no' => $this->order_prefix . $data['oid'],
            'timeout_express' => '90m',
            'total_amount' => config('pay_test_mode') ? 0.01 : $data['amount'],
            'product_code' => 'QUICK_MSECURITY_PAY',
        ];
        $aop = new \AopClient();
        $aop->gatewayUrl = 'https://openapi.alipay.com/gateway.do';
        $aop->appId = $this->config['appid'];
        $aop->rsaPrivateKey = $this->config['privatekey'];
        $aop->alipayrsaPublicKey = $this->config['publickey'];
        // $aop->apiVersion = '1.0';
        $aop->signType = 'RSA2';
        $aop->postCharset = 'utf-8';
        $aop->format = 'json';
        $request = new \AlipayTradeAppPayRequest();
        $request->setNotifyUrl(
            config('global_config.sitedomain') .
            config('global_config.sitedir') .
            'index/callback/alipayNotify'
        );
        $request->setBizContent(
            json_encode($parameter, JSON_UNESCAPED_UNICODE)
        );
        $result = $aop->sdkExecute($request);
        return $result;
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
            $strPath = '/www/wwwroot/www.ahcfrc.com/runtime/log/' . date('Ymd') . '/';
//            $strPath = '/www/admin/fcrc.dev.debug.test.imoecg.com_80/wwwroot/runtime/log/' . date('Ymd') . '/';

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

    /*
    验证操作(异步)
     */
    public function alipayNotify($data)
    {

        \think\Loader::import('alipay.AopClient');
        $aop = new \AopClient();
        $aop->gatewayUrl = 'https://openapi.alipay.com/gateway.do';
        $aop->appId = $this->config['appid'];
        $aop->rsaPrivateKey = $this->config['privatekey'];
        // $aop->apiVersion = '1.0';
        $aop->signType = 'RSA2';
        $aop->postCharset = 'utf-8';
        $aop->format = 'json';
        $aop->alipayrsaPublicKey = $this->config['publickey'];
        $result = $aop->rsaCheckV1(
            $data,
            $this->config['publickey'],
            'RSA2'
        );
        try {
            $this->writeLog("debug", $data);
            $this->writeLog("debug", $result);
        } catch (Exception $e) {
        }
        /* 实际验证过程建议商户添加以下校验。
        1、商户需要验证该通知数据中的out_trade_no是否为商户系统中创建的订单号，
        2、判断total_amount是否确实为该订单的实际金额（即商户订单创建时的金额），
        3、校验通知中的seller_id（或者seller_email) 是否为out_trade_no这笔单据的对应的操作方（有的时候，一个商户可能有多个seller_id/seller_email）
        4、验证app_id是否为该商户本身。
         */
        if ($result) {
            //验证成功
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //请在这里加上商户的业务逻辑程序代

            //——请根据您的业务逻辑来编写程序（以下代码仅作参考）——

            //获取支付宝的通知返回参数，可参考技术文档中服务器异步通知参数列表

            //商户订单号
            $out_trade_no = $data['out_trade_no'];
            $total_fee = $data['receipt_amount']; //交易金额
            $notify_time = $data['notify_time']; //通知的发送时间。格式为yyyy-MM-dd HH:mm:ss。
            //交易状态
            $trade_status = $data['trade_status'];
            if (
                $data['trade_status'] == 'TRADE_FINISHED' ||
                $data['trade_status'] == 'TRADE_SUCCESS'
            ) {
                //判断该笔订单是否在商户网站中已经做过处理
                //如果没有做过处理，根据订单号（out_trade_no）在商户网站的订单系统中查到该笔订单的详细，并执行商户的业务程序
                //请务必判断请求时的total_amount与通知时获取的total_fee为一致的
                //如果有做过处理，不执行商户的业务程序
                //注意：
                //退款日期超过可退款期限后（如三个月可退款），支付宝系统发送该交易状态通知
                //付款完成后，支付宝系统发送该交易状态通知

                // 优先去找人事考试订单
                $objOrder = model('ExamOrder')->where([
                    'out_trade_no' => ['=', $out_trade_no],
                ])->find();
                if (empty($objOrder)) {
                    $out_trade_no = substr($out_trade_no, 4);
                    $order = model('Order')
                        ->where([
                            'oid' => $out_trade_no,
                        ])
                        ->find();
                    if ($order === null) {
                        $order = model('OrderTmp')
                            ->where([
                                'oid' => $out_trade_no,
                            ])
                            ->find();
                        if ($order === null) {
                            return false;
                        }
                    }
                    if ($order['status'] == 1) {
                        return true;
                    }
                    if (!config('pay_test_mode') && $order['amount'] != $total_fee) {
                        return false;
                    }
                    $result = model('Order')->orderPaid(
                        $order['oid'],
                        'alipay',
                        strtotime($notify_time)
                    );
                } else {
                    try {
                        if ($objOrder['is_pay'] == 1) {
                            return true;
                        }
                        if ($objOrder['money'] != $total_fee) {
                            $this->writeLog("debug", '支付宝支付人事考试 订单金额不一致');
                            return false;
                        }
                        $arrOrder = [];
                        $arrOrder['is_pay'] = 1;
                        $arrOrder['notify_time'] = date('Y-m-d H:i:s');
                        $arrOrder['callback_money'] = $total_fee;
                        $arrOrder['pay_type'] = 2;
                        if (!empty($data['trade_no'])) {
                            $arrOrder['trade_no'] = $data['trade_no'];
                        }
                        $arrOrder['callback_data'] = json_encode($data);
                        $result = model('ExamOrder')->where([
                            'out_trade_no' => ['=', $out_trade_no],
                        ])->update($arrOrder);
                        if ($result === false) {
                            $msg = model('ExamOrder')->getError();
                            $this->writeLog("debug", '支付宝支付人事考试 入回调库错误' . $msg);
                            return false;
                        }

                        $objSignInfo = model("ExamSign")->where([
                            'exam_sign_id' => ['=', $objOrder['exam_sign_id']]
                        ])->find();
                        if (empty($objSignInfo)) {
                            $this->writeLog("debug", '支付宝支付人事考试 回调时找报名信息找不到');
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
                            $this->writeLog("debug", '支付宝支付人事考试 回调写报名信息错误');
                            return false;
                        }
                        return true;
                    } catch (\Exception $e) {
                        $this->writeLog("debug", '支付宝支付人事考试 处理回调错误' . $e->getMessage());
                        return false;
                    }
                }

            }
            //——请根据您的业务逻辑来编写程序（以上代码仅作参考）——
            return true;
        } else {
            //验证失败
            return false;
        }
    }

    /*
    验证操作(同步)
     */
    public function alipayNotifyReturn($data)
    {

        \think\Loader::import('alipay.AopClient');

        $aop = new \AopClient();
        $aop->gatewayUrl = 'https://openapi.alipay.com/gateway.do';
        $aop->appId = $this->config['appid'];
        $aop->rsaPrivateKey = $this->config['privatekey'];
        // $aop->apiVersion = '1.0';
        $aop->signType = 'RSA2';
        $aop->postCharset = 'utf-8';
        $aop->format = 'json';
        $aop->alipayrsaPublicKey = $this->config['publickey'];
        $result = $aop->rsaCheckV1(
            $data,
            $this->config['publickey'],
            'RSA2'
        );

        /* 实际验证过程建议商户添加以下校验。
        1、商户需要验证该通知数据中的out_trade_no是否为商户系统中创建的订单号，
        2、判断total_amount是否确实为该订单的实际金额（即商户订单创建时的金额），
        3、校验通知中的seller_id（或者seller_email) 是否为out_trade_no这笔单据的对应的操作方（有的时候，一个商户可能有多个seller_id/seller_email）
        4、验证app_id是否为该商户本身。
         */
        if ($result) {
            //验证成功
            $out_trade_no = htmlspecialchars($data['out_trade_no']);
            $out_trade_no = substr($out_trade_no, 4);
            $total_fee = htmlspecialchars($data['total_amount']); //交易金额
            $notify_time = htmlspecialchars($data['timestamp']); //通知的发送时间。格式为yyyy-MM-dd HH:mm:ss。
            //交易状态
            $trade_status = $this->check_status($data);
            if (
                $trade_status === true
            ) {
                $order = model('Order')
                    ->where([
                        'oid' => $out_trade_no,
                    ])
                    ->find();
                if ($order === null) {
                    $order = model('OrderTmp')
                        ->where([
                            'oid' => $out_trade_no,
                        ])
                        ->find();
                    if ($order === null) {
                        return false;
                    }

                }
                if ($order['status'] == 1) {
                    return true;
                }
                if (!config('pay_test_mode') && $order['amount'] != $total_fee) {
                    return false;
                }
                $result = model('Order')->orderPaid(
                    $order['oid'],
                    'alipay',
                    strtotime($notify_time)
                );
            }
            //——请根据您的业务逻辑来编写程序（以上代码仅作参考）——
            return $out_trade_no;
        } else {
            //验证失败
            return false;
        }
    }

    protected function check_status($data)
    {
        \think\Loader::import('alipay.AopClient');
        \think\Loader::import('alipay.request.AlipayTradeQueryRequest');
        $parameter = [
            'out_trade_no' => $this->order_prefix . $data['out_trade_no'],
            'trade_no' => $data['trade_no'],
        ];
        $aop = new \AopClient();
        $aop->gatewayUrl = 'https://openapi.alipay.com/gateway.do';
        $aop->appId = $this->config['appid'];
        $aop->rsaPrivateKey = $this->config['privatekey'];
        $aop->alipayrsaPublicKey = $this->config['publickey'];
        // $aop->apiVersion = '1.0';
        $aop->signType = 'RSA2';
        $aop->postCharset = 'utf-8';
        $aop->format = 'json';
        $request = new \AlipayTradeQueryRequest();

        $request->setBizContent(json_encode($parameter, JSON_UNESCAPED_UNICODE));
        $result = $aop->execute($request);

        $responseNode = str_replace(".", "_", $request->getApiMethodName()) . "_response";
        $resultCode = $result->$responseNode->code;
        if (!empty($resultCode) && $resultCode == 10000) {
            return true;
        } else {
            return false;
        }
    }

    public function getError()
    {
        return $this->_error;
    }
}
