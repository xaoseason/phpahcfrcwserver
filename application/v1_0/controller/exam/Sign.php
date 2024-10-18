<?php

namespace app\v1_0\controller\exam;


use Think\Cache;
use Think\Db;

class Sign extends \app\v1_0\controller\common\Base
{
    public function _initialize()
    {
        parent::_initialize();
        $this->checkLogin(2);
    }

    private function getParam()
    {
        $arrParam = [];
        $arrParam['exam_post_id'] = input('exam_post_id/d', 0); //报考岗位
        $arrParam['realname'] = input('realname/s', ''); //真实姓名
        $arrParam['mobile'] = input('mobile/s', ''); //手机号
        $arrParam['email'] = input('email/s', ''); //邮箱
        $arrParam['sos_name'] = input('sos_name/s', ''); //紧急联系人
        $arrParam['sos_mobile'] = input('sos_mobile/s', ''); //紧急联系人电话
        $arrParam['sex'] = input('sex/s', ''); //性别
        $arrParam['height'] = input('height/s', ''); //身高
        $arrParam['weight'] = input('weight/s', ''); //体重
        $arrParam['idcard'] = input('idcard/s', ''); //身份证号
        $arrParam['residence'] = input('residence/s', ''); //家庭地址
        $arrParam['marriage'] = input('marriage/s', ''); //婚姻 0 = 保密 1 = 未婚 2=已婚
        $arrParam['nation'] = input('nation/s', ''); //民族
        $arrParam['major1'] = input('major1/s', ''); //所学专业 - 1
        $arrParam['major2'] = input('major2/s', ''); //所学专业 - 2
        $arrParam['vision'] = input('vision/s', ''); //视力
        $arrParam['education'] = input('education/s', ''); //最高学历
        $arrParam['school'] = input('school/s', ''); //毕业院校
        $arrParam['custom_field_1'] = input('custom_field_1/s', ''); //政治面貌
        $arrParam['custom_field_2'] = input('custom_field_2/s', ''); //毕业时间
        $arrParam['custom_field_3'] = input('custom_field_3/s', ''); //退伍军人education_text
        $arrParam['birth'] = input('birth/s', ''); //生育
        $arrParam['hjd'] = input('hjd/s', ''); //户口簿详细地址
        $arrParam['photo'] = input('photo/s', ''); //一寸照 -----------------------------------
        $arrParam['title'] = input('title/s', ''); //职称
        $arrParam['custom_field'] = input('custom_field/a', ''); //自定义字段
        $arrParam['idcard_img_just'] = input('idcard_img_just/s', ''); //身份证正面
        $arrParam['idcard_img_back'] = input('idcard_img_back/s', ''); //身份证反面
        $arrParam['driver_certificate_img'] = input('driver_certificate_img/s', ''); //驾驶证
        $arrParam['degree_img'] = input('degree_img/s', ''); //学士学位证书
        $arrParam['academic_certificate_img'] = input('academic_certificate_img/s', ''); //学历证书
        $arrParam['fresh_graduates'] = input('fresh_graduates/d', 0); //是否应届毕业生
        $arrParam['fresh_graduates_img'] = input('fresh_graduates_img/s', null); //是否应届毕业生

        $arrParam['health'] = input('health/s', null); //健康状况
        $arrParam['address'] = input('address/s', null); //现 住 址

        $arrParam['title'] = input('title/s', ''); //职称
        $arrParam['nation'] = input('nation/s', null); //职称
        $arrParam['schoolsystem'] = input('schoolsystem/d', null); //学制

        $arrParam['major'] = input('major/s', ''); //所学专业


        // 校验
        if ($arrParam['exam_post_id'] <= 0) {
            $this->ajaxReturn(500, "请选择报考岗位");
        }
        $objExamPostInfo = model('ExamPost')->find($arrParam['exam_post_id']);
        if (empty($objExamPostInfo)) {
            $this->ajaxReturn(500, "找不到岗位信息");
        }
        // 岗位自定义字段校验
        if (!empty($objExamPostInfo['custom_field'])) {
            $objExamPostInfo['custom_field'] = unserialize($objExamPostInfo['custom_field']);
            if ($objExamPostInfo['custom_field'] !== false) {
                foreach ($objExamPostInfo['custom_field'] as $item) {
                    if ($item['required'] == 1) {
                        if (!is_array($arrParam['custom_field']) || empty($arrParam['custom_field'])) {
                            $this->ajaxReturn(500, "请完善" . $item['name']);
                        } else {
                            $isIn = false;
                            foreach ($arrParam['custom_field'] as $items) {
                                if ($items['key'] == $item['key']) {
                                    $isIn = true;
                                    if (empty($items['value'])) {
                                        $this->ajaxReturn(500, "请完善" . $item['name']);
                                    }
                                }
                            }
                            if (!$isIn) {
                                $this->ajaxReturn(500, "请完善" . $item['name']);
                            }
                        }
                    }
                }
            }
        }
        // 检验必要字段
        if (empty($arrParam['realname'])) {
            $this->ajaxReturn(500, "请填写真实姓名");
        }
        if (empty($arrParam['mobile'])) {
            $this->ajaxReturn(500, "请填写手机号");
        }
        if (empty($arrParam['sos_name'])) {
            $this->ajaxReturn(500, "请填写紧急联系人");
        }
        if (empty($arrParam['sos_mobile'])) {
            $this->ajaxReturn(500, "请填写紧急联系人电话");
        }
        if (empty($arrParam['sex'])) {
            $this->ajaxReturn(500, "请选择性别");
        }
        if (empty($arrParam['idcard'])) {
            $this->ajaxReturn(500, "请填写身份证号");
        }
        if (empty($arrParam['residence'])) {
            $this->ajaxReturn(500, "请填写家庭地址");
        }
        if (empty($arrParam['nation'])) {
            $this->ajaxReturn(500, "请填写民族");
        }
//        if (empty($arrParam['major1']) || empty($arrParam['major2'])) {
//            $this->ajaxReturn(500, "请选择所学专业");
//        }
        if (empty($arrParam['major'])){
            $this->ajaxReturn(500, "请填写所学专业");
        }
        if (empty($arrParam['education'])) {
            $this->ajaxReturn(500, "请选择所学专业");
        }
        if (empty($arrParam['school'])) {
            $this->ajaxReturn(500, "请填写毕业院校");
        }
        if (empty($arrParam['custom_field_1'])) {
            $this->ajaxReturn(500, "请填写政治面貌");
        }
        if (empty($arrParam['custom_field_2'])) {
            $this->ajaxReturn(500, "请填写毕业时间");
        }
        if (empty($arrParam['custom_field_3'])) {
            $this->ajaxReturn(500, "请选择是否退伍军人");
        }
        if (empty($arrParam['hjd'])) {
            $this->ajaxReturn(500, "户口簿详细地址");
        }
        if (empty($arrParam['photo'])) {
            $this->ajaxReturn(500, "请上传一寸照");
        }
        // 项目配置检查及校验
        $objExamProjectInfo = model('ExamProject')->find($objExamPostInfo->exam_project_id);
        if (!$objExamProjectInfo) {
            $this->ajaxReturn(500, '招考信息获取失败');
        }
        if ($objExamProjectInfo->is_display != 1) {
            $this->ajaxReturn(500, '招考已关闭');
        }
        if ($objExamProjectInfo->switch_email == 1 && empty($arrParam['email'])) {
            $this->ajaxReturn(500, '请填写邮箱');
        }
        if ($objExamProjectInfo->switch_marriage == 1 && $arrParam['marriage'] == "") {
            $this->ajaxReturn(500, '请选择婚姻状况');
        }
        if ($objExamProjectInfo->switch_birth == 1 && $arrParam['birth'] == "") {
            $this->ajaxReturn(500, '请选择生育状况');
        }
        if ($objExamProjectInfo->switch_id_card == 1) {
            if (empty($arrParam['idcard_img_just']) || empty($arrParam['idcard_img_back'])) {
                $this->ajaxReturn(500, '请上传身份证正反面');
            }
        }
        if ($objExamProjectInfo->switch_academic_certificate == 1 && empty($arrParam['academic_certificate_img'])) {
            $this->ajaxReturn(500, '请上传学历证书');
        }
        if ($objExamProjectInfo->switch_height == 1 && empty($arrParam['height'])) {
            $this->ajaxReturn(500, '请填写身高');
        }
        if ($objExamProjectInfo->switch_weight == 1 && empty($arrParam['weight'])) {
            $this->ajaxReturn(500, '请填写体重');
        }
        if ($objExamProjectInfo->switch_vision == 1 && empty($arrParam['vision'])) {
            $this->ajaxReturn(500, '请填写视力');
        }
        if ($objExamProjectInfo->drivers_license == 1 && empty($arrParam['driver_certificate_img'])) {
            $this->ajaxReturn(500, '请上传驾驶证');
        }
        if ($objExamProjectInfo->switch_fresh_graduates == 1 && empty($arrParam['fresh_graduates'])) {
            $this->ajaxReturn(500, '请选择是否应届毕业生');
        }
        if ($objExamProjectInfo->switch_title == 1 && empty($arrParam['title'])) {
            $this->ajaxReturn(500, '请填写职称');
        }
        if ($objExamProjectInfo->switch_diploma == 1 && empty($arrParam['degree_img'])) {
            $this->ajaxReturn(500, '请上传学士学位证书');
        }
        //自定义字段校验
        if (!empty($objExamProjectInfo->custom_field)) {
            $arrCustomField = unserialize($objExamProjectInfo->custom_field);
            if ($arrCustomField != false) {
                foreach ($arrCustomField as $item) {

                    if ($item['required'] == 1) {
                        if (!is_array($arrParam['custom_field']) || empty($arrParam['custom_field'])) {
                            $this->ajaxReturn(500, "请完善" . $item['name']);
                        } else {
                            $isIn = false;
                            foreach ($arrParam['custom_field'] as $items) {
                                if ($items['name'] == $item['name']) {
                                    $isIn = true;
                                    if (empty($items['value'])) {
                                        $this->ajaxReturn(500, "请完善" . $item['name']);
                                    }
                                }
                            }
                            if (!$isIn) {
                                $this->ajaxReturn(500, "请完善" . $item['name']);
                            }
                        }
                    }
                }
            }
        }
        $arrParam['exam_project_id'] = $objExamPostInfo->exam_project_id;
        return $arrParam;
    }

