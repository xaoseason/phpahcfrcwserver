<?php

namespace app\apiadmin\controller\exam;


use Think\Db;
use think\Exception;

class Project extends \app\common\controller\Backend
{
    public function index()
    {
        $arrWhere = [];
        if (trim(input('is_display/s', '')) != '') {
            $arrWhere['is_display'] = ['=', input('is_display/d', 0)];
        }
        if (!empty(input('keywords/s', '', 'trim'))) {
            $arrWhere['name'] = ['like', '%' . input('keywords/s') . '%'];
        }
        if (!empty(input('start_time/s', '', 'trim'))) {
            $arrWhere['addtime'] = ['>=', input('start_time/s')];
        }
        if (!empty(input('end_time/s', '', 'trim'))) {
            $arrWhere['addtime'] = ['<=', input('end_time/s')];
        }
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
        $arrReturn = [];
        $arrReturn['items'] = $arrList;
        $arrReturn['total'] = $intTotal;
        $arrReturn['current_page'] = $intCurrentPage;
        $arrReturn['pagesize'] = $intPagesize;
        $arrReturn['total_page'] = ceil($intTotal / $intPagesize);
        $this->ajaxReturn(200, '获取数据成功', $arrReturn);
    }

    private function verifier(&$arrParam)
    {
        if (empty(trim($arrParam['name']))) {
            return "请填写考试项目名称";
        }
        if (empty(trim($arrParam['guide']))) {
            return "请填写报考指南";
        }
        if (empty(trim($arrParam['treaty']))) {
            return "请填写诚心承诺书";
        }
        if (empty(trim($arrParam['sign_up_start_time'])) || date('Y', strtotime(trim($arrParam['sign_up_start_time']))) == '1970') {
            return "请填写报名开始时间";
        }
        if (empty(trim($arrParam['sign_up_end_time'])) || date('Y', strtotime(trim($arrParam['sign_up_end_time']))) == '1970') {
            return "请填写报名结束时间";
        }
        if (empty(trim($arrParam['audit_end_time'])) || date('Y', strtotime(trim($arrParam['audit_end_time']))) == '1970') {
            return "请填写审核截止时间";
        }
        if (
            $arrParam['is_pen'] == null && $arrParam['is_itw'] == null ||
            $arrParam['is_pen'] == 0 && $arrParam['is_itw'] == null ||
            $arrParam['is_pen'] == null && $arrParam['is_itw'] == 0 ||
            $arrParam['is_pen'] == 0 && $arrParam['is_itw'] == 0
        ) {
            return "笔试或面试必须开启一个";
        }
        if ($arrParam['is_pen'] == 1) {
            if ($arrParam['pen_money'] == null || !is_numeric($arrParam['pen_money'])) {
                return "请填写正确的笔试缴费金额";
            }
            if (empty(trim($arrParam['pen_pay_start_time'])) || date('Y', strtotime(trim($arrParam['pen_pay_start_time']))) == '1970') {
                return "请填写笔试缴费开始时间";
            }
            if (empty(trim($arrParam['pen_pay_end_time'])) || date('Y', strtotime(trim($arrParam['pen_pay_end_time']))) == '1970') {
                return "请填写笔试缴费截止时间";
            }
            if (empty(trim($arrParam['pen_test_time']))) {
                return "请填写笔试时间";
            }
            if (empty($arrParam['pen_test_addr'])) {
                return "请填写笔试地址";
            }
            if (empty(trim($arrParam['pen_query_time'])) || date('Y', strtotime(trim($arrParam['pen_query_time']))) == '1970') {
                return "请填写笔试查分时间";
            }
            if (empty(trim($arrParam['pen_print_start_time'])) || date('Y', strtotime(trim($arrParam['pen_print_start_time']))) == '1970') {
                return "请填写笔试准考证打印开始时间";
            }
            if (empty(trim($arrParam['pen_print_end_time'])) || date('Y', strtotime(trim($arrParam['pen_print_end_time']))) == '1970') {
                return "请填写笔试准考证打印截止时间";
            }
            if (empty($arrParam['pen_note'])) {
                return "请填写笔试主要事项";
            }
        }

        if ($arrParam['is_itw'] == 1) {
            if ($arrParam['itw_money'] == null || !is_numeric($arrParam['itw_money'])) {
                return "请填写正确的面试缴费金额";
            }
            if (empty(trim($arrParam['itw_pay_start_time'])) || date('Y', strtotime(trim($arrParam['itw_pay_start_time']))) == '1970') {
                return "请填写面试缴费开始时间";
            }
            if (empty(trim($arrParam['itw_pay_end_time'])) || date('Y', strtotime(trim($arrParam['itw_pay_end_time']))) == '1970') {
                return "请填写面试缴费截止时间";
            }
            if (empty(trim($arrParam['itw_time']))) {
                return "请填写面试时间";
            }
            if (empty($arrParam['itw_addr'])) {
                return "请填写面试地址";
            }
            if (empty(trim($arrParam['itw_print_start_time'])) || date('Y', strtotime(trim($arrParam['itw_print_start_time']))) == '1970') {
                return "请填写面试表打印开启时间";
            }
            if (empty(trim($arrParam['itw_print_end_time'])) || date('Y', strtotime(trim($arrParam['itw_print_end_time']))) == '1970') {
                return "请填写面试表打印截止时间";
            }
            if (empty($arrParam['itw_note'])) {
                return "请填写面试主要事项";
            }
        }
        if (!empty($arrParam['custom_field'])) {
            if (!is_array($arrParam['custom_field'])) {
                return "自定义字段格式错误";
            }
            foreach ($arrParam['custom_field'] as $k => &$item) {
                if (empty($item)) {
                    unset($arrParam['custom_field'][$k]);
                    continue;
                }
                $item['name'] = str_replace([' ', PHP_EOL, '   '], "", $item['name']);
                if (empty($item['name'])) {
                    return "请填写自定义字段名称";
                }
                $item['key'] = "a" . md5($item['name'] . time() * rand(0, time()));
                if (!in_array($item['type'], [1, 2, 3])) {
                    return "自定义字段类型不正确";
                }
                if (isset($item['required'])) {
                    $item['required'] = intval($item['required']);
                } else {
                    $item['required'] = 0;
                }
            }
            if (!empty($arrParam['custom_field'])) {
                $arrParam['custom_field'] = serialize($arrParam['custom_field']);
            }
        }
        return true;
    }

