(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2abc95ee"],{1276:function(t,e,a){"use strict";var i=a("d784"),l=a("44e7"),r=a("825a"),s=a("1d80"),n=a("4840"),o=a("8aa5"),c=a("50c4"),u=a("14c3"),m=a("9263"),f=a("d039"),d=[].push,p=Math.min,h=4294967295,g=!f((function(){return!RegExp(h,"y")}));i("split",2,(function(t,e,a){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var i=String(s(this)),r=void 0===a?h:a>>>0;if(0===r)return[];if(void 0===t)return[i];if(!l(t))return e.call(i,t,r);var n,o,c,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,f+"g");while(n=m.call(g,i)){if(o=g.lastIndex,o>p&&(u.push(i.slice(p,n.index)),n.length>1&&n.index<i.length&&d.apply(u,n.slice(1)),c=n[0].length,p=o,u.length>=r))break;g.lastIndex===n.index&&g.lastIndex++}return p===i.length?!c&&g.test("")||u.push(""):u.push(i.slice(p)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var l=s(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,l,a):i.call(String(l),e,a)},function(t,l){var s=a(i,t,this,l,i!==e);if(s.done)return s.value;var m=r(t),f=String(this),d=n(m,RegExp),_=m.unicode,b=(m.ignoreCase?"i":"")+(m.multiline?"m":"")+(m.unicode?"u":"")+(g?"y":"g"),x=new d(g?m:"^(?:"+m.source+")",b),v=void 0===l?h:l>>>0;if(0===v)return[];if(0===f.length)return null===u(x,f)?[f]:[];var w=0,y=0,I=[];while(y<f.length){x.lastIndex=g?y:0;var j,C=u(x,g?f:f.slice(y));if(null===C||(j=p(c(x.lastIndex+(g?0:y)),f.length))===w)y=o(f,y,_);else{if(I.push(f.slice(w,y)),I.length===v)return I;for(var S=1;S<=C.length-1;S++)if(I.push(C[S]),I.length===v)return I;y=w=j}}return I.push(f.slice(w)),I}]}),!g)},"14c3":function(t,e,a){var i=a("c6b6"),l=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var r=a.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return l.call(t,e)}},"175e":function(t,e,a){"use strict";var i=a("5417"),l=a.n(i);l.a},2603:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("报名列表")])]),a("div",{staticClass:"list-search"},[a("el-form",{staticStyle:{display:"grid","grid-template-columns":"repeat(4, 350px)"},attrs:{inline:"",model:t.form}},[a("el-form-item",{attrs:{label:"审核状态","label-width":"100px"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择审核状态",clearable:""},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[a("el-option",{attrs:{label:"已审核",value:"1"}}),a("el-option",{attrs:{label:"未审核",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"笔试缴费状态","label-width":"100px"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择笔试缴费",clearable:""},model:{value:t.form.is_pay_pen,callback:function(e){t.$set(t.form,"is_pay_pen",e)},expression:"form.is_pay_pen"}},[a("el-option",{attrs:{label:"已缴费",value:"1"}}),a("el-option",{attrs:{label:"未缴费",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"面试缴费状态","label-width":"100px"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择面试缴费",clearable:""},model:{value:t.form.is_pay_itw,callback:function(e){t.$set(t.form,"is_pay_itw",e)},expression:"form.is_pay_itw"}},[a("el-option",{attrs:{label:"已缴费",value:"1"}}),a("el-option",{attrs:{label:"未缴费",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"报名时间排序","label-width":"100px"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择排序方式",clearable:""},model:{value:t.form.sign_time_sort_type,callback:function(e){t.$set(t.form,"sign_time_sort_type",e)},expression:"form.sign_time_sort_type"}},[a("el-option",{attrs:{label:"升序",value:"1"}}),a("el-option",{attrs:{label:"降序",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"修改时间排序","label-width":"100px"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择排序方式",clearable:""},model:{value:t.form.edit_time_sort_type,callback:function(e){t.$set(t.form,"edit_time_sort_type",e)},expression:"form.edit_time_sort_type"}},[a("el-option",{attrs:{label:"升序",value:"1"}}),a("el-option",{attrs:{label:"降序",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"考试姓名","label-width":"100px"}},[a("el-input",{staticStyle:{height:"32px",width:"150px"},attrs:{size:"small",placeholder:"请输入考试姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"身份证号","label-width":"100px"}},[a("el-input",{staticStyle:{height:"32px",width:"150px"},attrs:{size:"small",placeholder:"请输入身份证号"},model:{value:t.form.idcard,callback:function(e){t.$set(t.form,"idcard",e)},expression:"form.idcard"}})],1),a("el-form-item",{attrs:{label:"户籍地","label-width":"100px"}},[a("el-input",{staticStyle:{height:"32px",width:"150px"},attrs:{size:"small",placeholder:"请输入户籍地"},model:{value:t.form.hjd,callback:function(e){t.$set(t.form,"hjd",e)},expression:"form.hjd"}})],1),a("el-form-item",{attrs:{label:"居住地","label-width":"100px"}},[a("el-input",{staticStyle:{height:"32px",width:"150px"},attrs:{size:"small",placeholder:"请输入居住地"},model:{value:t.form.residence,callback:function(e){t.$set(t.form,"residence",e)},expression:"form.residence"}})],1),a("el-form-item",{attrs:{label:"手机号码","label-width":"100px"}},[a("el-input",{staticStyle:{height:"32px",width:"150px"},attrs:{size:"small",placeholder:"请输入手机号码"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),a("el-form-item",{attrs:{label:"报考岗位","label-width":"100px"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择报考岗位",clearable:""},model:{value:t.form.exam_post_id,callback:function(e){t.$set(t.form,"exam_post_id",e)},expression:"form.exam_post_id"}},t._l(t.post_list,(function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.exam_post_id}})})),1)],1),a("div",[a("el-button",{staticClass:"seacrh_btn",attrs:{type:"primary",size:"small"},on:{click:function(e){return t.getList()}}},[t._v("搜索")]),a("el-button",{staticClass:"seacrh_btn",attrs:{type:"primary",size:"small"},on:{click:function(e){return t.ExportSignLists()}}},[t._v("导出")])],1)],1)],1),a("div",{staticClass:"list-search"},[a("el-form",{staticStyle:{"margin-left":"30px"},attrs:{inline:""}},[a("el-form-item",[a("el-button",{staticClass:"seacrh_btn",attrs:{type:"primary",size:"small"},on:{click:t.piliangshenhe}},[t._v("批量审核")])],1),a("el-form-item",[a("el-button",{staticClass:"seacrh_btn",attrs:{type:"primary",size:"small"},on:{click:t.moban1}},[t._v("下载准考证模板")])],1),a("el-form-item",[a("el-upload",{staticClass:"upload-demo",attrs:{action:"","auto-upload":!1,"show-file-list":!1,"on-change":t.beforeAttachUpload1,"on-remove":t.beforeAttachUpload1}},[a("el-button",{staticClass:"seacrh_btn",attrs:{type:"primary",size:"small"}},[t._v("导入准考证信息")])],1)],1),a("el-form-item",[a("el-button",{staticClass:"seacrh_btn",attrs:{type:"primary",size:"small"},on:{click:t.moban}},[t._v("下载成绩模板")])],1),a("el-form-item",[a("el-upload",{staticClass:"upload-demo",attrs:{action:"","auto-upload":!1,"show-file-list":!1,"on-change":t.beforeAttachUpload,"on-remove":t.beforeAttachUpload}},[a("el-button",{staticClass:"seacrh_btn",attrs:{type:"primary",size:"small"}},[t._v("导入成绩")])],1)],1)],1)],1),a("div",{staticClass:"spaceline"}),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",fit:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"姓名","show-overflow-tooltip":"","min-width":"200",prop:"realname"}}),a("el-table-column",{attrs:{label:"身份证号","show-overflow-tooltip":"","min-width":"200",prop:"idcard"}}),a("el-table-column",{attrs:{label:"手机号","show-overflow-tooltip":"","min-width":"200",prop:"mobile"}}),a("el-table-column",{attrs:{label:"审核状态",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(0==e.row.status?"待审核":1==e.row.status?"通过":2==e.row.status?"未通过":""))])]}}])}),a("el-table-column",{attrs:{label:"笔试支付",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(1==e.row.is_pay_pen?"已支付":"未支付"))])]}}])}),a("el-table-column",{attrs:{label:"面试支付",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(1==e.row.is_pay_itw?"已支付":"未支付"))])]}}])}),a("el-table-column",{attrs:{label:"报名时间","show-overflow-tooltip":"","min-width":"200",prop:"sign_time"}}),a("el-table-column",{attrs:{label:"资料修改时间","show-overflow-tooltip":"","min-width":"200",prop:"edittime"}}),a("el-table-column",{attrs:{label:"审核管理员","show-overflow-tooltip":"","min-width":"200",prop:"check_user_name"}}),a("el-table-column",{attrs:{label:"审核时间","show-overflow-tooltip":"","min-width":"200",prop:"check_time"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.getSignInfo(e.row.exam_sign_id)}}},[t._v(" 审核 ")])]}}])})],1),a("div",{staticClass:"spaceline"}),a("el-row",{attrs:{gutter:20}},[a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:24}},[a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[10,15,20,30,40],"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),a("el-dialog",{attrs:{title:"审核",visible:t.dialogVisible,width:"600px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{attrs:{model:t.forms,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"是否通过"}},[a("el-radio",{attrs:{label:"1"},model:{value:t.forms.status,callback:function(e){t.$set(t.forms,"status",e)},expression:"forms.status"}},[t._v("通过")]),a("el-radio",{attrs:{label:"2"},model:{value:t.forms.status,callback:function(e){t.$set(t.forms,"status",e)},expression:"forms.status"}},[t._v("不通过")])],1),a("el-form-item",{attrs:{label:"原因"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.forms.note,callback:function(e){t.$set(t.forms,"note",e)},expression:"forms.note"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.verify}},[t._v("确 定")])],1)],1),t.verifyDialog?a("el-dialog",{attrs:{width:"90%",visible:t.verifyDialog,title:"审核"},on:{"update:visible":function(e){t.verifyDialog=e}}},[a("el-form",{staticClass:"sign-preview",attrs:{"label-width":"150px"}},[a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"姓名"}},[a("el-input",{attrs:{value:t.edi_form.realname}})],1),1==t.signInfo.project_info.switch_id_card?a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"身份证号"}},[a("el-input",{attrs:{value:t.edi_form.idcard}})],1):t._e(),a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"性别"}},[a("el-input",{attrs:{value:1==t.signInfo.resume.sex?"男":"女"}})],1),a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"出生日期"}},[a("el-input",{attrs:{value:t.signInfo.resume.birthday}})],1),a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"民族"}},[a("el-input",{attrs:{value:t.signInfo.resume.nation}})],1),a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"手机号"}},[a("el-input",{attrs:{value:t.signInfo.resume_contact.mobile}})],1),1==t.signInfo.project_info.switch_email?a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"邮箱"}},[a("el-input",{attrs:{value:t.signInfo.resume_contact.email}})],1):t._e(),1==t.signInfo.project_info.switch_height?a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"身高"}},[a("el-input",{attrs:{value:t.signInfo.resume.height}})],1):t._e(),1==t.signInfo.project_info.switch_weight?a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"体重"}},[a("el-input",{attrs:{value:t.signInfo.resume.weight}})],1):t._e(),1==t.signInfo.project_info.switch_vision?a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"视力"}},[a("el-input",{attrs:{value:t.signInfo.resume.vision}})],1):t._e(),a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"政治面貌"}},[a("el-input",{attrs:{value:t.signInfo.resume.custom_field_1}})],1),a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"家庭住址"}},[a("el-input",{attrs:{value:t.signInfo.resume.residence}})],1),a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"户籍地"}},[a("el-input",{attrs:{value:t.signInfo.resume.hjd}})],1),a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"最高学历"}},[a("el-input",{attrs:{value:1==t.signInfo.resume.education?"初中":2==t.signInfo.resume.education?"高中":3==t.signInfo.resume.education?"中技":4==t.signInfo.resume.education?"中专":5==t.signInfo.resume.education?"大专":6==t.signInfo.resume.education?"本科":7==t.signInfo.resume.education?"硕士":8==t.signInfo.resume.education?"博士":"博后"}})],1),1==t.signInfo.project_info.switch_title?a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"职称"}},[a("el-input",{attrs:{value:t.signInfo.resume.title}})],1):t._e(),a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"学制"}},[a("el-input",{attrs:{value:1==t.signInfo.resume.schoolsystem?"全日制":"非全日制"}})],1),a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"毕业院校"}},[a("el-input",{attrs:{value:t.signInfo.resume.school}})],1),a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"所学专业"}},[a("el-input",{attrs:{value:void 0!=t.signInfo.major.name&&null!=t.signInfo.major.name&&""!=t.signInfo.major.name?t.signInfo.major.name:"-"}})],1),a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"毕业时间"}},[a("el-input",{attrs:{value:t.signInfo.resume.custom_field_2}})],1),1==t.signInfo.project_info.switch_fresh_graduates?a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"应届毕业生"}},[a("el-input",{staticClass:"el-form-item1",attrs:{value:1==t.signInfo.sign.fresh_graduates?"是":"否"}})],1):t._e(),a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"退伍军人"}},[a("el-input",{attrs:{value:1==t.signInfo.resume.custom_field_3?"是":"否"}})],1),a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"紧急联系人"}},[a("el-input",{attrs:{value:t.signInfo.resume_contact.sos_name}})],1),a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"紧急联系电话"}},[a("el-input",{attrs:{value:t.signInfo.resume_contact.sos_mobile}})],1),1==t.signInfo.project_info.switch_marriage?a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"婚姻状态"}},[a("el-input",{attrs:{value:1==t.signInfo.resume.marriage?"已婚":2==t.signInfo.resume.marriage?"未婚":"保密"}})],1):t._e(),1==t.signInfo.project_info.switch_birth?a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"生育状况"}},[a("el-input",{attrs:{value:1==t.signInfo.resume.birth?"已育":"未育"}})],1):t._e(),a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"报考岗位"}},[a("el-input",{attrs:{value:t.signInfo.post.name+" - "+t.signInfo.post.code}})],1),1==t.signInfo.project_info.switch_educational_background?a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"教育经历:"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.signInfo.resume_education}},[a("el-table-column",{attrs:{prop:"school",label:"学校","max-width":"100"}}),a("el-table-column",{attrs:{prop:"major",label:"专业","max-width":"100"}}),a("el-table-column",{attrs:{prop:"education_text",label:"学历","min-width":"500px"}}),a("el-table-column",{attrs:{prop:"starttime",label:"开始日期","max-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.starttime.slice(0,10)))])]}}],null,!1,486250931)}),a("el-table-column",{attrs:{prop:"endtime",label:"结束日期","max-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[0!=e.row.endtime?a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.endtime.slice(0,10)))]):a("span",{staticStyle:{"margin-left":"10px"}},[t._v("至今")])]}}],null,!1,4085728902)})],1)],1):t._e(),1==t.signInfo.project_info.switch_work_experience||1==t.signInfo.project_info.switch_job_info?a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"工作经历:"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.signInfo.resume_work}},[a("el-table-column",{attrs:{prop:"companyname",label:"公司名称","max-width":"100"}}),a("el-table-column",{attrs:{prop:"jobname",label:"岗位名称","max-width":"100"}}),a("el-table-column",{attrs:{prop:"duty",label:"岗位职责","min-width":"500px"}}),a("el-table-column",{attrs:{prop:"starttime",label:"开始日期","max-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.starttime.slice(0,10)))])]}}],null,!1,486250931)}),a("el-table-column",{attrs:{prop:"endtime",label:"结束日期","max-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[0!=e.row.endtime?a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.endtime.slice(0,10)))]):a("span",{staticStyle:{"margin-left":"10px"}},[t._v("至今")])]}}],null,!1,4085728902)})],1)],1):t._e(),a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"获得证书:"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.signInfo.resume_certificate}},[a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"130"}}),a("el-table-column",{attrs:{prop:"obtaintime",label:"获得年份","min-width":"130"}})],1)],1),1==t.signInfo.project_info.switch_family_background?a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"家庭关系:"}},[a("el-table",{staticStyle:{width:"700px"},attrs:{data:t.signInfo.resume_family}},[a("el-table-column",{attrs:{prop:"name",label:"姓名","min-width":"130"}}),a("el-table-column",{attrs:{prop:"relation",label:"关系","min-width":"130"}}),a("el-table-column",{attrs:{prop:"mobile",label:"电话","min-width":"130"}})],1)],1):t._e(),Array.isArray(t.signInfo.sign.custom_field)?t._l(t.signInfo.sign.custom_field,(function(t,e){return a("el-form-item",{key:e,attrs:{label:t.name}},[3==t.type?a("el-image",{staticStyle:{width:"150px",height:"200px"},attrs:{src:"http://www.ahcfrc.com"+t.value,"preview-src-list":["http://www.ahcfrc.com"+t.value]}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline",staticStyle:{width:"150px",height:"200px"}})])]):a("el-input",{attrs:{value:t.value}})],1)})):t._e(),1==t.signInfo.project_info.switch_photo?a("el-form-item",{staticClass:"el-form-item1",attrs:{label:"一寸电子照:"}},[a("el-image",{staticStyle:{width:"150px",height:"200px"},attrs:{src:"http://www.ahcfrc.com"+t.signInfo.resume.photo,"preview-src-list":["http://www.ahcfrc.com"+t.signInfo.resume.photo]}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline",staticStyle:{width:"150px",height:"200px"}})])])],1):t._e(),a("el-form-item",{attrs:{label:"身份证正面:"}},[a("el-image",{staticStyle:{width:"150px",height:"200px"},attrs:{src:"http://www.ahcfrc.com"+t.signInfo.exam_resume.idcard_img_just,"preview-src-list":["http://www.ahcfrc.com"+t.signInfo.exam_resume.idcard_img_just]}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])],1),a("el-form-item",{attrs:{label:"身份证反面:"}},[a("el-image",{staticStyle:{width:"150px",height:"200px"},attrs:{src:"http://www.ahcfrc.com"+t.signInfo.exam_resume.idcard_img_back,"preview-src-list":["http://www.ahcfrc.com"+t.signInfo.exam_resume.idcard_img_back]}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])],1),1==t.signInfo.project_info.drivers_license?a("el-form-item",{attrs:{label:"驾驶证:"}},[a("el-image",{staticStyle:{width:"150px",height:"200px"},attrs:{src:"http://www.ahcfrc.com"+t.signInfo.exam_resume.driver_certificate_img,"preview-src-list":["http://www.ahcfrc.com"+t.signInfo.exam_resume.driver_certificate_img]}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])],1):t._e(),a("el-form-item",{attrs:{label:"学士学位证书:"}},[a("el-image",{staticStyle:{width:"150px",height:"200px"},attrs:{src:"http://www.ahcfrc.com"+t.signInfo.exam_resume.degree_img,"preview-src-list":["http://www.ahcfrc.com"+t.signInfo.exam_resume.degree_img]}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])],1),a("el-form-item",{attrs:{label:"学历证书:"}},[a("el-image",{staticStyle:{width:"150px",height:"200px"},attrs:{src:"http://www.ahcfrc.com"+t.signInfo.exam_resume.academic_certificate_img,"preview-src-list":["http://www.ahcfrc.com"+t.signInfo.exam_resume.academic_certificate_img]}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline",staticStyle:{width:"150px",height:"200px"}})])])],1),a("el-form-item",{attrs:{label:"上次不通过原因"}},[a("el-input",{attrs:{value:""!=t.signInfo.sign.note?t.signInfo.sign.note:"-"}})],1),a("el-form-item",[a("el-button",{staticClass:"seacrh_btn",attrs:{type:"primary",size:"small"},on:{click:t.verifyBtn}},[t._v("审核")])],1)],2)],1):t._e()],1)],1)},l=[],r=(a("4160"),a("b0c0"),a("ac1f"),a("2532"),a("1276"),a("159b"),a("63a1")),s={filters:{sysFilter:function(t){var e={1:"系统分类",0:"自定义分类"};return e[t]}},data:function(){return{verifyDialog:!1,edi_form:{exam_sign_id:"",realname:"",idcard:""},signInfo:{},dialogVisible:!1,tableIdarr:[],list:[],ids:[],form:{exam_project_id:"",exam_post_id:"",status:"",is_pay_pen:"",is_pay_itw:"",sign_time_sort_type:"",edit_time_sort_type:"",name:"",idcard:"",page:1,pagesize:10,hjd:"",residence:"",mobile:""},forms:{status:"",note:"",exam_sign_id:[]},exam_project_id:"",listLoading:!1,post_list:[],total:0,currentPage:1,pagesize:10}},created:function(){this.getid(),this.getList()},methods:{getSignInfo:function(t){var e=this,a=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});Object(r["v"])({exam_sign_id:t}).then((function(i){200===i.code&&(a.close(),e.signInfo=i.data,e.edi_form.exam_sign_id=t,e.edi_form.realname=i.data.sign.realname,e.edi_form.idcard=i.data.sign.idcard,e.verifyDialog=!0)})).catch((function(){a.close(),e.$message({message:"请求失败",type:"error"})}))},verifyBtn:function(){this.forms.exam_sign_id=[this.edi_form.exam_sign_id],this.dialogVisible=!0},getList:function(){var t=this;Object(r["w"])(this.form).then((function(e){200===e.code&&(t.list=e.data.sign_up_list,t.total=e.data.total,t.post_list=e.data.post_list)}))},ExportSignLists:function(){Object(r["c"])(this.form).then((function(t){200===t.code&&(window.location.href="/"+t.data.down_url)}))},piliangshenhe:function(){0==this.forms.exam_sign_id.length?this.$message({message:"请先选择员工",type:"warning"}):this.dialogVisible=!0},verify:function(){var t=this;Object(r["x"])(this.forms).then((function(e){200===e.code&&(t.$message({message:"审核成功",type:"success"}),t.getList(),t.verifyDialog=!1,t.dialogVisible=!1)}))},funsingle:function(t){this.$router.push({path:"/theTest/recruitment/single",query:{exam_project_id:t.exam_project_id}})},moban1:function(){Object(r["b"])({exam_project_id:this.exam_project_id}).then((function(t){200===t.code&&(window.location.href="/"+t.data.down_url)}))},moban:function(){Object(r["a"])({exam_project_id:this.exam_project_id}).then((function(t){200===t.code&&(window.location.href="/"+t.data.down_url)}))},beforeAttachUpload1:function(t){var e=this,a="xlsx,xls",i=t.name.split("."),l=i[i.length-1];if(!a.includes(l))return this.$message.error("上传文件格式不允许"),!1;if(t.size/1024>this.fileupload_size)return this.$message.error("上传文件最大为".concat(this.fileupload_size,"kb")),!1;var s=new FormData;s.append("file",t.raw),s.append("exam_project_id",this.exam_project_id),Object(r["e"])(s).then((function(t){200===t.code&&e.$message({message:"上传成功",type:"success"})}))},beforeAttachUpload:function(t){var e=this,a="xls,xlsx",i=t.name.split("."),l=i[i.length-1];if(!a.includes(l))return this.$message.error("上传文件格式不允许"),!1;if(t.size/1024>this.fileupload_size)return this.$message.error("上传文件最大为".concat(this.fileupload_size,"kb")),!1;var s=new FormData;s.append("file",t.raw),s.append("exam_project_id",this.exam_project_id),Object(r["d"])(s).then((function(t){200===t.code&&e.$message({message:"上传成功",type:"success"})}))},handleSizeChange:function(t){this.form.pagesize=t,this.getList()},handleCurrentChange:function(t){this.form.page=t,this.getList()},funEdit:function(t){this.$router.push({path:"/theTest/recruitment/signlist",query:{exam_sign_id:t.exam_sign_id}})},funDelete:function(t,e){var a=this;a.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){})).catch((function(){}))},funDeleteBatch:function(){var t=this;if(0==t.tableIdarr.length)return t.$message.error("请选择要删除的数据"),!1;t.$confirm("此操作将永久删除选中的数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){})).catch((function(){}))},handleSelectionChange:function(t){var e=[];t.forEach((function(t){e.push(t.exam_sign_id)})),this.forms.exam_sign_id=e},getid:function(){this.exam_project_id=this.$route.query.exam_project_id,this.form.exam_project_id=this.$route.query.exam_project_id},goTo:function(){this.$router.push({path:"/theTest/recruitment/jobs/jobsAdd"})}}},n=s,o=(a("175e"),a("2877")),c=Object(o["a"])(n,i,l,!1,null,"c0c37cf6",null);e["default"]=c.exports},5417:function(t,e,a){},"63a1":function(t,e,a){"use strict";a.d(e,"p",(function(){return r})),a.d(e,"g",(function(){return s})),a.d(e,"z",(function(){return n})),a.d(e,"A",(function(){return o})),a.d(e,"t",(function(){return c})),a.d(e,"h",(function(){return u})),a.d(e,"q",(function(){return m})),a.d(e,"s",(function(){return f})),a.d(e,"r",(function(){return d})),a.d(e,"w",(function(){return p})),a.d(e,"v",(function(){return h})),a.d(e,"u",(function(){return g})),a.d(e,"m",(function(){return _})),a.d(e,"k",(function(){return b})),a.d(e,"l",(function(){return x})),a.d(e,"n",(function(){return v})),a.d(e,"o",(function(){return w})),a.d(e,"x",(function(){return y})),a.d(e,"d",(function(){return I})),a.d(e,"a",(function(){return j})),a.d(e,"y",(function(){return C})),a.d(e,"b",(function(){return S})),a.d(e,"e",(function(){return k})),a.d(e,"i",(function(){return O})),a.d(e,"j",(function(){return E})),a.d(e,"c",(function(){return z})),a.d(e,"f",(function(){return $}));var i=a("b775"),l=a("d722");function r(t){return Object(i["a"])({url:l["a"].index,method:"post",data:t})}function s(t){return Object(i["a"])({url:l["a"].add,method:"post",data:t})}function n(t){return Object(i["a"])({url:l["a"].zhaopindetails,method:"post",data:t})}function o(t){return Object(i["a"])({url:l["a"].zhaopinedit,method:"post",data:t})}function c(t){return Object(i["a"])({url:l["a"].jobsList,method:"post",data:t})}function u(t){return Object(i["a"])({url:l["a"].deletejob,method:"post",data:t})}function m(t){return Object(i["a"])({url:l["a"].jobadd,method:"post",data:t})}function f(t){return Object(i["a"])({url:l["a"].jobedit,method:"post",data:t})}function d(t){return Object(i["a"])({url:l["a"].jobdetails,method:"post",data:t})}function p(t){return Object(i["a"])({url:l["a"].signUpList,method:"post",data:t})}function h(t){return Object(i["a"])({url:l["a"].signUpDetails,method:"post",data:t})}function g(t){return Object(i["a"])({url:l["a"].print_stub_form,method:"post",data:t})}function _(t){return Object(i["a"])({url:l["a"].gongaoList,method:"post",data:t})}function b(t){return Object(i["a"])({url:l["a"].getGongaoList,method:"POST",data:t})}function x(t){return Object(i["a"])({url:l["a"].gongaoAdd,method:"post",data:t})}function v(t){return Object(i["a"])({url:l["a"].gongaodelete,method:"post",data:t})}function w(t){return Object(i["a"])({url:l["a"].gongaoedit,method:"post",data:t})}function y(t){return Object(i["a"])({url:l["a"].verify,method:"post",data:t})}function I(t){return Object(i["a"])({url:l["a"].ImportAchievement,method:"post",data:t})}function j(t){return Object(i["a"])({url:l["a"].ExportForInImportAchievement,method:"post",data:t})}function C(t){return Object(i["a"])({url:l["a"].xiangmudelete,method:"post",data:t})}function S(t){return Object(i["a"])({url:l["a"].ExportForInImportAdmissionTicket,method:"post",data:t})}function k(t){return Object(i["a"])({url:l["a"].ImportAdmissionTicket,method:"post",data:t})}function O(t){return Object(i["a"])({url:l["a"].dindanList,method:"post",data:t})}function E(t){return Object(i["a"])({url:l["a"].dingdandetail,method:"post",data:t})}function z(t){return Object(i["a"])({url:l["a"].ExportSignList,method:"POST",data:t})}function $(t){return Object(i["a"])({url:l["a"].SetPayTag,method:"POST",data:t})}},"8aa5":function(t,e,a){"use strict";var i=a("6547").charAt;t.exports=function(t,e,a){return e+(a?i(t,e).length:1)}},9263:function(t,e,a){"use strict";var i=a("ad6d"),l=a("9f7f"),r=RegExp.prototype.exec,s=String.prototype.replace,n=r,o=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=l.UNSUPPORTED_Y||l.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],m=o||u||c;m&&(n=function(t){var e,a,l,n,m=this,f=c&&m.sticky,d=i.call(m),p=m.source,h=0,g=t;return f&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),g=String(t).slice(m.lastIndex),m.lastIndex>0&&(!m.multiline||m.multiline&&"\n"!==t[m.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,h++),a=new RegExp("^(?:"+p+")",d)),u&&(a=new RegExp("^"+p+"$(?!\\s)",d)),o&&(e=m.lastIndex),l=r.call(f?a:m,g),f?l?(l.input=l.input.slice(h),l[0]=l[0].slice(h),l.index=m.lastIndex,m.lastIndex+=l[0].length):m.lastIndex=0:o&&l&&(m.lastIndex=m.global?l.index+l[0].length:e),u&&l&&l.length>1&&s.call(l[0],a,(function(){for(n=1;n<arguments.length-2;n++)void 0===arguments[n]&&(l[n]=void 0)})),l}),t.exports=n},"9f7f":function(t,e,a){"use strict";var i=a("d039");function l(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=l("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=l("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,a){"use strict";var i=a("23e7"),l=a("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==l},{exec:l})},d784:function(t,e,a){"use strict";a("ac1f");var i=a("6eeb"),l=a("d039"),r=a("b622"),s=a("9263"),n=a("9112"),o=r("species"),c=!l((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),m=r("replace"),f=function(){return!!/./[m]&&""===/./[m]("a","$0")}(),d=!l((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,m){var p=r(t),h=!l((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=h&&!l((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[o]=function(){return a},a.flags="",a[p]=/./[p]),a.exec=function(){return e=!0,null},a[p](""),!e}));if(!h||!g||"replace"===t&&(!c||!u||f)||"split"===t&&!d){var _=/./[p],b=a(p,""[t],(function(t,e,a,i,l){return e.exec===s?h&&!l?{done:!0,value:_.call(e,a,i)}:{done:!0,value:t.call(a,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=b[0],v=b[1];i(String.prototype,t,x),i(RegExp.prototype,p,2==e?function(t,e){return v.call(t,this,e)}:function(t){return v.call(t,this)})}m&&n(RegExp.prototype[p],"sham",!0)}}}]);