    public function sign()
    {
        if (!empty(Cache::get(md5($this->userinfo->uid)))) {
            $this->ajaxReturn(500, '请求频繁', []);
            exit;
        }
        Cache::set(md5($this->userinfo->uid), md5($this->userinfo->uid), 3);
        $arrParam = $this->getParam();
        // 主建简历表
        $arrResume = [];
        $arrResume['fullname'] = $arrParam['realname'];
        //        $arrResume['sex'] = $arrParam['sex'];
        $arrResume['sex'] = substr($arrParam['idcard'], (strlen($arrParam['idcard']) == 18 ? -2 : -1), 1) % 2 ? "1" : "2";
        $arrResume['height'] = $arrParam['height'];
        $arrResume['weight'] = $arrParam['weight'];
        $arrResume['idcard'] = $arrParam['idcard'];
        $arrResume['residence'] = $arrParam['residence'];
        $arrResume['marriage'] = $arrParam['marriage'];
        $arrResume['nation'] = $arrParam['nation'];
        if (!empty($arrParam['major1'])) $arrResume['major1'] = $arrParam['major1'];
        if (!empty($arrParam['major2'])) $arrResume['major2'] = $arrParam['major2'];
        $arrResume['major'] = $arrParam['major2'];
        $arrResume['vision'] = $arrParam['vision'];
        $arrResume['education'] = $arrParam['education'];
        $arrResume['school'] = $arrParam['school'];
        $arrResume['custom_field_1'] = $arrParam['custom_field_1'];
        $arrResume['custom_field_2'] = $arrParam['custom_field_2'];
        $arrResume['custom_field_3'] = $arrParam['custom_field_3'];
        $arrResume['birth'] = $arrParam['birth'];
        $arrResume['hjd'] = $arrParam['hjd'];
        $arrResume['photo'] = $arrParam['photo'];
        $arrResume['title'] = $arrParam['title'];
        $arrResume['nation'] = $arrParam['nation'];
        $arrResume['schoolsystem'] = $arrParam['schoolsystem'];
        //联系信息
        $arrContact = [];
        $arrContact['mobile'] = $arrParam['mobile'];
        $arrContact['email'] = $arrParam['email'];
        $arrContact['sos_name'] = $arrParam['sos_name'];
        $arrContact['sos_mobile'] = $arrParam['sos_mobile'];
        //人事考试简历表
        $arrExamResume = [];
        $arrExamResume['uid'] = $this->userinfo->uid;
        $arrExamResume['idcard_img_just'] = $arrParam['idcard_img_just'];
        $arrExamResume['idcard_img_back'] = $arrParam['idcard_img_back'];
        $arrExamResume['driver_certificate_img'] = $arrParam['driver_certificate_img'];
        $arrExamResume['degree_img'] = $arrParam['degree_img'];
        $arrExamResume['academic_certificate_img'] = $arrParam['academic_certificate_img'];
        $arrExamResume['fresh_graduates_img'] = $arrParam['fresh_graduates_img'];
        $arrExamSign = [];
        $arrExamSign['exam_project_id'] = $arrParam['exam_project_id'];
        $arrExamSign['exam_post_id'] = $arrParam['exam_post_id'];
        $arrExamSign['uid'] = $this->userinfo->uid;
        $arrExamSign['realname'] = $arrParam['realname'];
        $arrExamSign['idcard'] = $arrParam['idcard'];
        $arrExamSign['custom_field'] = serialize($arrParam['custom_field']);
        $arrExamSign['fresh_graduates'] = $arrParam['fresh_graduates'];
        $arrExamSign['marriage'] = $arrParam['marriage'];
        $arrExamSign['address'] = $arrParam['address'];
        $arrExamSign['health'] = $arrParam['health'];
        $arrExamSign['addtime'] = date('Y-m-d H:i:s');
        $arrExamSign['major'] = $arrParam['major'];
        // 检查项目是否结束
        $exam_project_info = model('ExamProject')
            ->where(['exam_project_id' => ['=', $arrParam['exam_project_id']]])
            ->find();
        // 检查有没有报过名
        $objCheck = model('ExamSign')->where(
            [
                'uid' => ['=', $this->userinfo->uid],
                'exam_project_id' => ['=', $arrParam['exam_project_id']],
            ]
        )->find();
        if (empty($objCheck)) {
            if (strtotime($exam_project_info['sign_up_start_time']) <= time() && strtotime($exam_project_info['sign_up_end_time']) >= time()) {
            } else {
                $this->ajaxReturn(500, "报名已结束");
            }
        } else {
            //检查是否到达截止时间
            if (strtotime($exam_project_info['audit_end_time']) >= time()) {
            } else {
                $this->ajaxReturn(500, "审核已截止");
            }
        }
        $isErr = false;
        $errmsg = "操作失败";
        Db::startTrans();
        try {
            //基础简历
            $isSaveErr = model('Resume')
                ->allowField(true)
                ->save($arrResume, ['uid' => $this->userinfo->uid]);
            // 联系信息
            if ($isSaveErr !== false) {
                $isSaveErr = model('ResumeContact')
                    ->allowField(true)
                    ->save($arrContact, ['uid' => $this->userinfo->uid]);
            }
            // 人事考试简历表
            if ($isSaveErr !== false) {
                $objExamResume = model('ExamResume')->where(['uid' => ['=', $this->userinfo->uid]])->find();
                if (!empty($objExamResume)) {
                    $isSaveErr = model('ExamResume')
                        ->allowField(true)
                        ->save($arrExamResume, ['uid' => $this->userinfo->uid]);
                } else {
                    $isSaveErr = model('ExamResume')
                        ->allowField(true)
                        ->save($arrExamResume);
                }
            }
            // 报名
            if ($isSaveErr !== false) {
                if (!empty($objCheck)) {
                    if ($objCheck->status != 1) {
                        $arrExamSign['status'] = 0;
                        $arrExamSign['edittime'] = date('Y-m-d H:i:s');
                        $isSaveErr = model('ExamSign')
                            ->allowField(true)
                            ->save($arrExamSign, ['exam_sign_id' => $objCheck->exam_sign_id]);
                    } else {
                        $errmsg = "报名审核已通过,不可在修改";
                    }
                } else {
                    $isSaveErr = model('ExamSign')
                        ->allowField(true)
                        ->save($arrExamSign);
                }
            }
            if ($isSaveErr !== false) {
                $isErr = false;
                Db::commit();
            } else {
                $isErr = true;
                Db::rollback();
            }
        } catch (\Exception $e) {
            $isErr = true;
            Db::rollback();
        }
        $this->ajaxReturn($isErr ? 500 : 200, $isErr ? $errmsg : "操作成功");
    }

