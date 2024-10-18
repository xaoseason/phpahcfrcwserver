<?php

namespace app\v1_0\controller\exam;

use app\common\lib\pay\alipay\alipay;
use app\common\lib\pay\wxpay\wxpay;
use Exception;
use UnionPay\UnionPay;

class Index extends \app\v1_0\controller\common\Base
{
    public function _initialize()
    {
        parent::_initialize();
        $this->checkLogin(2);
    }

    public function index()
    {
        self::checkUserStatus();
        $arrWhere = [];
        $arrWhere['is_display'] = ['=', 1];
        $intCurrentPage = input('page/d', 1, 'intval');
        $intPagesize = input('pagesize/d', 10, 'intval');

        $intTotal = model('ExamProject')
            ->where($arrWhere)
            ->count();
        $arrList = model('ExamProject')
            ->where($arrWhere)
            ->order('exam_project_id desc')
            ->page($intCurrentPage . ',' . $intPagesize)
            ->select();
        // 数据初始化
        $arrExamIdList = [];
        foreach ($arrList as &$item) {
            $item['sign_up_start_time'] = date('Y-m-d H:i:s', strtotime($item['sign_up_start_time']));
            $item['sign_up_end_time'] = date('Y-m-d H:i:s', strtotime($item['sign_up_end_time']));
            $arrExamIdList[] = $item['exam_project_id'];
            //是否在报名时间内
            if (strtotime($item['sign_up_start_time']) <= time() && strtotime($item['sign_up_end_time']) >= time()) {
                $item['is_sign_up'] = 1;
            } else {
                $item['is_sign_up'] = 0;
            }
            //是否在打印笔试准考证时间内
            if (strtotime($item['pen_print_start_time']) <= time() && strtotime($item['pen_print_end_time']) >= time()) {
                $item['is_pen_print'] = 1;
            } else {
                $item['is_pen_print'] = 0;
            }
            //是否在笔试缴费时间段内
            if (strtotime($item['pen_pay_start_time']) <= time() && strtotime($item['pen_pay_end_time']) >= time()) {
                $item['is_pen_pay'] = 1;
            } else {
                $item['is_pen_pay'] = 0;
            }
            //是否在笔试可查分
            if (strtotime($item['pen_query_time']) >= time()) {
                $item['is_pen_query'] = 1;
            } else {
                $item['is_pen_query'] = 0;
            }
            //是否在打印面试准考证时间内
            if (strtotime($item['itw_print_start_time']) <= time() && strtotime($item['itw_print_end_time']) >= time()) {
                $item['is_itw_print'] = 1;
            } else {
                $item['is_itw_print'] = 0;
            }
            //是否在面试缴费时间段内
            if (strtotime($item['itw_pay_start_time']) <= time() && strtotime($item['itw_pay_end_time']) >= time()) {
                $item['is_itw_pay'] = 1;
            } else {
                $item['is_itw_pay'] = 0;
            }
            $item['my_is_sign_up'] = 0;
        }
        // 取出所有岗位
        $arrPost = model('ExamPost')->where(
            [
                'exam_project_id' => ['in', $arrExamIdList]
            ]
        )->select();
        foreach ($arrList as &$item) {
            foreach ($arrPost as $items) {
                if ($item['exam_project_id'] == $items['exam_project_id']) {
                    $item['number'] += $items['number'];
                }
            }
        }
        // 取出我报名的
        $arrMySignPost = model('ExamSign')->where(
            [
                'uid' => ['=', $this->userinfo->uid],
                'exam_project_id' => ['in', $arrExamIdList]
            ]
        )->select();
        // 循环处理数据,检查报名状态
        foreach ($arrList as &$item) {
            foreach ($arrMySignPost as $items) {
                if ($item['exam_project_id'] == $items['exam_project_id']) {
                    $item['my_is_sign_up'] = 1;
                    $item['my_sign_up_status'] = $items['status'];
                    $item['is_pay_pen'] = $items['is_pay_pen'];
                    $item['is_pay_itw'] = $items['is_pay_itw'];
                    $item['is_pay_itw'] = $items['is_pay_itw'];
                    $item['my_is_itw'] = $items['is_itw'];
                }
            }
        }
        $arrReturn = [];
        $arrReturn['items'] = $arrList;
        $arrReturn['total'] = $intTotal;
        $arrReturn['current_page'] = $intCurrentPage;
        $arrReturn['pagesize'] = $intPagesize;
        $arrReturn['total_page'] = ceil($intTotal / $intPagesize);
        $this->ajaxReturn(200, '获取数据成功', $arrReturn);
    }

