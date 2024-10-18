<?php

namespace UnionPay;

class UnionPay
{
    protected $baseUrl = '';
    protected $payUrl = '/v1/netpay/bills/get-qrcode'; // 获取支付二维码
    protected $payStateQueryUrl = '/v1/netpay/bills/query';//账单查询
    protected $refund = '/v1/netpay/bills/refund';//退款
    protected $appId = "";
    protected $appKey = "";
    protected $mid = "";
    protected $tid = "";
    protected $notifyUrl = "";
    protected $prefix = "";

    public function __construct($isDev = false)
    {
        $this->baseUrl = 'https://api-mop.chinaums.com'; //生产环境
        if ($isDev) {
            $this->baseUrl = 'https://test-api-open.chinaums.com'; //测试环境
        }
        $this->appId = config("UnionPay.appId");
        $this->appKey = config("UnionPay.appKey");
        $this->mid = config("UnionPay.mid");
        $this->tid = config("UnionPay.tid");
        $this->prefix = config("UnionPay.prefix");
        $this->notifyUrl = config("UnionPay.notifyUrl");
    }

    /**
     * 获取签名
     *
     * @param array $form 表单内容
     * @return string 签名 Authorization
     * @author 一颗大萝北 mail@bugquit.com
     */
    public function GetOpenBodySign(array $form)
    {
        $form = json_encode($form, JSON_UNESCAPED_UNICODE);
        $nonce = $this->getRandomStr(64, false);
        $timestamp = date("YmdHis");
        $str = bin2hex(hash('sha256', $form, true));
        $signature = base64_encode(hash_hmac('sha256', "$this->appId$timestamp$nonce$str", $this->appKey, true));
        return 'OPEN-BODY-SIG AppId="' . $this->appId . '",Timestamp="' . $timestamp . '",Nonce="' . $nonce . '",Signature="' . $signature . '"';
    }

    /**
     * 创建订单号(随机)
     * @return string
     * @author 一颗大萝北 mail@bugquit.com
     */
    public function CreateBillNo()
    {
        $str = $this->getRandomStr(100) . time();
        return $this->prefix . substr(md5($str), 8, 16);
    }

    /**
     * 获取订单号前缀
     * @return mixed|string
     * @author 一颗大萝北 mail@bugquit.com
     */
    public function GetBillNoPrefix()
    {
        return $this->prefix;
    }

    /**
     * 获取支付二维码信息 (单个商品信息,需要多个商品信息请自行改造goods)
     * @param string $goodsId 订单id
     * @param string $goodsName 订单名称
     * @param float $totalAmount 订单总金额
     * @param string $body 商品描述
     * @param string $memberId 支付通知里原样返回,会员id
     * @param string $counterNo 支付通知里原样返回,桌号、柜台号、房间号
     * @param string $billNo 账单号,最长31 - prefix长度 (但不能重复使用,必须保证唯一)
     * @param string $billDesc 订单描述
     * @param string $msgId 原样返回 消息id (回调没有)
     * @return array|void
     * @author 一颗大萝北 mail@bugquit.com
     */
    public function GetPayQrcode(string $goodsId, string $goodsName, float $totalAmount, string $body, string $memberId = "", string $counterNo = "", string $billNo = "", string $billDesc = "", string $msgId = "")
    {
        $totalAmount = $totalAmount * 100;
        $reqUrl = $this->baseUrl . $this->payUrl;
        $postJson = [
            "msgId" => $msgId, //原样返回
            "requestTimestamp" => date("Y-m-d H:i:s"),
            "mid" => $this->mid, //商户号
            "tid" => $this->tid, //终端id
            "instMid" => "QRPAYDEFAULT",
            "billNo" => $billNo,//账单号,就使用商户订单号,最长31 - prefix长度 位
            "billDate" => date("Y-m-d"),
            "billDesc" => $billDesc,//订单描述
            "totalAmount" => $totalAmount,
            "goods" => [
                [
                    "goodsId" => $goodsId, //商品ID,使用考试id项目_支付报名id
                    "goodsName" => $goodsName,
                    "quantity" => 1,
                    "price" => $totalAmount, //商品单价,需要与totalAmount一致,如果多个商品需要总额与totalAmount一致
                    "goodsCategory" => "Auto",
                    "body" => $body,
                ]
            ],
            "memberId" => $memberId, //支付通知里原样返回,会员id
            "counterNo" => $counterNo, //支付通知里原样返回,桌号、柜台号、房间号
            "notifyUrl" => $this->notifyUrl
        ];
        $res = $this->curlRequest($reqUrl, "POST", $postJson, ["Authorization" => $this->GetOpenBodySign($postJson)], true);
        $res['data'] = json_decode($res['data'], true);
        return $res;
    }

    /**
     * 查询订单状态
     * @param string $billNo 订单号
     * @param string $billDate 订单时间
     * @param string $msgId 消息id
     * @return array|void
     * @author 一颗大萝北 mail@bugquit.com
     */
    public function GetPayStateInfo(string $billNo, string $billDate, string $msgId = "")
    {
        $form = [
            'msgId' => $msgId,
            "requestTimestamp" => date("Y-m-d H:i:s"),
            "mid" => $this->mid,
            "tid" => $this->tid,
            "instMid" => "QRPAYDEFAULT",
            "billNo" => $billNo,
            "billDate" => $billDate
        ];
        $reqUrl = $this->baseUrl . $this->payStateQueryUrl;
        $res = $this->curlRequest($reqUrl, "POST", $form, ["Authorization" => $this->GetOpenBodySign($form)], true);
        $res['data'] = json_decode($res['data'], true);
        return $res;
    }

