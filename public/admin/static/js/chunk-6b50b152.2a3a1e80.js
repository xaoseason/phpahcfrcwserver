(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b50b152"],{1276:function(e,t,i){"use strict";var n=i("d784"),o=i("44e7"),l=i("825a"),r=i("1d80"),a=i("4840"),s=i("8aa5"),c=i("50c4"),u=i("14c3"),f=i("9263"),d=i("d039"),p=[].push,m=Math.min,h=4294967295,g=!d((function(){return!RegExp(h,"y")}));n("split",2,(function(e,t,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,i){var n=String(r(this)),l=void 0===i?h:i>>>0;if(0===l)return[];if(void 0===e)return[n];if(!o(e))return t.call(n,e,l);var a,s,c,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,g=new RegExp(e.source,d+"g");while(a=f.call(g,n)){if(s=g.lastIndex,s>m&&(u.push(n.slice(m,a.index)),a.length>1&&a.index<n.length&&p.apply(u,a.slice(1)),c=a[0].length,m=s,u.length>=l))break;g.lastIndex===a.index&&g.lastIndex++}return m===n.length?!c&&g.test("")||u.push(""):u.push(n.slice(m)),u.length>l?u.slice(0,l):u}:"0".split(void 0,0).length?function(e,i){return void 0===e&&0===i?[]:t.call(this,e,i)}:t,[function(t,i){var o=r(this),l=void 0==t?void 0:t[e];return void 0!==l?l.call(t,o,i):n.call(String(o),t,i)},function(e,o){var r=i(n,e,this,o,n!==t);if(r.done)return r.value;var f=l(e),d=String(this),p=a(f,RegExp),b=f.unicode,v=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),x=new p(g?f:"^(?:"+f.source+")",v),w=void 0===o?h:o>>>0;if(0===w)return[];if(0===d.length)return null===u(x,d)?[d]:[];var _=0,E=0,y=[];while(E<d.length){x.lastIndex=g?E:0;var I,R=u(x,g?d:d.slice(E));if(null===R||(I=m(c(x.lastIndex+(g?0:E)),d.length))===_)E=s(d,E,b);else{if(y.push(d.slice(_,E)),y.length===w)return y;for(var S=1;S<=R.length-1;S++)if(y.push(R[S]),y.length===w)return y;E=_=I}}return y.push(d.slice(_)),y}]}),!g)},"14c3":function(e,t,i){var n=i("c6b6"),o=i("9263");e.exports=function(e,t){var i=e.exec;if("function"===typeof i){var l=i.call(e,t);if("object"!==typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"8aa5":function(e,t,i){"use strict";var n=i("6547").charAt;e.exports=function(e,t,i){return t+(i?n(e,t).length:1)}},9263:function(e,t,i){"use strict";var n=i("ad6d"),o=i("9f7f"),l=RegExp.prototype.exec,r=String.prototype.replace,a=l,s=function(){var e=/a/,t=/b*/g;return l.call(e,"a"),l.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=o.UNSUPPORTED_Y||o.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=s||u||c;f&&(a=function(e){var t,i,o,a,f=this,d=c&&f.sticky,p=n.call(f),m=f.source,h=0,g=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(m="(?: "+m+")",g=" "+g,h++),i=new RegExp("^(?:"+m+")",p)),u&&(i=new RegExp("^"+m+"$(?!\\s)",p)),s&&(t=f.lastIndex),o=l.call(d?i:f,g),d?o?(o.input=o.input.slice(h),o[0]=o[0].slice(h),o.index=f.lastIndex,f.lastIndex+=o[0].length):f.lastIndex=0:s&&o&&(f.lastIndex=f.global?o.index+o[0].length:t),u&&o&&o.length>1&&r.call(o[0],i,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o}),e.exports=a},"9f7f":function(e,t,i){"use strict";var n=i("d039");function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a331:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[e._v("客服配置")])]),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"Loading",fit:"","highlight-current-row":"",data:e.list}},[i("el-table-column",{attrs:{label:"姓名","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),i("el-table-column",{attrs:{prop:"mobile",label:"手机号","min-width":"120"}}),i("el-table-column",{attrs:{prop:"tel",label:"座机","min-width":"120"}}),i("el-table-column",{attrs:{prop:"weixin",label:"微信","min-width":"120"}}),i("el-table-column",{attrs:{prop:"qq",label:"QQ","min-width":"120"}}),i("el-table-column",{attrs:{label:"状态",align:"center","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tag",{attrs:{type:e._f("colorFilter")(t.row.status)}},[e._v(" "+e._s(1==t.row.status?"正常":"暂停")+" ")])]}}])}),i("el-table-column",{attrs:{label:"关联企业数",align:"center","min-width":"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(" "+e._s(t.row.company_num)+" ")])]}}])}),i("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(i){return e.funEdit(t.$index,t.row)}}},[e._v(" 修改 ")]),i("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(i){return e.funDelete(t.$index,t.row)}}},[e._v(" 删除 ")])]}}])})],1),i("div",{staticClass:"spaceline"}),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.funAdd}},[e._v(" 添加 ")])],1),e.dialogFormVisible?i("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible,width:"30%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("diaform",{attrs:{"item-info":e.itemInfo},on:{setDialogFormVisible:e.closeDialog,pageReload:e.fetchData}})],1):e._e()],1)},o=[],l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-form",{ref:"form",staticClass:"common-form",attrs:{model:e.form,"label-width":"100px",rules:e.rules,"inline-message":!0}},[i("el-form-item",{attrs:{label:"照片",prop:"photo"}},[i("el-upload",{staticClass:"photo-uploader",attrs:{action:e.apiUpload,headers:e.headers,"show-file-list":!1,"on-success":e.handlePhotoSuccess,"before-upload":e.beforePhotoUpload}},[e.form.photo?i("img",{staticClass:"photo",attrs:{src:e.photoUrl}}):i("i",{staticClass:"el-icon-plus photo-uploader-icon"})])],1),i("el-form-item",{attrs:{label:"姓名",prop:"name"}},[i("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),i("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[i("el-input",{model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),i("el-form-item",{attrs:{label:"座机",prop:"tel"}},[i("el-input",{model:{value:e.form.tel,callback:function(t){e.$set(e.form,"tel",t)},expression:"form.tel"}})],1),i("el-form-item",{attrs:{label:"微信",prop:"weixin"}},[i("el-input",{model:{value:e.form.weixin,callback:function(t){e.$set(e.form,"weixin",t)},expression:"form.weixin"}})],1),i("el-form-item",{attrs:{label:"微信二维码",prop:"wx_qrcode"}},[i("el-upload",{staticClass:"photo-uploader",attrs:{action:e.apiUpload,headers:e.headers,"show-file-list":!1,"on-success":e.handleQrcodeSuccess,"before-upload":e.beforeQrcodeUpload}},[e.form.wx_qrcode?i("img",{staticClass:"photo",attrs:{src:e.qrcodeUrl}}):i("i",{staticClass:"el-icon-plus photo-uploader-icon"})])],1),i("el-form-item",{attrs:{label:"QQ",prop:"qq"}},[i("el-input",{model:{value:e.form.qq,callback:function(t){e.$set(e.form,"qq",t)},expression:"form.qq"}})],1),i("el-form-item",{attrs:{label:"是否可用",prop:"status"}},[i("el-switch",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1),i("el-form-item",{attrs:{label:" "}},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("保存")]),i("el-button",{on:{click:e.closeDialog}},[e._v("取 消")])],1)],1)],1)},r=[],a=(i("caad"),i("d3b7"),i("ac1f"),i("2532"),i("3ca3"),i("1276"),i("ddb0"),i("2b3d"),i("5530")),s=i("b775"),c=i("d722");function u(e){return Object(s["a"])({url:c["a"].customerServiceList,method:"get",params:e})}function f(e){return Object(s["a"])({url:c["a"].customerServiceAdd,method:"post",data:e})}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"post";return"post"==t?Object(s["a"])({url:c["a"].customerServiceEdit,method:t,data:e}):Object(s["a"])({url:c["a"].customerServiceEdit,method:t,params:e})}function p(e){return Object(s["a"])({url:c["a"].customerServiceDelete,method:"post",data:e})}var m=i("5f87"),h={props:["itemInfo"],data:function(){return{headers:{admintoken:Object(m["e"])()},fileupload_size:"",fileupload_ext:"",apiUpload:window.global.RequestBaseUrl+c["a"].upload,photoUrl:"",qrcodeUrl:"",form:{id:0,photo:0,name:"",mobile:"",tel:"",weixin:"",wx_qrcode:0,qq:"",status:!0},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"}]}}},computed:{config:function(){return this.$store.state.config}},created:function(){this.fileupload_size=this.config.fileupload_size,this.fileupload_ext=this.config.fileupload_ext,this.fetchInfo()},methods:{fetchInfo:function(){null!==this.itemInfo&&(this.itemInfo.status=1==this.itemInfo.status,this.form=Object(a["a"])(Object(a["a"])({},this.form),this.itemInfo),this.photoUrl=this.itemInfo.photoUrl,this.qrcodeUrl=this.itemInfo.qrcodeUrl)},addSave:function(e,t){var i=this;this.$refs[t].validate((function(t){if(!t)return!1;e.status=!0===e.status?1:0,f(e).then((function(e){return i.$message.success(e.message),i.closeDialog(),i.pageReload(),!0})).catch((function(){}))}))},editSave:function(e,t){var i=this;this.$refs[t].validate((function(t){if(!t)return!1;e.status=!0===e.status?1:0,d(e).then((function(e){return i.$message.success(e.message),i.closeDialog(),i.pageReload(),!0})).catch((function(){}))}))},onSubmit:function(e){var t=this,i=Object(a["a"])({},t.form);parseInt(i.id)>0?t.editSave(i,e):t.addSave(i,e)},closeDialog:function(){this.$emit("setDialogFormVisible")},pageReload:function(){this.$emit("pageReload")},handlePhotoSuccess:function(e,t){if(200!=e.code)return this.$message.error(e.message),!1;this.photoUrl=URL.createObjectURL(t.raw),this.form.photo=e.data.file_id},beforePhotoUpload:function(e){var t=e.type.split("/"),i=t[1],n=this.fileupload_ext.split(",");return n.includes(i)?!(e.size/1024>this.fileupload_size)||(this.$message.error("上传文件最大为".concat(this.fileupload_size,"kb")),!1):(this.$message.error("上传文件格式不允许"),!1)},handleQrcodeSuccess:function(e,t){if(200!=e.code)return this.$message.error(e.message),!1;this.qrcodeUrl=URL.createObjectURL(t.raw),this.form.wx_qrcode=e.data.file_id},beforeQrcodeUpload:function(e){var t=e.type.split("/"),i=t[1],n=this.fileupload_ext.split(",");return n.includes(i)?!(e.size/1024>this.fileupload_size)||(this.$message.error("上传文件最大为".concat(this.fileupload_size,"kb")),!1):(this.$message.error("上传文件格式不允许"),!1)}}},g=h,b=(i("d3bf"),i("2877")),v=Object(b["a"])(g,l,r,!1,null,"53456bf4",null),x=v.exports,w={filters:{colorFilter:function(e){return 1==e?"success":"danger"}},components:{diaform:x},data:function(){return{detailContent:{},itemInfo:null,dialogTitle:"",dialogFormVisible:!1,list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0;var t={};u(t).then((function(t){e.list=t.data.items,e.listLoading=!1}))},funAdd:function(e,t){this.itemInfo=null,this.dialogTitle="添加客服",this.dialogFormVisible=!0},funEdit:function(e,t){t&&(this.itemInfo=t),this.dialogTitle="编辑客服",this.dialogFormVisible=!0},funDelete:function(e,t){var i=this;i.$confirm("删除后该客服下的企业将变为无客服状态，确认删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e={id:t.id};p(e).then((function(e){return i.$message.success(e.message),i.fetchData(),!0}))})).catch((function(){}))},closeDialog:function(){this.dialogFormVisible=!1}}},_=w,E=Object(b["a"])(_,n,o,!1,null,null,null);t["default"]=E.exports},ac1f:function(e,t,i){"use strict";var n=i("23e7"),o=i("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},b7ba:function(e,t,i){},d3bf:function(e,t,i){"use strict";var n=i("b7ba"),o=i.n(n);o.a},d784:function(e,t,i){"use strict";i("ac1f");var n=i("6eeb"),o=i("d039"),l=i("b622"),r=i("9263"),a=i("9112"),s=l("species"),c=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=l("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var i="ab".split(e);return 2!==i.length||"a"!==i[0]||"b"!==i[1]}));e.exports=function(e,t,i,f){var m=l(e),h=!o((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),g=h&&!o((function(){var t=!1,i=/a/;return"split"===e&&(i={},i.constructor={},i.constructor[s]=function(){return i},i.flags="",i[m]=/./[m]),i.exec=function(){return t=!0,null},i[m](""),!t}));if(!h||!g||"replace"===e&&(!c||!u||d)||"split"===e&&!p){var b=/./[m],v=i(m,""[e],(function(e,t,i,n,o){return t.exec===r?h&&!o?{done:!0,value:b.call(t,i,n)}:{done:!0,value:e.call(i,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=v[0],w=v[1];n(String.prototype,e,x),n(RegExp.prototype,m,2==t?function(e,t){return w.call(e,this,t)}:function(e){return w.call(e,this)})}f&&a(RegExp.prototype[m],"sham",!0)}}}]);