    private function getParam()
    {
        $arrParam = [];
        $arrParam['name'] = input('name/s', '');
        $arrParam['guide'] = input('guide/s', '');
        $arrParam['treaty'] = input('treaty/s', '');
        $arrParam['remarks'] = input('remarks/s', null);
        $arrParam['sign_up_start_time'] = input('sign_up_start_time/s', null);
        $arrParam['sign_up_end_time'] = input('sign_up_end_time/s', null);
        $arrParam['audit_end_time'] = input('audit_end_time/s', null);
        $arrParam['is_pen'] = input('is_pen/d', null);
        $arrParam['pen_money'] = input('pen_money/s', null);
        $arrParam['pen_pay_start_time'] = input('pen_pay_start_time/s', null);
        $arrParam['pen_pay_end_time'] = input('pen_pay_end_time/s', null);
        $arrParam['pen_test_time'] = input('pen_test_time/s', null);
        $arrParam['pen_test_addr'] = input('pen_test_addr/s', null);
        $arrParam['pen_query_time'] = input('pen_query_time/s', null);
        $arrParam['pen_note'] = input('pen_note/s', null);
        $arrParam['pen_print_start_time'] = input('pen_print_start_time/s', null);
        $arrParam['pen_print_end_time'] = input('pen_print_end_time/s', null);
        $arrParam['is_itw'] = input('is_itw/d', null);
        $arrParam['itw_money'] = input('itw_money/s', null);
        $arrParam['itw_pay_start_time'] = input('itw_pay_start_time/s', null);
        $arrParam['itw_pay_end_time'] = input('itw_pay_end_time/s', null);
        $arrParam['itw_time'] = input('itw_time/s', null);
        $arrParam['itw_room'] = input('itw_room/s', null);
        $arrParam['itw_addr'] = input('itw_addr/s', null);
        $arrParam['itw_print_start_time'] = input('itw_print_start_time/s', null);
        $arrParam['itw_print_end_time'] = input('itw_print_end_time/s', null);
        $arrParam['itw_note'] = input('itw_note/s', null);
        $arrParam['show_sign_up_state'] = input('show_sign_up_state/d', 1);
        $arrParam['is_display'] = input('is_display/d', 1);
        $arrParam['is_open_signup'] = input('is_open_signup/d', 1);
        $arrParam['is_open_modify'] = input('is_open_modify/d', 1);
        $arrParam['is_open_report_card'] = input('is_open_report_card/d', 0);
        $arrParam['switch_email'] = input('switch_email/d', 0);
        $arrParam['switch_marriage'] = input('switch_marriage/d', 1);
        $arrParam['switch_birth'] = input('switch_birth/d', 0);
        $arrParam['switch_id_card'] = input('switch_id_card/d', 1);
        $arrParam['switch_photo'] = input('switch_photo/d', 1);
        $arrParam['switch_academic_certificate'] = input('switch_academic_certificate/d', 0);
        $arrParam['switch_educational_background'] = input('switch_educational_background/d', 1);
        $arrParam['switch_family_background'] = input('switch_family_background/d', 1);
        $arrParam['switch_height'] = input('switch_height/d', 0);
        $arrParam['is_open_sign_table'] = input('is_open_sign_table/d', 0);
        $arrParam['switch_weight'] = input('switch_weight/d', 0);
        $arrParam['switch_vision'] = input('switch_vision/d', 0);
        $arrParam['switch_job_info'] = input('switch_job_info/d', 1);
        $arrParam['drivers_license'] = input('drivers_license/d', 0);
        $arrParam['switch_fresh_graduates'] = input('switch_fresh_graduates/d', 0);
        $arrParam['switch_title'] = input('switch_title/d', 1);
        $arrParam['switch_diploma'] = input('switch_diploma/d', 0);
        $arrParam['custom_field'] = input('custom_field/a', []);
        //数据校验
        $incVerifier = $this->verifier($arrParam);
        if ($incVerifier !== true) {
            $this->ajaxReturn(500, $incVerifier);
        }
        return $arrParam;
    }

    public function add()
    {
        $arrParam = $this->getParam();
        $arrParam['push_user_id'] = $this->admininfo->id;
        $arrParam['push_user_name'] = $this->admininfo->username;
        $arrParam['addtime'] = date('Y-m-d H:i:s');
        if (
            false ===
            model('ExamProject')
                ->allowField(true)
                ->save($arrParam)
        ) {
            $this->ajaxReturn(500, model('ExamProject')->getError());
        }
        model('AdminLog')->record(
            '添加人事考试项目。人事考试项目ID【' .
            model('ExamProject')->exam_project_id .
            '】;人事考试项目标题【' .
            $arrParam['name'] .
            '】',
            $this->admininfo
        );
        $this->ajaxReturn(200, '添加成功');
    }

    public function edit()
    {
        $arrParam = $this->getParam();
        $intExamProjectId = input('exam_project_id/d', 0);
        $objInfo = model('ExamProject')->find($intExamProjectId);
        if (!$objInfo) {
            $this->ajaxReturn(500, '数据获取失败');
        }
        $arrParam['addtime'] = $objInfo->addtime;
        $arrParam['push_user_id'] = $this->admininfo->id;
        $arrParam['push_user_name'] = $this->admininfo->username;
        if (empty($arrParam['custom_field'])) {
            $arrParam['custom_field'] = '';
        }
        if (
            false ===
            model('ExamProject')
                ->allowField(true)
                ->save($arrParam, ['exam_project_id' => $intExamProjectId])
        ) {
            $this->ajaxReturn(500, model('ExamProject')->getError());
        }

        model('AdminLog')->record(
            '编辑人事考试人事考试公示公告。人事考试人事考试公示公告ID【' .
            $intExamProjectId .
            '】;人事考试人事考试公示公告标题【' .
            $arrParam['title'] .
            '】',
            $this->admininfo
        );
        $this->ajaxReturn(200, '编辑成功');
    }

    public function details()
    {
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
        $objInfo['guide'] = @htmlspecialchars_decode($objInfo['guide']);
        $objInfo['treaty'] = @htmlspecialchars_decode($objInfo['treaty']);
        $objInfo['itw_note'] = @htmlspecialchars_decode($objInfo['itw_note']);
        $objInfo['pen_note'] = @htmlspecialchars_decode($objInfo['pen_note']);

        $this->ajaxReturn(200, "获取成功", $objInfo);
    }

