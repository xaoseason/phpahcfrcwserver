(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76e3e29b"],{"138e":function(t,e,n){},4124:function(t,e,n){"use strict";n.d(e,"i",(function(){return o})),n.d(e,"f",(function(){return l})),n.d(e,"h",(function(){return a})),n.d(e,"g",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return f})),n.d(e,"e",(function(){return m})),n.d(e,"a",(function(){return d}));var r=n("b775"),i=n("d722");function o(t){return Object(r["a"])({url:i["a"].marketTplList,method:"get",params:t})}function l(t){return Object(r["a"])({url:i["a"].marketTplAdd,method:"post",data:t})}function a(t){return Object(r["a"])({url:i["a"].marketTplEdit,method:"post",data:t})}function s(t){return Object(r["a"])({url:i["a"].marketTplDelete,method:"post",data:t})}function c(t){return Object(r["a"])({url:i["a"].marketTaskList,method:"get",params:t})}function u(t){return Object(r["a"])({url:i["a"].marketTaskAdd,method:"post",data:t})}function f(t){return Object(r["a"])({url:i["a"].marketTaskDelete,method:"post",data:t})}function m(t){return Object(r["a"])({url:i["a"].marketTaskRun,method:"post",data:t})}function d(t){return Object(r["a"])({url:i["a"].marketSearchMember,method:"get",params:t})}},5403:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("指定会员发送")])]),n("el-form",{ref:"form",staticClass:"common-form",attrs:{model:t.form,rules:t.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"选择会员",prop:"uid"}},[n("el-select",{staticClass:"large",attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入会员UID/手机号/企业名称","remote-method":t.memberSearch,loading:t.search_loading},model:{value:t.form.uid,callback:function(e){t.$set(t.form,"uid",e)},expression:"form.uid"}},t._l(t.options_memberlist,(function(e){return n("el-option",{key:e.uid,attrs:{label:"【手机号："+e.mobile+"】 / 【UID："+e.uid+"】 / 【会员类型："+e.utype+"】",value:e.uid}},[n("span",{staticStyle:{float:"left"}},[t._v(" 【手机号："+t._s(e.mobile)+"】 / 【UID："+t._s(e.uid)+"】 / 【会员类型："+t._s(e.utype)+"】 ")])])})),1)],1),n("el-divider",{attrs:{"content-position":"left"}},[t._v("发送设置")]),n("sendConfig",{ref:"sendConfig"}),n("el-form-item",{attrs:{label:""}},[n("el-button",{attrs:{type:"primary",loading:t.submiting},on:{click:function(e){return t.onSubmit("form")}}},[t._v(" 生成任务 ")])],1)],1)],1)],1)},i=[],o=n("5530"),l=n("e75a"),a=n("4124"),s={components:{sendConfig:l["a"]},data:function(){return{search_loading:!1,submiting:!1,options_memberlist:[],form:{uid:"",target:"uid",title:"",content:"",send_type:[],condition:null},rules:{uid:[{required:!0,message:"请选择会员",trigger:"change"}]}}},created:function(){},methods:{memberSearch:function(t){var e=this;""!==t?(this.search_loading=!0,Object(a["a"])({keyword:t}).then((function(t){e.options_memberlist=t.data.items,e.search_loading=!1})).catch((function(){}))):this.options=[]},onSubmit:function(t){var e=this;e.$refs[t].validate((function(t){if(!t)return!1;e.$refs.sendConfig.$refs["form"].validate((function(t){if(!t)return!1;if(!0===e.submiting)return!1;e.submiting=!0;var n=Object(o["a"])({},e.$refs.sendConfig.form),r=n.title,i=n.content,l=n.send_type;e.form.title=r,e.form.content=i,e.form.send_type=l,e.form.condition={uid:e.form.uid};var s=Object(o["a"])({},e.form);Object(a["b"])(s).then((function(t){return e.submiting=!1,e.$message.success(t.message),setTimeout((function(){e.$router.push("/tool/market/list")}),1500),!0})).catch((function(){e.submiting=!1}))}))}))}}},c=s,u=(n("e4dc"),n("2877")),f=Object(u["a"])(c,r,i,!1,null,"49f414f8",null);e["default"]=f.exports},66794:function(t,e,n){},8957:function(t,e,n){"use strict";var r=n("138e"),i=n.n(r);i.a},e4dc:function(t,e,n){"use strict";var r=n("66794"),i=n.n(r);i.a},e75a:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-form",{ref:"form",staticClass:"common-form",attrs:{model:t.form,"label-width":"100px",rules:t.rules}},[n("el-form-item",{attrs:{label:"任务标题",prop:"title"}},[n("el-input",{staticClass:"large",attrs:{placeholder:"请输入内容"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),n("el-form-item",{attrs:{label:"发送渠道",prop:"send_type"}},[n("el-checkbox-group",{model:{value:t.form.send_type,callback:function(e){t.$set(t.form,"send_type",e)},expression:"form.send_type"}},[n("el-checkbox",{attrs:{label:"message"}},[t._v("站内信")]),n("el-checkbox",{attrs:{label:"sms"}},[t._v("短信")]),n("el-checkbox",{attrs:{label:"email"}},[t._v("Email")])],1)],1),n("el-form-item",{attrs:{label:"选择模板"}},[t._l(t.tplList,(function(e,r){return n("el-dropdown",{key:r,attrs:{"split-button":"",type:"text"},on:{click:function(n){return t.funUseTpl(e)}}},[t._v(" "+t._s(e.name)+" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(n){return t.funUseTpl(e)}}},[t._v(" 应用 ")]),n("el-dropdown-item",{nativeOn:{click:function(n){return t.funEditTpl(e)}}},[t._v(" 编辑 ")]),n("el-dropdown-item",{nativeOn:{click:function(n){return t.funDeleteTpl(e)}}},[t._v(" 删除 ")])],1)],1)})),n("el-button",{staticClass:"button-new-tag",staticStyle:{"margin-left":"0"},attrs:{size:"small"},on:{click:t.funAddTpl}},[t._v(" + 新建模板 ")])],2),n("el-form-item",{attrs:{label:"消息内容",prop:"content"}},[n("el-input",{staticClass:"large",attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1),t.dialogVisible?n("el-dialog",{attrs:{title:t.dialogTitle,visible:t.dialogVisible,width:"35%","close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogVisible=e},close:t.closeDialog}},[n("el-form",{ref:"tplform",staticClass:"common-form",attrs:{model:t.tplform,"label-width":"100px",rules:t.tplrules}},[n("el-form-item",{attrs:{label:"模板名称",prop:"name"}},[n("el-input",{model:{value:t.tplform.name,callback:function(e){t.$set(t.tplform,"name",e)},expression:"tplform.name"}})],1),n("el-form-item",{attrs:{label:"消息内容",prop:"content"}},[n("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:t.tplform.content,callback:function(e){t.$set(t.tplform,"content",e)},expression:"tplform.content"}})],1),n("el-form-item",{attrs:{label:" "}},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.saveTpl("tplform")}}},[t._v(" 保存 ")]),n("el-button",{on:{click:t.closeDialog}},[t._v("取 消")])],1)],1)],1):t._e()],1)},i=[],o=n("2909"),l=n("5530"),a=n("4124"),s={data:function(){return{tplList:[],form:{title:"",send_type:[],content:""},dialogTitle:"",dialogVisible:!1,tplform:{id:"",name:"",content:""},rules:{title:[{required:!0,message:"请输入任务标题",trigger:"blur"},{max:30,message:"最大 30 个字符",trigger:"blur"}],send_type:[{required:!0,message:"请选择发送渠道",trigger:"change"}],content:[{required:!0,message:"请输入消息内容",trigger:"blur"}]},tplrules:{name:[{required:!0,message:"请输入模板名称",trigger:"blur"},{max:30,message:"最大 30 个字符",trigger:"blur"}],content:[{required:!0,message:"请输入消息内容",trigger:"blur"}]}}},created:function(){this.fetchTplList()},methods:{funAddTpl:function(){this.dialogTitle="新建模板",this.dialogVisible=!0},funEditTpl:function(t){this.tplform=Object(l["a"])({},t),this.dialogTitle="编辑模板",this.dialogVisible=!0},funDeleteTpl:function(t){var e=this;Object(a["g"])({id:t.id}).then((function(t){return e.fetchTplList(),!0})).catch((function(){}))},funUseTpl:function(t){this.form.content=t.content},addTplSave:function(t,e){var n=this;this.$refs[e].validate((function(e){if(!e)return!1;Object(a["f"])(t).then((function(t){return n.closeDialog(),n.fetchTplList(),!0})).catch((function(){}))}))},editTplSave:function(t,e){var n=this;this.$refs[e].validate((function(e){if(!e)return!1;Object(a["h"])(t).then((function(t){return n.closeDialog(),n.fetchTplList(),!0})).catch((function(){}))}))},saveTpl:function(t){var e=this,n=Object(l["a"])({},e.tplform);parseInt(n.id)>0?e.editTplSave(n,t):e.addTplSave(n,t)},fetchTplList:function(){var t=this;Object(a["i"])({}).then((function(e){return t.tplList=Object(o["a"])(e.data.items),!0})).catch((function(){}))},closeDialog:function(){this.dialogVisible=!1,this.tplform={id:"",name:"",content:""}}}},c=s,u=(n("8957"),n("2877")),f=Object(u["a"])(c,r,i,!1,null,"471afdc9",null);e["a"]=f.exports}}]);