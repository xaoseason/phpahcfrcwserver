<?php

namespace app\apiadmin\controller\exam;


class Notice extends \app\common\controller\Backend
{
    public function index()
    {
        $arrWhere = [];
        if (trim(input('is_show/s', '')) != '') {
            $arrWhere['is_show'] = ['=', input('is_show/d', 1)];
        }
        if (!empty(input('keywords/s', '', 'trim'))) {
            $arrWhere['title'] = ['like', '%' . input('keywords/s') . '%'];
        }
        if (!empty(input('start_time/s', '', 'trim'))) {
            $arrWhere['addtime'] = ['>=', input('start_time/s')];
        }
        if (!empty(input('end_time/s', '', 'trim'))) {
            $arrWhere['addtime'] = ['<=', input('end_time/s')];
        }
        $intCurrentPage = input('page/d', 1, 'intval');
        $intPagesize = input('pagesize/d', 10, 'intval');
        $intTotal = model('ExamNotice')
            ->where($arrWhere)
            ->count();
        $arrList = model('ExamNotice')
            ->where($arrWhere)
            ->order('exam_notice_id desc')
            ->page($intCurrentPage . ',' . $intPagesize)
            ->select();
        $arrList = json_encode($arrList);
        $arrList = json_decode($arrList, true);
        foreach ($arrList as $k => $item) {
            $arrList[$k]['content'] = htmlspecialchars_decode(htmlspecialchars_decode($item['content']));
            $arrList[$k]['attach'] = htmlspecialchars_decode($arrList[$k]['attach']);
            $arrList[$k]['attach'] = $arrList[$k]['attach'] ? json_decode($arrList[$k]['attach'], true) : [];
        }
        $arrReturn = [];
        $arrReturn['items'] = $arrList;
        $arrReturn['total'] = $intTotal;
        $arrReturn['current_page'] = $intCurrentPage;
        $arrReturn['pagesize'] = $intPagesize;
        $arrReturn['total_page'] = ceil($intTotal / $intPagesize);
        $this->ajaxReturn(200, '获取数据成功', $arrReturn);
    }

    public function add()
    {
        $arrParam = input('');
        $arrParam['push_user_id'] = $this->admininfo->id;
        $arrParam['push_user_name'] = $this->admininfo->username;
        $arrParam['addtime'] = date("Y-m-d H:i:s");
        if (
            false ===
            model('ExamNotice')
                ->validate(true)
                ->allowField(true)
                ->save($arrParam)
        ) {
            $this->ajaxReturn(500, model('ExamNotice')->getError());
        }
        model('AdminLog')->record(
            '添加人事考试人事考试公示公告。人事考试人事考试公示公告ID【' .
            model('ExamNotice')->exam_notice_id .
            '】;人事考试人事考试公示公告标题【' .
            $arrParam['title'] .
            '】',
            $this->admininfo
        );
        $this->ajaxReturn(200, '添加成功');
    }

    public function edit()
    {
        $arrParam = input('');

        if (intval($arrParam['exam_notice_id']) <= 0) {
            $this->ajaxReturn(500, "没有获取到公告ID");
            return;
        }

        $objInfo = model('ExamNotice')->find($arrParam['exam_notice_id']);
        if (!$objInfo) {
            $this->ajaxReturn(500, '数据获取失败');
        }
        $arrParam['push_user_id'] = $this->admininfo->id;
        $arrParam['push_user_name'] = $this->admininfo->username;
        $arrParam['addtime'] = $objInfo->addtime;
        if (
            false ===
            model('ExamNotice')
                ->validate(true)
                ->allowField(true)
                ->save($arrParam, ['exam_notice_id' => $arrParam['exam_notice_id']])
        ) {
            $this->ajaxReturn(500, model('ExamNotice')->getError());
        }

        model('AdminLog')->record(
            '编辑人事考试人事考试公示公告。人事考试人事考试公示公告ID【' .
            model('ExamNotice')->exam_notice_id .
            '】;人事考试人事考试公示公告标题【' .
            $arrParam['title'] .
            '】',
            $this->admininfo
        );
        $this->ajaxReturn(200, '编辑成功');
    }

    public function getDetails()
    {
        $intExamNoticeId = input('exam_notice_id/d');
        if (!$intExamNoticeId) {
            $this->ajaxReturn(500, '请选择数据');
        }
        $objInfo = model('ExamNotice')->find($intExamNoticeId);
        if (!$objInfo) {
            $this->ajaxReturn(500, '数据获取失败');
        }
        $objInfo['content'] = htmlspecialchars_decode(htmlspecialchars_decode($objInfo['content']));
        $objInfo['attach'] = htmlspecialchars_decode($objInfo['attach']);
        $objInfo['attach'] = $objInfo['attach'] ? json_decode($objInfo['attach'], true) : [];
        $this->ajaxReturn(200, "success", $objInfo);
    }

    public function delete()
    {
        $intExamNoticeId = input('exam_notice_id/a');
        if (!$intExamNoticeId) {
            $this->ajaxReturn(500, '请选择数据');
        }
        $list = model('ExamNotice')
            ->where('exam_notice_id', 'in', $intExamNoticeId)
            ->column('title');
        model('ExamNotice')->destroy($intExamNoticeId);
        model('AdminLog')->record(
            '删除人事考试公示公告。人事考试公示公告ID【' .
            implode(',', $intExamNoticeId) .
            '】;人事考试公示公告标题【' .
            implode(',', $list) .
            '】',
            $this->admininfo
        );
        $this->ajaxReturn(200, '删除成功');
    }
}