    // 这里需要先判断是否有报名,如果有就不允许删除,删除的同时需要删除掉岗位
    public function delete()
    {
        $intExamProjectId = input('exam_project_id/d', 0);
        $arrExamSign = model('ExamSign')->where(
            [
                'exam_project_id' => ['=', $intExamProjectId]
            ]
        )->select();
        if (!empty($arrExamSign)) {
            $this->ajaxReturn(500, "本项目已经有考试报名,不可删除");
        }

        model('ExamPost')->where(
            [
                'exam_project_id' => ['=', $intExamProjectId]
            ]
        )->delete();
        model('ExamProject')->where(
            [
                'exam_project_id' => ['=', $intExamProjectId]
            ]
        )->delete();
        $this->ajaxReturn(200, "操作成功");
    }

    public function signUpList()
    {
        $arrWhere = [];
        $intExamProjectId = input('exam_project_id/d', 0);
        if ($intExamProjectId < 1) {
            $this->ajaxReturn(500, "请选择考试项目");
        }
        $arrParam = input('');
        $strOrder = "ExamSign.status asc,";
        if (!empty($arrParam['status']) && in_array(intval($arrParam['status']), [1, 2, 3])) {
            if (intval($arrParam['status']) == 1)
                $arrWhere['status'] = ['=', intval($arrParam['status'])];
            else if (intval($arrParam['status']) == 2)
                $arrWhere['status'] = ['=', 0];
            else if (intval($arrParam['status']) == 3)
                $arrWhere['status'] = ['=', 2];
        }
        if (!empty($arrParam['is_pay_pen']) && in_array(intval($arrParam['is_pay_pen']), [1, 2])) {
            if (intval($arrParam['is_pay_pen']) == 1)
                $arrWhere['is_pay_pen'] = ['=', intval($arrParam['is_pay_pen'])];
            else if (intval($arrParam['is_pay_pen']) == 2)
                $arrWhere['is_pay_pen'] = ['=', 0];
        }
        if (!empty($arrParam['is_pay_itw']) && in_array(intval($arrParam['is_pay_itw']), [1, 2])) {
            if (intval($arrParam['is_pay_itw']) == 1)
                $arrWhere['is_pay_itw'] = ['=', intval($arrParam['is_pay_itw'])];
            else if (intval($arrParam['is_pay_itw']) == 2)
                $arrWhere['is_pay_itw'] = ['=', 0];
        }
        if (!empty($arrParam['exam_post_id'])) {
            $arrWhere['exam_post_id'] = ['=', $arrParam['exam_post_id']];
        }
        if (!empty($arrParam['name'])) {
            $arrWhere['realname'] = ['like', '%' . $arrParam['name'] . '%'];
        }
        if (!empty($arrParam['idcard'])) {
            $arrWhere['ExamSign.idcard'] = ['like', '%' . $arrParam['idcard'] . '%'];
        }
        if (!empty($arrParam['sign_time_sort_type']) && in_array(intval($arrParam['sign_time_sort_type']), [1, 2])) {
            switch (intval($arrParam['sign_time_sort_type'])) {
                case 1:
                    $strOrder .= "ExamSign.addtime asc,";
                    break;
                case 2:
                    $strOrder .= "ExamSign.addtime desc,";
                    break;
            }
        }
        if (!empty($arrParam['edit_time_sort_type']) && in_array(intval($arrParam['edit_time_sort_type']), [1, 2])) {
            switch (intval($arrParam['edit_time_sort_type'])) {
                case 1:
                    $strOrder .= "ExamSign.edittime asc,";
                    break;
                case 2:
                    $strOrder .= "ExamSign.edittime desc,";
                    break;
            }
        }
        if (!empty($arrParam['hjd'])) {
            $arrWhere['hjd'] = ['like', '%' . $arrParam['hjd'] . '%'];
        } //户籍地
        if (!empty($arrParam['residence'])) {
            $arrWhere['residence'] = ['like', '%' . $arrParam['residence'] . '%'];
        } //居住地
        if (!empty($arrParam['mobile'])) {
            $arrWhere['mobile'] = ['like', '%' . $arrParam['mobile'] . '%'];
        } //手机号
        $strOrder .= "ExamSign.exam_sign_id desc";
        $intCurrentPage = input('page/d', 1, 'intval');
        $intPagesize = input('pagesize/d', 10, 'intval');
        $arrWhere['exam_project_id'] = ['=', $intExamProjectId];
        $arrResult = [];
        $arrResult['post_list'] = model('ExamPost')
            ->where([
                'exam_project_id' => ['=', $intExamProjectId]
            ])
            ->order('exam_post_id desc')
            ->select();
        $arrResult['total'] = model('ExamSign')
            ->alias('ExamSign')
            ->join(config('database.prefix') . 'resume Resume', 'Resume.uid = ExamSign.uid')
            ->join(config('database.prefix') . 'resume_contact ResumeContact', 'ResumeContact.uid = ExamSign.uid')
            ->where($arrWhere)
            ->count();
        $arrResult['sign_up_list'] = model('ExamSign')
            ->alias('ExamSign')
            ->join(config('database.prefix') . 'resume Resume', 'Resume.uid = ExamSign.uid')
            ->join(config('database.prefix') . 'resume_contact ResumeContact', 'ResumeContact.uid = ExamSign.uid')
            ->where($arrWhere)
            ->order($strOrder)
            ->field("ExamSign.*,Resume.*,ExamSign.addtime as sign_time,ResumeContact.*,ExamSign.idcard as idcard")
            ->page($intCurrentPage . ',' . $intPagesize)
            ->select();
        $arrResult['current_page'] = $intCurrentPage;
        $arrResult['pagesize'] = $intPagesize;
        $arrResult['total_page'] = ceil($arrResult['total'] / $intPagesize);
        $this->ajaxReturn(200, '', $arrResult);
    }

