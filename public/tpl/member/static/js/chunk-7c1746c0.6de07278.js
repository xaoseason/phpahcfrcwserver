(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c1746c0"],{"1d69":function(t,e,s){"use strict";s("d474")},9544:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Feedback")},n=[],a=s("d3ff"),o={components:{Feedback:a["a"]}},c=o,i=s("2877"),l=Object(i["a"])(c,r,n,!1,null,null,null);e["default"]=l.exports},d3ff:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"feedbackBox"},[s("div",{staticClass:"title"},[t._v(" 用户您好，请将您的意见、想法、建议或投诉内容告诉我们，以帮助我们为全体用户提供更加优质的服务。"),s("br"),t._v("我们将在第一时间及时回复您的反馈，如您的问题比较紧急，请致电服务热线："+t._s(t.$store.state.config.contact_tel)+"。 ")]),s("div",{staticClass:"opinion_content"},[s("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"意见类型"}},t._l(t.options_feedback,(function(e,r){return s("el-button",{key:r,staticClass:"opinionTypeItem",attrs:{size:"small",type:e.id==t.form.type?"primary":"",round:""},on:{click:function(s){return t.handlerType(e)}}},[t._v(t._s(e.text))])})),1),s("el-form-item",{attrs:{label:"反馈内容",prop:"content"}},[s("el-input",{attrs:{type:"textarea",rows:"8",placeholder:"请描述具体操作步骤及问题，有助于我们快速定位并解决"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),s("el-button",{staticClass:"sub",attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("form")}}},[t._v("提交反馈")])],1)],1)])},n=[],a=s("751a"),o=s("d722"),c={name:"AccountFeedback",data(){return{form:{type:0,content:""},rules:{content:[{required:!0,message:"请输入反馈内容",trigger:"blur"},{max:200,message:"最多输入200个字",trigger:"blur"}]}}},created(){this.$store.dispatch("getClassify","feedback").then(t=>{this.form.type=t.data[0].id})},computed:{options_feedback(){return this.$store.state.classifyFeedback}},methods:{handlerType(t){this.form.type=t.id},handleSubmit(t){if(0==this.form.type)return this.$message.error("请选择反馈类型"),!1;this.$refs[t].validate(t=>{if(!t)return!1;a["a"].post(o["a"].feedback,this.form).then(t=>{this.$message({type:"success",message:t.message}),this.form.content=""}).catch(()=>{})})}}},i=c,l=(s("1d69"),s("2877")),u=Object(l["a"])(i,r,n,!1,null,null,null);e["a"]=u.exports},d474:function(t,e,s){}}]);