    /**
     * 退款
     * @param string $billNo 订单号
     * @param string $billDate 订单时间
     * @param float $refundAmount 退款金额(单位元)
     * @param string $msgId 消息id
     * @return array|void
     * @author 一颗大萝北 mail@bugquit.com
     */
    public function Refund(string $billNo, string $billDate, float $refundAmount, string $msgId = "")
    {
        $refundAmount = $refundAmount * 100;
        $reqUrl = $this->baseUrl . $this->refund;
        $form = [
            'msgId' => $msgId,
            "requestTimestamp" => date("Y-m-d H:i:s"),
            "mid" => $this->mid,
            "tid" => $this->tid,
            "instMid" => "QRPAYDEFAULT",
            "billNo" => $billNo,
            "billDate" => $billDate,
            "refundAmount" => $refundAmount,
        ];
        $res = $this->curlRequest($reqUrl, "POST", $form, ["Authorization" => $this->GetOpenBodySign($form)], true);
        $res['data'] = json_decode($res['data'], true);
        return $res;
    }

    /**
     * 获得随机字符串
     * @param $len          需要的长度
     * @param bool $special 是否需要特殊符号
     * @return string       返回随机字符串
     */
    public function getRandomStr($len, $special = true)
    {
        $chars = array(
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
            "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
            "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G",
            "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
            "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2",
            "3", "4", "5", "6", "7", "8", "9"
        );

        if ($special) {
            $chars = array_merge($chars, array(
                "!", "@", "#", "$", "?", "|", "{", "/", ":", ";",
                "%", "^", "&", "*", "(", ")", "-", "_", "[", "]",
                "}", "<", ">", "~", "+", "=", ",", "."
            ));
        }
        $charsLen = count($chars) - 1;
        shuffle($chars);                            //打乱数组顺序
        $str = '';
        for ($i = 0; $i < $len; $i++) {
            $str .= $chars[mt_rand(0, $charsLen)];    //随机取出一位
        }
        return $str;
    }

    /**
     * CURL请求
     *
     * @param [type] $strUrl        访问地址
     * @param string $strMethod 请求方式
     * @param array $arrData 请求发送的数据
     * @param array $arrHeader 请求时发送的header
     * @param boolean $isJson 是否JSON请求
     * @param boolean $strFilePath PUT形式上传的文件
     * @param integer $intTimeOut 超时时间
     * @return void
     * @author 一颗大萝北 mail@bugquit.com
     */
    private function curlRequest($strUrl, $strMethod = "GET", $arrData = array(), $arrHeader = array(), $isJson = false, $strFilePath = false, $intTimeOut = 60)
    {
        if ($isJson == true && empty($arrHeader['Content-Type'])) $arrHeader['Content-Type'] = 'application/json;charset=UTF-8'; //当为JSON提交时header没有设置类型时补充设置
        if ($isJson == true && empty($arrHeader['Content-Length'])) $arrHeader['Content-Length'] = strlen(json_encode($arrData, JSON_UNESCAPED_UNICODE)); //当为JSON提交时header没有设置长度时补充设置
        $arrHeaders = [];
        foreach ($arrHeader as $k => $v) $arrHeaders[] = $k . ':' . $v; //拼接header
        $objCh = curl_init();
        curl_setopt($objCh, CURLOPT_SSL_VERIFYPEER, false); //跳过证书检查
        curl_setopt($objCh, CURLOPT_SSL_VERIFYHOST, false);  //从证书中检查SSL加密算法是否存在
        curl_setopt($objCh, CURLOPT_RETURNTRANSFER, true);   //返回字符串,而不直接输出
        if (!empty($arrHeaders)) curl_setopt($objCh, CURLOPT_HTTPHEADER, $arrHeaders); //设置header
        curl_setopt($objCh, CURLOPT_TIMEOUT, $intTimeOut);      //设置超时时间
        curl_setopt($objCh, CURLOPT_URL, $strUrl);
        $strMethod = strtoupper($strMethod); //统一转为大写
        if (!empty($arrData) && $isJson) $arrData = json_encode($arrData, JSON_UNESCAPED_UNICODE);
        if ($strFilePath !== false && !is_file($strFilePath) && $strMethod != 'PUT') return ['ok' => false, 'msg' => '选择的文件不存在或请求方式不是PUT'];
        switch ($strMethod) {
            case 'PUT':
                curl_setopt($objCh, CURLOPT_PUT, true);
                if (is_file($strFilePath) && $strFilePath !== false) {
                    //存在文件上传
                    curl_setopt($objCh, CURLOPT_INFILE, fopen($strFilePath, 'rb')); //设置资源句柄
                    curl_setopt($objCh, CURLOPT_INFILESIZE, filesize($strFilePath));
                }
                break;
            case 'POST':
                curl_setopt($objCh, CURLOPT_POST, true);
                break;
            case 'GET':
                curl_setopt($objCh, CURLOPT_CUSTOMREQUEST, $strMethod);
                if (!empty($arrData) && !$isJson) $arrData = http_build_query($arrData);
                break;
            default:
                curl_setopt($objCh, CURLOPT_CUSTOMREQUEST, $strMethod);
                break;
        }
        curl_setopt($objCh, CURLOPT_POSTFIELDS, $arrData);
        $response = curl_exec($objCh);
        if ($error = curl_error($objCh)) {
            return ['ok' => false, 'msg' => curl_error($objCh)];
        }
        curl_close($objCh);
        return ['ok' => true, 'msg' => '成功!', 'data' => $response];
    }
}