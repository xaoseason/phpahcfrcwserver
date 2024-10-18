<?php

namespace app\common\validate;

use \app\common\validate\BaseValidate;

class ExamNotice extends BaseValidate
{
    protected $rule = [
        'title' => 'require|max:255',
        'content' => 'require',
        'click' => 'require|gt:0',
        'is_show' => 'require|in:0,1',
        'description' => 'max:255',
        'keywords' => 'max:255',
        'addtime' => 'require'
    ];
}





