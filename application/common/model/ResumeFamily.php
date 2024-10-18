<?php

namespace app\common\model;


class ResumeFamily extends \app\common\model\BaseModel
{
    protected $readonly = ['id', 'rid', 'uid'];
    protected $type = [
        'id' => 'integer',
        'uid' => 'integer',
        'rid' => 'integer',
    ];
}
