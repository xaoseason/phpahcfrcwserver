(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e5715fe"],{"3c6d":function(t,e,o){"use strict";var r=o("8e17"),n=o.n(r);n.a},"8e17":function(t,e,o){},aaf7:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("el-card",{staticClass:"box-card"},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[t._v("编辑分类")]),o("el-button",{staticStyle:{float:"right",padding:"0","margin-left":"14px"},attrs:{type:"text"},on:{click:function(e){return t.goto("/content/video/category")}}},[t._v(" 返回 ")]),o("el-button",{staticStyle:{float:"right",padding:"0"},attrs:{type:"text"},on:{click:function(e){return t.onSubmit("form")}}},[t._v(" 保存 ")])],1),o("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.infoLoading,expression:"infoLoading"}],ref:"form",staticClass:"common-form",attrs:{model:t.form,"label-width":"80px",rules:t.rules,"inline-message":!0}},[o("el-form-item",{attrs:{label:"分类名称",prop:"name"}},[o("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),o("el-form-item",{attrs:{label:"排序",prop:"sort_id"}},[o("el-input",{model:{value:t.form.sort_id,callback:function(e){t.$set(t.form,"sort_id",t._n(e))},expression:"form.sort_id"}})],1),o("el-form-item",{attrs:{label:"seo标题",prop:"seo_title"}},[o("el-input",{model:{value:t.form.seo_title,callback:function(e){t.$set(t.form,"seo_title",e)},expression:"form.seo_title"}})],1),o("el-form-item",{attrs:{label:"seo关键词",prop:"seo_keywords"}},[o("el-input",{model:{value:t.form.seo_keywords,callback:function(e){t.$set(t.form,"seo_keywords",e)},expression:"form.seo_keywords"}})],1),o("el-form-item",{attrs:{label:"seo描述",prop:"seo_description"}},[o("el-input",{attrs:{type:"textarea",rows:"4"},model:{value:t.form.seo_description,callback:function(e){t.$set(t.form,"seo_description",e)},expression:"form.seo_description"}})],1),o("el-form-item",{attrs:{label:""}},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("保存")]),o("el-button",{on:{click:function(e){return t.goto("/content/video/category")}}},[t._v("返回")])],1)],1)],1)],1)},n=[],i=o("5530"),a=o("f27f"),s={data:function(){return{infoLoading:!0,form:{name:"",seo_title:"",seo_keywords:"",seo_description:"",sort_id:0},rules:{name:[{required:!0,message:"请输入分类名称",trigger:"blur"},{max:10,message:"长度在 1 到 10 个字符",trigger:"blur"}],sort_id:[{type:"number",message:"排序必须为数字",trigger:"blur"}],seo_title:[{max:100,message:"长度在 0 到 100 个字符",trigger:"blur"}],seo_keywords:[{max:100,message:"长度在 0 到 100 个字符",trigger:"blur"}],seo_description:[{max:200,message:"长度在 0 到 200 个字符",trigger:"blur"}]}}},mounted:function(){},created:function(){this.fetchInfo()},methods:{fetchInfo:function(){var t=this;this.infoLoading=!0;var e={id:this.$route.query.id};Object(a["c"])(e,"get").then((function(e){t.form=Object(i["a"])({},e.data.info),t.infoLoading=!1})).catch((function(){}))},onSubmit:function(t){var e=this,o=this,r=Object(i["a"])({},this.form);this.$refs[t].validate((function(t){if(!t)return!1;Object(a["c"])(r).then((function(t){return e.$message.success(t.message),setTimeout((function(){o.$router.push("/content/video/category")}),1500),!0})).catch((function(){}))}))},goto:function(t){this.$router.push(t)}}},c=s,l=(o("3c6d"),o("2877")),u=Object(l["a"])(c,r,n,!1,null,"884abdec",null);e["default"]=u.exports},f27f:function(t,e,o){"use strict";o.d(e,"d",(function(){return i})),o.d(e,"a",(function(){return a})),o.d(e,"c",(function(){return s})),o.d(e,"b",(function(){return c}));var r=o("b775"),n=o("d722");function i(t){return Object(r["a"])({url:n["a"].videoCategoryList,method:"get",params:t})}function a(t){return Object(r["a"])({url:n["a"].videoCategoryAdd,method:"post",data:t})}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"post";return"post"==e?Object(r["a"])({url:n["a"].videoArticleCategoryEdit,method:e,data:t}):Object(r["a"])({url:n["a"].videoArticleCategoryEdit,method:e,params:t})}function c(t){return Object(r["a"])({url:n["a"].videoCategoryDelete,method:"post",data:t})}}}]);