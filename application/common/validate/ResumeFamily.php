<?php

namespace app\common\validate;

use app\common\validate\BaseValidate;

class ResumeFamily extends BaseValidate
{
    protected $rule = [
        'uid' => 'number|gt:0',
        'rid' => 'number|gt:0',
        'name' => 'require|max:30',
        'relation' => 'require|max:30',
        'mobile' => 'require|max:30',

    ];
    protected $field = [
        'name' => '证书名称',
        'relation' => '关系',
        'mobile' => '联系电话'
    ];
}