    public function project_details()
    {
        self::checkUserStatus();
        if ($this->userinfo->utype != 2) {
            $this->ajaxReturn(500, '请登录个人会员进行报名');
        }
        $intExamProjectId = input('exam_project_id/d', 0);
        $objInfo = model('ExamProject')->find($intExamProjectId);
        if (!$objInfo) {
            $this->ajaxReturn(500, '数据获取失败');
        }
        if (!empty($objInfo['custom_field'])) {
            try {
                $objInfo['custom_field'] = unserialize($objInfo['custom_field']);
            } catch (\Exception $e) {
            }
        }
        $objInfo['post'] = model('ExamPost')->where(
            ['is_display' => ['=', 1], 'exam_project_id' => ['=', $intExamProjectId]]
        )->select();
        foreach ($objInfo['post'] as &$item) {
            if (!empty($item['custom_field'])) {
                try {
                    $item['custom_field'] = unserialize($item['custom_field']);
                } catch (\Exception $e) {
                }
            }
        }
        $objInfo['guide'] = @htmlspecialchars_decode($objInfo['guide']);
        $objInfo['treaty'] = @htmlspecialchars_decode($objInfo['treaty']);
        $objInfo['itw_note'] = @htmlspecialchars_decode($objInfo['itw_note']);
        $objInfo['pen_note'] = @htmlspecialchars_decode($objInfo['pen_note']);
        $this->ajaxReturn(200, "获取成功", $objInfo);
    }

    public function get_my_info()
    {
        self::checkUserStatus();
        $this->ajaxReturn(200, "", $this->getBaseResume());
    }

    private function getBaseResume()
    {
        self::checkUserStatus();
        $where['uid'] = $this->userinfo->uid;
        $basic = model('Resume')
            ->where($where)
            ->field('uid,addtime', true) //排除字段
            ->find();
        if (empty($basic)) {
            return false;
        }
        $basic = $basic->toArray();
        $contact = model('ResumeContact')
            ->field('id,rid,uid', true)
            ->where(['rid' => ['eq', $basic['id']]])
            ->find();
        //工作经历
        $work_list = model('ResumeWork')
            ->field('rid,uid', true)
            ->where(['rid' => ['eq', $basic['id']]])
            ->select();
        foreach ($work_list as $key => $value) {
            $value = $value->toArray();
            $value['companyname'] = htmlspecialchars_decode($value['companyname'], ENT_QUOTES);
            $value['jobname'] = htmlspecialchars_decode($value['jobname'], ENT_QUOTES);
            $value['duty'] = htmlspecialchars_decode($value['duty'], ENT_QUOTES);
            if ($value['starttime'] != 0) {
                $value['starttime'] = date("Y-m-d", $value['starttime']);
            }
            if ($value['endtime'] != 0) {
                $value['endtime'] = date('Y-m-d', $value['endtime']);
            } else {
                $value['endtime'] = "至今";
            }
            $work_list[$key] = $value;
        }
        //教育经历
        $education_list = model('ResumeEducation')
            ->field('rid,uid', true)
            ->where(['rid' => ['eq', $basic['id']]])
            ->select();
        $resume_family = model('ResumeFamily')
            ->where(['uid' => ['eq', $this->userinfo->uid]])
            ->select();
        foreach ($education_list as $key => $value) {
            $value = $value->toArray();
            $value['education_text'] = isset(
                model('BaseModel')->map_education[$value['education']]
            )
                ? model('BaseModel')->map_education[$value['education']]
                : '';
            $value['school'] = htmlspecialchars_decode($value['school'], ENT_QUOTES);
            $value['major'] = htmlspecialchars_decode($value['major'], ENT_QUOTES);
            if ($value['starttime'] != 0) {
                $value['starttime'] = date('Y-m-d', $value['starttime']);
            }
            if ($value['endtime'] != 0) {
                $value['endtime'] = date('Y-m-d', $value['endtime']);
            } else {
                $value['endtime'] = "至今";
            }
            $education_list[$key] = $value;
        }
        $ExamResume = model('ExamResume')
            ->where(['uid' => ['eq', $this->userinfo->uid]])
            ->find();
        //证书
        $certificate_list = model('ResumeCertificate')
            ->field('rid,uid', true)
            ->where(['rid' => ['eq', $basic['id']]])
            ->select();
        foreach ($certificate_list as $key => $value) {
            $value['name'] = htmlspecialchars_decode($value['name'], ENT_QUOTES);
            if ($value['obtaintime'] != 0) {
                $value['obtaintime'] = date('Y-m-d', $value['obtaintime']);
            }
            $certificate_list[$key] = $value;
        }
        $exam_resume = model('ResumeCertificate')
            ->where(['uid' => ['eq', $basic['uid']]])
            ->find();
        if (empty($exam_resume)) {
            $exam_resume = [
                "idcard_img_just" => "",
                "idcard_img_back" => "",
                "driver_certificate_img" => "",
                "degree_img" => "",
            ];
        }
        $base = [];
        $base['realname'] = $basic['fullname']; //真实姓名
        $base['sex'] = $basic['sex'] == 2 ? '女' : '男';
        $base['height'] = $basic['height']; //身高
        $base['weight'] = $basic['weight']; //体重
        $base['idcard'] = $basic['idcard']; //身份证号
        $base['residence'] = $basic['residence']; //家庭地址
        $base['marriage'] = $basic['marriage']; //婚姻
        $base['nation'] = $basic['nation']; //民族
        $base['major'] = $basic['major']; //所学专业
        $base['major1'] = $basic['major1']; //所学专业
        $base['major2'] = $basic['major2']; //所学专业
        $base['vision'] = $basic['vision']; //视力
        $base['education'] = $basic['education']; //最高学历
        $base['school'] = $basic['school']; //毕业院校
        $base['custom_field_1'] = $basic['custom_field_1']; //政治面貌
        $base['custom_field_2'] = $basic['custom_field_2']; //毕业时间
        $base['custom_field_3'] = $basic['custom_field_3']; //退伍军人
        $base['birth'] = $basic['birth']; //生育
        $base['hjd'] = $basic['hjd']; //户口簿详细地址
        $base['photo'] = $basic['photo']; //一寸照
        $base['title'] = $basic['title']; //职称
        $base['schoolsystem'] = $basic['schoolsystem']; //学制

        $base = array_merge($base, $exam_resume);
        return [
            'basic' => $base,
            'contact' => $contact->toArray(),
            'work_list' => $work_list,
            'education_list' => $education_list,
            'certificate_list' => $certificate_list,
            'resume_family' => $resume_family,
            'exam_resume' => $ExamResume,
        ];
    }

