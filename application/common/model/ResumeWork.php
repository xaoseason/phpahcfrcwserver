<?php
namespace app\common\model;


class ResumeWork extends \app\common\model\BaseModel
{
    protected $readonly = ['id','rid','uid'];
    protected $type     = [
        'id'        => 'integer',
        'uid'        => 'integer',
        'rid' => 'integer',
        'starttime'    => 'integer',
        'endtime'    => 'integer',
        'todate'    => 'integer',
    ];
    protected static function init()
    {
        ResumeWork::afterInsert(function ($info) {
            if(is_object($info)){
                $info = $info->toArray();
            }
            if(isset($info['rid'])){
                model('Resume')->where('id',$info['rid'])->setField('updatetime',time());
            }else if(isset($info['uid'])){
                model('Resume')->where('uid',$info['uid'])->setField('updatetime',time());
            }
        });
        ResumeWork::afterUpdate(function ($info) {
            if(is_object($info)){
                $info = $info->toArray();
            }
            if(isset($info['rid'])){
                model('Resume')->where('id',$info['rid'])->setField('updatetime',time());
            }else if(isset($info['uid'])){
                model('Resume')->where('uid',$info['uid'])->setField('updatetime',time());
            }
        });
        ResumeWork::afterDelete(function ($info) {
            if(is_object($info)){
                $info = $info->toArray();
            }
            if(isset($info['rid'])){
                model('Resume')->where('id',$info['rid'])->setField('updatetime',time());
            }else if(isset($info['uid'])){
                model('Resume')->where('uid',$info['uid'])->setField('updatetime',time());
            }
        });
    }
}
