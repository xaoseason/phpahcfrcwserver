(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ec9b925"],{"63a1":function(t,e,o){"use strict";o.d(e,"k",(function(){return a})),o.d(e,"e",(function(){return i})),o.d(e,"u",(function(){return u})),o.d(e,"v",(function(){return c})),o.d(e,"o",(function(){return s})),o.d(e,"f",(function(){return d})),o.d(e,"l",(function(){return l})),o.d(e,"n",(function(){return f})),o.d(e,"m",(function(){return m})),o.d(e,"r",(function(){return p})),o.d(e,"q",(function(){return b})),o.d(e,"p",(function(){return h})),o.d(e,"h",(function(){return g})),o.d(e,"g",(function(){return j})),o.d(e,"i",(function(){return v})),o.d(e,"j",(function(){return O})),o.d(e,"s",(function(){return k})),o.d(e,"c",(function(){return w})),o.d(e,"a",(function(){return x})),o.d(e,"t",(function(){return y})),o.d(e,"b",(function(){return _})),o.d(e,"d",(function(){return $}));var n=o("b775"),r=o("d722");function a(t){return Object(n["a"])({url:r["a"].index,method:"post",data:t})}function i(t){return Object(n["a"])({url:r["a"].add,method:"post",data:t})}function u(t){return Object(n["a"])({url:r["a"].zhaopindetails,method:"post",data:t})}function c(t){return Object(n["a"])({url:r["a"].zhaopinedit,method:"post",data:t})}function s(t){return Object(n["a"])({url:r["a"].jobsList,method:"post",data:t})}function d(t){return Object(n["a"])({url:r["a"].deletejob,method:"post",data:t})}function l(t){return Object(n["a"])({url:r["a"].jobadd,method:"post",data:t})}function f(t){return Object(n["a"])({url:r["a"].jobedit,method:"post",data:t})}function m(t){return Object(n["a"])({url:r["a"].jobdetails,method:"post",data:t})}function p(t){return Object(n["a"])({url:r["a"].signUpList,method:"post",data:t})}function b(t){return Object(n["a"])({url:r["a"].signUpDetails,method:"post",data:t})}function h(t){return Object(n["a"])({url:r["a"].print_stub_form,method:"post",data:t})}function g(t){return Object(n["a"])({url:r["a"].gongaoList,method:"post",data:t})}function j(t){return Object(n["a"])({url:r["a"].gongaoAdd,method:"post",data:t})}function v(t){return Object(n["a"])({url:r["a"].gongaodelete,method:"post",data:t})}function O(t){return Object(n["a"])({url:r["a"].gongaoedit,method:"post",data:t})}function k(t){return Object(n["a"])({url:r["a"].verify,method:"post",data:t})}function w(t){return Object(n["a"])({url:r["a"].ImportAchievement,method:"post",data:t})}function x(t){return Object(n["a"])({url:r["a"].ExportForInImportAchievement,method:"post",data:t})}function y(t){return Object(n["a"])({url:r["a"].xiangmudelete,method:"post",data:t})}function _(t){return Object(n["a"])({url:r["a"].ExportForInImportAdmissionTicket,method:"post",data:t})}function $(t){return Object(n["a"])({url:r["a"].ImportAdmissionTicket,method:"post",data:t})}},"9fea":function(t,e,o){},a34e:function(t,e,o){"use strict";var n=o("9fea"),r=o.n(n);r.a},a8ed:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("el-card",{staticClass:"box-card"},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[t._v("添加视频")]),o("el-button",{staticStyle:{float:"right",padding:"0","margin-left":"14px"},attrs:{type:"text"},on:{click:t.goto}},[t._v(" 返回 ")]),o("el-button",{staticStyle:{float:"right",padding:"0"},attrs:{type:"text"},on:{click:function(e){return t.onSubmit("form")}}},[t._v(" 保存 ")])],1),o("el-form",{ref:"form",staticClass:"common-form",attrs:{model:t.form,"label-width":"120px",rules:t.ruleform}},[o("el-form-item",{attrs:{label:"资讯标题",prop:"title"}},[o("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),o("el-form-item",{attrs:{label:"内容",required:""}},[o("div",{staticClass:"editor",attrs:{id:"editor"}})]),o("el-form-item",{attrs:{label:"点击次数",prop:"title"}},[o("el-input",{model:{value:t.form.click,callback:function(e){t.$set(t.form,"click",e)},expression:"form.click"}})],1),o("el-form-item",{attrs:{label:"是否显示"}},[o("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.is_show,callback:function(e){t.$set(t.form,"is_show",e)},expression:"form.is_show"}})],1),o("el-form-item",{attrs:{label:"seo描述",prop:"title"}},[o("el-input",{model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),o("el-form-item",{attrs:{label:"seo关键词",prop:"title"}},[o("el-input",{attrs:{type:"textarea"},model:{value:t.form.keywords,callback:function(e){t.$set(t.form,"keywords",e)},expression:"form.keywords"}})],1),o("el-form-item",{attrs:{label:""}},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("保存")]),o("el-button",{on:{click:t.goto}},[t._v("返回")])],1)],1)],1)],1)},r=[],a=o("6fad"),i=o.n(a),u=o("d722"),c=o("5f87"),s=o("63a1"),d={data:function(){return{editor:"",form:{title:"",content:"",click:"",is_show:0,description:"",keywords:""},ruleform:{title:[{required:!0,message:"请输入活动名称",trigger:"blur"}]}}},mounted:function(){this.editor=new i.a("#editor"),this.editor.config.uploadImgServer=window.global.RequestBaseUrl+u["a"].uploadEditor,this.editor.config.uploadImgHeaders={admintoken:Object(c["e"])()},this.editor.config.zIndex=0,this.editor.config.pasteFilterStyle=!1,this.editor.create()},created:function(){},methods:{onSubmit:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;e.form.content=e.editor.txt.html(),Object(s["g"])(e.form).then((function(t){200===t.code&&(e.$message({message:"新增公告成功",type:"success"}),e.$router.go(-1))}))}))},goto:function(){this.$router.push({path:"/theTest/announcement/announcement"})}}},l=d,f=(o("a34e"),o("2877")),m=Object(f["a"])(l,n,r,!1,null,"79a7b494",null);e["default"]=m.exports}}]);