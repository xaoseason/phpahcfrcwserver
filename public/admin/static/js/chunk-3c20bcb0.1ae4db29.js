(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c20bcb0"],{"30e1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("岗位列表")])]),n("el-table",{attrs:{data:t.list,"element-loading-text":"Loading",fit:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{label:"岗位名称","show-overflow-tooltip":"","min-width":"200",prop:"name"}}),n("el-table-column",{attrs:{label:"岗位编码","show-overflow-tooltip":"","min-width":"200",prop:"code"}}),n("el-table-column",{attrs:{label:"招录人数","show-overflow-tooltip":"","min-width":"200",prop:"number"}}),n("el-table-column",{attrs:{label:"发布时间","show-overflow-tooltip":"","min-width":"200",prop:"addtime"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(n){return t.funEdit(e.row)}}},[t._v(" 编辑 ")]),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){return t.del(e.row)}}},[t._v(" 删除 ")])]}}])})],1),n("div",{staticClass:"spaceline"}),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.goTo}},[t._v(" 添加岗位 ")])],1),n("el-col",{staticStyle:{"text-align":"right"},attrs:{span:16}},[n("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[10,15,20,30,40],"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)],1)},o=[],a=n("b85c"),i=n("63a1"),u={filters:{sysFilter:function(t){var e={1:"系统分类",0:"自定义分类"};return e[t]}},data:function(){return{exam_project_id:"",tableIdarr:[],list:[],form:{exam_project_id:"",pagesize:10,page:1},total:0,currentPage:1,pagesize:10}},created:function(){this.getid(),this.getList()},methods:{getList:function(){var t=this;Object(i["o"])(this.form).then((function(e){200===e.code&&(t.list=e.data.items,t.total=e.data.total)}))},handleSizeChange:function(t){this.form.pagesize=t,this.getList()},handleCurrentChange:function(t){this.form.page=t,this.getList()},funEdit:function(t){this.$router.push({path:"/theTest/recruitment/jobs/jobsEdit",query:{exam_post_id:t.exam_post_id}})},funDelete:function(t,e){var n=this;n.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){})).catch((function(){}))},del:function(t){var e=this;this.$confirm("此操作将永久删除选中的数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["f"])({exam_post_id:t.exam_post_id}).then((function(t){200===t.code&&(e.$message({message:"删除成功",type:"success"}),e.getList())}))})).catch((function(){}))},handleSelectionChange:function(t){if(this.tableIdarr=[],t.length>0){var e,n=Object(a["a"])(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;0==r.is_sys&&this.tableIdarr.push(r.id)}}catch(o){n.e(o)}finally{n.f()}}},goTo:function(){this.$router.push({path:"/theTest/recruitment/jobs/jobsAdd",query:{exam_project_id:this.exam_project_id}})},getid:function(){this.exam_project_id=this.$route.query.exam_project_id,this.form.exam_project_id=this.$route.query.exam_project_id}}},c=u,s=n("2877"),d=Object(s["a"])(c,r,o,!1,null,null,null);e["default"]=d.exports},"63a1":function(t,e,n){"use strict";n.d(e,"k",(function(){return a})),n.d(e,"e",(function(){return i})),n.d(e,"u",(function(){return u})),n.d(e,"v",(function(){return c})),n.d(e,"o",(function(){return s})),n.d(e,"f",(function(){return d})),n.d(e,"l",(function(){return l})),n.d(e,"n",(function(){return f})),n.d(e,"m",(function(){return h})),n.d(e,"r",(function(){return p})),n.d(e,"q",(function(){return m})),n.d(e,"p",(function(){return b})),n.d(e,"h",(function(){return g})),n.d(e,"g",(function(){return j})),n.d(e,"i",(function(){return v})),n.d(e,"j",(function(){return _})),n.d(e,"s",(function(){return y})),n.d(e,"c",(function(){return w})),n.d(e,"a",(function(){return x})),n.d(e,"t",(function(){return O})),n.d(e,"b",(function(){return z})),n.d(e,"d",(function(){return C}));var r=n("b775"),o=n("d722");function a(t){return Object(r["a"])({url:o["a"].index,method:"post",data:t})}function i(t){return Object(r["a"])({url:o["a"].add,method:"post",data:t})}function u(t){return Object(r["a"])({url:o["a"].zhaopindetails,method:"post",data:t})}function c(t){return Object(r["a"])({url:o["a"].zhaopinedit,method:"post",data:t})}function s(t){return Object(r["a"])({url:o["a"].jobsList,method:"post",data:t})}function d(t){return Object(r["a"])({url:o["a"].deletejob,method:"post",data:t})}function l(t){return Object(r["a"])({url:o["a"].jobadd,method:"post",data:t})}function f(t){return Object(r["a"])({url:o["a"].jobedit,method:"post",data:t})}function h(t){return Object(r["a"])({url:o["a"].jobdetails,method:"post",data:t})}function p(t){return Object(r["a"])({url:o["a"].signUpList,method:"post",data:t})}function m(t){return Object(r["a"])({url:o["a"].signUpDetails,method:"post",data:t})}function b(t){return Object(r["a"])({url:o["a"].print_stub_form,method:"post",data:t})}function g(t){return Object(r["a"])({url:o["a"].gongaoList,method:"post",data:t})}function j(t){return Object(r["a"])({url:o["a"].gongaoAdd,method:"post",data:t})}function v(t){return Object(r["a"])({url:o["a"].gongaodelete,method:"post",data:t})}function _(t){return Object(r["a"])({url:o["a"].gongaoedit,method:"post",data:t})}function y(t){return Object(r["a"])({url:o["a"].verify,method:"post",data:t})}function w(t){return Object(r["a"])({url:o["a"].ImportAchievement,method:"post",data:t})}function x(t){return Object(r["a"])({url:o["a"].ExportForInImportAchievement,method:"post",data:t})}function O(t){return Object(r["a"])({url:o["a"].xiangmudelete,method:"post",data:t})}function z(t){return Object(r["a"])({url:o["a"].ExportForInImportAdmissionTicket,method:"post",data:t})}function C(t){return Object(r["a"])({url:o["a"].ImportAdmissionTicket,method:"post",data:t})}},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");var r=n("06c5");function o(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(r["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return u=t.done,t},e:function(t){c=!0,i=t},f:function(){try{u||null==n["return"]||n["return"]()}finally{if(c)throw i}}}}}}]);