(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03164033"],{1276:function(t,e,r){"use strict";var n=r("d784"),o=r("44e7"),i=r("825a"),a=r("1d80"),c=r("4840"),u=r("8aa5"),l=r("50c4"),s=r("14c3"),d=r("9263"),f=r("d039"),p=[].push,h=Math.min,m=4294967295,g=!f((function(){return!RegExp(m,"y")}));n("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(a(this)),i=void 0===r?m:r>>>0;if(0===i)return[];if(void 0===t)return[n];if(!o(t))return e.call(n,t,i);var c,u,l,s=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,f+"g");while(c=d.call(g,n)){if(u=g.lastIndex,u>h&&(s.push(n.slice(h,c.index)),c.length>1&&c.index<n.length&&p.apply(s,c.slice(1)),l=c[0].length,h=u,s.length>=i))break;g.lastIndex===c.index&&g.lastIndex++}return h===n.length?!l&&g.test("")||s.push(""):s.push(n.slice(h)),s.length>i?s.slice(0,i):s}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var o=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,o){var a=r(n,t,this,o,n!==e);if(a.done)return a.value;var d=i(t),f=String(this),p=c(d,RegExp),x=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),v=new p(g?d:"^(?:"+d.source+")",b),y=void 0===o?m:o>>>0;if(0===y)return[];if(0===f.length)return null===s(v,f)?[f]:[];var _=0,j=0,O=[];while(j<f.length){v.lastIndex=g?j:0;var E,k=s(v,g?f:f.slice(j));if(null===k||(E=h(l(v.lastIndex+(g?0:j)),f.length))===_)j=u(f,j,x);else{if(O.push(f.slice(_,j)),O.length===y)return O;for(var w=1;w<=k.length-1;w++)if(O.push(k[w]),O.length===y)return O;j=_=E}}return O.push(f.slice(_)),O}]}),!g)},"14c3":function(t,e,r){var n=r("c6b6"),o=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"63a1":function(t,e,r){"use strict";r.d(e,"n",(function(){return i})),r.d(e,"f",(function(){return a})),r.d(e,"x",(function(){return c})),r.d(e,"y",(function(){return u})),r.d(e,"r",(function(){return l})),r.d(e,"g",(function(){return s})),r.d(e,"o",(function(){return d})),r.d(e,"q",(function(){return f})),r.d(e,"p",(function(){return p})),r.d(e,"u",(function(){return h})),r.d(e,"t",(function(){return m})),r.d(e,"s",(function(){return g})),r.d(e,"k",(function(){return x})),r.d(e,"j",(function(){return b})),r.d(e,"l",(function(){return v})),r.d(e,"m",(function(){return y})),r.d(e,"v",(function(){return _})),r.d(e,"d",(function(){return j})),r.d(e,"a",(function(){return O})),r.d(e,"w",(function(){return E})),r.d(e,"b",(function(){return k})),r.d(e,"e",(function(){return w})),r.d(e,"h",(function(){return $})),r.d(e,"i",(function(){return I})),r.d(e,"c",(function(){return R}));var n=r("b775"),o=r("d722");function i(t){return Object(n["a"])({url:o["a"].index,method:"post",data:t})}function a(t){return Object(n["a"])({url:o["a"].add,method:"post",data:t})}function c(t){return Object(n["a"])({url:o["a"].zhaopindetails,method:"post",data:t})}function u(t){return Object(n["a"])({url:o["a"].zhaopinedit,method:"post",data:t})}function l(t){return Object(n["a"])({url:o["a"].jobsList,method:"post",data:t})}function s(t){return Object(n["a"])({url:o["a"].deletejob,method:"post",data:t})}function d(t){return Object(n["a"])({url:o["a"].jobadd,method:"post",data:t})}function f(t){return Object(n["a"])({url:o["a"].jobedit,method:"post",data:t})}function p(t){return Object(n["a"])({url:o["a"].jobdetails,method:"post",data:t})}function h(t){return Object(n["a"])({url:o["a"].signUpList,method:"post",data:t})}function m(t){return Object(n["a"])({url:o["a"].signUpDetails,method:"post",data:t})}function g(t){return Object(n["a"])({url:o["a"].print_stub_form,method:"post",data:t})}function x(t){return Object(n["a"])({url:o["a"].gongaoList,method:"post",data:t})}function b(t){return Object(n["a"])({url:o["a"].gongaoAdd,method:"post",data:t})}function v(t){return Object(n["a"])({url:o["a"].gongaodelete,method:"post",data:t})}function y(t){return Object(n["a"])({url:o["a"].gongaoedit,method:"post",data:t})}function _(t){return Object(n["a"])({url:o["a"].verify,method:"post",data:t})}function j(t){return Object(n["a"])({url:o["a"].ImportAchievement,method:"post",data:t})}function O(t){return Object(n["a"])({url:o["a"].ExportForInImportAchievement,method:"post",data:t})}function E(t){return Object(n["a"])({url:o["a"].xiangmudelete,method:"post",data:t})}function k(t){return Object(n["a"])({url:o["a"].ExportForInImportAdmissionTicket,method:"post",data:t})}function w(t){return Object(n["a"])({url:o["a"].ImportAdmissionTicket,method:"post",data:t})}function $(t){return Object(n["a"])({url:o["a"].dindanList,method:"post",data:t})}function I(t){return Object(n["a"])({url:o["a"].dingdandetail,method:"post",data:t})}function R(t){return Object(n["a"])({url:o["a"].ExportSignList,method:"POST",data:t})}},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),o=r("9f7f"),i=RegExp.prototype.exec,a=String.prototype.replace,c=i,u=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=o.UNSUPPORTED_Y||o.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],d=u||s||l;d&&(c=function(t){var e,r,o,c,d=this,f=l&&d.sticky,p=n.call(d),h=d.source,m=0,g=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,m++),r=new RegExp("^(?:"+h+")",p)),s&&(r=new RegExp("^"+h+"$(?!\\s)",p)),u&&(e=d.lastIndex),o=i.call(f?r:d,g),f?o?(o.input=o.input.slice(m),o[0]=o[0].slice(m),o.index=d.lastIndex,d.lastIndex+=o[0].length):d.lastIndex=0:u&&o&&(d.lastIndex=d.global?o.index+o[0].length:e),s&&o&&o.length>1&&a.call(o[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o}),t.exports=c},"9f7f":function(t,e,r){"use strict";var n=r("d039");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,r){"use strict";var n=r("23e7"),o=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},b32a:function(t,e,r){},b4cd:function(t,e,r){"use strict";var n=r("b32a"),o=r.n(n);o.a},d5e4:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("编辑公告")]),r("el-button",{staticStyle:{float:"right",padding:"0","margin-left":"14px"},attrs:{type:"text"},on:{click:t.goto}},[t._v(" 返回 ")]),r("el-button",{staticStyle:{float:"right",padding:"0"},attrs:{type:"text"},on:{click:function(e){return t.onSubmit("form")}}},[t._v(" 保存 ")])],1),r("el-form",{ref:"form",staticClass:"common-form",attrs:{model:t.form,"label-width":"120px",rules:t.ruleform}},[r("el-form-item",{attrs:{label:"资讯标题",prop:"title"}},[r("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),r("el-form-item",{attrs:{label:"内容",required:""}},[r("div",{staticClass:"editor",attrs:{id:"editor"}})]),r("el-form-item",{attrs:{label:"附件",prop:"attach"}},[r("el-upload",{staticClass:"upload-demo",attrs:{action:t.apiAttachUpload,headers:t.headers,"on-remove":t.handleRemove,"file-list":t.form.attach,"on-success":t.handleAttachSuccess,"before-upload":t.beforeAttachUpload}},[r("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传excel,word,ppt文件，且不超过"+t._s(t.fileupload_size)+"kb")])],1)],1),r("el-form-item",{attrs:{label:"项目ID",prop:"exam_project_id"}},[r("el-input",{model:{value:t.form.exam_project_id,callback:function(e){t.$set(t.form,"exam_project_id",e)},expression:"form.exam_project_id"}})],1),r("el-form-item",{attrs:{label:"点击次数",prop:"click"}},[r("el-input",{model:{value:t.form.click,callback:function(e){t.$set(t.form,"click",e)},expression:"form.click"}})],1),r("el-form-item",{attrs:{label:"是否显示"}},[r("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.is_show,callback:function(e){t.$set(t.form,"is_show",e)},expression:"form.is_show"}})],1),r("el-form-item",{attrs:{label:"seo描述"}},[r("el-input",{model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),r("el-form-item",{attrs:{label:"seo关键词"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.form.keywords,callback:function(e){t.$set(t.form,"keywords",e)},expression:"form.keywords"}})],1),r("el-form-item",{attrs:{label:""}},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("保存")]),r("el-button",{on:{click:t.goto}},[t._v("返回")])],1)],1)],1)],1)},o=[],i=(r("a4d3"),r("e01a"),r("c975"),r("a434"),r("b0c0"),r("ac1f"),r("2532"),r("1276"),r("498a"),r("6fad")),a=r.n(i),c=r("d722"),u=r("5f87"),l=r("63a1"),s={data:function(){return{headers:{admintoken:Object(u["e"])()},apiAttachUpload:window.global.RequestBaseUrl+c["a"].uploadAttach,fileupload_size:9999999,editor:"",content:"",form:{exam_notice_id:"",title:"",content:"",click:"",exam_project_id:"",is_show:"",description:"",keywords:"",attach:[]},ruleform:{title:[{required:!0,message:"请输入公告标题",trigger:"blur"}]}}},mounted:function(){this.editor=new a.a("#editor"),this.editor.config.uploadImgServer=window.global.RequestBaseUrl+c["a"].uploadEditor,this.editor.config.uploadImgHeaders={admintoken:Object(u["e"])()},this.editor.config.zIndex=0,this.editor.config.pasteFilterStyle=!1,this.editor.create()},created:function(){this.getid()},methods:{handleRemove:function(t,e){var r=this.form.attach.indexOf({name:t.name,url:t.url});this.form.attach.splice(r,1)},handleAttachSuccess:function(t,e){if(200!=t.code)return this.$message.error(t.message),!1;var r={name:t.data.name,url:t.data.url};this.form.attach.push(r)},beforeAttachUpload:function(t){var e="doc,docx,xls,xlsx,csv,ppt,pptx,pdf",r=t.name.split("."),n=r[r.length-1];return e.includes(n)?!(t.size/1024>this.fileupload_size)||(this.$message.error("上传文件最大为".concat(this.fileupload_size,"kb")),!1):(this.$message.error("上传文件格式不允许"),!1)},onSubmit:function(t){var e=this;this.form.content=this.editor.txt.html(),console.log(this.form);var r=this.form.attach;try{this.form.attach=JSON.stringify(this.form.attach)}catch(n){}this.$refs[t].validate((function(t){if(!t)return e.form.attach=r,console.log("error submit!!"),!1;Object(l["m"])(e.form).then((function(t){e.form.attach=r,200===t.code&&(e.$message({message:"编辑公告成功",type:"success"}),e.$router.go(-1))}))}))},getid:function(){var t=this;if(this.form.exam_notice_id=this.$route.query.exam_notice_id,this.form.title=this.$route.query.title,this.content=this.$route.query.content,this.form.click=this.$route.query.click,this.form.is_show=this.$route.query.is_show,this.form.description=this.$route.query.description,this.form.exam_project_id=this.$route.query.exam_project_id,this.form.keywords=this.$route.query.keywords,void 0!=this.$route.query.attach&&null!=this.$route.query.attach&&""!=this.$route.query.attach&&"null"!=this.$route.query.attach.trim()){try{this.form.attach=JSON.parse(this.$route.query.attach)}catch(e){console.log(e)}(this.form.attach=null)&&(this.form.attach=[])}this.$nextTick((function(){t.editor.txt.text(t.content)}))},goto:function(){this.$router.push({path:"/theTest/announcement/announcement"})}}},d=s,f=(r("b4cd"),r("2877")),p=Object(f["a"])(d,n,o,!1,null,"65e7c7e0",null);e["default"]=p.exports},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),o=r("d039"),i=r("b622"),a=r("9263"),c=r("9112"),u=i("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,d){var h=i(t),m=!o((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),g=m&&!o((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[h]=/./[h]),r.exec=function(){return e=!0,null},r[h](""),!e}));if(!m||!g||"replace"===t&&(!l||!s||f)||"split"===t&&!p){var x=/./[h],b=r(h,""[t],(function(t,e,r,n,o){return e.exec===a?m&&!o?{done:!0,value:x.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),v=b[0],y=b[1];n(String.prototype,t,v),n(RegExp.prototype,h,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}d&&c(RegExp.prototype[h],"sham",!0)}}}]);