(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37ee41ef"],{1276:function(e,t,r){"use strict";var i=r("d784"),a=r("44e7"),o=r("825a"),n=r("1d80"),l=r("4840"),s=r("8aa5"),c=r("50c4"),u=r("14c3"),d=r("9263"),f=r("d039"),p=[].push,m=Math.min,h=4294967295,g=!f((function(){return!RegExp(h,"y")}));i("split",2,(function(e,t,r){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var i=String(n(this)),o=void 0===r?h:r>>>0;if(0===o)return[];if(void 0===e)return[i];if(!a(e))return t.call(i,e,o);var l,s,c,u=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,g=new RegExp(e.source,f+"g");while(l=d.call(g,i)){if(s=g.lastIndex,s>m&&(u.push(i.slice(m,l.index)),l.length>1&&l.index<i.length&&p.apply(u,l.slice(1)),c=l[0].length,m=s,u.length>=o))break;g.lastIndex===l.index&&g.lastIndex++}return m===i.length?!c&&g.test("")||u.push(""):u.push(i.slice(m)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var a=n(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,a,r):i.call(String(a),t,r)},function(e,a){var n=r(i,e,this,a,i!==t);if(n.done)return n.value;var d=o(e),f=String(this),p=l(d,RegExp),b=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),x=new p(g?d:"^(?:"+d.source+")",v),_=void 0===a?h:a>>>0;if(0===_)return[];if(0===f.length)return null===u(x,f)?[f]:[];var y=0,k=0,w=[];while(k<f.length){x.lastIndex=g?k:0;var E,R=u(x,g?f:f.slice(k));if(null===R||(E=m(c(x.lastIndex+(g?0:k)),f.length))===y)k=s(f,k,b);else{if(w.push(f.slice(y,k)),w.length===_)return w;for(var $=1;$<=R.length-1;$++)if(w.push(R[$]),w.length===_)return w;k=y=E}}return w.push(f.slice(y)),w}]}),!g)},"14c3":function(e,t,r){var i=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},2423:function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return s}));var i=r("b775"),a=r("d722");function o(e){return Object(i["a"])({url:a["a"].articleList,method:"get",params:e})}function n(e){return Object(i["a"])({url:a["a"].articleAdd,method:"post",data:e})}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"post";return"post"==t?Object(i["a"])({url:a["a"].articleEdit,method:t,data:e}):Object(i["a"])({url:a["a"].articleEdit,method:t,params:e})}function s(e){return Object(i["a"])({url:a["a"].articleDelete,method:"post",data:e})}},"52b5":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r("b775"),a=r("d722");function o(e){return Object(i["a"])({url:a["a"].getClassify,method:"get",params:e})}},"54d2":function(e,t,r){},"8aa5":function(e,t,r){"use strict";var i=r("6547").charAt;e.exports=function(e,t,r){return t+(r?i(e,t).length:1)}},9263:function(e,t,r){"use strict";var i=r("ad6d"),a=r("9f7f"),o=RegExp.prototype.exec,n=String.prototype.replace,l=o,s=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=s||u||c;d&&(l=function(e){var t,r,a,l,d=this,f=c&&d.sticky,p=i.call(d),m=d.source,h=0,g=e;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(m="(?: "+m+")",g=" "+g,h++),r=new RegExp("^(?:"+m+")",p)),u&&(r=new RegExp("^"+m+"$(?!\\s)",p)),s&&(t=d.lastIndex),a=o.call(f?r:d,g),f?a?(a.input=a.input.slice(h),a[0]=a[0].slice(h),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:s&&a&&(d.lastIndex=d.global?a.index+a[0].length:t),u&&a&&a.length>1&&n.call(a[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)})),a}),e.exports=l},"9f7f":function(e,t,r){"use strict";var i=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=i((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=i((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a1ca:function(e,t,r){"use strict";var i=r("54d2"),a=r.n(i);a.a},ac1f:function(e,t,r){"use strict";var i=r("23e7"),a=r("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},d14d:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("编辑资讯")]),r("el-button",{staticStyle:{float:"right",padding:"0","margin-left":"14px"},attrs:{type:"text"},on:{click:function(t){return e.goto("/content/article/list")}}},[e._v(" 返回 ")]),r("el-button",{staticStyle:{float:"right",padding:"0"},attrs:{type:"text"},on:{click:function(t){return e.onSubmit("form")}}},[e._v(" 保存 ")])],1),r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.infoLoading,expression:"infoLoading"}],ref:"form",staticClass:"common-form",attrs:{model:e.form,"label-width":"80px",rules:e.rules,"inline-message":!0}},[r("el-form-item",{attrs:{label:"资讯标题",prop:"title"}},[r("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),r("el-form-item",{attrs:{label:"资讯分类",prop:"cid"}},[r("el-select",{attrs:{placeholder:"请选择资讯分类"},model:{value:e.form.cid,callback:function(t){e.$set(e.form,"cid",t)},expression:"form.cid"}},e._l(e.articleCategory,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"缩略图"}},[r("el-upload",{staticClass:"thumb-uploader",attrs:{action:e.apiUpload,headers:e.headers,"show-file-list":!1,"on-success":e.handleThumbSuccess,"before-upload":e.beforeThumbUpload}},[e.form.thumb?r("img",{staticClass:"thumb",attrs:{src:e.imageUrl}}):r("i",{staticClass:"el-icon-plus thumb-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"内容",required:"",prop:"content"}},[r("div",{staticClass:"editor",attrs:{id:"editor"}})]),r("el-form-item",{attrs:{label:"附件",prop:"attach"}},[r("el-upload",{staticClass:"upload-demo",attrs:{action:e.apiAttachUpload,headers:e.headers,"on-remove":e.handleRemove,"file-list":e.form.attach,"on-success":e.handleAttachSuccess,"before-upload":e.beforeAttachUpload}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" 只能上传excel,word,ppt文件，且不超过"+e._s(e.fileupload_size)+"kb ")])],1)],1),r("el-form-item",{attrs:{label:"是否显示"}},[r("el-switch",{model:{value:e.form.is_display,callback:function(t){e.$set(e.form,"is_display",t)},expression:"form.is_display"}})],1),r("el-form-item",{attrs:{label:"发布日期"}},[r("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm",placeholder:"请选择发布日期"},model:{value:e.form.addtime,callback:function(t){e.$set(e.form,"addtime",t)},expression:"form.addtime"}})],1),r("el-form-item",{attrs:{label:"点击量",prop:"click"}},[r("el-input",{model:{value:e.form.click,callback:function(t){e.$set(e.form,"click",e._n(t))},expression:"form.click"}})],1),r("el-form-item",{attrs:{label:"排序",prop:"sort_id"}},[r("el-input",{model:{value:e.form.sort_id,callback:function(t){e.$set(e.form,"sort_id",e._n(t))},expression:"form.sort_id"}})],1),r("el-form-item",{attrs:{label:"外部链接",prop:"link_url"}},[r("el-input",{model:{value:e.form.link_url,callback:function(t){e.$set(e.form,"link_url",t)},expression:"form.link_url"}})],1),r("el-form-item",{attrs:{label:"seo关键词",prop:"seo_keywords"}},[r("el-input",{model:{value:e.form.seo_keywords,callback:function(t){e.$set(e.form,"seo_keywords",t)},expression:"form.seo_keywords"}})],1),r("el-form-item",{attrs:{label:"seo描述",prop:"seo_description"}},[r("el-input",{attrs:{type:"textarea",rows:"4"},model:{value:e.form.seo_description,callback:function(t){e.$set(e.form,"seo_description",t)},expression:"form.seo_description"}})],1),r("el-form-item",{attrs:{label:"来源",prop:"source"}},[r("el-select",{attrs:{placeholder:"请选择资讯来源"},model:{value:e.form.source,callback:function(t){e.$set(e.form,"source",t)},expression:"form.source"}},[r("el-option",{attrs:{label:"长丰英才网",value:0}}),r("el-option",{attrs:{label:"转载",value:1}})],1)],1),r("el-form-item",{attrs:{label:""}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("保存")]),r("el-button",{on:{click:function(t){return e.goto("/content/article/list")}}},[e._v("返回")])],1)],1)],1)],1)},a=[],o=(r("caad"),r("c975"),r("a434"),r("b0c0"),r("d3b7"),r("ac1f"),r("2532"),r("3ca3"),r("1276"),r("ddb0"),r("2b3d"),r("5530")),n=r("5f87"),l=r("61f7"),s=r("2423"),c=r("52b5"),u=r("6fad"),d=r.n(u),f=r("d722"),p={data:function(){var e=this,t=function(t,r,i){r=e.editor.txt.text(),""===r?i(new Error("请输入内容")):i()},r=function(e,t,r){""==t&&r(),Object(l["d"])(t)?r():r(new Error("请输入正确的网址"))};return{headers:{admintoken:Object(n["e"])()},fileupload_size:"",fileupload_ext:"",apiUpload:window.global.RequestBaseUrl+f["a"].upload,apiAttachUpload:window.global.RequestBaseUrl+f["a"].uploadAttach,editor:"",articleCategory:[],form:{title:"",cid:"",content:"",attach:[],thumb:"",is_display:!0,link_url:"",seo_keywords:"",seo_description:"",addtime:"",sort_id:0,source:0,click:0},imageUrl:"",rules:{title:[{required:!0,message:"请输入资讯标题",trigger:"blur"},{max:100,message:"长度在 1 到 100 个字符",trigger:"blur"}],cid:[{required:!0,message:"请选择资讯分类",trigger:"change"}],content:[{validator:t,trigger:"blur"}],sort_id:[{type:"number",message:"排序必须为数字",trigger:"blur"}],click:[{type:"number",message:"点击量必须为数字",trigger:"blur"}],link_url:[{max:200,message:"长度在 0 到 200 个字符",trigger:"blur"},{validator:r,trigger:"blur"}],seo_keywords:[{max:100,message:"长度在 0 到 100 个字符",trigger:"blur"}],seo_description:[{max:200,message:"长度在 0 到 200 个字符",trigger:"blur"}]}}},computed:{config:function(){return this.$store.state.config}},mounted:function(){this.editor=new d.a("#editor"),this.editor.config.uploadImgServer=window.global.RequestBaseUrl+f["a"].uploadEditor,this.editor.config.uploadImgHeaders={admintoken:Object(n["e"])()},this.editor.config.uploadVideoServer=window.global.RequestBaseUrl+f["a"].upLoadVideo,this.editor.config.uploadVideoHeaders={admintoken:Object(n["e"])()},this.editor.config.zIndex=0,this.editor.config.pasteFilterStyle=!1,this.editor.create()},created:function(){this.fileupload_size=this.config.fileupload_size,this.fileupload_ext=this.config.fileupload_ext,this.fetchInfo()},methods:{handleRemove:function(e,t){var r=this.form.attach.indexOf({name:e.name,url:e.url});this.form.attach.splice(r,1)},handleAttachSuccess:function(e,t){if(200!=e.code)return this.$message.error(e.message),!1;var r={name:e.data.name,url:e.data.url};this.form.attach.push(r)},beforeAttachUpload:function(e){var t="doc,docx,xls,xlsx,csv,ppt,pptx,pdf",r=e.name.split("."),i=r[r.length-1];return t.includes(i)?!(e.size/1024>this.fileupload_size)||(this.$message.error("上传文件最大为".concat(this.fileupload_size,"kb")),!1):(this.$message.error("上传文件格式不允许"),!1)},fetchInfo:function(){var e=this;this.infoLoading=!0,Object(c["a"])({type:"articleCategory"}).then((function(t){e.articleCategory=t.data;var r={id:e.$route.query.id};return Object(s["c"])(r,"get")})).then((function(t){e.form=Object(o["a"])({},t.data.info),e.form.addtime=1e3*e.form.addtime,e.form.is_display=1==e.form.is_display,e.editor.txt.html(e.form.content),e.imageUrl=t.data.imageUrl,e.infoLoading=!1})).catch((function(){}))},onSubmit:function(e){var t=this,r=this;this.form.content=this.editor.txt.html();var i=Object(o["a"])({},this.form);this.$refs[e].validate((function(e){if(!e)return!1;if(i.is_display=!0===i.is_display?1:0,i.addtime){var a=new Date(i.addtime);i.addtime=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+" "+a.getHours()+":"+a.getMinutes()}Object(s["c"])(i).then((function(e){return t.$message.success(e.message),setTimeout((function(){r.$router.push("/content/article/list")}),1500),!0})).catch((function(){}))}))},handleThumbSuccess:function(e,t){if(200!=e.code)return this.$message.error(e.message),!1;this.imageUrl=URL.createObjectURL(t.raw),this.form.thumb=e.data.file_id},beforeThumbUpload:function(e){var t=e.type.split("/"),r=t[1],i=this.fileupload_ext.split(",");return i.includes(r)?!(e.size/1024>this.fileupload_size)||(this.$message.error("上传文件最大为".concat(this.fileupload_size,"kb")),!1):(this.$message.error("上传文件格式不允许"),!1)},goto:function(e){this.$router.push(e)}}},m=p,h=(r("a1ca"),r("2877")),g=Object(h["a"])(m,i,a,!1,null,"0a8f182d",null);t["default"]=g.exports},d784:function(e,t,r){"use strict";r("ac1f");var i=r("6eeb"),a=r("d039"),o=r("b622"),n=r("9263"),l=r("9112"),s=o("species"),c=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=o("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,d){var m=o(e),h=!a((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),g=h&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[m]=/./[m]),r.exec=function(){return t=!0,null},r[m](""),!t}));if(!h||!g||"replace"===e&&(!c||!u||f)||"split"===e&&!p){var b=/./[m],v=r(m,""[e],(function(e,t,r,i,a){return t.exec===n?h&&!a?{done:!0,value:b.call(t,r,i)}:{done:!0,value:e.call(r,t,i)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=v[0],_=v[1];i(String.prototype,e,x),i(RegExp.prototype,m,2==t?function(e,t){return _.call(e,this,t)}:function(e){return _.call(e,this)})}d&&l(RegExp.prototype[m],"sham",!0)}}}]);