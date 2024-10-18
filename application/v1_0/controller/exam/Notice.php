<?php

namespace app\v1_0\controller\exam;


class Notice  extends \app\v1_0\controller\common\Base
{
    public function index()
    {
        $keyword = request()->route('keyword/s', '', 'trim');
        $where = [];
        if (!empty($keyword)) {
            $where['a.title'] = ['like', '%' . $keyword . '%'];
        }

        $list = model('ExamNotice')
            ->alias('a')
            ->where($where)
            ->order('a.exam_notice_id desc')
            ->field('a.*');
        $current_page = input('page/d');
        $pagesize = 15;
        $list = $list->where('a.is_show', 1)->paginate(['list_rows' => $pagesize, 'page' => $current_page, 'type' => '\\app\\common\\lib\\Pager']);
        foreach ($list as $key => $value) {
            $list[$key]['content'] = strip_tags(htmlspecialchars_decode($value['content'], ENT_QUOTES));
            $list[$key]['content'] = cut_str($list[$key]['content'], 200, 0, '...');
            $list[$key]['link_url'] = url('index/exam_notice/show', ['id' => $value['exam_notice_id']]);
        }

        $this->ajaxReturn(200,'success',$list);
    }

    public function show()
    {
        $id = input('id/d');

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
        $info['attach'] = $info['attach'] ? json_decode($info['attach'], true) : [];
        $arrReturn = [];
        $arrReturn['info'] = $info;
        $arrReturn['prev'] = $prev;
        $arrReturn['next'] = $next;
        $this->ajaxReturn(200,'success',$arrReturn);
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