    public function signUpDetails()
    {
        $arrWhere = [];
        $arrWhere['exam_sign_id'] = ['=', input('exam_sign_id/d')];
        if (input('exam_sign_id/d') < 1) {
            $this->ajaxReturn(500, "请选择需要查看的报名信息");
        }
        $arrInfo = [];
        $arrInfo['sign'] = model('ExamSign')
            ->where($arrWhere)
            ->find();
        if (!empty($arrInfo['sign']['custom_field'])) {
            $arrInfo['sign']['custom_field'] = unserialize($arrInfo['sign']['custom_field']);
        }
        $arrInfo['resume'] = model('Resume')->where(['uid' => ['=', $arrInfo['sign']['uid']]])->find();
        $arrInfo['major'] = model('CategoryMajor')->where(['id' => ['=', $arrInfo['resume']['major']]])->find();
        $arrInfo['post'] = model('ExamPost')->find($arrInfo['sign']['exam_post_id']);
        $arrInfo['exam_resume'] = model('ExamResume')->where(['uid' => ['=', $arrInfo['sign']['uid']]])->find();
        if (empty($arrInfo['exam_resume'])) {
            $arrInfo['exam_resume'] = [
                'exam_resume_id' => null,
                'uid' => $arrInfo['sign']['uid'],
                'idcard_img_just' => null,
                'idcard_img_back' => null,
                'driver_certificate_img' => null,
                'degree_img' => null,
                'academic_certificate_img' => null
            ];
        }
        $arrInfo['resume_contact'] = model('ResumeContact')->where(['uid' => ['=', $arrInfo['sign']['uid']]])->find();
        $arrInfo['resume_family'] = model('ResumeFamily')
            ->where(['uid' => ['eq', $arrInfo['sign']['uid']]])
            ->select();

        $arrInfo['resume_work'] = model('ResumeWork')
            ->field('rid,uid', true)
            ->where(['rid' => ['eq', $arrInfo['resume']['id']]])
            ->select();
        foreach ($arrInfo['resume_work'] as $key => $value) {
            $value = $value->toArray();
            $value['companyname'] = htmlspecialchars_decode($value['companyname'], ENT_QUOTES);
            $value['jobname'] = htmlspecialchars_decode($value['jobname'], ENT_QUOTES);
            $value['duty'] = htmlspecialchars_decode($value['duty'], ENT_QUOTES);
            if ($value['starttime'] != 0) {
                $value['starttime'] = date("Y-m-d H:i:s", $value['starttime']);
            }
            if ($value['endtime'] != 0) {
                $value['endtime'] = date("Y-m-d H:i:s", $value['endtime']);
            }
            $arrInfo['resume_work'][$key] = $value;
        }

        $arrInfo['resume_education'] = model('ResumeEducation')
            ->field('rid,uid', true)
            ->where(['rid' => ['eq', $arrInfo['resume']['id']]])
            ->select();
        foreach ($arrInfo['resume_education'] as $key => $value) {
            $value = $value->toArray();
            $value['education_text'] = isset(
                model('BaseModel')->map_education[$value['education']]
            )
                ? model('BaseModel')->map_education[$value['education']]
                : '';
            $value['school'] = htmlspecialchars_decode($value['school'], ENT_QUOTES);
            $value['major'] = htmlspecialchars_decode($value['major'], ENT_QUOTES);
            if ($value['starttime'] != 0) {
                $value['starttime'] = date('Y-m-d H:i:s', $value['starttime']);
            }
            if ($value['endtime'] != 0) {
                $value['endtime'] = date("Y-m-d H:i:s", $value['endtime']);
            }
            $arrInfo['resume_education'][$key] = $value;
        }
        $arrInfo['resume_certificate'] = model('ResumeCertificate')
            ->field('rid,uid', true)
            ->where(['rid' => ['eq', $arrInfo['resume']['id']]])
            ->select();
        foreach ($arrInfo['resume_certificate'] as $key => $value) {
            $value['name'] = htmlspecialchars_decode($value['name'], ENT_QUOTES);
            $arrInfo['resume_certificate'][$key] = $value;
            if ($value['obtaintime'] != 0) {
                $value['obtaintime'] = date('Y-m-d H:i:s', $value['obtaintime']);
            }
        }
        if (!empty($arrInfo['sign']['marriage']))
            $arrInfo['resume']['marriage'] = $arrInfo['sign']['marriage'];
        $arrInfo['project_info'] = model('ExamProject')->find($arrInfo['sign']['exam_project_id']);
        $this->ajaxReturn(200, "success", $arrInfo);
    }

    public function verify()
    {
        $arrExamSignIds = input('exam_sign_id/a', []);
        $intStatus = input('status/d', 0);
        $strNote = input('note/s');
        if (empty($arrExamSignIds) || !is_array($arrExamSignIds)) {
            $this->ajaxReturn(500, '请选择需要审核的报名');
        }
        if (!in_array($intStatus, [1, 2])) {
            $this->ajaxReturn(500, '请选择审核结果');
        }
        if ($intStatus == 2) {
            if (empty($strNote)) {
                $this->ajaxReturn(500, '请填写审核不通过原因');
            }
        }
        // 消息通知
        $arrExamSignList = model('ExamSign')->where(['exam_sign_id' => ['in', $arrExamSignIds]])->select();
        if (empty($arrExamSignList)) {
            $this->ajaxReturn(500, '请选择考生');
        }
        $objExamProject = model('ExamProject')->where(['exam_project_id' => ['=', $arrExamSignList[0]['exam_project_id']]])->find();
        if (empty($objExamProject)) {
            $this->ajaxReturn(500, '找不到考试项目');
        }
        $arrMessageList = [];
        foreach ($arrExamSignList as $item) {
            $strMessage = "您报考的" . $objExamProject['name'] . '考试审核';
            $strMessage .= $intStatus == 2 ? '未通过' : '已通过';
            $arrMessageList[] = [
                'uid' => $item['uid'],
                'type' => 2,
                'content' => $strMessage,
                'inner_link' => '',
                'inner_link_params' => 0,
                'spe_link_params' => '',
                'is_readed' => 0,
                'addtime' => time(),
            ];
        }

        //
        $intShow = model('ExamSign')->where(['exam_sign_id' => ['in', $arrExamSignIds]])->update(
            [
                'status' => $intStatus,
                'note' => $strNote ? $strNote : null,
                "check_user_id" => $this->admininfo->id,
                "check_user_name" => $this->admininfo->username,
            ]
        );
        if ($intShow && !empty($arrMessageList)) {
            model('Message')->insertAll($arrMessageList);
        }
        $this->ajaxReturn($intShow > 0 ? 200 : 500, $intShow > 0 ? "成功" : '失败');
    }

