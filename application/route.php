<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
use think\Route;
// 注册路由到index模块的News控制器的read操作
Route::get('s/:code','v1_0/home.ShortUrl/index');
Route::get('m','index/Mobile/index');
Route::get('member','index/MemberCenter/index');

Route::rule('index$','index/index/index','GET',['ext'=>'']);
Route::rule('job/:id$','index/job/show');
Route::rule('resume/:id$','index/resume/show');
Route::rule('company/:id$','index/company/show');
Route::rule('article/:id$','index/article/show');
Route::rule('exam_notice/:id$','index/exam_notice/show');

Route::rule('explain/:id$','index/explain/show');
Route::rule('notice/:id$','index/notice/show');
//Route::rule('hrtool/:id$','index/hrtool/show');
Route::rule('jobfairol/:id$','index/jobfairol/show');
Route::rule('job','index/job/index');
Route::rule('job/contrast','index/job/contrast');
Route::rule('resume','index/resume/index');
Route::rule('resume/contrast','index/resume/contrast');
Route::rule('company','index/company/index');
Route::rule('article','index/article/index');
Route::rule('video','index/video/index');//视频
Route::rule('exam_notice','index/ExamNotice/index');

Route::rule('notice','index/notice/index');
Route::rule('help','index/help/show');
//Route::rule('hrtool','index/hrtool/index');
Route::rule('map','index/map/index');
Route::rule('video/:id','index/video/main');
Route::rule('jobfairol','index/jobfairol/index');