    public function get_sign_details()
    {
        $intExamSignId = input('exam_sign_id/d', 0);
        if ($intExamSignId < 1) {
            $this->ajaxReturn(500, "非法请求");
        }
        $objSignInfo = model('ExamSign')->where(['uid' => ['=', $this->userinfo->uid], 'exam_sign_id' => ['=', $intExamSignId]])->find();
        if (empty($objSignInfo)) {
            $this->ajaxReturn(500, "非法请求");
        }
        $arrData = $this->getBaseResume();
        $arrData['exam_resume'] = model('ExamResume')->where(['uid' => ['=', $this->userinfo->uid]])->find();
        if (empty($arrData['exam_resume'])) {
            $arrData['exam_resume'] = [
                "idcard_img_just" => "",
                "idcard_img_back" => "",
                "driver_certificate_img" => "",
                "degree_img" => "",
                "academic_certificate_img" => "",

            ];
        }
        if (!empty($objSignInfo['marriage'])) {
            $arrData['basic']['marriage'] = $objSignInfo['marriage'];
        }
        if (!empty($objSignInfo['custom_field'])) {
            $objSignInfo['custom_field'] = unserialize($objSignInfo['custom_field']);
            if ($objSignInfo['custom_field'] === false) {
                $objSignInfo['custom_field'] = [];
            }
        }

        $arrData['sign'] = $objSignInfo;
        $this->ajaxReturn(200, "操作成功", $arrData);
    }

