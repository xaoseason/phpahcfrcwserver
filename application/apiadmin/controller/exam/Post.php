<?php

namespace app\apiadmin\controller\exam;


class Post extends \app\common\controller\Backend
{
    public function index()
    {
        $arrWhere = [];
        if (input('exam_project_id/d', 0) <= 0) {
            $this->ajaxReturn(500, "请提交考试项目ID");
        }
        $arrWhere['exam_project_id'] = ['=', input('exam_project_id/d', 0)];
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
        $intTotal = model('ExamPost')
            ->where($arrWhere)
            ->count();
        $arrList = model('ExamPost')
            ->where($arrWhere)
            ->order('exam_post_id desc')
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
        if (empty($arrParam['exam_project_id']) || $arrParam['exam_project_id'] <= 0) {
            return "招考信息获取失败";
        }
        if (empty($arrParam['name'])) {
            return "请填写岗位名称";
        }
        if (empty($arrParam['code']) && $arrParam['code'] == '') {
            return "请填写岗位代码";
        }
        if ($arrParam['number'] <= 0) {
            return "请填写招录人数,且大于等于1";
        }
        if ($arrParam['is_pen'] == 0 && $arrParam['is_itw'] == 0) {
            return "笔试或面试必须开启一个";
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

    private function GetParam()
    {
        $arrParam = [];
        $arrParam['exam_project_id'] = input('exam_project_id/d', 0);
        $arrParam['name'] = input('name/s', null, 'trim');
        $arrParam['code'] = input('code/s', null, 'trim');
        $arrParam['number'] = input('number/d', 0);
        $arrParam['is_pen'] = input('is_pen/d', 0);
        $arrParam['pen_money'] = input('pen_money/s', null, 'trim');
        $arrParam['pen_test_addr'] = input('pen_test_addr/s', null, 'trim');
        $arrParam['pen_test_time'] = input('pen_test_time/s', null, 'trim');
        $arrParam['is_itw'] = input('is_itw/d', 0);
        $arrParam['itw_money'] = input('itw_money/s', null, 'trim');
        $arrParam['itw_addr'] = input('itw_addr/s', null, 'trim');
        $arrParam['itw_time'] = input('itw_time/s', null, 'trim');
        $arrParam['is_display'] = input('is_display/d', 1);
        $arrParam['custom_field'] = input('custom_field/a', []);
        return $arrParam;
    }

    public function add()
    {
        $arrParam = $this->GetParam();
        if ($this->verifier($arrParam) !== true) {
            $this->ajaxReturn(500, $this->verifier($arrParam));
        }
        $objInfo = model('ExamProject')->find($arrParam['exam_project_id']);
        if (!$objInfo) {
            $this->ajaxReturn(500, '招考信息获取失败');
        }
        $arrParam['push_user_id'] = $this->admininfo->id;
        $arrParam['push_user_name'] = $this->admininfo->username;
        $arrParam['addtime'] = date('Y-m-d H:i:s');
        if (
            false ===
            model('ExamPost')
                ->allowField(true)
                ->save($arrParam)
        ) {
            $this->ajaxReturn(500, model('ExamPost')->getError());
        }
        model('AdminLog')->record(
            '添加人事考试项目岗位。人事考试项目岗位ID【' .
            model('ExamPost')->exam_post_id .
            '】;人事考试项目岗位标题【' .
            $arrParam['name'] .
            '】',
            $this->admininfo
        );
        $this->ajaxReturn(200, '添加成功');
    }

    public function edit()
    {
        $arrParam = $this->GetParam();
        if ($this->verifier($arrParam) !== true) {
            $this->ajaxReturn(500, $this->verifier($arrParam));
        }
        $objInfo = model('ExamProject')->find($arrParam['exam_project_id']);
        if (!$objInfo) {
            $this->ajaxReturn(500, '招考信息获取失败');
        }
        $intExamPostId = input('exam_post_id/d', 0);

        $objInfo = model('ExamPost')->find($intExamPostId);
        if (!$objInfo) {
            $this->ajaxReturn(500, '找不到岗位信息');
        }
        $arrParam['push_user_id'] = $this->admininfo->id;
        $arrParam['push_user_name'] = $this->admininfo->username;
        $arrParam['addtime'] = date('Y-m-d H:i:s');
        if (
            false ===
            model('ExamPost')
                ->allowField(true)
                ->save($arrParam, ['exam_post_id' => $intExamPostId])
        ) {
            $this->ajaxReturn(500, model('ExamPost')->getError());
        }

        model('AdminLog')->record(
            '编辑人事考试人事考试公示公告。人事考试人事考试公示公告ID【' .
            $intExamPostId .
            '】;人事考试人事考试公示公告标题【' .
            $arrParam['name'] .
            '】',
            $this->admininfo
        );
        $this->ajaxReturn(200, '编辑成功');

    }

    public function details()
    {
        $intExamPostId = input('exam_post_id/d', 0);
        $objInfo = model('ExamPost')->find($intExamPostId);
        if (!$objInfo) {
            $this->ajaxReturn(500, '找不到岗位信息');
        }
        if (!empty($objInfo['custom_field'])) {
            try {
                $objInfo['custom_field'] = unserialize($objInfo['custom_field']);
            } catch (\Exception $e) {

            }
        }
        $this->ajaxReturn(200, '成功', $objInfo);
    }

    // 这里需要判断是否有报名,有报名就不允许删除
    public function delete()
    {
        $intExamPostId = input('exam_post_id/d', 0);
        $arrExamSign = model('ExamSign')->where(
            [
                'exam_post_id' => ['=', $intExamPostId]
            ]
        )->select();
        if (!empty($arrExamSign)) {
            $this->ajaxReturn(500, "本岗位已经有考试报名,不可删除");
        }

        $intShow = model('ExamPost')->where(
            [
                'exam_post_id' => ['=', $intExamPostId]
            ]
        )->delete();
        $this->ajaxReturn($intShow ? 200 : 500, $intShow ? "操作成功" : "删除失败");
    }
}