    public function ExportSignList()
    {
        $arrWhere = [];
        $intExamProjectId = input('exam_project_id/d', 0);
        if ($intExamProjectId < 1) {
            $this->ajaxReturn(500, "请选择考试项目");
        }
        $arrParam = input('');
        $strOrder = "ExamSign.status asc,";
        if (!empty($arrParam['status']) && in_array(intval($arrParam['status']), [1, 2, 3])) {
            if (intval($arrParam['status']) == 1)
                $arrWhere['status'] = ['=', intval($arrParam['status'])];
            else if (intval($arrParam['status']) == 2)
                $arrWhere['status'] = ['=', 0];
            else if (intval($arrParam['status']) == 3)
                $arrWhere['status'] = ['=', 2];
        } //审核状态
        if (!empty($arrParam['is_pay_pen']) && in_array(intval($arrParam['is_pay_pen']), [1, 2])) {
            if (intval($arrParam['is_pay_pen']) == 1)
                $arrWhere['is_pay_pen'] = ['=', intval($arrParam['is_pay_pen'])];
            else if (intval($arrParam['is_pay_pen']) == 2)
                $arrWhere['is_pay_pen'] = ['=', 0];
        } //笔试缴费状态
        if (!empty($arrParam['is_pay_itw']) && in_array(intval($arrParam['is_pay_itw']), [1, 2])) {
            if (intval($arrParam['is_pay_itw']) == 1)
                $arrWhere['is_pay_itw'] = ['=', intval($arrParam['is_pay_itw'])];
            else if (intval($arrParam['is_pay_itw']) == 2)
                $arrWhere['is_pay_itw'] = ['=', 0];
        } //面试缴费状态
        if (!empty($arrParam['exam_post_id'])) {
            $arrWhere['exam_post_id'] = ['=', $arrParam['exam_post_id']];
        } //岗位ID
        if (!empty($arrParam['name'])) {
            $arrWhere['realname'] = ['like', '%' . $arrParam['name'] . '%'];
        } //姓名模糊查询
        if (!empty($arrParam['idcard'])) {
            $arrWhere['ExamSign.idcard'] = ['like', '%' . $arrParam['idcard'] . '%'];
        } //身份证查询
        if (!empty($arrParam['sign_time_sort_type']) && in_array(intval($arrParam['sign_time_sort_type']), [1, 2])) {
            switch (intval($arrParam['sign_time_sort_type'])) {
                case 1:
                    $strOrder .= "ExamSign.addtime asc,";
                    break;
                case 2:
                    $strOrder .= "ExamSign.addtime desc,";
                    break;
            }
        } //报名时间排序
        if (!empty($arrParam['edit_time_sort_type']) && in_array(intval($arrParam['edit_time_sort_type']), [1, 2])) {
            switch (intval($arrParam['edit_time_sort_type'])) {
                case 1:
                    $strOrder .= "ExamSign.edittime asc,";
                    break;
                case 2:
                    $strOrder .= "ExamSign.edittime desc,";
                    break;
            }
        } //修改时间排序
        if (!empty($arrParam['hjd'])) {
            $arrWhere['hjd'] = ['like', '%' . $arrParam['hjd'] . '%'];
        } //户籍地
        if (!empty($arrParam['residence'])) {
            $arrWhere['residence'] = ['like', '%' . $arrParam['residence'] . '%'];
        } //居住地
        if (!empty($arrParam['mobile'])) {
            $arrWhere['mobile'] = ['like', '%' . $arrParam['mobile'] . '%'];
        } //手机号
        $strOrder .= "ExamSign.exam_sign_id desc";
        $arrWhere['ExamSign.exam_project_id'] = ['=', $intExamProjectId];
        $arrList = [];
        $arrList = model('ExamSign')
            ->alias('ExamSign')
            ->join(config('database.prefix') . 'resume Resume', 'Resume.uid = ExamSign.uid')
            ->join(config('database.prefix') . 'exam_post ExamPost', 'ExamPost.exam_post_id = ExamSign.exam_post_id')
            ->join(config('database.prefix') . 'resume_contact ResumeContact', 'ResumeContact.uid = ExamSign.uid')
            ->join(config('database.prefix') . 'exam_project exam_project', 'exam_project.exam_project_id = ExamPost.exam_project_id')
            ->where($arrWhere)
            ->order($strOrder)
            ->field("ExamSign.note as note,ExamSign.*,Resume.*,ExamSign.addtime as sign_time,ExamPost.name as post_name,ExamPost.*,ExamPost.code as post_code,ResumeContact.*,exam_project.switch_fresh_graduates,exam_project.switch_marriage,ExamSign.major as major_new")
            ->select();
        foreach ($arrList as $keys => $item) {
            $arrList[$keys] = $item->toArray();
            // 教育情况
            $str = "";
            $education = model('ResumeEducation')->where(['uid' => $item['uid']])->select();
            foreach ($education as $key => $value) {
                $value = $value->toArray();
                $value['education_text'] = isset(
                    model('BaseModel')->map_education[$value['education']]
                )
                    ? model('BaseModel')->map_education[$value['education']]
                    : '';
                $value['school'] = htmlspecialchars_decode($value['school'], ENT_QUOTES);
                $value['major'] = htmlspecialchars_decode($value['major'], ENT_QUOTES);
                if ($value['starttime'] != 0) {
                    $value['starttime'] = date('Y年m月d日', $value['starttime']);
                }
                if ($value['endtime'] != 0) {
                    $value['endtime'] = date("Y年m月d日", $value['endtime']);
                }
                //////////////////////////////////////////////////////////////////////////////
                $str .= $key + 1;
                $str .= "、";
                $str .= $value['starttime'] . ' - ';
                $str .= $value['todate'] == 1 ? '至今' : $value['endtime'];
                $str .= '   ';
                $str .= $value['school'];
                $str .= '   ';
                $str .= $value['major'];
                $str .= '   ';
                $str .= $value['education_text'];
                $str .= '   ';
                $str .= !empty($value['degree']) ? $value['degree'] : '-';
                $str .= '   ';
                $str .= !empty($value['shape']) ? $value['shape'] : '-';
                $str .= "\r\n";
            }
            $arrList[$keys]['education_txt'] = $str;
            // 工作情况
            $str = "";
            $resume_work = model('ResumeWork')
                ->field('rid,uid', true)
                ->where(['uid' => $item['uid']])
                ->select();
            foreach ($resume_work as $key => $value) {
                $value = $value->toArray();
                $value['companyname'] = htmlspecialchars_decode($value['companyname'], ENT_QUOTES);
                $value['jobname'] = htmlspecialchars_decode($value['jobname'], ENT_QUOTES);
                $value['duty'] = htmlspecialchars_decode($value['duty'], ENT_QUOTES);
                if ($value['starttime'] != 0) {
                    $value['starttime'] = date("Y年m月d日", $value['starttime']);
                }
                if ($value['endtime'] != 0) {
                    $value['endtime'] = date("Y-m-d H:i:s", $value['endtime']);
                }
                /////////////////////////////////////////////////////////////////////////////////
                $str .= $key + 1;
                $str .= "、";
                $str .= $value['starttime'] . ' - ';
                $str .= $value['todate'] == 1 ? '至今' : $value['endtime'];
                $str .= '   ';
                $str .= $value['companyname'];
                $str .= '   ';
                $str .= $value['jobname'];
                $str .= '   ';
                $str .= $value['tel'] ? $value['tel'] : '-';
                $str .= '   ';
                $str .= $value['duty'];
                $str .= "\r\n";
            }
            $arrList[$keys]['work_txt'] = $str;
            // 家庭情况
            $str = "";
            $resume_family = model('ResumeFamily')
                ->where(['uid' => $item['uid']])
                ->select();
            foreach ($resume_family as $key => $value) {
                $str .= $key + 1;
                $str .= "、";
                $str .= $value['name'];
                $str .= '   ';
                $str .= $value['relation'];
                $str .= '   ';
                $str .= $value['mobile'];
                $str .= '   ';
                $str .= $value['duties'] ? $value['duties'] : '-';
                $str .= "\r\n";
            }
            $arrList[$keys]['family_txt'] = $str;
        }
        $arrExcelData = [];
        $arrExcelData['header'] = [
            '编号',
            '姓名',
            '身份证号',
            '性别',
            '手机号码',
            '报考岗位',
            '岗位代码',
            '户籍地址',
            '居住地址',
            '学历',
            '毕业时间',
            '是否退伍军人',
            '政治面貌',
            '所学专业',
            '审核意见',
        ];
        $arrExcelData['ColumnWidth'] = [
            10,
            20,
            20,
            20,
            20,
            20,
            28,
            25,
            25,
            25,
            25,
            25,
            25,
            25,
            25,
        ];
        foreach ($arrList as $item) {
            if ($item['switch_fresh_graduates'] == 1) {
                $arrExcelData['header'][] = "是否应届";
                $arrExcelData['ColumnWidth'][] = 25;
            }
            if ($item['switch_marriage'] == 1) {
                $arrExcelData['header'][] = "婚姻状态";
                $arrExcelData['ColumnWidth'][] = 25;
            }
            break;
        }

        // 2023-12-14 新增
        $arrExcelData['header'][] = "教育情况";
        $arrExcelData['ColumnWidth'][] = 100;
        $arrExcelData['header'][] = "工作情况";
        $arrExcelData['ColumnWidth'][] = 100;
        $arrExcelData['header'][] = "家庭情况";
        $arrExcelData['ColumnWidth'][] = 100;

        $arrExcelData['list'] = [];
        foreach ($arrList as $item) {
            switch ($item['education']) {
                case 1:
                    $strEducation = '初中';
                    break;
                case 2:
                    $strEducation = '高中';
                    break;
                case 3:
                    $strEducation = '中技';
                    break;
                case 4:
                    $strEducation = '中专';
                    break;
                case 5:
                    $strEducation = '大专';
                    break;
                case 6:
                    $strEducation = '本科';
                    break;
                case 7:
                    $strEducation = '硕士';
                    break;
                case 8:
                    $strEducation = '博士';
                    break;
                case 9:
                    $strEducation = '博后';
                    break;
                default:
                    $strEducation = '-';
                    break;
            }
            $strMarriage = $item['marriage'] == 1 ? '已婚' : '未婚';
            if ($item['marriage'] == 0) $strMarriage = '保密';
//            $info = model('CategoryMajor')->find($item['major']);
//            if (!$info) {
//                $this->ajaxReturn(500, '专业数据获取失败');
//            }
            $arrDataItem = [
                $item['exam_sign_id'],
                $item['realname'],
                $item['idcard'],
                $item['sex'] == 1 ? '男' : '女',
                $item['mobile'],
                $item['name'],
                $item['post_code'],
                $item['hjd'],
                $item['residence'],
                $strEducation,
                $item['custom_field_2'],
                $item['custom_field_3'] == 1 ? '是' : '否',
                $item['custom_field_1'],
//                $info['name'], 旧的所学专业
                $item['major_new'],
                $item['note'],
            ];
            if ($item['switch_fresh_graduates'] == 1) {
                $arrDataItem[] = $item['fresh_graduates'] == 1 ? '是' : '否';
            }
            if ($item['switch_marriage'] == 1) {
                $arrDataItem[] = $strMarriage;
            }
            $arrDataItem[] = $item['education_txt'];
            $arrDataItem[] = $item['work_txt'];
            $arrDataItem[] = $item['family_txt'];
            $arrExcelData['list'][] = $arrDataItem;
        }
        $strExcelPath = '';
        $objInfo = model('ExamProject')->find($intExamProjectId);
        if (!$objInfo) {
            $this->ajaxReturn(500, '数据获取失败');
        }
        try {
            $strExcelPath = foundExcel($objInfo['name'] . "准考证导入模板 - 禁止删除列及调整列顺序 - 不推荐使用公式", $arrExcelData['header'], $arrExcelData['list'], 'ExportSignList' . $intExamProjectId, "Excel/", $arrExcelData['ColumnWidth'], 30);
        } catch (\Exception $e) {
            $this->ajaxReturn(500, "生成Excel失败" . $e->getMessage());
        }
        $this->ajaxReturn(200, "成功", ['down_url' => $strExcelPath]);
    }

