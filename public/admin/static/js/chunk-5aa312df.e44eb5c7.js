(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5aa312df"],{"52b5":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("b775"),o=r("d722");function a(e){return Object(n["a"])({url:o["a"].getClassify,method:"get",params:e})}},"63a1":function(e,t,r){"use strict";r.d(t,"k",(function(){return a})),r.d(t,"e",(function(){return i})),r.d(t,"u",(function(){return u})),r.d(t,"v",(function(){return l})),r.d(t,"o",(function(){return s})),r.d(t,"f",(function(){return m})),r.d(t,"l",(function(){return d})),r.d(t,"n",(function(){return c})),r.d(t,"m",(function(){return f})),r.d(t,"r",(function(){return p})),r.d(t,"q",(function(){return b})),r.d(t,"p",(function(){return _})),r.d(t,"h",(function(){return g})),r.d(t,"g",(function(){return h})),r.d(t,"i",(function(){return v})),r.d(t,"j",(function(){return j})),r.d(t,"s",(function(){return y})),r.d(t,"c",(function(){return w})),r.d(t,"a",(function(){return x})),r.d(t,"t",(function(){return O})),r.d(t,"b",(function(){return k})),r.d(t,"d",(function(){return q}));var n=r("b775"),o=r("d722");function a(e){return Object(n["a"])({url:o["a"].index,method:"post",data:e})}function i(e){return Object(n["a"])({url:o["a"].add,method:"post",data:e})}function u(e){return Object(n["a"])({url:o["a"].zhaopindetails,method:"post",data:e})}function l(e){return Object(n["a"])({url:o["a"].zhaopinedit,method:"post",data:e})}function s(e){return Object(n["a"])({url:o["a"].jobsList,method:"post",data:e})}function m(e){return Object(n["a"])({url:o["a"].deletejob,method:"post",data:e})}function d(e){return Object(n["a"])({url:o["a"].jobadd,method:"post",data:e})}function c(e){return Object(n["a"])({url:o["a"].jobedit,method:"post",data:e})}function f(e){return Object(n["a"])({url:o["a"].jobdetails,method:"post",data:e})}function p(e){return Object(n["a"])({url:o["a"].signUpList,method:"post",data:e})}function b(e){return Object(n["a"])({url:o["a"].signUpDetails,method:"post",data:e})}function _(e){return Object(n["a"])({url:o["a"].print_stub_form,method:"post",data:e})}function g(e){return Object(n["a"])({url:o["a"].gongaoList,method:"post",data:e})}function h(e){return Object(n["a"])({url:o["a"].gongaoAdd,method:"post",data:e})}function v(e){return Object(n["a"])({url:o["a"].gongaodelete,method:"post",data:e})}function j(e){return Object(n["a"])({url:o["a"].gongaoedit,method:"post",data:e})}function y(e){return Object(n["a"])({url:o["a"].verify,method:"post",data:e})}function w(e){return Object(n["a"])({url:o["a"].ImportAchievement,method:"post",data:e})}function x(e){return Object(n["a"])({url:o["a"].ExportForInImportAchievement,method:"post",data:e})}function O(e){return Object(n["a"])({url:o["a"].xiangmudelete,method:"post",data:e})}function k(e){return Object(n["a"])({url:o["a"].ExportForInImportAdmissionTicket,method:"post",data:e})}function q(e){return Object(n["a"])({url:o["a"].ImportAdmissionTicket,method:"post",data:e})}},ac6b:function(e,t,r){"use strict";var n=r("c842"),o=r.n(n);o.a},c842:function(e,t,r){},e1ea:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("添加岗位")]),r("el-button",{staticStyle:{float:"right",padding:"0","margin-left":"14px"},attrs:{type:"text"},on:{click:e.goto}},[e._v(" 返回 ")]),r("el-button",{staticStyle:{float:"right",padding:"0"},attrs:{type:"text"},on:{click:function(t){return e.onSubmit("form")}}},[e._v(" 保存 ")])],1),r("el-form",{ref:"form",staticClass:"common-form",attrs:{model:e.form,"label-width":"120px",rules:e.rules,"inline-message":!0}},[r("el-form-item",{attrs:{label:"岗位名称",prop:"name"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"岗位代码",prop:"code"}},[r("el-input",{model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),r("el-form-item",{attrs:{label:"招录人数",prop:"number"}},[r("el-input",{model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),r("el-form-item",{attrs:{label:"自定义字段名称"}},[r("el-input",{model:{value:e.form.custom_field[0].name,callback:function(t){e.$set(e.form.custom_field[0],"name",t)},expression:"form.custom_field[0].name"}})],1),r("el-form-item",{attrs:{label:"自定义字段类型"}},[r("el-select",{model:{value:e.form.custom_field[0].type,callback:function(t){e.$set(e.form.custom_field[0],"type",t)},expression:"form.custom_field[0].type"}},[r("el-option",{attrs:{label:"短文本",value:"1"}}),r("el-option",{attrs:{label:"长文本",value:"2"}}),r("el-option",{attrs:{label:"文件上传",value:"3"}})],1)],1),r("el-form-item",{attrs:{label:"字段是否必填"}},[r("el-select",{model:{value:e.form.custom_field[0].required,callback:function(t){e.$set(e.form.custom_field[0],"required",t)},expression:"form.custom_field[0].required"}},[r("el-option",{attrs:{label:"必填",value:"1"}}),r("el-option",{attrs:{label:"不必填",value:"0"}})],1)],1),r("el-form-item",{attrs:{label:"是否显示"}},[r("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.required,callback:function(t){e.$set(e.form,"required",t)},expression:"form.required"}})],1),r("el-form-item",{attrs:{label:"是否开启笔试"}},[r("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.is_pen,callback:function(t){e.$set(e.form,"is_pen",t)},expression:"form.is_pen"}})],1),e.form.is_pen?r("div",[r("el-form-item",{attrs:{label:"笔试缴费金额",prop:"pen_money"}},[r("el-input",{model:{value:e.form.pen_money,callback:function(t){e.$set(e.form,"pen_money",e._n(t))},expression:"form.pen_money"}}),e._v(" 元 ")],1),r("el-form-item",{attrs:{label:"考试地址",prop:"pen_test_addr"}},[r("el-input",{model:{value:e.form.pen_test_addr,callback:function(t){e.$set(e.form,"pen_test_addr",e._n(t))},expression:"form.pen_test_addr"}})],1),r("el-form-item",{attrs:{label:"笔试考试时间",prop:"pen_test_time"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"请选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form.pen_test_time,callback:function(t){e.$set(e.form,"pen_test_time",t)},expression:"form.pen_test_time"}})],1)],1):e._e(),r("el-form-item",{attrs:{label:"是否开启面试"}},[r("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.is_itw,callback:function(t){e.$set(e.form,"is_itw",t)},expression:"form.is_itw"}})],1),e.form.is_itw?r("div",[r("el-form-item",{attrs:{label:"面试缴费金额",prop:"itw_money"}},[r("el-input",{model:{value:e.form.itw_money,callback:function(t){e.$set(e.form,"itw_money",e._n(t))},expression:"form.itw_money"}}),e._v(" 元 ")],1),r("el-form-item",{attrs:{label:"面试地址",prop:"itw_addr"}},[r("el-input",{model:{value:e.form.itw_addr,callback:function(t){e.$set(e.form,"itw_addr",e._n(t))},expression:"form.itw_addr"}})],1),r("el-form-item",{attrs:{label:"面试时间",prop:"itw_time"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"请选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form.itw_time,callback:function(t){e.$set(e.form,"itw_time",t)},expression:"form.itw_time"}})],1)],1):e._e(),r("el-form-item",{attrs:{label:""}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("保存")]),r("el-button",{on:{click:e.goto}},[e._v("返回")])],1)],1)],1)],1)},o=[],a=(r("96cf"),r("1da1")),i=(r("f2d1"),r("52b5"),r("6fad"),r("d722"),r("5f87"),r("63a1")),u={data:function(){return{editor:"",helpCategory:[],exam_project_id:"",form:{exam_project_id:"",name:"",code:"",number:"",is_pen:0,pen_money:"",pen_test_addr:"",pen_test_time:0,is_itw:0,itw_money:"",itw_addr:"",itw_time:0,is_display:0,custom_field:[{name:"",type:"",required:""}]},interview_isShow:!0,rules:{name:[{required:!0,message:"请输入岗位名称",trigger:"blur"}],code:[{required:!0,message:"请输入岗位代码",trigger:"blur"}],number:[{required:!0,message:"请输入招录人数",trigger:"blur"}],pen_money:[{required:!0,message:"请输入笔试缴费金额",trigger:"blur"}],pen_test_addr:[{required:!0,message:"请输入考试地址",trigger:"blur"}],pen_test_time:[{required:!0,message:"请选择笔试考试时间",trigger:"blur"}],type:[{required:!0,message:"请选择",trigger:"change"}],required:[{required:!0,message:"请选择",trigger:"change"}],itw_money:[{required:!0,message:"请输入面试缴费金额",trigger:"blur"}],itw_addr:[{required:!0,message:"请输入面试地址",trigger:"blur"}],itw_time:[{required:!0,message:"请选择面试考试时间",trigger:"blur"}]}}},created:function(){this.getid()},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=6;break}0==t.form.is_pen&&(delete t.form.pen_money,delete t.form.pen_test_addr,delete t.form.pen_test_time),0==t.form.is_itw&&(delete t.form.itw_money,delete t.form.itw_addr,delete t.form.itw_time),Object(i["l"])(t.form).then((function(e){200===e.code&&(t.$message({message:"添加成功",type:"success"}),t.$router.go(-1))})),e.next=7;break;case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getid:function(){this.exam_project_id=this.$route.query.exam_project_id,this.form.exam_project_id=this.$route.query.exam_project_id},goto:function(){this.$router.go(-1)}}},l=u,s=(r("ac6b"),r("2877")),m=Object(s["a"])(l,n,o,!1,null,"12ebfb0d",null);t["default"]=m.exports},f2d1:function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return u})),r.d(t,"b",(function(){return l}));var n=r("b775"),o=r("d722");function a(e){return Object(n["a"])({url:o["a"].helpList,method:"get",params:e})}function i(e){return Object(n["a"])({url:o["a"].helpAdd,method:"post",data:e})}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"post";return"post"==t?Object(n["a"])({url:o["a"].helpEdit,method:t,data:e}):Object(n["a"])({url:o["a"].helpEdit,method:t,params:e})}function l(e){return Object(n["a"])({url:o["a"].helpDelete,method:"post",data:e})}}}]);