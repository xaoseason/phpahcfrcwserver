(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41accb96"],{"5c11":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("编辑招考")]),i("el-button",{staticStyle:{float:"right",padding:"0","margin-left":"14px"},attrs:{type:"text"},on:{click:t.goto}},[t._v(" 返回 ")]),i("el-button",{staticStyle:{float:"right",padding:"0"},attrs:{type:"text"},on:{click:function(e){return t.onSubmit("form")}}},[t._v(" 保存 ")])],1),i("el-form",{ref:"form",staticClass:"common-form",attrs:{model:t.form,"label-width":"130px",rules:t.rules,"inline-message":!0}},[i("el-form-item",{attrs:{label:"招聘名称",prop:"name"}},[i("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("el-form-item",{attrs:{label:"报名日期",prop:"sign_up_time"}},[i("el-date-picker",{attrs:{type:"datetimerange","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.form.sign_up_time,callback:function(e){t.$set(t.form,"sign_up_time",e)},expression:"form.sign_up_time"}})],1),i("el-form-item",{attrs:{label:"审核截止时间",prop:"audit_end_time"}},[i("el-date-picker",{attrs:{type:"datetime",placeholder:"请选择日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.form.audit_end_time,callback:function(e){t.$set(t.form,"audit_end_time",e)},expression:"form.audit_end_time"}})],1),i("el-form-item",{attrs:{label:"查分时间",prop:"pen_query_time"}},[i("el-date-picker",{attrs:{type:"datetime",placeholder:"请选择日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.form.pen_query_time,callback:function(e){t.$set(t.form,"pen_query_time",e)},expression:"form.pen_query_time"}})],1),i("el-form-item",{attrs:{label:"是否显示报名情况"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.show_sign_up_state,callback:function(e){t.$set(t.form,"show_sign_up_state",e)},expression:"form.show_sign_up_state"}})],1),i("el-form-item",{attrs:{label:"是否显示"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.is_display,callback:function(e){t.$set(t.form,"is_display",e)},expression:"form.is_display"}})],1),i("el-form-item",{attrs:{label:"是否开启报名"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.is_open_signup,callback:function(e){t.$set(t.form,"is_open_signup",e)},expression:"form.is_open_signup"}})],1),i("el-form-item",{attrs:{label:"是否开启修改"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.is_open_modify,callback:function(e){t.$set(t.form,"is_open_modify",e)},expression:"form.is_open_modify"}})],1),i("el-form-item",{attrs:{label:"开启报名打印表"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.is_open_sign_table,callback:function(e){t.$set(t.form,"is_open_sign_table",e)},expression:"form.is_open_sign_table"}})],1),i("el-form-item",{attrs:{label:"是否开启成绩查询"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.is_open_report_card,callback:function(e){t.$set(t.form,"is_open_report_card",e)},expression:"form.is_open_report_card"}})],1),i("el-form-item",{attrs:{label:"报考指南"}},[i("div",{staticClass:"guide",attrs:{id:"editor"}})]),i("el-form-item",{attrs:{label:"报考协议"}},[i("div",{staticClass:"editor_chengxin",attrs:{id:"editor_chengxin"}})]),i("el-form-item",{attrs:{label:"自定义字段名称"}},[i("el-input",{model:{value:t.custom_field_list.name,callback:function(e){t.$set(t.custom_field_list,"name",e)},expression:"custom_field_list.name"}})],1),i("el-form-item",{attrs:{label:"自定义字段类型"}},[i("el-select",{model:{value:t.custom_field_list.type,callback:function(e){t.$set(t.custom_field_list,"type",e)},expression:"custom_field_list.type"}},[i("el-option",{attrs:{label:"短文本",value:"1"}}),i("el-option",{attrs:{label:"长文本",value:"2"}}),i("el-option",{attrs:{label:"文件上传",value:"3"}})],1)],1),i("el-form-item",{attrs:{label:"字段是否必填"}},[i("el-select",{model:{value:t.custom_field_list.required,callback:function(e){t.$set(t.custom_field_list,"required",e)},expression:"custom_field_list.required"}},[i("el-option",{attrs:{label:"必填",value:"1"}}),i("el-option",{attrs:{label:"不必填",value:"0"}})],1)],1),i("el-form-item",{attrs:{label:"添加自定义字段"}},[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.addcustom}},[t._v("添加")])],1),i("el-form-item",[i("div",{staticStyle:{border:"1px solid #ccc"}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.form.custom_field,"max-height":"250"}},[i("el-table-column",{attrs:{prop:"name",label:"自定义字段名称","min-width":"120"}}),i("el-table-column",{attrs:{label:"自定义字段类型","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(1==e.row.type?"短文本":2==e.row.type?"长文本":"文件上传"))])]}}])}),i("el-table-column",{attrs:{label:"字段是否必填","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(1==e.row.required?"必填":"不必填"))])]}}])}),i("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(i){return i.preventDefault(),t.deleteRow(e.$index,t.form.custom_field)}}},[t._v(" 移除 ")])]}}])})],1)],1)]),t.isShow?i("div",[i("el-form-item",{attrs:{label:" 考生信息"}},[i("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.form.switch_id_card,callback:function(e){t.$set(t.form,"switch_id_card",e)},expression:"form.switch_id_card"}},[t._v("身份证正反面")]),i("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.form.switch_email,callback:function(e){t.$set(t.form,"switch_email",e)},expression:"form.switch_email"}},[t._v("邮箱")]),i("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.form.switch_marriage,callback:function(e){t.$set(t.form,"switch_marriage",e)},expression:"form.switch_marriage"}},[t._v("婚姻")]),i("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.form.switch_birth,callback:function(e){t.$set(t.form,"switch_birth",e)},expression:"form.switch_birth"}},[t._v("生育")]),i("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.form.switch_photo,callback:function(e){t.$set(t.form,"switch_photo",e)},expression:"form.switch_photo"}},[t._v("一寸照片")]),i("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.form.switch_academic_certificate,callback:function(e){t.$set(t.form,"switch_academic_certificate",e)},expression:"form.switch_academic_certificate"}},[t._v("学历证书")]),i("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.form.switch_family_background,callback:function(e){t.$set(t.form,"switch_family_background",e)},expression:"form.switch_family_background"}},[t._v("家庭背景")]),i("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.form.switch_height,callback:function(e){t.$set(t.form,"switch_height",e)},expression:"form.switch_height"}},[t._v("身高")]),i("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.form.switch_weight,callback:function(e){t.$set(t.form,"switch_weight",e)},expression:"form.switch_weight"}},[t._v("体重")]),i("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.form.switch_vision,callback:function(e){t.$set(t.form,"switch_vision",e)},expression:"form.switch_vision"}},[t._v("视力")]),i("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.form.drivers_license,callback:function(e){t.$set(t.form,"drivers_license",e)},expression:"form.drivers_license"}},[t._v("驾驶证")]),i("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.form.switch_fresh_graduates,callback:function(e){t.$set(t.form,"switch_fresh_graduates",e)},expression:"form.switch_fresh_graduates"}},[t._v("应届毕业生")]),i("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.form.switch_title,callback:function(e){t.$set(t.form,"switch_title",e)},expression:"form.switch_title"}},[t._v("职称")]),i("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.form.switch_diploma,callback:function(e){t.$set(t.form,"switch_diploma",e)},expression:"form.switch_diploma"}},[t._v(" 学士学位证书")]),i("el-checkbox",{attrs:{"true-label":1,"false-label":0,disabled:""},model:{value:t.form.switch_educational_background,callback:function(e){t.$set(t.form,"switch_educational_background",e)},expression:"form.switch_educational_background"}},[t._v("教育背景")]),i("el-checkbox",{attrs:{disabled:"","true-label":1,"false-label":0},model:{value:t.form.switch_job_info,callback:function(e){t.$set(t.form,"switch_job_info",e)},expression:"form.switch_job_info"}},[t._v("工作信息")])],1),i("el-form-item",{attrs:{label:"是否笔试"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:t.is_itwChange},model:{value:t.form.is_pen,callback:function(e){t.$set(t.form,"is_pen",e)},expression:"form.is_pen"}})],1),t.written_isShow?i("div",[i("el-form-item",{attrs:{label:"笔试缴费金额"}},[i("el-input",{model:{value:t.form.pen_money,callback:function(e){t.$set(t.form,"pen_money",e)},expression:"form.pen_money"}}),t._v(" 元 ")],1),i("el-form-item",{attrs:{label:"笔试缴费日期"}},[i("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.form.pen_pay_time,callback:function(e){t.$set(t.form,"pen_pay_time",e)},expression:"form.pen_pay_time"}})],1),i("el-form-item",{attrs:{label:"打印准考证日期"}},[i("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.form.pen_print_time,callback:function(e){t.$set(t.form,"pen_print_time",e)},expression:"form.pen_print_time"}})],1),i("el-form-item",{attrs:{label:"笔试考试时间"}},[i("el-input",{model:{value:t.form.pen_test_time,callback:function(e){t.$set(t.form,"pen_test_time",e)},expression:"form.pen_test_time"}})],1),i("el-form-item",{attrs:{label:"笔试考试地址"}},[i("el-input",{model:{value:t.form.pen_test_addr,callback:function(e){t.$set(t.form,"pen_test_addr",e)},expression:"form.pen_test_addr"}})],1),i("el-form-item",{attrs:{label:" 笔试注意事项"}},[i("div",{staticClass:"editor_interview",attrs:{id:"editor_interview"}})])],1):t._e(),i("el-form-item",{attrs:{label:"是否面试"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:t.is_penChange},model:{value:t.form.is_itw,callback:function(e){t.$set(t.form,"is_itw",e)},expression:"form.is_itw"}})],1),t.interview_isShow?i("div",[i("el-form-item",{attrs:{label:"面试缴费金额"}},[i("el-input",{model:{value:t.form.itw_money,callback:function(e){t.$set(t.form,"itw_money",e)},expression:"form.itw_money"}}),t._v(" 元 ")],1),i("el-form-item",{attrs:{label:"面试缴费日期"}},[i("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.form.itw_pay_time,callback:function(e){t.$set(t.form,"itw_pay_time",e)},expression:"form.itw_pay_time"}})],1),i("el-form-item",{attrs:{label:"面试考试时间"}},[i("el-input",{model:{value:t.form.itw_time,callback:function(e){t.$set(t.form,"itw_time",e)},expression:"form.itw_time"}})],1),i("el-form-item",{attrs:{label:"面试考场"}},[i("el-input",{model:{value:t.form.itw_room,callback:function(e){t.$set(t.form,"itw_room",e)},expression:"form.itw_room"}})],1),i("el-form-item",{attrs:{label:"面试考试地址"}},[i("el-input",{model:{value:t.form.itw_addr,callback:function(e){t.$set(t.form,"itw_addr",e)},expression:"form.itw_addr"}})],1),i("el-form-item",{attrs:{label:"打印面试表日期"}},[i("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.form.itw_print_time,callback:function(e){t.$set(t.form,"itw_print_time",e)},expression:"form.itw_print_time"}})],1),i("el-form-item",{attrs:{label:" 面试注意事项"}},[i("div",{staticClass:"editor_note",attrs:{id:"editor_note"}})])],1):t._e()],1):t._e(),i("el-form-item",{attrs:{label:""}},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("保存")]),i("el-button",{on:{click:t.goto}},[t._v("返回")])],1)],1)],1)],1)},o=[],a=(i("c975"),i("a434"),i("b0c0"),i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("96cf"),i("1da1")),n=i("61f7"),s=i("6fad"),l=i.n(s),m=i("d722"),c=i("5f87"),_=i("63a1"),d={data:function(){var t=this,e=function(e,i,r){i=t.editor.txt.text(),""===i?r(new Error("请输入内容")):r()},i=function(e,i,r){i=t.editor_chengxin.txt.text(),""===i?r(new Error("请输入内容")):r()},r=function(e,i,r){i=t.editor_interview.txt.text(),""==i&&r(),Object(n["d"])(i)?r():r(new Error("请输入正确的网址"))},o=function(e,i,r){i=t.editor_note.txt.text(),""==i&&r(),Object(n["d"])(i)?r():r(new Error("请输入正确的网址"))};return{exam_project_id:"",headers:{admintoken:Object(c["e"])()},apiUpload:window.global.RequestBaseUrl+m["a"].upload,apiAttachUpload:window.global.RequestBaseUrl+m["a"].uploadAttach,editor:"",editor_chengxin:"",editor_interview:"",editor_note:"",articleCategory:[],custom_field_list:{name:"",type:"",required:""},form:{exam_project_id:"",name:"",guide:"",treaty:"",remarks:"",sign_up_time:[],sign_up_start_time:"",sign_up_end_time:"",audit_end_time:"",is_pen:0,pen_money:"",pen_pay_time:[],pen_pay_start_time:"",pen_pay_end_time:"",pen_test_time:"",pen_test_addr:"",pen_query_time:"",pen_note:"",pen_print_time:[],pen_print_start_time:"",pen_print_end_time:"",is_itw:0,itw_money:"",itw_pay_time:[],itw_pay_start_time:"",itw_pay_end_time:"",itw_time:"",itw_room:"",itw_addr:"",itw_note:"",itw_print_time:[],itw_print_start_time:"",itw_print_end_time:"",show_sign_up_state:0,is_display:0,is_open_signup:0,is_open_modify:0,is_open_sign_table:0,is_open_report_card:0,switch_email:0,switch_marriage:1,switch_birth:1,switch_id_card:1,switch_photo:1,switch_academic_certificate:0,switch_educational_background:1,switch_family_background:0,switch_height:0,switch_weight:0,switch_vision:0,switch_job_info:1,drivers_license:0,switch_fresh_graduates:0,custom_field:[]},isShow:!0,written_isShow:!1,interview_isShow:!1,imageUrl:"",rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],sign_up_time:[{required:!0,message:"请选择日期",trigger:"change"}],audit_end_time:[{type:"string",required:!0,message:"请选择日期",trigger:"change"}],pen_query_time:[{type:"string",required:!0,message:"请选择日期",trigger:"change"}]},content:[{validator:e,trigger:"blur"}],content1:[{validator:i,trigger:"blur"}],content2:[{validator:r,trigger:"blur"}],content3:[{validator:o,trigger:"blur"}]}},computed:{config:function(){return this.$store.state.config}},mounted:function(){this.editor=new l.a("#editor"),this.editor.config.uploadImgServer=window.global.RequestBaseUrl+m["a"].uploadEditor,this.editor.config.uploadImgHeaders={admintoken:Object(c["e"])()},this.editor.config.zIndex=0,this.editor.config.pasteFilterStyle=!1,this.editor.create(),this.editor_chengxin=new l.a("#editor_chengxin"),this.editor_chengxin.config.uploadImgServer=window.global.RequestBaseUrl+m["a"].uploadEditor,this.editor_chengxin.config.uploadImgHeaders={admintoken:Object(c["e"])()},this.editor_chengxin.config.zIndex=0,this.editor_chengxin.config.pasteFilterStyle=!1,this.editor_chengxin.create()},created:function(){this.getid(),this.getList()},methods:{deleteRow:function(t,e){e.splice(t,1)},addcustom:function(){""!==this.custom_field_list.name&&this.custom_field_list.type&&this.custom_field_list.required?(this.form.custom_field.push(this.custom_field_list),this.custom_field_list=this.$options.data().custom_field_list):this.$message({message:"添加自定义字段请填写完整",type:"warning"})},getList:function(){var t=this;Object(_["z"])(this.form).then((function(e){200===e.code&&(t.form=e.data,t.form.sign_up_start_time&&t.$set(t.form,"sign_up_time",[t.form.sign_up_start_time,t.form.sign_up_end_time]),t.form.pen_pay_start_time&&t.$set(t.form,"pen_pay_time",[t.form.pen_pay_start_time,t.form.pen_pay_end_time]),t.form.itw_pay_start_time&&t.$set(t.form,"itw_pay_time",[t.form.itw_pay_start_time,t.form.itw_pay_end_time]),t.form.pen_print_start_time&&t.$set(t.form,"pen_print_time",[t.form.pen_print_start_time,t.form.pen_print_end_time]),t.form.itw_print_start_time&&t.$set(t.form,"itw_print_time",[t.form.itw_print_start_time,t.form.itw_print_end_time]),1==t.form.is_pen?(t.written_isShow=!0,t.$nextTick((function(){t.editor_interview=new l.a("#editor_interview"),t.editor_interview.config.uploadImgServer=window.global.RequestBaseUrl+m["a"].uploadEditor,t.editor_interview.config.uploadImgHeaders={admintoken:Object(c["e"])()},t.editor_interview.config.zIndex=0,t.editor_interview.config.pasteFilterStyle=!1,t.editor_interview.create(),t.editor_interview.txt.text(e.data.pen_note)}))):0==t.form.is_pen&&(t.written_isShow=!1),1==t.form.is_itw?(t.interview_isShow=!0,t.$nextTick((function(){t.editor_note=new l.a("#editor_note"),t.editor_note.config.uploadImgServer=window.global.RequestBaseUrl+m["a"].uploadEditor,t.editor_note.config.uploadImgHeaders={admintoken:Object(c["e"])()},t.editor_note.config.zIndex=0,t.editor_note.config.pasteFilterStyle=!1,t.editor_note.create(),t.editor_note.txt.text(e.data.itw_note)}))):0==t.form.is_itw&&(t.interview_isShow=!1),t.editor.txt.text(e.data.guide),t.editor_chengxin.txt.text(e.data.treaty),null!=e.data.custom_field&&void 0!=e.data.custom_field&&""!=e.data.custom_field||(t.form.custom_field=[]))}))},removeChange:function(){this.video=null},getid:function(){this.exam_project_id=this.$route.query.exam_project_id,this.form.exam_project_id=this.$route.query.exam_project_id},handleRemove:function(t,e){var i=this.form.attach.indexOf({name:t.name,url:t.url});this.form.attach.splice(i,1)},handleAttachSuccess:function(t,e){if(200!=t.code)return this.$message.error(t.message),!1;var i={name:t.data.name,url:t.data.url};this.form.attach.push(i)},onSubmit:function(t){var e=this;this.form.sign_up_time&&(this.form.sign_up_start_time=this.form.sign_up_time[0],this.form.sign_up_end_time=this.form.sign_up_time[1]),this.form.pen_pay_time&&(this.form.pen_pay_start_time=this.form.pen_pay_time[0],this.form.pen_pay_end_time=this.form.pen_pay_time[1]),this.form.itw_pay_time&&(this.form.itw_pay_start_time=this.form.itw_pay_time[0],this.form.itw_pay_end_time=this.form.itw_pay_time[1]),this.form.pen_print_time&&(this.form.pen_print_start_time=this.form.pen_print_time[0],this.form.pen_print_end_time=this.form.pen_print_time[1]),this.form.itw_print_time&&(this.form.itw_print_start_time=this.form.itw_print_time[0],this.form.itw_print_end_time=this.form.itw_print_time[1]),this.form.guide=this.editor.txt.html(),this.form.treaty=this.editor_chengxin.txt.html(),this.editor_interview&&(this.form.pen_note=this.editor_interview.txt.html()),this.editor_note&&(this.form.itw_note=this.editor_note.txt.html()),0==this.form.is_pen&&(delete this.form.pen_money,delete this.form.pen_pay_start_time,delete this.form.pen_pay_end_time,delete this.form.pen_test_time,delete this.form.pen_test_addr,delete this.form.pen_note,delete this.form.pen_print_start_time,delete this.form.pen_print_end_time),0==this.form.is_itw&&(delete this.form.itw_money,delete this.form.itw_pay_start_time,delete this.form.itw_pay_end_time,delete this.form.itw_time,delete this.form.itw_room,delete this.form.itw_note,delete this.form.itw_print_start_time,delete this.form.itw_print_end_time),this.$refs[t].validate(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i){t.next=4;break}Object(_["A"])(e.form).then((function(t){200===t.code&&(e.$message({message:"编辑成功",type:"success"}),e.$router.go(-1))})),t.next=5;break;case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},handleThumbSuccess:function(t,e){if(200!=t.code)return this.$message.error(t.message),!1;this.imageUrl=URL.createObjectURL(e.raw),this.form.thumb=t.data.file_id},is_itwChange:function(){var t=this;1==this.form.is_pen?(this.written_isShow=!0,this.$nextTick((function(){t.editor_interview=new l.a("#editor_interview"),t.editor_interview.config.uploadImgServer=window.global.RequestBaseUrl+m["a"].uploadEditor,t.editor_interview.config.uploadImgHeaders={admintoken:Object(c["e"])()},t.editor_interview.config.zIndex=0,t.editor_interview.config.pasteFilterStyle=!1,t.editor_interview.create()}))):0==this.form.is_pen&&(this.written_isShow=!1)},is_penChange:function(){var t=this;1==this.form.is_itw?(this.interview_isShow=!0,this.$nextTick((function(){t.editor_note=new l.a("#editor_note"),t.editor_note.config.uploadImgServer=window.global.RequestBaseUrl+m["a"].uploadEditor,t.editor_note.config.uploadImgHeaders={admintoken:Object(c["e"])()},t.editor_note.config.zIndex=0,t.editor_note.config.pasteFilterStyle=!1,t.editor_note.create()}))):0==this.form.is_itw&&(this.interview_isShow=!1)},goto:function(t){this.$router.push({path:"/theTest/recruitment/recruitment"})}}},u=d,f=(i("91d4"),i("2877")),p=Object(f["a"])(u,r,o,!1,null,"3444470b",null);e["default"]=p.exports},"63a1":function(t,e,i){"use strict";i.d(e,"p",(function(){return a})),i.d(e,"g",(function(){return n})),i.d(e,"z",(function(){return s})),i.d(e,"A",(function(){return l})),i.d(e,"t",(function(){return m})),i.d(e,"h",(function(){return c})),i.d(e,"q",(function(){return _})),i.d(e,"s",(function(){return d})),i.d(e,"r",(function(){return u})),i.d(e,"w",(function(){return f})),i.d(e,"v",(function(){return p})),i.d(e,"u",(function(){return h})),i.d(e,"m",(function(){return b})),i.d(e,"k",(function(){return w})),i.d(e,"l",(function(){return g})),i.d(e,"n",(function(){return v})),i.d(e,"o",(function(){return y})),i.d(e,"x",(function(){return x})),i.d(e,"d",(function(){return k})),i.d(e,"a",(function(){return $})),i.d(e,"y",(function(){return j})),i.d(e,"b",(function(){return O})),i.d(e,"e",(function(){return S})),i.d(e,"i",(function(){return q})),i.d(e,"j",(function(){return I})),i.d(e,"c",(function(){return H})),i.d(e,"f",(function(){return U}));var r=i("b775"),o=i("d722");function a(t){return Object(r["a"])({url:o["a"].index,method:"post",data:t})}function n(t){return Object(r["a"])({url:o["a"].add,method:"post",data:t})}function s(t){return Object(r["a"])({url:o["a"].zhaopindetails,method:"post",data:t})}function l(t){return Object(r["a"])({url:o["a"].zhaopinedit,method:"post",data:t})}function m(t){return Object(r["a"])({url:o["a"].jobsList,method:"post",data:t})}function c(t){return Object(r["a"])({url:o["a"].deletejob,method:"post",data:t})}function _(t){return Object(r["a"])({url:o["a"].jobadd,method:"post",data:t})}function d(t){return Object(r["a"])({url:o["a"].jobedit,method:"post",data:t})}function u(t){return Object(r["a"])({url:o["a"].jobdetails,method:"post",data:t})}function f(t){return Object(r["a"])({url:o["a"].signUpList,method:"post",data:t})}function p(t){return Object(r["a"])({url:o["a"].signUpDetails,method:"post",data:t})}function h(t){return Object(r["a"])({url:o["a"].print_stub_form,method:"post",data:t})}function b(t){return Object(r["a"])({url:o["a"].gongaoList,method:"post",data:t})}function w(t){return Object(r["a"])({url:o["a"].getGongaoList,method:"POST",data:t})}function g(t){return Object(r["a"])({url:o["a"].gongaoAdd,method:"post",data:t})}function v(t){return Object(r["a"])({url:o["a"].gongaodelete,method:"post",data:t})}function y(t){return Object(r["a"])({url:o["a"].gongaoedit,method:"post",data:t})}function x(t){return Object(r["a"])({url:o["a"].verify,method:"post",data:t})}function k(t){return Object(r["a"])({url:o["a"].ImportAchievement,method:"post",data:t})}function $(t){return Object(r["a"])({url:o["a"].ExportForInImportAchievement,method:"post",data:t})}function j(t){return Object(r["a"])({url:o["a"].xiangmudelete,method:"post",data:t})}function O(t){return Object(r["a"])({url:o["a"].ExportForInImportAdmissionTicket,method:"post",data:t})}function S(t){return Object(r["a"])({url:o["a"].ImportAdmissionTicket,method:"post",data:t})}function q(t){return Object(r["a"])({url:o["a"].dindanList,method:"post",data:t})}function I(t){return Object(r["a"])({url:o["a"].dingdandetail,method:"post",data:t})}function H(t){return Object(r["a"])({url:o["a"].ExportSignList,method:"POST",data:t})}function U(t){return Object(r["a"])({url:o["a"].SetPayTag,method:"POST",data:t})}},"91d4":function(t,e,i){"use strict";var r=i("98763"),o=i.n(r);o.a},98763:function(t,e,i){}}]);