    public function ExportForInImportAdmissionTicket()
    {
        $intExamProjectId = input('exam_project_id/d', 0);
        if ($intExamProjectId < 1) {
            $this->ajaxReturn(500, "请选择考试项目");
        }
        $intExamProjectId = input('exam_project_id/d', 0);
        $objInfo = model('ExamProject')->find($intExamProjectId);
        if (!$objInfo) {
            $this->ajaxReturn(500, '数据获取失败');
        }
        $arrWhere = [];
        $arrWhere['ExamSign.exam_project_id'] = $intExamProjectId;
        $arrWhere['ExamSign.is_pay_pen'] = 1;
        $arrWhere['ExamSign.status'] = 1;
        $arrList = model('ExamSign')
            ->alias('ExamSign')
            ->join(config('database.prefix') . 'exam_post ExamPost', 'ExamPost.exam_post_id = ExamSign.exam_post_id')
            ->order('ExamPost.exam_post_id', 'desc')
            ->where($arrWhere)
            ->select();
        if (!file_exists("Excel/")) {
            mkdir("Excel/", 0777);
        }
        if (file_exists('Excel/ExportForInImportAdmissionTicket' . $intExamProjectId . '.xlsx')) {
            @unlink('Excel/ExportForInImportAdmissionTicket' . $intExamProjectId . '.xlsx');
        }
        $arrExcelData = [];
        $arrExcelData['header'] = [
            '编号',
            '姓名',
            '身份证号',
            '报考岗位',
            '岗位代码',
            '准考证考场号',
            '准考证号',
            '笔试考场地址',
            '面试考场地址',
        ];
        $arrExcelData['ColumnWidth'] = [
            10,
            20,
            20,
            20,
            20,
            28,
            25,
            25,
            25,
        ];
        foreach ($arrList as $item) {
            $arrExcelData['list'][] = [
                $item['exam_sign_id'],
                $item['realname'],
                $item['idcard'],
                $item['name'],
                $item['code'],
                $item['room'],
                $item['room_code'],
                $item['sign_pen_addr'],
                $item['sign_itw_addr'],
            ];
        }
        $strExcelPath = '';
        try {
            $strExcelPath = foundExcel($objInfo['name'] . "准考证导入模板 - 禁止删除列及调整列顺序 - 不推荐使用公式 - 考试地址根据需要填写,不填写默认使用项目配置内容", $arrExcelData['header'], $arrExcelData['list'], 'ExportForInImportAdmissionTicket' . $intExamProjectId, "Excel/", $arrExcelData['ColumnWidth'], 30);
        } catch (\Exception $e) {
            $this->ajaxReturn(500, "生成Excel失败" . $e->getMessage());
        }
        $this->ajaxReturn(200, "成功", ['down_url' => $strExcelPath]);
    }

