(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56b95858"],{1276:function(t,e,n){"use strict";var r=n("d784"),o=n("44e7"),a=n("825a"),i=n("1d80"),c=n("4840"),u=n("8aa5"),l=n("50c4"),s=n("14c3"),d=n("9263"),f=n("d039"),p=[].push,m=Math.min,h=4294967295,g=!f((function(){return!RegExp(h,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(i(this)),a=void 0===n?h:n>>>0;if(0===a)return[];if(void 0===t)return[r];if(!o(t))return e.call(r,t,a);var c,u,l,s=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,g=new RegExp(t.source,f+"g");while(c=d.call(g,r)){if(u=g.lastIndex,u>m&&(s.push(r.slice(m,c.index)),c.length>1&&c.index<r.length&&p.apply(s,c.slice(1)),l=c[0].length,m=u,s.length>=a))break;g.lastIndex===c.index&&g.lastIndex++}return m===r.length?!l&&g.test("")||s.push(""):s.push(r.slice(m)),s.length>a?s.slice(0,a):s}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=i(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,o,n):r.call(String(o),e,n)},function(t,o){var i=n(r,t,this,o,r!==e);if(i.done)return i.value;var d=a(t),f=String(this),p=c(d,RegExp),b=d.unicode,x=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),v=new p(g?d:"^(?:"+d.source+")",x),_=void 0===o?h:o>>>0;if(0===_)return[];if(0===f.length)return null===s(v,f)?[f]:[];var j=0,O=0,y=[];while(O<f.length){v.lastIndex=g?O:0;var E,k=s(v,g?f:f.slice(O));if(null===k||(E=m(l(v.lastIndex+(g?0:O)),f.length))===j)O=u(f,O,b);else{if(y.push(f.slice(j,O)),y.length===_)return y;for(var w=1;w<=k.length-1;w++)if(y.push(k[w]),y.length===_)return y;O=j=E}}return y.push(f.slice(j)),y}]}),!g)},"14c3":function(t,e,n){var r=n("c6b6"),o=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"63a1":function(t,e,n){"use strict";n.d(e,"o",(function(){return a})),n.d(e,"f",(function(){return i})),n.d(e,"y",(function(){return c})),n.d(e,"z",(function(){return u})),n.d(e,"s",(function(){return l})),n.d(e,"g",(function(){return s})),n.d(e,"p",(function(){return d})),n.d(e,"r",(function(){return f})),n.d(e,"q",(function(){return p})),n.d(e,"v",(function(){return m})),n.d(e,"u",(function(){return h})),n.d(e,"t",(function(){return g})),n.d(e,"l",(function(){return b})),n.d(e,"j",(function(){return x})),n.d(e,"k",(function(){return v})),n.d(e,"m",(function(){return _})),n.d(e,"n",(function(){return j})),n.d(e,"w",(function(){return O})),n.d(e,"d",(function(){return y})),n.d(e,"a",(function(){return E})),n.d(e,"x",(function(){return k})),n.d(e,"b",(function(){return w})),n.d(e,"e",(function(){return I})),n.d(e,"h",(function(){return R})),n.d(e,"i",(function(){return S})),n.d(e,"c",(function(){return $}));var r=n("b775"),o=n("d722");function a(t){return Object(r["a"])({url:o["a"].index,method:"post",data:t})}function i(t){return Object(r["a"])({url:o["a"].add,method:"post",data:t})}function c(t){return Object(r["a"])({url:o["a"].zhaopindetails,method:"post",data:t})}function u(t){return Object(r["a"])({url:o["a"].zhaopinedit,method:"post",data:t})}function l(t){return Object(r["a"])({url:o["a"].jobsList,method:"post",data:t})}function s(t){return Object(r["a"])({url:o["a"].deletejob,method:"post",data:t})}function d(t){return Object(r["a"])({url:o["a"].jobadd,method:"post",data:t})}function f(t){return Object(r["a"])({url:o["a"].jobedit,method:"post",data:t})}function p(t){return Object(r["a"])({url:o["a"].jobdetails,method:"post",data:t})}function m(t){return Object(r["a"])({url:o["a"].signUpList,method:"post",data:t})}function h(t){return Object(r["a"])({url:o["a"].signUpDetails,method:"post",data:t})}function g(t){return Object(r["a"])({url:o["a"].print_stub_form,method:"post",data:t})}function b(t){return Object(r["a"])({url:o["a"].gongaoList,method:"post",data:t})}function x(t){return Object(r["a"])({url:o["a"].getGongaoList,method:"POST",data:t})}function v(t){return Object(r["a"])({url:o["a"].gongaoAdd,method:"post",data:t})}function _(t){return Object(r["a"])({url:o["a"].gongaodelete,method:"post",data:t})}function j(t){return Object(r["a"])({url:o["a"].gongaoedit,method:"post",data:t})}function O(t){return Object(r["a"])({url:o["a"].verify,method:"post",data:t})}function y(t){return Object(r["a"])({url:o["a"].ImportAchievement,method:"post",data:t})}function E(t){return Object(r["a"])({url:o["a"].ExportForInImportAchievement,method:"post",data:t})}function k(t){return Object(r["a"])({url:o["a"].xiangmudelete,method:"post",data:t})}function w(t){return Object(r["a"])({url:o["a"].ExportForInImportAdmissionTicket,method:"post",data:t})}function I(t){return Object(r["a"])({url:o["a"].ImportAdmissionTicket,method:"post",data:t})}function R(t){return Object(r["a"])({url:o["a"].dindanList,method:"post",data:t})}function S(t){return Object(r["a"])({url:o["a"].dingdandetail,method:"post",data:t})}function $(t){return Object(r["a"])({url:o["a"].ExportSignList,method:"POST",data:t})}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),o=n("9f7f"),a=RegExp.prototype.exec,i=String.prototype.replace,c=a,u=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=o.UNSUPPORTED_Y||o.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],d=u||s||l;d&&(c=function(t){var e,n,o,c,d=this,f=l&&d.sticky,p=r.call(d),m=d.source,h=0,g=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(m="(?: "+m+")",g=" "+g,h++),n=new RegExp("^(?:"+m+")",p)),s&&(n=new RegExp("^"+m+"$(?!\\s)",p)),u&&(e=d.lastIndex),o=a.call(f?n:d,g),f?o?(o.input=o.input.slice(h),o[0]=o[0].slice(h),o.index=d.lastIndex,d.lastIndex+=o[0].length):d.lastIndex=0:u&&o&&(d.lastIndex=d.global?o.index+o[0].length:e),s&&o&&o.length>1&&i.call(o[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o}),t.exports=c},"9f7f":function(t,e,n){"use strict";var r=n("d039");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},d5e4:function(t,n,r){"use strict";r.r(n);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("编辑公告")]),n("el-button",{staticStyle:{float:"right",padding:"0","margin-left":"14px"},attrs:{type:"text"},on:{click:t.goto}},[t._v(" 返回 ")]),n("el-button",{staticStyle:{float:"right",padding:"0"},attrs:{type:"text"},on:{click:function(e){return t.onSubmit("form")}}},[t._v(" 保存 ")])],1),n("el-form",{ref:"form",staticClass:"common-form",attrs:{model:t.form,"label-width":"120px",rules:t.ruleform}},[n("el-form-item",{attrs:{label:"资讯标题",prop:"title"}},[n("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),n("el-form-item",{attrs:{label:"内容",required:""}},[n("div",{staticClass:"editor",attrs:{id:"editor"}})]),n("el-form-item",{attrs:{label:"附件",prop:"attach"}},[n("el-upload",{staticClass:"upload-demo",attrs:{action:t.apiAttachUpload,headers:t.headers,"on-remove":t.handleRemove,"file-list":t.form.attach,"on-success":t.handleAttachSuccess,"before-upload":t.beforeAttachUpload}},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传excel,word,ppt文件，且不超过"+t._s(t.fileupload_size)+"kb")])],1)],1),n("el-form-item",{attrs:{label:"项目ID",prop:"exam_project_id"}},[n("el-input",{model:{value:t.form.exam_project_id,callback:function(e){t.$set(t.form,"exam_project_id",e)},expression:"form.exam_project_id"}})],1),n("el-form-item",{attrs:{label:"点击次数",prop:"click"}},[n("el-input",{model:{value:t.form.click,callback:function(e){t.$set(t.form,"click",e)},expression:"form.click"}})],1),n("el-form-item",{attrs:{label:"是否显示"}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.is_show,callback:function(e){t.$set(t.form,"is_show",e)},expression:"form.is_show"}})],1),n("el-form-item",{attrs:{label:"seo描述"}},[n("el-input",{model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),n("el-form-item",{attrs:{label:"seo关键词"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.form.keywords,callback:function(e){t.$set(t.form,"keywords",e)},expression:"form.keywords"}})],1),n("el-form-item",{attrs:{label:""}},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("保存")]),n("el-button",{on:{click:t.goto}},[t._v("返回")])],1)],1)],1)],1)},a=[],i=(r("c975"),r("a434"),r("b0c0"),r("ac1f"),r("2532"),r("1276"),r("6fad")),c=r.n(i),u=r("d722"),l=r("5f87"),s=r("63a1"),d={data:function(){return{headers:{admintoken:Object(l["e"])()},apiAttachUpload:window.global.RequestBaseUrl+u["a"].uploadAttach,fileupload_size:9999999,editor:"",content:"",form:{exam_notice_id:"",title:"",content:"",click:"",exam_project_id:"",is_show:"",description:"",keywords:"",attach:[]},ruleform:{title:[{required:!0,message:"请输入公告标题",trigger:"blur"}]}}},mounted:function(){this.editor=new c.a("#editor"),this.editor.config.uploadImgServer=window.global.RequestBaseUrl+u["a"].uploadEditor,this.editor.config.uploadImgHeaders={admintoken:Object(l["e"])()},this.editor.config.zIndex=0,this.editor.config.pasteFilterStyle=!1,this.editor.create()},created:function(){this.getid()},methods:{handleRemove:function(t,e){var n=this.form.attach.indexOf({name:t.name,url:t.url});this.form.attach.splice(n,1)},handleAttachSuccess:function(t,e){if(200!=t.code)return this.$message.error(t.message),!1;var n={name:t.data.name,url:t.data.url};this.form.attach.push(n)},beforeAttachUpload:function(t){var e="doc,docx,xls,xlsx,csv,ppt,pptx,pdf",n=t.name.split("."),r=n[n.length-1];return e.includes(r)?!(t.size/1024>this.fileupload_size)||(this.$message.error("上传文件最大为".concat(this.fileupload_size,"kb")),!1):(this.$message.error("上传文件格式不允许"),!1)},onSubmit:function(t){var n=this;this.form.content=this.editor.txt.html(),console.log(this.form);var r=this.form.attach;try{this.form.attach=JSON.stringify(this.form.attach)}catch(e){}this.$refs[t].validate((function(t){if(!t)return n.form.attach=r,console.log("error submit!!"),!1;Object(s["n"])(n.form).then((function(t){n.form.attach=r,200===t.code&&(n.$message({message:"编辑公告成功",type:"success"}),n.$router.go(-1))}))}))},getid:function(){var t=this;Object(s["j"])({exam_notice_id:this.$route.query.exam_notice_id}).then((function(e){console.log(e),t.form=e.data,t.$nextTick((function(){t.editor.txt.text(t.form.content)}))})).catch((function(t){console.log(e)}))},goto:function(){this.$router.push({path:"/theTest/announcement/announcement"})}}},f=d,p=(r("de8a"),r("2877")),m=Object(p["a"])(f,o,a,!1,null,"71e3e6ef",null);n["default"]=m.exports},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),o=n("d039"),a=n("b622"),i=n("9263"),c=n("9112"),u=a("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var m=a(t),h=!o((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),g=h&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[m]=/./[m]),n.exec=function(){return e=!0,null},n[m](""),!e}));if(!h||!g||"replace"===t&&(!l||!s||f)||"split"===t&&!p){var b=/./[m],x=n(m,""[t],(function(t,e,n,r,o){return e.exec===i?h&&!o?{done:!0,value:b.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),v=x[0],_=x[1];r(String.prototype,t,v),r(RegExp.prototype,m,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}d&&c(RegExp.prototype[m],"sham",!0)}},de8a:function(t,e,n){"use strict";var r=n("fb22"),o=n.n(r);o.a},fb22:function(t,e,n){}}]);