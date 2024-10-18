<?php

namespace app\index\controller;

use app\common\lib\Wechat;
use think\Exception;
use UnionPay\UnionPay;

class Index extends \app\index\controller\Base
{
    public function _initialize()
    {
        parent::_initialize();
    }

    public function index()
    {
        if (is_mobile_request() === true) {
            $this->redirect(config('global_config.mobile_domain'), 302);
            exit;
        }
        if ($this->subsite !== null) {
            $index_tpl = $this->subsite->tpl;
        } else {
            $index_tpl = config('global_config.index_tpl');
        }
        $index_tpl = $index_tpl ? $index_tpl : 'def';
        $instance = new \app\common\lib\Tpl($this->visitor);
        $return = $instance->index($index_tpl);
        foreach ($return as $key => $value) {
            $this->assign($key, $value);
        }
        // 重定义公告行数
        $notice_list = model('Notice')->limit(9)->where(['is_display' => ['=', 1]])->order(['sort_id' => 'desc', 'id' => "desc"])->select();
        $this->assign('notice_list', $notice_list);
        // 考试通告
        $exam_notice_list = model('ExamNotice')->limit(9)->where(['is_show' => ['=', 1], 'exam_project_id' => ['=', 0]])->order('exam_notice_id', 'desc')->select();
        $this->assign('exam_notice_list', $exam_notice_list);
        // 考试项目
        $exam_notice_project_list = model('ExamNotice')->limit(9)->where(['is_show' => ['=', 1], 'exam_project_id' => ['>', 0]])->order('exam_notice_id', 'desc')->select();
        $project_ids = [];
        foreach ($exam_notice_project_list as $k => $v) {
            $project_ids[] = $v['exam_project_id'];
        }
        $exam_project_list = model('ExamProject')->where(['exam_project_id' => ['in', $project_ids]])->select();
        foreach ($exam_project_list as $k => $v) {
            $status_cn = "报名结束";
            if (strtotime($exam_project_list[$k]['sign_up_start_time']) > time()) {
                $status_cn = "即将报名";
            }
            if (strtotime($exam_project_list[$k]['sign_up_start_time']) <= time() && strtotime($exam_project_list[$k]['sign_up_end_time']) >= time()) {
                $status_cn = "正在报名";
            }
            foreach ($exam_notice_project_list as $ks => $vs) {
                if ($v['exam_project_id'] == $vs['exam_project_id']) {
                    $exam_notice_project_list[$ks]['status_cn'] = $status_cn;
                }
            }
        }
        // 重新排序
        $exam_notice_project_lists = [];
        foreach ($exam_notice_project_list as $k => $item) {
            if ($item['status_cn'] == "正在报名") {
                $exam_notice_project_lists[] = $item;
                unset($exam_notice_project_list[$k]);
            }
        }
        foreach ($exam_notice_project_list as $k => $item) {
            if ($item['status_cn'] == "即将报名") {
                $exam_notice_project_lists[] = $item;
                unset($exam_notice_project_list[$k]);
            }
        }
        $exam_notice_project_lists = array_merge($exam_notice_project_lists,$exam_notice_project_list);
        $this->assign('exam_notice_project_list', $exam_notice_project_lists);
        $this->initPageSeo('index');
        $this->assign('pageHeader', $this->pageHeader);
        $this->assign('navSelTag', 'index');
        return $this->fetch('index/' . $index_tpl . '/index');
    }
}