    public function ExportForInImportAchievement()
    {
        $intExamProjectId = input('exam_project_id/d', 0);
        if ($intExamProjectId < 1) {
            $this->ajaxReturn(500, "请选择考试项目");
        }
        $intExamProjectId = input('exam_project_id/d', 0);
        $objInfo = model('ExamProject')->find($intExamProjectId);
        if (!$objInfo) {
            $this->ajaxReturn(500, '数据获取失败');
        }
        $arrWhere = [];
        $arrWhere['ExamSign.exam_project_id'] = $intExamProjectId;
        if ($objInfo['is_pen']) {
            $arrWhere['ExamSign.is_pay_pen'] = 1;
        }
        $arrWhere['ExamSign.status'] = 1;
        $arrList = model('ExamSign')
            ->alias('ExamSign')
            ->join(config('database.prefix') . 'exam_post ExamPost', 'ExamPost.exam_post_id = ExamSign.exam_post_id')
            ->order('ExamPost.exam_post_id', 'desc')
            ->field('ExamSign.*,ExamPost.*,ExamSign.is_itw as is_itw')
            ->where($arrWhere)
            ->select();
        if (!file_exists("Excel/")) {
            mkdir("Excel/", 0777);
        }
        if (file_exists('Excel/ExportForInImportAchievement' . $intExamProjectId . '.xlsx')) {
            @unlink('Excel/ExportForInImportAchievement' . $intExamProjectId . '.xlsx');
        }
        $arrExcelData = [];
        $arrExcelData['header'] = [
            '编号',
            '姓名',
            '身份证号',
            '报考岗位',
            '岗位代码',
            '准考证考场号',
            '准考证号',
            '笔试成绩',
            '进入面试(填写是或否)',
            '面试成绩',
        ];
        $arrExcelData['ColumnWidth'] = [
            10,
            20,
            20,
            20,
            20,
            28,
            25,
            25,
            30,
            25,
        ];
        foreach ($arrList as $item) {
            $arrExcelData['list'][] = [
                $item['exam_sign_id'],
                $item['realname'],
                $item['idcard'],
                $item['name'],
                $item['code'],
                $item['room'],
                $item['room_code'],
                $item['grade_pen'],
                $item['is_itw'] == 1 ? '是' : '否',
                $item['grade_itw'],
            ];
        }
        $strExcelPath = '';
        try {
            $strExcelPath = foundExcel($objInfo['name'] . "成绩导入模板 - 禁止删除列及调整列顺序 - 不推荐使用公式", $arrExcelData['header'], $arrExcelData['list'], 'ExportForInImportAchievement' . $intExamProjectId, "Excel/", $arrExcelData['ColumnWidth'], 30);
        } catch (\Exception $e) {
            $this->ajaxReturn(500, "生成Excel失败" . $e->getMessage());
        }
        $this->ajaxReturn(200, "成功", ['down_url' => $strExcelPath]);
    }

