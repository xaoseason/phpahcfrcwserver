(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31303544"],{"63a1":function(t,n,e){"use strict";e.d(n,"n",(function(){return o})),e.d(n,"f",(function(){return i})),e.d(n,"x",(function(){return u})),e.d(n,"y",(function(){return c})),e.d(n,"r",(function(){return d})),e.d(n,"g",(function(){return s})),e.d(n,"o",(function(){return f})),e.d(n,"q",(function(){return l})),e.d(n,"p",(function(){return p})),e.d(n,"u",(function(){return h})),e.d(n,"t",(function(){return m})),e.d(n,"s",(function(){return b})),e.d(n,"k",(function(){return j})),e.d(n,"j",(function(){return O})),e.d(n,"l",(function(){return g})),e.d(n,"m",(function(){return _})),e.d(n,"v",(function(){return v})),e.d(n,"d",(function(){return x})),e.d(n,"a",(function(){return y})),e.d(n,"w",(function(){return k})),e.d(n,"b",(function(){return w})),e.d(n,"e",(function(){return C})),e.d(n,"h",(function(){return L})),e.d(n,"i",(function(){return I})),e.d(n,"c",(function(){return A}));var r=e("b775"),a=e("d722");function o(t){return Object(r["a"])({url:a["a"].index,method:"post",data:t})}function i(t){return Object(r["a"])({url:a["a"].add,method:"post",data:t})}function u(t){return Object(r["a"])({url:a["a"].zhaopindetails,method:"post",data:t})}function c(t){return Object(r["a"])({url:a["a"].zhaopinedit,method:"post",data:t})}function d(t){return Object(r["a"])({url:a["a"].jobsList,method:"post",data:t})}function s(t){return Object(r["a"])({url:a["a"].deletejob,method:"post",data:t})}function f(t){return Object(r["a"])({url:a["a"].jobadd,method:"post",data:t})}function l(t){return Object(r["a"])({url:a["a"].jobedit,method:"post",data:t})}function p(t){return Object(r["a"])({url:a["a"].jobdetails,method:"post",data:t})}function h(t){return Object(r["a"])({url:a["a"].signUpList,method:"post",data:t})}function m(t){return Object(r["a"])({url:a["a"].signUpDetails,method:"post",data:t})}function b(t){return Object(r["a"])({url:a["a"].print_stub_form,method:"post",data:t})}function j(t){return Object(r["a"])({url:a["a"].gongaoList,method:"post",data:t})}function O(t){return Object(r["a"])({url:a["a"].gongaoAdd,method:"post",data:t})}function g(t){return Object(r["a"])({url:a["a"].gongaodelete,method:"post",data:t})}function _(t){return Object(r["a"])({url:a["a"].gongaoedit,method:"post",data:t})}function v(t){return Object(r["a"])({url:a["a"].verify,method:"post",data:t})}function x(t){return Object(r["a"])({url:a["a"].ImportAchievement,method:"post",data:t})}function y(t){return Object(r["a"])({url:a["a"].ExportForInImportAchievement,method:"post",data:t})}function k(t){return Object(r["a"])({url:a["a"].xiangmudelete,method:"post",data:t})}function w(t){return Object(r["a"])({url:a["a"].ExportForInImportAdmissionTicket,method:"post",data:t})}function C(t){return Object(r["a"])({url:a["a"].ImportAdmissionTicket,method:"post",data:t})}function L(t){return Object(r["a"])({url:a["a"].dindanList,method:"post",data:t})}function I(t){return Object(r["a"])({url:a["a"].dingdandetail,method:"post",data:t})}function A(t){return Object(r["a"])({url:a["a"].ExportSignList,method:"POST",data:t})}},"65e7":function(t,n,e){"use strict";var r=e("ec7c"),a=e.n(r);a.a},c06e:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("留验单")]),e("el-button",{staticStyle:{float:"right",padding:"0","margin-left":"14px"},attrs:{type:"text"},on:{click:t.goto}},[t._v(" 返回 ")]),e("el-button",{staticClass:"print",staticStyle:{float:"right",padding:"0"},attrs:{type:"text"},on:{click:t.dayin}},[t._v(" 打印留验单 ")])],1),e("div",{ref:"print",attrs:{id:"print"}},t._l(t.list,(function(n,r){return e("div",{key:n.id,staticClass:"lists",staticStyle:{"page-break-after":"always"}},t._l(t.list[r],(function(n){return e("div",{key:n.id,staticClass:"list"},[e("img",{staticClass:"portrait",attrs:{src:n.photo,alt:""}}),e("div",{staticClass:"txt"},[e("span",[t._v("姓名："+t._s(n.realname))]),e("br"),e("span",[t._v("准考证号："+t._s(n.room_code))]),e("br"),e("span",[t._v("考场："+t._s(n.room))]),e("br"),t._v(" 签字： ")])])})),0)})),0)])],1)},a=[],o=e("63a1"),i={data:function(){return{exam_project_id:"",list:{},lis:{}}},created:function(){this.getid(),this.getList()},methods:{getList:function(){var t=this;Object(o["s"])({exam_project_id:this.exam_project_id}).then((function(n){200===n.code&&(t.list=n.data)}))},dayin:function(){this.$print(this.$refs.print)},goto:function(){this.$router.push({path:"/theTest/recruitment/recruitment"})},getid:function(){this.exam_project_id=this.$route.query.exam_project_id}}},u=i,c=(e("65e7"),e("2877")),d=Object(c["a"])(u,r,a,!1,null,"c3e709ee",null);n["default"]=d.exports},ec7c:function(t,n,e){}}]);