    private function getBaseResume()
    {
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
                $value['starttime'] = date("Y-m-d H:i:s", $value['starttime']);
            }
            if ($value['endtime'] != 0) {
                $value['endtime'] = date('Y-m-d H:i:s', $value['endtime']);
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
                $value['starttime'] = date('Y-m-d H:i:s', $value['starttime']);
            }
            $education_list[$key] = $value;
        }
        //证书
        $certificate_list = model('ResumeCertificate')
            ->field('rid,uid', true)
            ->where(['rid' => ['eq', $basic['id']]])
            ->select();
        foreach ($certificate_list as $key => $value) {
            $value['name'] = htmlspecialchars_decode($value['name'], ENT_QUOTES);
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
        ];
    }

    public function uploadimg()
    {
        $file = request()->file('file');
        if (empty($file)) {
            $this->ajaxReturn(500, "没有上传文件");
        }
        $info = $file->validate(['ext' => 'jpg,jpeg,png,gif,bmp']);
        if ($info->getSize() > 1048576) {
            $this->ajaxReturn(500, "文件大小最大为1048576B字节（1MB）");
        }
        $info = $info->move(APP_PATH . '../public/upload/exam');
        if ($info) {
            $this->ajaxReturn(200, '上传成功', ['path' => '/upload/exam/' . $info->getSaveName()]);
        } else {
            $this->ajaxReturn(500, $file->getError());
        }
    }
}
