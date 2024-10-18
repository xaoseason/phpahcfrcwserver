<?php
namespace app\v1_0\controller\personal;

class ResumeRegByAppForm extends \app\v1_0\controller\common\Base
{
    public function _initialize()
    {
        parent::_initialize();
        $this->checkLogin(2);
    }

    /**
     * 第一步：保存简历基本信息
     */
    public function step1()
    {
        $input_data = [
            'basic' => [
                'uid' => $this->userinfo->uid,
                'fullname' => input('post.basic.fullname/s', '', 'trim,badword_filter'),
                'marriage' => input('post.basic.marriage/d', 0, 'intval'),
                'sex' => input('post.basic.sex/d', 0, 'intval'),
                'birthday' => input('post.basic.birthday/s', '', 'trim'),
                'education' => input('post.basic.education/d', 0, 'intval'),
                'enter_job_time' => input(
                    'post.basic.enter_job_time/s',
                    '',
                    'trim'
                ),
                'current' => input('post.basic.current/d', 0, 'intval'),
                'major1' => input('post.basic.major1/d', 0, 'intval'),
                'major2' => input('post.basic.major2/d', 0, 'intval'),
                'major' => input('post.basic.major/d', 0, 'intval')
            ],
            'contact' => [
                'uid' => $this->userinfo->uid,
                'mobile' => input('post.contact.mobile/s', '', 'trim,badword_filter'),
                'weixin' => input('post.contact.weixin/s', '', 'trim,badword_filter')
            ],
            'intention' => [
                'uid' => $this->userinfo->uid,
                'category1' => input('post.intention.category1/d', 0, 'intval'),
                'category2' => input('post.intention.category2/d', 0, 'intval'),
                'category3' => input('post.intention.category3/d', 0, 'intval'),
                'district1' => input('post.intention.district1/d', 0, 'intval'),
                'district2' => input('post.intention.district2/d', 0, 'intval'),
                'district3' => input('post.intention.district3/d', 0, 'intval'),
                'minwage' => input('post.intention.minwage/d', 0, 'intval'),
                'maxwage' => input('post.intention.maxwage/d', 0, 'intval')
            ]
        ];
        $input_data['basic']['enter_job_time'] =
            $input_data['basic']['enter_job_time'] == ''
                ? 0
                : strtotime($input_data['basic']['enter_job_time']);
        $input_data['intention']['category'] =
            $input_data['intention']['category3'] > 0
                ? $input_data['intention']['category3']
                : ($input_data['intention']['category2'] > 0
                    ? $input_data['intention']['category2']
                    : $input_data['intention']['category1']);
        $input_data['intention']['district'] =
            $input_data['intention']['district3'] > 0
                ? $input_data['intention']['district3']
                : ($input_data['intention']['district2'] > 0
                    ? $input_data['intention']['district2']
                    : $input_data['intention']['district1']);
        if (input('?post.work')) {
            $input_data['work'] = [
                'uid' => $this->userinfo->uid,
                'companyname' => input('post.work.companyname/s', '', 'trim,badword_filter'),
                'jobname' => input('post.work.jobname/s', '', 'trim,badword_filter'),
                'starttime' => input('post.work.starttime/s', '', 'trim'),
                'endtime' => input('post.work.endtime/s', '', 'trim'),
                'todate' => input('post.work.todate/d', 0, 'intval'),
                'duty' => input('post.work.duty/s', '', 'trim')
            ];
            $input_data['work']['starttime'] = strtotime(
                $input_data['work']['starttime']
            );
            if ($input_data['work']['todate'] == 1) {
                $input_data['work']['endtime'] = 0;
            } else {
                $input_data['work']['endtime'] = strtotime(
                    $input_data['work']['endtime']
                );
            }
        }
        $resume_id = 0;
        $basic_info = model('Resume')
            ->where('uid', $this->userinfo->uid)
            ->find();
        if ($basic_info !== null) {
            $resume_id = $basic_info->id;
        }
        $intention_info = model('ResumeIntention')
            ->where('uid', $this->userinfo->uid)
            ->find();
        $contact_info = model('ResumeContact')
            ->where('uid', $this->userinfo->uid)
            ->find();
        $work_info = model('ResumeWork')
            ->where('uid', $this->userinfo->uid)
            ->find();

        \think\Db::startTrans();
        try {
            if ($basic_info !== null) {
                $result = model('Resume')
                    ->validate('Resume.reg_from_app_by_form')
                    ->allowField(true)
                    ->save($input_data['basic'], [
                        'uid' => $this->userinfo->uid
                    ]);
            } else {
                $input_data['basic']['platform'] = config('platform');
                $result = model('Resume')
                    ->validate('Resume.reg_from_app_by_form')
                    ->allowField(true)
                    ->save($input_data['basic']);
                $resume_id = model('Resume')->id;
            }
            if (false === $result) {
                throw new \Exception(model('Resume')->getError());
            }

            //联系方式
            $input_data['contact']['rid'] = $resume_id;
            if (null === $contact_info) {
                $result = model('ResumeContact')
                    ->validate('ResumeContact.reg_from_app_by_form')
                    ->allowField(true)
                    ->save($input_data['contact']);
            } else {
                $result = model('ResumeContact')
                    ->validate('ResumeContact.reg_from_app_by_form')
                    ->allowField(true)
                    ->save($input_data['contact'], [
                        'id' => $contact_info['id']
                    ]);
            }
            if (false === $result) {
                throw new \Exception(model('ResumeContact')->getError());
            }

            //求职意向
            $input_data['intention']['rid'] = $resume_id;

            if (null === $intention_info) {
                $result = model('ResumeIntention')
                    ->validate('ResumeIntention.reg_from_app_by_form')
                    ->allowField(true)
                    ->save($input_data['intention']);
            } else {
                $result = model('ResumeIntention')
                    ->validate('ResumeIntention.reg_from_app_by_form')
                    ->allowField(true)
                    ->save($input_data['intention'], [
                        'id' => $intention_info['id']
                    ]);
            }
            if (false === $result) {
                throw new \Exception(model('ResumeIntention')->getError());
            }

            //工作经历
            if (isset($input_data['work'])) {
                $input_data['work']['rid'] = $resume_id;
                if (null === $work_info) {
                    $result = model('ResumeWork')
                        ->validate(true)
                        ->allowField(true)
                        ->save($input_data['work']);
                } else {
                    $result = model('ResumeWork')
                        ->validate(true)
                        ->allowField(true)
                        ->save($input_data['work'], [
                            'id' => $work_info['id']
                        ]);
                }
                if (false === $result) {
                    throw new \Exception(model('ResumeWork')->getError());
                }
            }
            //更新完整度
            model('Resume')->updateComplete(
                [
                    'basic' => 1,
                    'intention' => 1,
                    'work' => isset($input_data['work']) ? 1 : 0
                ],
                $resume_id,
                $this->userinfo->uid
            );
            //提交事务
            \think\Db::commit();
        } catch (\Exception $e) {
            \think\Db::rollBack();
            $this->ajaxReturn(500, $e->getMessage());
        }

        model('Resume')->refreshSearch($resume_id);
        $this->writeMemberActionLog($this->userinfo->uid,'注册 - 保存简历基本信息');
        $this->ajaxReturn(200, '保存成功');
    }
    /**
     * 第二步：保存简历教育经历
     */
    public function step2()
    {
        
        $input_data = [
            'education' => [
                'uid' => $this->userinfo->uid,
                'school' => input('post.education.school/s', '', 'trim,badword_filter'),
                'major' => input('post.education.major/s', '', 'trim,badword_filter'),
                'shape' => input('post.education.shape/s', '', 'trim,badword_filter'),
                'degree' => input('post.education.degree/s', '', 'trim,badword_filter'),
                'education' => input('post.education.education/d', 0, 'intval'),
                'starttime' => input('post.education.starttime/s', '', 'trim'),
                'endtime' => input('post.education.endtime/s', '', 'trim'),
                'todate' => input('post.education.todate/d', 0, 'intval')
            ],
            'specialty' => input('post.specialty/s', '', 'trim,badword_filter')
        ];
        if (empty($input_data['education']['shape'])){
            $this->ajaxReturn(500, "请填写学习形式");
        }
        $input_data['education']['starttime'] = strtotime(
            $input_data['education']['starttime']
        );
        if ($input_data['education']['todate'] == 1) {
            $input_data['education']['endtime'] = 0;
        } else {
            $input_data['education']['endtime'] = strtotime(
                $input_data['education']['endtime']
            );
        }
        if (input('?post.work')) {
            $input_data['work'] = [
                'uid' => $this->userinfo->uid,
                'companyname' => input('post.work.companyname/s', '', 'trim,badword_filter'),
                'jobname' => input('post.work.jobname/s', '', 'trim,badword_filter'),
                'tel' => input('post.work.tel/s', '', 'trim,badword_filter'),
                'starttime' => input('post.work.starttime/s', '', 'trim'),
                'endtime' => input('post.work.endtime/s', '', 'trim'),
                'todate' => input('post.work.todate/d', 0, 'intval'),
                'duty' => input('post.work.duty/s', '', 'trim')
            ];
            if (empty($input_data['work']['tel'])){
                $this->ajaxReturn(500, "请填写单位联系方式");
            }
            $input_data['work']['starttime'] = strtotime(
                $input_data['work']['starttime']
            );
            if ($input_data['work']['todate'] == 1) {
                $input_data['work']['endtime'] = 0;
            } else {
                $input_data['work']['endtime'] = strtotime(
                    $input_data['work']['endtime']
                );
            }
        }

        $education_info = model('ResumeEducation')
            ->where('uid', $this->userinfo->uid)
            ->find();
        \think\Db::startTrans();
        try {
            if ($education_info !== null) {
                $result = model('ResumeEducation')
                    ->validate(true)
                    ->allowField(true)
                    ->save($input_data['education'], [
                        'id' => $education_info['id']
                    ]);
            } else {
                $basic_info = model('Resume')
                    ->where('uid', $this->userinfo->uid)
                    ->find();
                if ($basic_info === null) {
                    throw new \Exception('请先填写基本资料');
                }
                $input_data['education']['rid'] = $basic_info->id;
                $result = model('ResumeEducation')
                    ->validate(true)
                    ->allowField(true)
                    ->save($input_data['education']);
            }

            if (false === $result) {
                throw new \Exception(model('ResumeEducation')->getError());
            }
            //工作经历
            if (isset($input_data['work'])) {
                $work_info = model('ResumeWork')
                    ->where('uid', $this->userinfo->uid)
                    ->find();
                if (null === $work_info) {
                    $basic_info =
                        $basic_info === null
                            ? model('Resume')
                                ->where('uid', $this->userinfo->uid)
                                ->find()
                            : $basic_info;
                    if ($basic_info === null) {
                        throw new \Exception('请先填写基本资料');
                    }
                    $input_data['work']['rid'] = $basic_info->id;
                    $result = model('ResumeWork')
                        ->validate(true)
                        ->allowField(true)
                        ->save($input_data['work']);
                } else {
                    $result = model('ResumeWork')
                        ->validate(true)
                        ->allowField(true)
                        ->save($input_data['work'], [
                            'id' => $work_info['id']
                        ]);
                }
                if (false === $result) {
                    throw new \Exception(model('ResumeWork')->getError());
                }
            }

            model('Resume')
                ->allowField(true)
                ->save(
                    ['specialty' => $input_data['specialty']],
                    [
                        'uid' => $this->userinfo->uid
                    ]
                );
            model('Resume')->updateComplete(
                [
                    'education' => 1,
                    'specialty' => $input_data['specialty'] == '' ? 0 : 1,
                    'work' => isset($input_data['work']) ? 1 : 0
                ],
                0,
                $this->userinfo->uid
            );

            \think\Db::commit();
        } catch (\Exception $e) {
            \think\Db::rollBack();
            $this->ajaxReturn(500, $e->getMessage());
        }
        $this->writeMemberActionLog($this->userinfo->uid,'注册 - 保存简历教育经历');
        $this->ajaxReturn(200, '保存成功');
    }
    
