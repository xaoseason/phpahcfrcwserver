(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45ea182e"],{"396d":function(t,e,r){},"52b5":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("b775"),o=r("d722");function a(t){return Object(n["a"])({url:o["a"].getClassify,method:"get",params:t})}},"63a1":function(t,e,r){"use strict";r.d(e,"p",(function(){return a})),r.d(e,"g",(function(){return i})),r.d(e,"z",(function(){return l})),r.d(e,"A",(function(){return u})),r.d(e,"t",(function(){return s})),r.d(e,"h",(function(){return d})),r.d(e,"q",(function(){return c})),r.d(e,"s",(function(){return m})),r.d(e,"r",(function(){return f})),r.d(e,"w",(function(){return p})),r.d(e,"v",(function(){return _})),r.d(e,"u",(function(){return b})),r.d(e,"m",(function(){return h})),r.d(e,"k",(function(){return g})),r.d(e,"l",(function(){return v})),r.d(e,"n",(function(){return w})),r.d(e,"o",(function(){return y})),r.d(e,"x",(function(){return j})),r.d(e,"d",(function(){return x})),r.d(e,"a",(function(){return O})),r.d(e,"y",(function(){return k})),r.d(e,"b",(function(){return $})),r.d(e,"e",(function(){return q})),r.d(e,"i",(function(){return S})),r.d(e,"j",(function(){return A})),r.d(e,"c",(function(){return L})),r.d(e,"f",(function(){return C}));var n=r("b775"),o=r("d722");function a(t){return Object(n["a"])({url:o["a"].index,method:"post",data:t})}function i(t){return Object(n["a"])({url:o["a"].add,method:"post",data:t})}function l(t){return Object(n["a"])({url:o["a"].zhaopindetails,method:"post",data:t})}function u(t){return Object(n["a"])({url:o["a"].zhaopinedit,method:"post",data:t})}function s(t){return Object(n["a"])({url:o["a"].jobsList,method:"post",data:t})}function d(t){return Object(n["a"])({url:o["a"].deletejob,method:"post",data:t})}function c(t){return Object(n["a"])({url:o["a"].jobadd,method:"post",data:t})}function m(t){return Object(n["a"])({url:o["a"].jobedit,method:"post",data:t})}function f(t){return Object(n["a"])({url:o["a"].jobdetails,method:"post",data:t})}function p(t){return Object(n["a"])({url:o["a"].signUpList,method:"post",data:t})}function _(t){return Object(n["a"])({url:o["a"].signUpDetails,method:"post",data:t})}function b(t){return Object(n["a"])({url:o["a"].print_stub_form,method:"post",data:t})}function h(t){return Object(n["a"])({url:o["a"].gongaoList,method:"post",data:t})}function g(t){return Object(n["a"])({url:o["a"].getGongaoList,method:"POST",data:t})}function v(t){return Object(n["a"])({url:o["a"].gongaoAdd,method:"post",data:t})}function w(t){return Object(n["a"])({url:o["a"].gongaodelete,method:"post",data:t})}function y(t){return Object(n["a"])({url:o["a"].gongaoedit,method:"post",data:t})}function j(t){return Object(n["a"])({url:o["a"].verify,method:"post",data:t})}function x(t){return Object(n["a"])({url:o["a"].ImportAchievement,method:"post",data:t})}function O(t){return Object(n["a"])({url:o["a"].ExportForInImportAchievement,method:"post",data:t})}function k(t){return Object(n["a"])({url:o["a"].xiangmudelete,method:"post",data:t})}function $(t){return Object(n["a"])({url:o["a"].ExportForInImportAdmissionTicket,method:"post",data:t})}function q(t){return Object(n["a"])({url:o["a"].ImportAdmissionTicket,method:"post",data:t})}function S(t){return Object(n["a"])({url:o["a"].dindanList,method:"post",data:t})}function A(t){return Object(n["a"])({url:o["a"].dingdandetail,method:"post",data:t})}function L(t){return Object(n["a"])({url:o["a"].ExportSignList,method:"POST",data:t})}function C(t){return Object(n["a"])({url:o["a"].SetPayTag,method:"POST",data:t})}},baef:function(t,e,r){"use strict";var n=r("396d"),o=r.n(n);o.a},e1ea:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("添加岗位")]),r("el-button",{staticStyle:{float:"right",padding:"0","margin-left":"14px"},attrs:{type:"text"},on:{click:t.goto}},[t._v(" 返回 ")]),r("el-button",{staticStyle:{float:"right",padding:"0"},attrs:{type:"text"},on:{click:function(e){return t.onSubmit("form")}}},[t._v(" 保存 ")])],1),r("el-form",{ref:"form",staticClass:"common-form",attrs:{model:t.form,"label-width":"120px",rules:t.rules,"inline-message":!0}},[r("el-form-item",{attrs:{label:"岗位名称",prop:"name"}},[r("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"岗位代码",prop:"code"}},[r("el-input",{model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),r("el-form-item",{attrs:{label:"招录人数",prop:"number"}},[r("el-input",{model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],1),r("el-form-item",{attrs:{label:"自定义字段名称"}},[r("el-input",{model:{value:t.custom_field_list.name,callback:function(e){t.$set(t.custom_field_list,"name",e)},expression:"custom_field_list.name"}})],1),r("el-form-item",{attrs:{label:"自定义字段类型"}},[r("el-select",{model:{value:t.custom_field_list.type,callback:function(e){t.$set(t.custom_field_list,"type",e)},expression:"custom_field_list.type"}},[r("el-option",{attrs:{label:"短文本",value:"1"}}),r("el-option",{attrs:{label:"长文本",value:"2"}}),r("el-option",{attrs:{label:"文件上传",value:"3"}})],1)],1),r("el-form-item",{attrs:{label:"字段是否必填"}},[r("el-select",{model:{value:t.custom_field_list.required,callback:function(e){t.$set(t.custom_field_list,"required",e)},expression:"custom_field_list.required"}},[r("el-option",{attrs:{label:"必填",value:"1"}}),r("el-option",{attrs:{label:"不必填",value:"0"}})],1)],1),r("el-form-item",{attrs:{label:"添加自定义字段"}},[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.addcustom}},[t._v("添加")])],1),r("el-form-item",[r("div",{staticStyle:{border:"1px solid #ccc"}},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.form.custom_field,"max-height":"250"}},[r("el-table-column",{attrs:{prop:"name",label:"自定义字段名称","min-width":"120"}}),r("el-table-column",{attrs:{label:"自定义字段类型","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(1==e.row.type?"短文本":2==e.row.type?"长文本":"文件上传"))])]}}])}),r("el-table-column",{attrs:{label:"字段是否必填","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(1==e.row.required?"必填":"不必填"))])]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(r){return r.preventDefault(),t.deleteRow(e.$index,t.form.custom_field)}}},[t._v(" 移除 ")])]}}])})],1)],1)]),r("el-form-item",{attrs:{label:"是否显示"}},[r("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.is_display,callback:function(e){t.$set(t.form,"is_display",e)},expression:"form.is_display"}})],1),r("el-form-item",{attrs:{label:"是否开启笔试"}},[r("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.is_pen,callback:function(e){t.$set(t.form,"is_pen",e)},expression:"form.is_pen"}})],1),t.form.is_pen?r("div",[r("el-form-item",{attrs:{label:"笔试缴费金额",prop:"pen_money"}},[r("el-input",{attrs:{placeholder:"请输入笔试缴费金额(留空则使用项目配置中的设置)"},model:{value:t.form.pen_money,callback:function(e){t.$set(t.form,"pen_money",e)},expression:"form.pen_money"}}),t._v(" 元 ")],1),r("el-form-item",{attrs:{label:"考试地址",prop:"pen_test_addr"}},[r("el-input",{attrs:{placeholder:"请输入考试地址(留空则使用项目配置中的设置)"},model:{value:t.form.pen_test_addr,callback:function(e){t.$set(t.form,"pen_test_addr",e)},expression:"form.pen_test_addr"}})],1),r("el-form-item",{attrs:{label:"笔试考试时间",prop:"pen_test_time"}},[r("el-input",{attrs:{placeholder:"请选择笔试考试时间(留空则使用项目配置中的设置)"},model:{value:t.form.pen_test_time,callback:function(e){t.$set(t.form,"pen_test_time",e)},expression:"form.pen_test_time"}})],1)],1):t._e(),r("el-form-item",{attrs:{label:"是否开启面试"}},[r("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.is_itw,callback:function(e){t.$set(t.form,"is_itw",e)},expression:"form.is_itw"}})],1),t.form.is_itw?r("div",[r("el-form-item",{attrs:{label:"面试缴费金额",prop:"itw_money"}},[r("el-input",{attrs:{placeholder:"请输入面试缴费金额(留空则使用项目配置中的设置)"},model:{value:t.form.itw_money,callback:function(e){t.$set(t.form,"itw_money",e)},expression:"form.itw_money"}}),t._v(" 元 ")],1),r("el-form-item",{attrs:{label:"面试地址",prop:"itw_addr"}},[r("el-input",{attrs:{placeholder:"请输入面试地址(留空则使用项目配置中的设置)"},model:{value:t.form.itw_addr,callback:function(e){t.$set(t.form,"itw_addr",e)},expression:"form.itw_addr"}})],1),r("el-form-item",{attrs:{label:"面试时间",prop:"itw_time"}},[r("el-input",{attrs:{placeholder:"请选择面试考试时间(留空则使用项目配置中的设置)"},model:{value:t.form.itw_time,callback:function(e){t.$set(t.form,"itw_time",e)},expression:"form.itw_time"}})],1)],1):t._e(),r("el-form-item",{attrs:{label:""}},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("保存")]),r("el-button",{on:{click:t.goto}},[t._v("返回")])],1)],1)],1)],1)},o=[],a=(r("a434"),r("b0c0"),r("96cf"),r("1da1")),i=(r("f2d1"),r("52b5"),r("6fad"),r("d722"),r("5f87"),r("63a1")),l={data:function(){return{editor:"",helpCategory:[],exam_project_id:"",form:{exam_project_id:"",name:"",code:"",number:"",is_pen:0,pen_money:"",pen_test_addr:"",pen_test_time:"",is_itw:0,itw_money:"",itw_addr:"",itw_time:"",is_display:0,custom_field:[]},custom_field_list:{name:"",type:"",required:""},interview_isShow:!0,rules:{name:[{required:!0,message:"请输入岗位名称",trigger:"blur"}],code:[{required:!0,message:"请输入岗位代码",trigger:"blur"}],number:[{required:!0,message:"请输入招录人数",trigger:"blur"}],pen_money:[{message:"请输入笔试缴费金额(留空则使用项目配置中的设置)",trigger:"blur"}],pen_test_addr:[{message:"请输入考试地址(留空则使用项目配置中的设置)",trigger:"blur"}],pen_test_time:[{message:"请选择笔试考试时间(留空则使用项目配置中的设置)",trigger:"blur"}],type:[{required:!0,message:"请选择",trigger:"change"}],required:[{required:!0,message:"请选择",trigger:"change"}],itw_money:[{message:"请输入面试缴费金额(留空则使用项目配置中的设置)",trigger:"blur"}],itw_addr:[{message:"请输入面试地址(留空则使用项目配置中的设置)",trigger:"blur"}],itw_time:[{message:"请选择面试考试时间(留空则使用项目配置中的设置)",trigger:"blur"}]}}},created:function(){this.getid()},methods:{deleteRow:function(t,e){e.splice(t,1)},addcustom:function(){""!==this.custom_field_list.name&&this.custom_field_list.type&&this.custom_field_list.required?(this.form.custom_field.push(this.custom_field_list),this.custom_field_list=this.$options.data().custom_field_list):this.$message({message:"添加自定义字段请填写完整",type:"warning"})},onSubmit:function(t){var e=this;this.$refs[t].validate(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=6;break}0==e.form.is_pen&&(delete e.form.pen_money,delete e.form.pen_test_addr,delete e.form.pen_test_time),0==e.form.is_itw&&(delete e.form.itw_money,delete e.form.itw_addr,delete e.form.itw_time),Object(i["q"])(e.form).then((function(t){200===t.code&&(e.$message({message:"添加成功",type:"success"}),e.$router.go(-1))})),t.next=7;break;case 6:return t.abrupt("return",!1);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getid:function(){this.exam_project_id=this.$route.query.exam_project_id,this.form.exam_project_id=this.$route.query.exam_project_id},goto:function(){this.$router.go(-1)}}},u=l,s=(r("baef"),r("2877")),d=Object(s["a"])(u,n,o,!1,null,"28f01138",null);e["default"]=d.exports},f2d1:function(t,e,r){"use strict";r.d(e,"d",(function(){return a})),r.d(e,"a",(function(){return i})),r.d(e,"c",(function(){return l})),r.d(e,"b",(function(){return u}));var n=r("b775"),o=r("d722");function a(t){return Object(n["a"])({url:o["a"].helpList,method:"get",params:t})}function i(t){return Object(n["a"])({url:o["a"].helpAdd,method:"post",data:t})}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"post";return"post"==e?Object(n["a"])({url:o["a"].helpEdit,method:e,data:t}):Object(n["a"])({url:o["a"].helpEdit,method:e,params:t})}function u(t){return Object(n["a"])({url:o["a"].helpDelete,method:"post",data:t})}}}]);