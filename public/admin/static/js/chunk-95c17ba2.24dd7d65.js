(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95c17ba2"],{"43dd":function(t,e,n){"use strict";var a=n("9493"),r=n.n(a);r.a},"63a1":function(t,e,n){"use strict";n.d(e,"k",(function(){return o})),n.d(e,"e",(function(){return i})),n.d(e,"u",(function(){return s})),n.d(e,"v",(function(){return u})),n.d(e,"o",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"l",(function(){return d})),n.d(e,"n",(function(){return h})),n.d(e,"m",(function(){return m})),n.d(e,"r",(function(){return p})),n.d(e,"q",(function(){return f})),n.d(e,"p",(function(){return b})),n.d(e,"h",(function(){return g})),n.d(e,"g",(function(){return j})),n.d(e,"i",(function(){return _})),n.d(e,"j",(function(){return y})),n.d(e,"s",(function(){return v})),n.d(e,"c",(function(){return w})),n.d(e,"a",(function(){return x})),n.d(e,"t",(function(){return k})),n.d(e,"b",(function(){return O})),n.d(e,"d",(function(){return z}));var a=n("b775"),r=n("d722");function o(t){return Object(a["a"])({url:r["a"].index,method:"post",data:t})}function i(t){return Object(a["a"])({url:r["a"].add,method:"post",data:t})}function s(t){return Object(a["a"])({url:r["a"].zhaopindetails,method:"post",data:t})}function u(t){return Object(a["a"])({url:r["a"].zhaopinedit,method:"post",data:t})}function c(t){return Object(a["a"])({url:r["a"].jobsList,method:"post",data:t})}function l(t){return Object(a["a"])({url:r["a"].deletejob,method:"post",data:t})}function d(t){return Object(a["a"])({url:r["a"].jobadd,method:"post",data:t})}function h(t){return Object(a["a"])({url:r["a"].jobedit,method:"post",data:t})}function m(t){return Object(a["a"])({url:r["a"].jobdetails,method:"post",data:t})}function p(t){return Object(a["a"])({url:r["a"].signUpList,method:"post",data:t})}function f(t){return Object(a["a"])({url:r["a"].signUpDetails,method:"post",data:t})}function b(t){return Object(a["a"])({url:r["a"].print_stub_form,method:"post",data:t})}function g(t){return Object(a["a"])({url:r["a"].gongaoList,method:"post",data:t})}function j(t){return Object(a["a"])({url:r["a"].gongaoAdd,method:"post",data:t})}function _(t){return Object(a["a"])({url:r["a"].gongaodelete,method:"post",data:t})}function y(t){return Object(a["a"])({url:r["a"].gongaoedit,method:"post",data:t})}function v(t){return Object(a["a"])({url:r["a"].verify,method:"post",data:t})}function w(t){return Object(a["a"])({url:r["a"].ImportAchievement,method:"post",data:t})}function x(t){return Object(a["a"])({url:r["a"].ExportForInImportAchievement,method:"post",data:t})}function k(t){return Object(a["a"])({url:r["a"].xiangmudelete,method:"post",data:t})}function O(t){return Object(a["a"])({url:r["a"].ExportForInImportAdmissionTicket,method:"post",data:t})}function z(t){return Object(a["a"])({url:r["a"].ImportAdmissionTicket,method:"post",data:t})}},9493:function(t,e,n){},a5fb:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("全部招考")])]),n("div",{staticClass:"list-search"},[n("el-form",{attrs:{inline:"",model:t.searchData}},[n("el-form-item",[n("el-input",{staticClass:"input",attrs:{size:"small",placeholder:"标题/职位名称"},model:{value:t.searchData.keywords,callback:function(e){t.$set(t.searchData,"keywords",e)},expression:"searchData.keywords"}})],1),n("el-form-item",{attrs:{label:"是否开启"}},[n("el-select",{attrs:{size:"small",placeholder:"请选择是否开启"},model:{value:t.searchData.is_show,callback:function(e){t.$set(t.searchData,"is_show",e)},expression:"searchData.is_show"}},[n("el-option",{attrs:{label:"是",value:"1"}}),n("el-option",{attrs:{label:"否",value:"0"}})],1)],1)],1),n("el-form",{attrs:{inline:"",model:t.queryForm}},[n("el-form-item",{attrs:{label:"发布时间:"}}),n("el-form-item",[n("el-date-picker",{staticClass:"time",attrs:{size:"small",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.queryForm.time,callback:function(e){t.$set(t.queryForm,"time",e)},expression:"queryForm.time"}})],1),n("el-button",{staticClass:"seacrh_btn",attrs:{type:"primary",size:"small"},on:{click:function(e){return t.getList()}}},[t._v("搜索")])],1)],1),n("div",{staticClass:"spaceline"}),n("el-table",{attrs:{data:t.list,"highlight-current-row":""}},[n("el-table-column",{attrs:{type:"selection",width:"42"}}),n("el-table-column",{attrs:{label:"招聘标题","show-overflow-tooltip":"","min-width":"200",prop:"name"}}),n("el-table-column",{attrs:{label:"发布者","show-overflow-tooltip":"","min-width":"200",prop:"push_user_name"}}),n("el-table-column",{attrs:{label:"状态","show-overflow-tooltip":"","min-width":"200",prop:"name"}}),n("el-table-column",{attrs:{align:"center",label:"添加日期","min-width":"200",prop:"addtime"}}),n("el-table-column",{attrs:{fixed:"right",align:"right",label:"操作",width:"330"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){return t.funedit(e.row)}}},[t._v(" 编辑 ")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){return t.funjobs(e.row)}}},[t._v(" 操作岗位 ")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){return t.funlook(e.row)}}},[t._v(" 查看报名 ")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){return t.funsingle(e.row)}}},[t._v(" 打印留验单 ")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){return t.funDelete(e.row)}}},[t._v(" 删除 ")])]}}])})],1),n("div",{staticClass:"spaceline"}),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.goAdd}},[t._v(" 添加 ")])],1),n("el-col",{staticStyle:{"text-align":"right"},attrs:{span:16}},[n("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[10,15,20,30,40],"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)],1)},r=[],o=n("63a1"),i={data:function(){return{total:1,pagesize:1,currentPage:1,queryForm:{time:[]},form:{name:""},list:[],searchData:{is_show:"",keywords:"",start_time:"",end_time:"",pagesize:10,page:1}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.queryForm.time&&(this.searchData.start_time=this.queryForm.time[0],this.searchData.end_time=this.queryForm.time[1]),Object(o["k"])(this.searchData).then((function(e){200==e.code&&(t.list=e.data.items)}))},funDelete:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.shanchu(t)})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},shanchu:function(t){var e=this;Object(o["t"])({exam_project_id:t.exam_project_id}).then((function(t){200===t.code&&(e.$message({message:"删除成功",type:"success"}),e.getList())}))},handleSizeChange:function(t){this.searchData.pagesize=t,this.getList()},handleCurrentChange:function(t){this.searchData.page=t,this.getList()},funedit:function(t){this.$router.push({path:"/theTest/recruitment/recruitmentEdit",query:{exam_project_id:t.exam_project_id}})},funjobs:function(t){this.$router.push({path:"/theTest/recruitment/jobs/jobs",query:{exam_project_id:t.exam_project_id}})},goAdd:function(){this.$router.push({path:"/theTest/recruitment/recruitmentAdd"})},funlook:function(t){this.$router.push({path:"/theTest/recruitment/sign",query:{exam_project_id:t.exam_project_id}})},funsingle:function(t){this.$router.push({path:"/theTest/recruitment/single",query:{exam_project_id:t.exam_project_id}})}}},s=i,u=(n("43dd"),n("2877")),c=Object(u["a"])(s,a,r,!1,null,"a4bb564a",null);e["default"]=c.exports}}]);