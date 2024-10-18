<?php

namespace app\index\controller;

use UnionPay\UnionPay;

class Callback extends \app\index\controller\Base
{
    /**
     * 支付宝异步回调
     */
    public function alipayNotify()
    {
//        file_put_contents('./runtime/log/____1.txt', file_get_contents('php://input'));
//        file_put_contents('./runtime/log/____2.txt', json_encode($_GET));
//        file_put_contents('./runtime/log/____3.txt', json_encode($_POST));

        $pay = new \app\common\lib\Pay('', 'alipay');
        $verify_result = $pay->alipayNotify($_POST);
        if ($verify_result) {
            exit('success');
        } else {
            exit('fail');
        }
    }
    /**
     * 支付宝同步回调
     */
    // public function alipayReturn()
    // {
    //     $pay = new \app\common\lib\Pay('', 'alipay');
    //     $verify_result = $pay->alipayNotifyReturn($_GET);
    //     $this->redirect(
    //         config('global_config.sitedomain') .
    //         config('global_config.sitedir') .
    //         'm/personal/order/detail?oid=' .
    //         $verify_result,
    //         302
    //     );
    // }
    /**
     * 微信回调
     */
    public function wxpayNotify()
    {
        $pay = new \app\common\lib\Pay('', 'wxpay');
        echo $verify_result = $pay->wxpayNotify();
    }

    public function UnionPayNotify()
    {
        $this->writeLog("debug", request()->param());
        $param = request()->param();
        // 校验订单是否有效
        $objUnionPay = new UnionPay(config("UnionPay.isDev"));
        $payStateInfo = $objUnionPay->GetPayStateInfo($param['billNo'], $param['billDate']);
        $objOrder = model('ExamOrder')->where([
            'out_trade_no' => ['=', $payStateInfo['data']['billNo']],
        ])->find();
        if (!empty($objOrder) && $objOrder['is_pay'] != 1) {
            if ($payStateInfo['data']['billPayment']['status'] == 'TRADE_SUCCESS') {
                $payStateInfo['data']['totalAmount'] = $payStateInfo['data']['totalAmount'] / 100;
                if ($objOrder['money'] != $payStateInfo['data']['totalAmount']) {
                    $this->writeLog("debug", '微信支付人事考试 订单金额不一致');
                }
                $arrOrder = [];
                $arrOrder['is_pay'] = 1;
                $arrOrder['notify_time'] = date('Y-m-d H:i:s');
                $arrOrder['callback_money'] = $payStateInfo['data']['totalAmount'];
                $arrOrder['pay_type'] = 3;
                $arrOrder['trade_no'] = $payStateInfo['data']['billNo'];
                $arrOrder['callback_data'] = json_encode($payStateInfo['data']);
                $result = model('ExamOrder')->where([
                    'out_trade_no' => ['=', $payStateInfo['data']['billNo']],
                ])->update($arrOrder);
                if ($result === false) {
                    $msg = model('ExamOrder')->getError();
                    $this->writeLog("debug", '微信支付人事考试 入回调库错误' . $msg);
                    echo "ERROR";
                    exit();
                }
                $objSignInfo = model("ExamSign")->where([
                    'exam_sign_id' => ['=', $objOrder['exam_sign_id']]
                ])->find();
                if (empty($objSignInfo)) {
                    $this->writeLog("debug", '微信支付人事考试 回调时找报名信息找不到');
                    echo "ERROR";
                    exit();
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
                    $this->writeLog("debug", '微信支付人事考试 回调写报名信息错误');
                    echo "ERROR";
                    exit();
                }
            }
        }
        echo "SUCCESS";
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
    public function writeLog($strLevel, $interface, $strPath = "", $strName = "log.txt")
    {
        if (!empty($strPath)) {
            $strPaths = $strPath;
            $strPath = '/sdd2/wwwroot/dev.ahcfrc.com/runtime/log/' . $strPath . '/' . date('Ymd') . '/';
            if (!file_exists('/sdd2/wwwroot/dev.ahcfrc.com/runtime/log/' . $strPaths)) mkdir('/sdd2/wwwroot/dev.ahcfrc.com/runtime/log/' . $strPaths, 0777);
            if (!file_exists($strPath)) mkdir($strPath, 0777);
        } else {
            $strPath = '/sdd2/wwwroot/dev.ahcfrc.com/runtime/log/' . date('Ymd') . '/';
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
     * oauth第三方登录回调
     * 暂时废弃
     */
    // public function oauth()
    // {
    //     $state = input('get.state/s', '', 'trim');
    //     $code = input('get.code/s', '', 'trim');
    //     $mod = input('get.mod/s', 'qq', 'trim');
    //     $oauth = new \app\common\lib\oauth($mod);
    //     $userinfo = $oauth->callback($code, $state);
    //     if (false === $userinfo) {
    //         exit($oauth->getError());
    //     }
    //     $userinfo['mod'] = $mod;

    //     //获取到了openid之后在系统中查询用户绑定情况
    //     //1.查询是否有绑定信息
    //     if ($mod == 'sina') {
    //         $where['type'] = 'sina';
    //         $where['openid'] = $userinfo['openid'];
    //     } else {
    //         $where['type'] = $mod;
    //         $where['unionid'] = $userinfo['unionid'];
    //     }
    //     $bind_info = model('MemberBind')
    //         ->where($where)
    //         ->find();
    //     if ($bind_info === null) {
    //         //没有绑定信息，跳转到绑定页面
    //         $param_str = http_build_query($userinfo);
    //         $this->redirect(
    //             'https://127.0.0.1/74cmsx/public/mobile/bind?' . $param_str
    //         );
    //     } elseif ($mod != 'sina') {
    //         //有绑定信息，进一步确认openid是否已绑定，如果没绑定默认给绑定(新浪除外)
    //         $bind_info_other = model('MemberBind')
    //             ->where(['type' => $mod, 'openid' => $userinfo['openid']])
    //             ->find();
    //         if ($bind_info_other === null) {
    //             $sqlarr['uid'] = $bind_info['uid'];
    //             $sqlarr['type'] = $bind_info['type'];
    //             $sqlarr['openid'] = $userinfo['openid'];
    //             $sqlarr['unionid'] = $userinfo['unionid'];
    //             $sqlarr['nickname'] = $userinfo['nickname'];
    //             $sqlarr['avatar'] = $userinfo['avatar'];
    //             $sqlarr['bindtime'] = $userinfo['bindtime'];
    //             model('MemberBind')->save($sqlarr);
    //         }
    //         //登录操作
    //     }
    // }
}