    public function ImportAdmissionTicket()
    {
        $intExamProjectId = input('exam_project_id/d', 0);
        if ($intExamProjectId < 1) {
            $this->ajaxReturn(500, "请选择考试项目");
        }
        $file = input('file.file');
        $info = $file->validate(['ext' => 'xlsx,xls'])->move('Excel/');
        if (!$info) {
            $this->ajaxReturn(500, "文件上传失败");
        }
        $arrExcelData = [];
        try {
            $arrExcelData = readExcel($info->getPathName(), true);
            @unlink($info->getPathName());
            if (is_dir_empty($info->getPathName() . "../")) ;
            {
                $strDirName = $info->getPathName();
                $strDirName = str_replace("\\", '/', $strDirName);
                $arrPathTmp = explode('/', $strDirName);
                $strDirName = '';
                unset($arrPathTmp[count($arrPathTmp) - 1]);
                foreach ($arrPathTmp as $k => $item) {
                    $strDirName .= $item;
                    if ($k < count($arrPathTmp) - 1) {
                        $strDirName .= '/';
                    }
                }
                @rmdir($strDirName);
            }
        } catch (\Throwable $e) {
            $this->ajaxReturn(500, "导入的文件异常" . $e->getMessage());
        }
        unset($arrExcelData[0]);
        unset($arrExcelData[1]);
        $arrExcelData = array_values($arrExcelData);
        //检查表格行
        $arrSignUpIds = [];
        foreach ($arrExcelData as $item) {
            if (!empty($item[0])) {
                try {
                    if (intval($item[0]) != $item[0] * 1) {
                        $this->ajaxReturn(500, "请勿修改报名编号,且不要增加行");
                    } else {
                        $arrSignUpIds[] = intval($item[0]);
                    }
                } catch (Exception $e) {
                    $this->ajaxReturn(500, "请勿修改报名编号,且不要增加行");
                }
            }
        }
        $arrSignUpList = model('ExamSign')->where(['exam_sign_id' => ['in', $arrSignUpIds]])->select();
        if (count($arrSignUpList) != count($arrSignUpIds)) {
            $this->ajaxReturn(500, "请不要调整表格,且不要新增行");
        }
        $isErr = false;
        $strErrMsr = '';
        Db::startTrans();
        foreach ($arrExcelData as $k => $item) {
            if (!empty($item[5]) && !empty($item[6])) {
                if (intval($item[0]) == $item[0] * 1) {
                    $intShow = model('ExamSign')->where([
                        'exam_sign_id' => ['=', $item[0]]
                    ])->update(
                        [
                            'check_user_id' => $this->admininfo['id'],
                            'check_user_name' => $this->admininfo['username'],
                            'room' => $item[5],
                            'room_code' => $item[6],
                            'sign_pen_addr' => !empty(trim($item[7])) ? trim($item[7]) : null,
                            'sign_itw_addr' => !empty(trim($item[8])) ? trim($item[8]) : null,

                        ]
                    );
                }
            } else {
                if (empty($item[0]) && empty($item[1])) {
                    continue;
                }
                $isErr = true;
                $strErrMsr = '表格第' . $k + 3 . '没有填写准考证考场或准考证号';
            }
        }
        if ($isErr) {
            Db::rollback();
            $this->ajaxReturn(500, $strErrMsr);
        }
        Db::commit();
        $this->ajaxReturn(200, "导入成功");
    }

    public function ImportAchievement()
    {
        $intExamProjectId = input('exam_project_id/d', 0);
        if ($intExamProjectId < 1) {
            $this->ajaxReturn(500, "请选择考试项目");
        }
        $file = input('file.file');
        $info = $file->validate(['ext' => 'xlsx,xls'])->move('Excel/');
        if (!$info) {
            $this->ajaxReturn(500, "文件上传失败");
        }
        $arrExcelData = [];
        try {
            $arrExcelData = readExcel($info->getPathName(), true);
            @unlink($info->getPathName());
            if (is_dir_empty($info->getPathName() . "../")) ;
            {
                $strDirName = $info->getPathName();
                $strDirName = str_replace("\\", '/', $strDirName);
                $arrPathTmp = explode('/', $strDirName);
                $strDirName = '';
                unset($arrPathTmp[count($arrPathTmp) - 1]);
                foreach ($arrPathTmp as $k => $item) {
                    $strDirName .= $item;
                    if ($k < count($arrPathTmp) - 1) {
                        $strDirName .= '/';
                    }
                }
                @rmdir($strDirName);
            }
        } catch (\Throwable $e) {
            $this->ajaxReturn(500, "导入的文件异常" . $e->getMessage());
        }
        unset($arrExcelData[0]);
        unset($arrExcelData[1]);
        $arrExcelData = array_values($arrExcelData);
        //检查表格行
        $arrSignUpIds = [];
        foreach ($arrExcelData as $item) {
            if (!empty($item[0])) {
                try {
                    if (intval($item[0]) != $item[0] * 1) {
                        $this->ajaxReturn(500, "请勿修改报名编号,且不要增加行");
                    } else {
                        $arrSignUpIds[] = intval($item[0]);
                    }
                } catch (Exception $e) {
                    $this->ajaxReturn(500, "请勿修改报名编号,且不要增加行");
                }
            }
        }
        $arrSignUpList = model('ExamSign')->where(['exam_sign_id' => ['in', $arrSignUpIds]])->select();
        if (count($arrSignUpList) != count($arrSignUpIds)) {
            $this->ajaxReturn(500, "请不要调整表格,且不要新增行");
        }
        $isErr = false;
        $strErrMsr = '';
        Db::startTrans();
        foreach ($arrExcelData as $k => $item) {
            if (intval($item[0]) == $item[0] * 1) {
                $intShow = model('ExamSign')->where([
                    'exam_sign_id' => ['=', $item[0]]
                ])->update(
                    [
                        'check_user_id' => $this->admininfo['id'],
                        'check_user_name' => $this->admininfo['username'],
                        'grade_pen' => !empty($item[7]) ? $item[7] : null,
                        'is_itw' => $item[8] == "是" ? 1 : 0,
                        'grade_itw' => !empty($item[9]) ? $item[9] : null,
                    ]
                );
            }
        }
        if ($isErr) {
            Db::rollback();
            $this->ajaxReturn(500, $strErrMsr);
        }
        Db::commit();
        $this->ajaxReturn(200, "导入成功");
    }

    public function print_stub_form()
    {
        $intExamProjectId = input('exam_project_id/d', 0);
        if ($intExamProjectId < 1) {
            $this->ajaxReturn(500, "请选择考试项目");
        }
        $arrSignUpList = model('ExamSign')
            ->alias('ExamSign')
            ->where(['ExamSign.exam_project_id' => ['=', $intExamProjectId], 'ExamSign.is_pay_pen' => ['=', 1]])
            ->join(config('database.prefix') . 'resume Resume', 'Resume.uid = .ExamSign.uid')
            ->join(config('database.prefix') . 'exam_post Post', 'Post.exam_post_id = ExamSign.exam_post_id')
            ->order('ExamSign.room_code asc,ExamSign.room asc')
            ->field('ExamSign.*,Resume.*,Post.name as post_name,Post.code as post_code')
            ->select();
        $arrRetuan = [];
        foreach ($arrSignUpList as $item) {

            $arrRetuan[md5($item['room'])][] = [
                'realname' => $item['realname'],
                'idcard' => $item['idcard'],
                'room' => $item['room'],
                'room_code' => $item['room_code'],
                'photo' => $item['photo'],
                'post_name' => mb_strlen($item['post_name']) > 13 ? mb_substr($item['post_name'],0,13) : $item['post_name'],
            ];
        }
        $this->ajaxReturn(200, "成功", $arrRetuan);
    }
}