    /**
     * 第二步：保存简历教育经历、工作经历、自我描述
     */
    public function step2Web()
    {
        $input_data = [
            'education' => [
                'uid' => $this->userinfo->uid,
                'school' => input('post.education.school/s', '', 'trim,badword_filter'),
                'major' => input('post.education.major/s', '', 'trim,badword_filter'),
                'education' => input('post.education.education/d', 0, 'intval'),
                'starttime' => input('post.education.starttime/s', '', 'trim'),
                'endtime' => input('post.education.endtime/s', '', 'trim'),
                'todate' => input('post.education.todate/d', 0, 'intval')
            ],
            'work'=>[
                'uid' => $this->userinfo->uid,
                'companyname' => input('post.work.companyname/s', '', 'trim,badword_filter'),
                'jobname' => input('post.work.jobname/s', '', 'trim,badword_filter'),
                'starttime' => input('post.work.starttime/s', '', 'trim'),
                'endtime' => input('post.work.endtime/s', '', 'trim'),
                'todate' => input('post.work.todate/d', 0, 'intval'),
                'duty' => input('post.work.duty/s', '', 'trim')
            ],
            'specialty' => input('post.specialty/s', '', 'trim,badword_filter')
        ];

        $input_data['work']['starttime'] = strtotime(
            $input_data['work']['starttime']
        );
        if ($input_data['work']['todate'] == 1) {
            $input_data['work']['endtime'] = 0;
        } else {
            $input_data['work']['endtime'] = strtotime(
                $input_data['work']['endtime']
            );
        }

        $input_data['education']['starttime'] = strtotime(
            $input_data['education']['starttime']
        );
        if ($input_data['education']['todate'] == 1) {
            $input_data['education']['endtime'] = 0;
        } else {
            $input_data['education']['endtime'] = strtotime(
                $input_data['education']['endtime']
            );
        }

        $work_info = model('ResumeWork')
            ->where('uid', $this->userinfo->uid)
            ->find();
        $education_info = model('ResumeEducation')
            ->where('uid', $this->userinfo->uid)
            ->find();
        \think\Db::startTrans();
        try {
            $input_data['work']['rid'] = $resume_id;
            if (null === $work_info) {
                $result = model('ResumeWork')
                    ->validate(true)
                    ->allowField(true)
                    ->save($input_data['work']);
            } else {
                $result = model('ResumeWork')
                    ->validate(true)
                    ->allowField(true)
                    ->save($input_data['work'], [
                        'id' => $work_info['id']
                    ]);
            }
            if (false === $result) {
                throw new \Exception(model('ResumeWork')->getError());
            }

            $basic_info = model('Resume')
                ->where('uid', $this->userinfo->uid)
                ->find();
            if ($work_info !== null) {
                $result = model('ResumeWork')
                    ->validate(true)
                    ->allowField(true)
                    ->save($input_data['work'], [
                        'id' => $work_info['id']
                    ]);
            } else {
                if ($basic_info === null) {
                    throw new \Exception('请先填写基本资料');
                }
                $input_data['work']['rid'] = $basic_info->id;
                $result = model('ResumeWork')
                    ->validate(true)
                    ->allowField(true)
                    ->save($input_data['work']);
            }
            if (false === $result) {
                throw new \Exception(model('ResumeEducation')->getError());
            }
            if ($education_info !== null) {
                $result = model('ResumeEducation')
                    ->validate(true)
                    ->allowField(true)
                    ->save($input_data['education'], [
                        'id' => $education_info['id']
                    ]);
            } else {
                if ($basic_info === null) {
                    throw new \Exception('请先填写基本资料');
                }
                $input_data['education']['rid'] = $basic_info->id;
                $result = model('ResumeEducation')
                    ->validate(true)
                    ->allowField(true)
                    ->save($input_data['education']);
            }

            if (false === $result) {
                throw new \Exception(model('ResumeEducation')->getError());
            }

            model('Resume')
                ->allowField(true)
                ->save(
                    ['specialty' => $input_data['specialty']],
                    [
                        'uid' => $this->userinfo->uid
                    ]
                );
            model('Resume')->updateComplete(
                [
                    'work' => 1,
                    'education' => 1,
                    'specialty' => $input_data['specialty'] == '' ? 0 : 1
                ],
                0,
                $this->userinfo->uid
            );

            \think\Db::commit();
        } catch (\Exception $e) {
            \think\Db::rollBack();
            $this->ajaxReturn(500, $e->getMessage());
        }
        $this->writeMemberActionLog($this->userinfo->uid,'注册 - 保存简历教育经历、工作经历、自我描述');
        $this->ajaxReturn(200, '保存成功');
    }
}
