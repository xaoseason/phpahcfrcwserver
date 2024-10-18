<?php

namespace app\index\controller;

class ExamNotice extends \app\index\controller\Base
{
  public function _initialize()
  {
    parent::_initialize();
    $this->assign('navSelTag', 'exam_notice');
  }

  public function index()
  {
    // 增加关键词搜索 chenyang 2022年3月14日17:27:27
    $keyword = request()->route('keyword/s', '', 'trim');
    $where = [];
    if (!empty($keyword)) {
      $where['a.title'] = ['like', '%' . $keyword . '%'];
    }
    $p = input("p");
    if (!empty($p)) {
      $where['a.exam_project_id'] = ['>', 0];
    }
    $list = model('ExamNotice')
      ->alias('a')
      ->where($where)
      ->order('a.exam_notice_id desc')
      ->field('a.*');
    $current_page = request()->get('page/d', 1, 'intval');
    $pagesize = 10;
    $seoData = [
      'cname' => '人事考试公示公告',
      'seo_keywords' => '人事考试公示公告',
      'seo_description' => '人事考试公示公告'
    ];
    $list = $list->where('a.is_show', 1)->paginate(['list_rows' => $pagesize, 'page' => $current_page, 'type' => '\\app\\common\\lib\\Pager']);
    $pagerHtml = $list->render();

    $project_ids = [];
    foreach ($list as $k => $v) {
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
      foreach ($list as $ks => $vs) {
        if ($v['exam_project_id'] == $vs['exam_project_id']) {
          $list[$ks]['status_cn'] = $status_cn;
        }
      }
    }

    foreach ($list as $key => $value) {
      $list[$key]['content'] = strip_tags(htmlspecialchars_decode($value['content'], ENT_QUOTES));
      $list[$key]['content'] = cut_str($list[$key]['content'], 200, 0, '...');
      $list[$key]['link_url'] = url('index/exam_notice/show', ['id' => $value['exam_notice_id']]);
    }
    $this->initPageSeo('articlelist', $seoData);
    $this->assign('list', $list);
    $this->assign('pagerHtml', $pagerHtml);
    $this->assign('pageHeader', $this->pageHeader);
    return $this->fetch('index');
  }

  public function show()
  {
    $id = request()->route('id/d', 0, 'intval');

    //读取页面缓存配置
    $pageCache = model('Page')->getCache('articleshow');

    //如果缓存有效期为0，则不使用缓存
    if ($pageCache['expire'] > 0) {
      $info = model('Page')->getCacheByAlias('articleshow', $id);
    } else {
      $info = false;
    }

    if (!$info) {
      $info = $this->writeShowCache($id, $pageCache);
      if ($info === false) {
        abort(404, '页面不存在');
      }
    }

    $prev = model('ExamNotice')
      ->where('exam_notice_id', '>', $info['exam_notice_id'])
      ->order('exam_notice_id asc')
      ->find();
    if ($prev !== null) {
      if (empty($prev['link_url'])) {
        $prev['link_url'] = "";
      }
      $prev['link_url'] = $prev['link_url'] == '' ? url('index/exam_notice/show', ['id' => $prev['exam_notice_id']]) : $prev['link_url'];
    }

    $next = model('ExamNotice')
      ->where('exam_notice_id', '<', $info['exam_notice_id'])
      ->order('exam_notice_id desc')
      ->find();
    if ($next !== null) {
      if (empty($next['link_url'])) {
        $next['link_url'] = "";
      }
      $next['link_url'] = $next['link_url'] == '' ? url('index/exam_notice/show', ['id' => $next['exam_notice_id']]) : $next['link_url'];
    }

    $seoData['title'] = $info['title'];
    if ($info['seo_keywords'] != '') {
      $seoData['seo_keywords'] = $info['seo_keywords'];
    } else {
      $seoData['seo_keywords'] = $info['title'];
    }
    if ($info['seo_description'] != '') {
      $seoData['seo_description'] = $info['seo_description'];
    } else {
      $seoData['seo_description'] = cut_str(strip_tags($info['content']), 100);
    }
    $info['attach'] = htmlspecialchars_decode($info['attach']);
    $info['attach'] = $info['attach'] ? json_decode($info['attach'], true) : [];
    //
    $exam_project_info = model('ExamProject')
      ->where(['exam_project_id' => ['=', $info['exam_project_id']]])
      ->find();
    if (empty($exam_project_info)) {
      $this->assign('NotExamNotice', true);
    }
    $this->assign('EndExamNoticeTime', $exam_project_info['sign_up_end_time']);
    $this->assign('StartExamNoticeTime', $exam_project_info['sign_up_start_time']);
    if (strtotime($exam_project_info['sign_up_start_time']) <= time() && strtotime($exam_project_info['sign_up_end_time']) >= time()) {
      $this->assign('EndExamNotice', false);
    } else {
      $this->assign('NotExamNotice', true);
    }
    $this->initPageSeo('articleshow', $seoData);
    $this->assign('info', $info);
    $this->assign('prev', $prev);
    $this->assign('next', $next);
    $this->assign('ExamNotice', $info['exam_project_id']);
    $this->assign('pageHeader', $this->pageHeader);
    return $this->fetch('show');
  }

  protected function writeShowCache($id, $pageCache)
  {
    $info = model('ExamNotice')
      ->where('exam_notice_id', $id)
      ->find();
    if ($info === null) {
      return false;
    }
    $info = $info->toArray();
    $info['content'] = htmlspecialchars_decode($info['content'], ENT_QUOTES);
    if ($pageCache['expire'] > 0) {
      model('Page')->writeCacheByAlias('articleshow', $info, $pageCache['expire'], $id);
    }
    return $info;
  }

  protected function getHotArticleList($id)
  {
    $list = model('ExamNotice')->where('id', 'neq', $id)->limit(10)->order('click desc')->select();
    foreach ($list as $key => $value) {
      $list[$key]['link_url'] = url('index/exam_notice/show', ['id' => $value['id']]);
    }
    return $list;
  }
}