    public function pay()
    {
        self::checkUserStatus();
        $intExamProjectId = input('exam_project_id/d', 0);
        $intType = input('type', 0);
        if ($intType != 1 && $intType != 2) {
            $this->ajaxReturn(500, '请选择支付项目');
        }
        $intIsAlPay = input('is_alpay', 0);
        $objMySignInfo = model("ExamSign")
            ->alias('ExamSign')
            ->join(config('database.prefix') . 'exam_project ExamProject', 'ExamSign.exam_project_id = .ExamProject.exam_project_id')
            ->join(config('database.prefix') . 'exam_post ExamPost', 'ExamPost.exam_post_id = .ExamSign.exam_post_id')
            ->field('ExamSign.*,ExamProject.*,ExamProject.name as project_name,ExamPost.*,ExamPost.name as post_name,ExamProject.itw_money as default_itw_money,ExamProject.pen_money as default_pen_money,ExamPost.pen_money as post_pen_money,ExamPost.itw_money as post_itw_money')
            ->where([
                'ExamSign.uid' => ['=', $this->userinfo->uid],
                'ExamSign.exam_project_id' => ['=', $intExamProjectId],
                'ExamProject.is_display' => ['=', 1],
                'ExamPost.is_display' => ['=', 1],
            ])->find();
        if (!$objMySignInfo) {
            $this->ajaxReturn(500, '数据获取失败');
        }
        if ($objMySignInfo['status'] == 0) {
            $this->ajaxReturn(500, '您的报名还未审核,请耐心等待');
        }
        if ($objMySignInfo['status'] == 2) {
            $this->ajaxReturn(500, '您的报名审核未通过');
        }
        if ($intType == 1 && $objMySignInfo['is_pay_pen'] == 1) {
            $this->ajaxReturn(500, '您已缴过费,请勿重复缴费!');
            return;
        }
        if ($intType == 2 && $objMySignInfo['is_pay_itw'] == 1) {
            $this->ajaxReturn(500, '您已缴过费,请勿重复缴费!');
            return;
        }
        $arrResult = [];
        $arrResult['project_name'] = $objMySignInfo['project_name'];
        $arrResult['post_name'] = $objMySignInfo['post_name'];
        $arrResult['realname'] = $objMySignInfo['realname'];
        $arrResult['idcard'] = $objMySignInfo['idcard'];
        $arrResult['idcard'] = $objMySignInfo['idcard'];
        $strServiceName = '支付' . $arrResult['post_name'];
        $strServiceName .= $intType == 1 ? '笔试费用' : '面试费用';
        $strServiceName .= '- 考生姓名 : ' . $objMySignInfo['realname'] . 'Project-' . $intExamProjectId;
        // 支付类型
        if ($intType == 1) {
            $decMoney = $objMySignInfo['post_pen_money'] > 0 ? $objMySignInfo['post_pen_money'] : $objMySignInfo['default_pen_money'];
        } else {
            $decMoney = $objMySignInfo['post_itw_money'] > 0 ? $objMySignInfo['post_itw_money'] : $objMySignInfo['default_itw_money'];
        }
        if ($decMoney == 0) {
            model("ExamSign")->where(['exam_sign_id' => $objMySignInfo['exam_sign_id']])->update(['is_pay_pen' => 1]);
            $this->ajaxReturn(500, '本次考试无需缴费,已为您缴费签到成功!');
            return;
        }
        //先找订单
//        $objOrderCheck = model('ExamOrder')->where([
//            'uid' => ['=', $this->userinfo->uid],
//            'exam_project_id' => ['=', $intExamProjectId],
//            'exam_post_id' => ['=', $objMySignInfo['exam_post_id']],
//            'type' => ['=', $intType],
//            'bill_date' => date("Y-m-d")
//        ])->find();
//        if (!empty($objOrderCheck) && !empty($objOrderCheck->billqrcode)) {
//            $arrResult['money'] = $decMoney;
//            $arrResult['pay_url'] = $objOrderCheck->billqrcode;
//            $this->ajaxReturn(200, "成功", $arrResult);
//            return;
//        }
        $objUnionPay = new UnionPay(config("UnionPay.isDev"));
        $strOutTradeNo = $objUnionPay->CreateBillNo();
        // 创建订单
        $arrOrderData = [];
        $arrOrderData['out_trade_no'] = $strOutTradeNo;
        $arrOrderData['exam_project_id'] = $intExamProjectId;
        $arrOrderData['exam_post_id'] = $objMySignInfo['exam_post_id'];
        $arrOrderData['uid'] = $this->userinfo->uid;
        $arrOrderData['type'] = $intType;
        $arrOrderData['service_name'] = $strServiceName;
        $arrOrderData['bill_date'] = date("Y-m-d");
        $arrOrderData['exam_sign_id'] = $objMySignInfo['exam_sign_id'];
        if ($intType == 1) {
            $arrOrderData['money'] = $decMoney;
        } else {
            $arrOrderData['money'] = $decMoney;
        }
        $arrOrderData['realname'] = $objMySignInfo['realname'];
        $arrOrderData['create_time'] = date('Y-m-d H:i:s');
        $isDbOk = model('ExamOrder')->save($arrOrderData);
        if ($isDbOk === false) {
            $this->ajaxReturn(500, "发起支付失败,请重试!");
        }
        if (strlen($strServiceName) > 128) {
            $strServiceName = mb_substr($strServiceName, 0, 128);
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
        $res = $objUnionPay->GetPayQrcode($intExamProjectId . " - " . $objMySignInfo['exam_post_id'] . " - " . $isDbOk->exam_order_id,
            $strServiceName,
            $decMoney,
            $strServiceName,
            $this->userinfo->uid . "",
            $isDbOk->exam_order_id . "",
            $strOutTradeNo,
            $strServiceName);
        if (!$res['ok'] || empty($res['data']['billQRCode']) || $res['data']['errCode'] != "SUCCESS") {
            $this->ajaxReturn(500, "发起支付失败,请重试!");
        }
        $arrOrderData = [];
        $arrOrderData['billqrcode'] = $res['data']['billQRCode'];
        $arrOrderData['bill_date'] = $res['data']['billDate'];
        $arrOrderData['qrcodeid'] = $res['data']['qrCodeId'];
        model('ExamOrder')->where(["out_trade_no" => $strOutTradeNo])->update($arrOrderData);
        $arrResult['money'] = $decMoney;
        $arrResult['pay_url'] = $res['data']['billQRCode'];
        $this->ajaxReturn(200, "成功", $arrResult);
    }

    public function print_form()
    {
        self::checkUserStatus();
        $arrField = [];
        $arrField[] = "ExamSign.*"; //报名信息
        $arrField[] = "ExamProject.*"; //项目信息
        $arrField[] = "ExamProject.name as project_name"; //项目名称
        $arrField[] = "ExamPost.*"; //岗位信息
        $arrField[] = "ExamPost.name as post_name"; //岗位名称
        $arrField[] = "ExamProject.itw_money as default_itw_money"; //项目面试缴费金额
        $arrField[] = "ExamProject.pen_money as default_pen_money"; //项目笔试缴费金额
        $arrField[] = "ExamPost.pen_money as post_pen_money"; //岗位面试金额
        $arrField[] = "ExamPost.pen_money as post_itw_money"; //岗位笔试金额
        $arrField[] = "Resume.*"; //简历信息
        $arrField[] = "ExamProject.pen_test_time as project_pen_test_time"; //项目笔试时间
        $arrField[] = "ExamProject.pen_test_addr as project_pen_test_addr"; //项目笔试考试地址
        $arrField[] = "ExamProject.itw_time as project_itw_time"; //项目面试时间
        $arrField[] = "ExamProject.itw_room as project_itw_room"; //项目面试考场
        $arrField[] = "ExamProject.itw_addr as project_itw_addr"; //项目面试地址
        $arrField[] = "ExamPost.pen_test_time as post_pen_test_time"; //岗位笔试时间
        $arrField[] = "ExamPost.pen_test_addr as post_pen_test_addr"; //岗位笔试考试地址
        $arrField[] = "ExamPost.itw_time as post_itw_time"; //岗位面试时间
        $arrField[] = "ExamPost.itw_addr as post_itw_addr"; //岗位面试地址
        $arrField[] = "ExamSign.marriage as marriage"; //岗位面试地址
        $arrField[] = "Resume.marriage as marriage1"; //岗位面试地址
        $arrField[] = "ExamSign.custom_field as custom_field";
        $arrField[] = "ExamProject.custom_field as project_custom_field";
        $arrField[] = "ExamPost.custom_field as post_custom_field";
        $arrField[] = "ResumeContact.*";
        $arrField[] = "ExamSign.health as health"; //健康状况
        $arrField[] = "ExamSign.address as address"; //现居住地
        $intExamProjectId = input('exam_project_id/d', 0);
        $intType = input('type/d', 1);
        $objMySignInfo = model("ExamSign")
            ->alias('ExamSign')
            ->join(config('database.prefix') . 'exam_project ExamProject', 'ExamSign.exam_project_id = .ExamProject.exam_project_id')
            ->join(config('database.prefix') . 'exam_post ExamPost', 'ExamPost.exam_post_id = .ExamSign.exam_post_id')
            ->join(config('database.prefix') . 'resume Resume', 'Resume.uid = .ExamSign.uid')
            ->join(config('database.prefix') . 'resume_contact ResumeContact', 'ResumeContact.rid = Resume.id')
            ->field(implode(",", $arrField))
            ->where([
                'ExamSign.uid' => ['=', $this->userinfo->uid],
                'ExamSign.exam_project_id' => ['=', $intExamProjectId],
                'ExamProject.is_display' => ['=', 1],
                'ExamPost.is_display' => ['=', 1],
            ])->find();
        if (!$objMySignInfo) {
            $this->ajaxReturn(500, '数据获取失败');
        }
        if ($objMySignInfo['status'] != 1) {
            $this->ajaxReturn(500, '报名审核未通过');
        }
        if (empty($objMySignInfo['marriage'])) {
            $objMySignInfo['marriage'] = $objMySignInfo['marriage1'];
        }
        $arrReteun = [];
        $arrReteun['realname'] = $objMySignInfo['realname'];
        $arrReteun['idcard'] = $objMySignInfo['idcard'];
        $arrReteun['sex'] = $objMySignInfo['sex'] == 1 ? '男' : '女';
        $arrReteun['photo'] = $objMySignInfo['photo'];
        $arrReteun['post'] = "{$objMySignInfo['post_name']}-{$objMySignInfo['code']}";
        $arrReteun['project_name'] = $objMySignInfo['project_name'];
        $arrReteun['sos_name'] = $objMySignInfo['sos_name'];
        $arrReteun['sos_mobile'] = $objMySignInfo['sos_mobile'];
        $arrReteun['health'] = $objMySignInfo['health'];
        $arrReteun['address'] = $objMySignInfo['address'];
        if ($intType == 1) {
            if ($objMySignInfo['is_pay_pen'] != 1) {
                $this->ajaxReturn(500, '未交费');
            }
            if (strtotime($objMySignInfo['pen_print_start_time']) > time() || strtotime($objMySignInfo['pen_print_end_time'] < time())) {
                $this->ajaxReturn(500, '不再打印时间范围内');
            }
            //笔试
            $arrReteun['room'] = $objMySignInfo['room'];
            $arrReteun['room_code'] = $objMySignInfo['room_code'];
            $arrReteun['room_code'] = $objMySignInfo['room_code'];
            $arrReteun['pen_test_time'] = $objMySignInfo['pen_test_time'] ? $objMySignInfo['pen_test_time'] : $objMySignInfo['project_pen_test_time'];
            $pen_test_addr = $objMySignInfo['post_pen_test_addr'] ? $objMySignInfo['post_pen_test_addr'] : $objMySignInfo['project_pen_test_addr'];
            $arrReteun['pen_test_addr'] = !empty($objMySignInfo['sign_pen_addr']) ? $objMySignInfo['sign_pen_addr'] : $pen_test_addr;
            $arrReteun['pen_note'] = htmlspecialchars_decode($objMySignInfo['pen_note']);
            model("ExamSign")->where(['exam_sign_id' => ['=', $objMySignInfo['exam_sign_id']]])->update(['is_print_pen' => 1]);
        }
        if ($intType == 2) {
            if ($objMySignInfo['is_pay_itw'] != 1) {
                $this->ajaxReturn(500, '未交费');
            }
            if (strtotime($objMySignInfo['itw_print_start_time']) > time() || strtotime($objMySignInfo['itw_print_end_time'] < time())) {
                $this->ajaxReturn(500, '不再打印时间范围内');
            }
            $itw_addr = $objMySignInfo['post_itw_addr'] ? $objMySignInfo['post_itw_addr'] : $objMySignInfo['project_itw_addr'];
            //面试
            $arrReteun['itw_room'] = $objMySignInfo['itw_room'];
            $arrReteun['itw_addr'] = !empty($objMySignInfo['sign_itw_addr']) ? $objMySignInfo['sign_itw_addr'] : $itw_addr;
            $arrReteun['itw_note'] = htmlspecialchars_decode($objMySignInfo['itw_note']);
            $arrReteun['itw_time'] = $objMySignInfo['post_itw_time'] ? $objMySignInfo['post_itw_time'] : $objMySignInfo['project_itw_time'];
            model("ExamSign")->where(['exam_sign_id' => ['=', $objMySignInfo['exam_sign_id']]])->update(['is_print_itw' => 1]);
        }
        if ($intType == 3) {
            $objExamResume = model("ExamResume")->where(['uid' => ['=', $this->userinfo->uid]])->find();
            // 报名表
            try {
                if (!empty($objMySignInfo->custom_field)) {
                    if (!empty($objMySignInfo->project_custom_field)) {
                        $objMySignInfo->project_custom_field = unserialize($objMySignInfo->project_custom_field);
                    }
                    if (!empty($objMySignInfo->post_custom_field)) {
                        $objMySignInfo->post_custom_field = unserialize($objMySignInfo->post_custom_field);
                    }
                    if (is_array($objMySignInfo->post_custom_field)) {
                        if (is_array($objMySignInfo->project_custom_field)) {
                            $objMySignInfo->project_custom_field = array_merge($objMySignInfo->project_custom_field, $objMySignInfo->post_custom_field);
                        } else {
                            $objMySignInfo->project_custom_field = $objMySignInfo->post_custom_field;
                        }
                    }
                    $objMySignInfo->custom_field = unserialize($objMySignInfo->custom_field);
                    if (is_array($objMySignInfo->custom_field) && is_array($objMySignInfo->project_custom_field)) {
                        $custom_field = [];
                        $tmp = [];
                        foreach ($objMySignInfo->custom_field as $item) {
                            foreach ($objMySignInfo->project_custom_field as $items) {
                                if ($item['name'] == $items['name'] && !empty($items['show_sign']) && $items['show_sign'] == 1 && $items['type'] != 3) {
                                    if (count($tmp) == 2) {
                                        $custom_field[] = $tmp;
                                        $tmp = [];
                                        $tmp[] = $item;
                                    } else {
                                        $tmp[] = $item;
                                    }
                                    break;
                                } else {
                                    continue;
                                }
                            }
                        }
                        if (count($tmp) != 0) {
                            $custom_field[] = $tmp;
                        }
                        $objMySignInfo->custom_field = $custom_field;
                    }
                }
            } catch (Exception $e) {
            }
            $arrInfo = $this->getBaseResume();
            $arrReteun['nation'] = $objMySignInfo['nation'];
            $arrReteun['custom_field_1'] = $objMySignInfo['custom_field_1'];
            $arrReteun['custom_field_2'] = $objMySignInfo['custom_field_2'];
            $arrReteun['custom_field_3'] = $objMySignInfo['custom_field_3'];
            $arrReteun['education'] = $objMySignInfo['education'];
            $arrReteun['major'] = $objMySignInfo['major'];
            $arrReteun['custom_field'] = $objMySignInfo['custom_field'];
            $arrReteun['fresh_graduates'] = $objMySignInfo['switch_fresh_graduates'] == 1 ? $objMySignInfo['fresh_graduates'] : 3;
            $arrReteun['householdaddress'] = $objMySignInfo['householdaddress'];
            $arrReteun['residence'] = $objMySignInfo['residence'];
            $arrReteun['marriage'] = $objMySignInfo['marriage'];
            $arrReteun['height'] = $objMySignInfo['height'];
            $arrReteun['weight'] = $objMySignInfo['weight'];
            $arrReteun['title'] = $objMySignInfo['switch_title'] == 1 ? $objMySignInfo['title'] : '-';
            $arrReteun['birthday'] = $objMySignInfo['birthday'];
            $arrReteun['school'] = $objMySignInfo['school'];
            $arrReteun['degree'] = !empty($objExamResume['degree_img']) ? 1 : 0;
            $arrReteun['degree'] = $objMySignInfo['switch_diploma'] == 1 ? $arrReteun['degree'] : 3;
            $arrReteun['mobile'] = $arrInfo['contact']['mobile'];
            $arrReteun['work_list'] = $arrInfo['work_list'];
            $arrReteun['education_list'] = $arrInfo['education_list'];
            $arrReteun['certificate_list'] = $arrInfo['certificate_list'];
            $arrReteun['resume_family'] = $arrInfo['resume_family'];
            $arrReteun['hjd'] = $arrInfo['basic']['hjd'];
        } else if ($intType < 1 && $intType > 3) {
            $this->ajaxReturn(500, '非法请求');
        }
        $this->ajaxReturn(200, "success", $arrReteun);
    }

    public function mySignList()
    {
        self::checkUserStatus();
        $arrWhere = [];
        $arrWhere['ExamProject.is_display'] = ['=', 1];
        $arrWhere['ExamSign.uid'] = ['=', $this->userinfo->uid];
        $intCurrentPage = input('page/d', 1, 'intval');
        $intPagesize = input('pagesize/d', 10, 'intval');
        $intTotal = model('ExamSign')
            ->alias('ExamSign')
            ->join(config('database.prefix') . 'exam_project ExamProject', 'ExamSign.exam_project_id = .ExamProject.exam_project_id')
            ->join(config('database.prefix') . 'exam_post ExamPost', 'ExamPost.exam_post_id = .ExamSign.exam_post_id')
            ->where($arrWhere)
            ->count();
        $arrList = model('ExamSign')
            ->alias('ExamSign')
            ->join(config('database.prefix') . 'exam_project ExamProject', 'ExamSign.exam_project_id = .ExamProject.exam_project_id')
            ->join(config('database.prefix') . 'exam_post ExamPost', 'ExamPost.exam_post_id = .ExamSign.exam_post_id')
            ->field('ExamSign.*,ExamSign.is_itw as my_is_itw,ExamProject.*,ExamPost.*,ExamPost.name as name,ExamProject.name as projectname')
            ->where($arrWhere)
            ->order('ExamSign.exam_project_id desc')
            ->page($intCurrentPage . ',' . $intPagesize)
            ->select();
        foreach ($arrList as &$item) {
            $arrExamIdList[] = $item['exam_project_id'];
            //是否在报名时间内
            if (strtotime($item['sign_up_start_time']) <= time() && strtotime($item['sign_up_end_time']) >= time()) {
                $item['is_sign_up'] = 1;
            } else {
                $item['is_sign_up'] = 0;
            }
            //是否在打印笔试准考证时间内
            if (strtotime($item['pen_print_start_time']) <= time() && strtotime($item['pen_print_end_time']) >= time()) {
                $item['is_pen_print'] = 1;
            } else {
                $item['is_pen_print'] = 0;
            }
            //是否在笔试缴费时间段内
            if (strtotime($item['pen_pay_start_time']) <= time() && strtotime($item['pen_pay_end_time']) >= time()) {
                $item['is_pen_pay'] = 1;
            } else {
                $item['is_pen_pay'] = 0;
            }
            //是否在笔试可查分
            if (strtotime($item['pen_query_time']) <= time()) {
                $item['is_pen_query'] = 1;
            } else {
                $item['is_pen_query'] = 0;
            }
            //是否在打印面试准考证时间内
            if (strtotime($item['itw_print_start_time']) <= time() && strtotime($item['itw_print_end_time']) >= time()) {
                $item['is_itw_print'] = 1;
            } else {
                $item['is_itw_print'] = 0;
            }
            //是否在面试缴费时间段内
            if (strtotime($item['itw_pay_start_time']) <= time() && strtotime($item['itw_pay_end_time']) >= time()) {
                $item['is_itw_pay'] = 1;
            } else {
                $item['is_itw_pay'] = 0;
            }
            $item['my_is_sign_up'] = 1;
            $item['my_sign_up_status'] = $item['status'];
        }
        $arrReturn = [];
        $arrReturn['items'] = $arrList;
        $arrReturn['total'] = $intTotal;
        $arrReturn['current_page'] = $intCurrentPage;
        $arrReturn['pagesize'] = $intPagesize;
        $arrReturn['total_page'] = ceil($intTotal / $intPagesize);
        $this->ajaxReturn(200, '获取数据成功', $arrReturn);
    }

    public function myPay()
    {
        self::checkUserStatus();
        $arrWhere = [];
        $intCurrentPage = input('page/d', 1, 'intval');
        $intPagesize = input('pagesize/d', 10, 'intval');
        $arrWhere['uid'] = ['=', $this->userinfo->uid];
        $arrWhere['is_pay'] = ['=', 1];
        $intTotal = model('ExamOrder')
            ->where($arrWhere)
            ->count();
        $arrList = model('ExamOrder')
            ->where($arrWhere)
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

    public function grade()
    {
        self::checkUserStatus();
        $intExamProjectId = input('exam_project_id/d');
        if ($intExamProjectId <= 0) {
            $this->ajaxReturn(500, "非法请求");
        }
        $objInfo = model("ExamSign")
            ->alias('ExamSign')
            ->join(config('database.prefix') . 'exam_project ExamProject', 'ExamSign.exam_project_id = .ExamProject.exam_project_id')
            ->join(config('database.prefix') . 'exam_post ExamPost', 'ExamPost.exam_project_id = .ExamProject.exam_project_id')
            ->field('ExamSign.*,ExamProject.*,ExamProject.name as project_name,ExamPost.*,ExamPost.name as post_name')
            ->where([
                'uid' => ['=', $this->userinfo->uid],
                'ExamSign.exam_project_id' => ['=', $intExamProjectId],
                'is_pay_itw|is_pay_pen' => ['=', 1]
            ])
            ->find();
        $arrResult = [];
        if (!empty($objInfo)) {
            if (strtotime($objInfo['pen_query_time']) <= time()) {
                $arrResult['project_name'] = $objInfo['project_name'];
                $arrResult['post_name'] = $objInfo['post_name'];
                $arrResult['code'] = $objInfo['code'];
                $arrResult['grade_pen'] = $objInfo['grade_pen'] ? $objInfo['grade_pen'] : 0;
                $arrResult['is_itw'] = $objInfo['is_itw'];
                $arrResult['grade_itw'] = $objInfo['grade_itw'] ? $objInfo['grade_itw'] : 0;
            } else {
                $this->ajaxReturn(500, "没有在查分时间段内");
            }
        }
        $this->ajaxReturn(!empty($arrResult) ? 200 : 500, !empty($arrResult) ? "获取成功" : "没有找到考试信息", $arrResult);
    }

    public function signUpState()
    {
        self::checkUserStatus();
        $intExamProjectId = input('exam_project_id/d');
        if ($intExamProjectId <= 0) {
            $this->ajaxReturn(500, "非法请求");
        }
        $arrRetuan = [];
        $arrRetuan['project'] = model('ExamProject')
            ->field('show_sign_up_state,name,number,is_itw')
            ->where([
                'exam_project_id' => ['=', $intExamProjectId],
                'is_display' => ['=', 1]
            ])->find();
        if ($arrRetuan['project']['show_sign_up_state'] != 1) {
            $this->ajaxReturn(500, "未开启报名情况查询");
        }
        $arrPostList = model('ExamPost')
            ->field('exam_post_id,name,number,code,is_itw')
            ->where([
                'exam_project_id' => ['=', $intExamProjectId],
                'is_display' => ['=', 1]
            ])
            ->select();
        $arrRetuan['post'] = [];
        $arrPostIds = [];
        foreach ($arrPostList as $item) {
            $arrRetuan['post'][$item['exam_post_id']] = $item;
            $arrRetuan['post'][$item['exam_post_id']]['sign_number'] = 0;
            $arrRetuan['post'][$item['exam_post_id']]['sign_adopt_number'] = 0;
            $arrRetuan['post'][$item['exam_post_id']]['sign_not_adopt_number'] = 0;
            $arrRetuan['post'][$item['exam_post_id']]['sign_wait_number'] = 0;
            $arrRetuan['post'][$item['exam_post_id']]['sign_pay_pen_number'] = 0;
            $arrRetuan['post'][$item['exam_post_id']]['sign_pay_itw_number'] = 0;
            $arrRetuan['post'][$item['exam_post_id']]['sign_print_itw_number'] = 0;
            $arrRetuan['post'][$item['exam_post_id']]['sign_print_pen_number'] = 0;
            $arrPostIds[] = $item['exam_post_id'];
        }
        $arrSignUpList = model('ExamSign')
            ->field('exam_post_id,status,is_pay_pen,is_pay_itw,is_print_pen,is_print_itw,is_itw')
            ->where([
                'exam_post_id' => ['in', $arrPostIds]
            ])
            ->select();

        foreach ($arrSignUpList as $item) {
            $arrRetuan['post'][$item['exam_post_id']]['sign_number'] += 1;
            switch ($item['status']) {
                case 1:
                    $arrRetuan['post'][$item['exam_post_id']]['sign_adopt_number'] += 1;
                    break;
                case 2:
                    $arrRetuan['post'][$item['exam_post_id']]['sign_not_adopt_number'] += 1;
                    break;
                default:
                    $arrRetuan['post'][$item['exam_post_id']]['sign_wait_number'] += 1;
                    break;
            }
            $arrRetuan['post'][$item['exam_post_id']]['is_itw'] = $item['is_itw'];
            if ($item['is_pay_pen'] == 1) {
                $arrRetuan['post'][$item['exam_post_id']]['sign_pay_pen_number'] += 1;
            }
            if ($item['is_pay_itw'] == 1) {
                $arrRetuan['post'][$item['exam_post_id']]['sign_pay_itw_number'] += 1;
            }
            if ($item['is_print_pen'] == 1) {
                $arrRetuan['post'][$item['exam_post_id']]['sign_print_pen_number'] += 1;
            }
            if ($item['is_print_itw'] == 1) {
                $arrRetuan['post'][$item['exam_post_id']]['sign_print_itw_number'] += 1;
            }
        }
        $arrRetuan['post'] = array_values($arrRetuan['post']);
        $this->ajaxReturn(200, 'success', $arrRetuan);
    }

    public function checkMySign()
    {
        self::checkUserStatus();
        $intExamSignId = input('id/d');
        if ($intExamSignId <= 0) {
            $this->ajaxReturn(200, 0);
        }
        $objSignInfo = model('ExamSign')->where(['uid' => ['=', $this->userinfo->uid], 'exam_project_id' => ['=', $intExamSignId]])->find();
        if (empty($objSignInfo)) {
            $this->ajaxReturn(200, 0);
        }
        $this->ajaxReturn(200, 1);
    }

    private function checkUserStatus()
    {
        $member_info = model('Member')
            ->where('uid', $this->userinfo->uid)
            ->find();
        if ($member_info['utype'] != 2){
            $this->ajaxReturn(500, "仅个人用户可进行报名考试");
            exit;
        }
        if ($member_info['status'] == 0) {
            $this->ajaxReturn(500, "您的账号处于暂停状态，请联系管理员设为正常后进行操作");
            exit;
        }
        $resume_info = model('Resume')
            ->field('id,fullname,audit')
            ->where('uid', $this->userinfo->uid)
            ->find();
        if (null === $resume_info) {
            $this->ajaxReturn(500, "没有找到简历信息，请先完善简历");
            exit;
        }
        if ($resume_info['audit'] != 1) {
            $this->ajaxReturn(500, "你的简历还没有审核通过，请联系管理员审核通过后进行操作");
            exit;
        }
    }
}
