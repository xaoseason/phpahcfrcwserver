(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0909b3de"],{"0f61":function(t,e,a){"use strict";var r=a("9c23"),i=a.n(r);i.a},"5b4b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("考生情况")]),a("el-button",{staticClass:"shenhei",attrs:{size:"mini",type:"primary"},on:{click:t.back}},[t._v("返回")])],1),a("el-form",{ref:"form",attrs:{"label-width":"150px"}},[a("el-form-item",{attrs:{label:"真实姓名:"}},[t._v(" "+t._s(t.data.sign?t.data.sign.realname:""))]),a("el-form-item",{attrs:{label:"身份证号:"}},[t._v(" "+t._s(t.data.sign?t.data.sign.idcard:""))]),a("el-form-item",{attrs:{label:"电话:"}},[t._v(" "+t._s(t.data.resume_contact?t.data.resume_contact.mobile:""))]),a("el-form-item",{attrs:{label:"QQ:"}},[t._v(" "+t._s(t.data.resume_contact?t.data.resume_contact.qq:""))]),a("el-form-item",{attrs:{label:"微信:"}},[t._v(" "+t._s(t.data.resume_contact?t.data.resume_contact.weixin:""))]),a("el-form-item",{attrs:{label:"是否应届毕业生:"}},[t._v(" "+t._s(t.data.sign?1==t.data.sign.fresh_graduates?"是":"否":""))]),a("el-form-item",{attrs:{label:"审核状态:"}},[t._v(" "+t._s(t.data.sign?0==t.data.sign.status?"待审核":1==t.data.sign.status?"已审核":"未审核":""))]),a("el-form-item",{attrs:{label:"是否缴费笔试:"}},[t._v(" "+t._s(t.data.sign?1==t.data.sign.is_pay_pen?"是":"否":""))]),a("el-form-item",{attrs:{label:"是否缴费面试:"}},[t._v(" "+t._s(t.data.sign?1==t.data.sign.is_pay_itw?"是":"否":""))]),a("el-form-item",{attrs:{label:"紧急联系人:"}},[t._v(" "+t._s(t.data.resume_contact?t.data.resume_contact.sos_name:""))]),a("el-form-item",{attrs:{label:"紧急联系人电话:"}},[t._v(" "+t._s(t.data.resume_contact?t.data.resume_contact.sos_mobile:""))]),a("el-form-item",{attrs:{label:"备注:"}},[t._v(t._s(t.data.sign?t.data.sign.note:""))]),a("el-form-item",{attrs:{label:"户籍:"}},[t._v(t._s(t.data.resume?t.data.resume.hjd:""))]),1==t.data.project_info.switch_title?a("el-form-item",{attrs:{label:"职称:"}},[t._v(t._s(t.data.resume?t.data.resume.title:""))]):t._e(),t.data.resume?a("el-form-item",{attrs:{label:"退伍军人:"}},[t._v(t._s(1==t.data.resume.custom_field_3?"是":"否"))]):t._e(),a("el-form-item",{attrs:{label:"毕业院校:"}},[t._v(t._s(t.data.resume?t.data.resume.school:""))]),a("el-form-item",{attrs:{label:"最高学历:"}},[t._v(" "+t._s(this.gettitle(t.data.resume.education))+" ")]),a("el-form-item",{attrs:{label:"民族:"}},[t._v(t._s(t.data.resume?t.data.resume.nation:""))]),a("el-form-item",{attrs:{label:"居住地:"}},[t._v(t._s(t.data.resume?t.data.resume.residence:""))]),t.data.resume?a("el-form-item",{attrs:{label:"性别:"}},[t._v(t._s(1==t.data.resume.sex?"男":"女"))]):t._e(),1==t.data.project_info.switch_vision?a("el-form-item",{attrs:{label:"视力:"}},[t._v(t._s(t.data.resume.vision?t.data.resume.vision:""))]):t._e(),a("el-form-item",{attrs:{label:"政治面貌:"}},[t._v(t._s(t.data.resume?t.data.resume.custom_field_1:""))]),a("el-form-item",{attrs:{label:"毕业时间:"}},[t._v(t._s(t.data.resume?t.data.resume.custom_field_2:""))]),t.data.resume?a("el-form-item",{attrs:{label:"生育:"}},[t._v(t._s(1==t.data.resume.birth?"已育":"未育"))]):t._e(),t.data.resume?a("el-form-item",{attrs:{label:"一寸照片:"}},[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.data.resume.photo,"preview-src-list":[t.data.resume.photo]}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])],1):t._e(),t.data.exam_resume?a("el-form-item",{attrs:{label:"身份证正面:"}},[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.data.exam_resume.idcard_img_just,"preview-src-list":[t.data.exam_resume.idcard_img_just]}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])],1):t._e(),t.data.exam_resume?a("el-form-item",{attrs:{label:"身份证反面:"}},[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.data.exam_resume.idcard_img_back,"preview-src-list":[t.data.exam_resume.idcard_img_back]}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])],1):t._e(),t.data.exam_resume?a("el-form-item",{attrs:{label:"驾驶证:"}},[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.data.exam_resume.driver_certificate_img,"preview-src-list":[t.data.exam_resume.driver_certificate_img]}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])],1):t._e(),t.data.exam_resume?a("el-form-item",{attrs:{label:"学士学位证书:"}},[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.data.exam_resume.degree_img,"preview-src-list":[t.data.exam_resume.degree_img]}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])],1):t._e(),t.data.exam_resume?a("el-form-item",{attrs:{label:"学历证书:"}},[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.data.exam_resume.academic_certificate_img,"preview-src-list":[t.data.exam_resume.academic_certificate_img]}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])],1):t._e(),a("el-form-item",{attrs:{label:"教育经历:"}},[a("el-table",{staticStyle:{width:"700px"},attrs:{data:t.resume_education}},[a("el-table-column",{attrs:{prop:"school",label:"学校","min-width":"100"}}),a("el-table-column",{attrs:{prop:"major",label:"专业","min-width":"100"}}),a("el-table-column",{attrs:{prop:"education_text",label:"学历","min-width":"100"}}),a("el-table-column",{attrs:{prop:"starttime",label:"开始日期","min-width":"130"}}),a("el-table-column",{attrs:{prop:"endtime",label:"结束日期","min-width":"130"}})],1)],1),a("el-form-item",{attrs:{label:"工作经历:"}},[a("el-table",{staticStyle:{width:"700px"},attrs:{data:t.resume_work}},[a("el-table-column",{attrs:{prop:"companyname",label:"公司名称","min-width":"100"}}),a("el-table-column",{attrs:{prop:"jobname",label:"岗位名称","min-width":"100"}}),a("el-table-column",{attrs:{prop:"duty",label:"岗位职责","min-width":"100"}}),a("el-table-column",{attrs:{prop:"starttime",label:"开始日期","min-width":"130"}}),a("el-table-column",{attrs:{prop:"endtime",label:"结束日期","min-width":"130"}})],1)],1),a("el-form-item",{attrs:{label:"获得证书:"}},[a("el-table",{staticStyle:{width:"700px"},attrs:{data:t.resume_certificate}},[a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"130"}}),a("el-table-column",{attrs:{prop:"obtaintime",label:"获得年份","min-width":"130"}})],1)],1),t.data.resume?a("el-form-item",{attrs:{label:"上次不通过原因:"}},[t._v(t._s(void 0!=t.data.sign.note&&null!=t.data.sign.note&&""!=t.data.sign.note?t.data.sign.note:"-"))]):t._e(),a("el-form-item",[a("el-button",{staticClass:"shenhei1",attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("审核")])],1)],1)],1),a("el-dialog",{attrs:{title:"审核",visible:t.dialogVisible,width:"500px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"是否通过"}},[a("el-radio",{attrs:{label:"1"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[t._v("通过")]),a("el-radio",{attrs:{label:"2"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[t._v("不通过")])],1),a("el-form-item",{attrs:{label:"原因"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.form.note,callback:function(e){t.$set(t.form,"note",e)},expression:"form.note"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.verify}},[t._v("确 定")])],1)],1)],1)},i=[],s=a("63a1"),o={data:function(){return{exam_sign_id:"",radio:"1",total:1,pagesize:1,currentPage:1,data:{},form:{exam_sign_id:[],status:"",note:""},dialogVisible:!1,resume_education:[],resume_work:[],resume_certificate:[]}},created:function(){this.getid(),this.getList()},methods:{back:function(){this.$router.go(-1)},getList:function(){var t=this;Object(s["t"])({exam_sign_id:this.exam_sign_id}).then((function(e){200===e.code&&(t.data=e.data,t.resume_education=e.data.resume_education,t.resume_work=e.data.resume_work,t.resume_certificate=e.data.resume_certificate)}))},verify:function(){var t=this;Object(s["v"])(this.form).then((function(e){200===e.code&&(t.$message({message:"审核成功",type:"success"}),setTimeout((function(){t.back()}),1500),t.dialogVisible=!1,t.$router.query({path:"/theTest/recruitment/sign"}))}))},gettitle:function(t){return 1==t?"初中":2==t?"高中":3==t?"中技":4==t?"中专":5==t?"大专":6==t?"本科":7==t?"硕士":8==t?"博士":9==t?"博后":void 0},getid:function(){this.exam_sign_id=this.$route.query.exam_sign_id,this.form.exam_sign_id=[this.$route.query.exam_sign_id]},handleSizeChange:function(){},handleCurrentChange:function(){}}},n=o,l=(a("0f61"),a("2877")),u=Object(l["a"])(n,r,i,!1,null,"58552356",null);e["default"]=u.exports},"63a1":function(t,e,a){"use strict";a.d(e,"n",(function(){return s})),a.d(e,"f",(function(){return o})),a.d(e,"x",(function(){return n})),a.d(e,"y",(function(){return l})),a.d(e,"r",(function(){return u})),a.d(e,"g",(function(){return m})),a.d(e,"o",(function(){return d})),a.d(e,"q",(function(){return c})),a.d(e,"p",(function(){return _})),a.d(e,"u",(function(){return f})),a.d(e,"t",(function(){return b})),a.d(e,"s",(function(){return p})),a.d(e,"k",(function(){return h})),a.d(e,"j",(function(){return g})),a.d(e,"l",(function(){return v})),a.d(e,"m",(function(){return x})),a.d(e,"v",(function(){return w})),a.d(e,"d",(function(){return j})),a.d(e,"a",(function(){return O})),a.d(e,"w",(function(){return y})),a.d(e,"b",(function(){return k})),a.d(e,"e",(function(){return C})),a.d(e,"h",(function(){return S})),a.d(e,"i",(function(){return $})),a.d(e,"c",(function(){return L}));var r=a("b775"),i=a("d722");function s(t){return Object(r["a"])({url:i["a"].index,method:"post",data:t})}function o(t){return Object(r["a"])({url:i["a"].add,method:"post",data:t})}function n(t){return Object(r["a"])({url:i["a"].zhaopindetails,method:"post",data:t})}function l(t){return Object(r["a"])({url:i["a"].zhaopinedit,method:"post",data:t})}function u(t){return Object(r["a"])({url:i["a"].jobsList,method:"post",data:t})}function m(t){return Object(r["a"])({url:i["a"].deletejob,method:"post",data:t})}function d(t){return Object(r["a"])({url:i["a"].jobadd,method:"post",data:t})}function c(t){return Object(r["a"])({url:i["a"].jobedit,method:"post",data:t})}function _(t){return Object(r["a"])({url:i["a"].jobdetails,method:"post",data:t})}function f(t){return Object(r["a"])({url:i["a"].signUpList,method:"post",data:t})}function b(t){return Object(r["a"])({url:i["a"].signUpDetails,method:"post",data:t})}function p(t){return Object(r["a"])({url:i["a"].print_stub_form,method:"post",data:t})}function h(t){return Object(r["a"])({url:i["a"].gongaoList,method:"post",data:t})}function g(t){return Object(r["a"])({url:i["a"].gongaoAdd,method:"post",data:t})}function v(t){return Object(r["a"])({url:i["a"].gongaodelete,method:"post",data:t})}function x(t){return Object(r["a"])({url:i["a"].gongaoedit,method:"post",data:t})}function w(t){return Object(r["a"])({url:i["a"].verify,method:"post",data:t})}function j(t){return Object(r["a"])({url:i["a"].ImportAchievement,method:"post",data:t})}function O(t){return Object(r["a"])({url:i["a"].ExportForInImportAchievement,method:"post",data:t})}function y(t){return Object(r["a"])({url:i["a"].xiangmudelete,method:"post",data:t})}function k(t){return Object(r["a"])({url:i["a"].ExportForInImportAdmissionTicket,method:"post",data:t})}function C(t){return Object(r["a"])({url:i["a"].ImportAdmissionTicket,method:"post",data:t})}function S(t){return Object(r["a"])({url:i["a"].dindanList,method:"post",data:t})}function $(t){return Object(r["a"])({url:i["a"].dingdandetail,method:"post",data:t})}function L(t){return Object(r["a"])({url:i["a"].ExportSignList,method:"POST",data:t})}},"9c23":function(t,e,a){}}]);