(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57d17724"],{"04c1":function(t,n,e){"use strict";var r=e("4252"),a=e.n(r);a.a},4252:function(t,n,e){},"63a1":function(t,n,e){"use strict";e.d(n,"o",(function(){return o})),e.d(n,"f",(function(){return i})),e.d(n,"y",(function(){return u})),e.d(n,"z",(function(){return c})),e.d(n,"s",(function(){return d})),e.d(n,"g",(function(){return s})),e.d(n,"p",(function(){return l})),e.d(n,"r",(function(){return p})),e.d(n,"q",(function(){return f})),e.d(n,"v",(function(){return h})),e.d(n,"u",(function(){return m})),e.d(n,"t",(function(){return b})),e.d(n,"l",(function(){return g})),e.d(n,"j",(function(){return j})),e.d(n,"k",(function(){return x})),e.d(n,"m",(function(){return _})),e.d(n,"n",(function(){return O})),e.d(n,"w",(function(){return y})),e.d(n,"d",(function(){return v})),e.d(n,"a",(function(){return w})),e.d(n,"x",(function(){return k})),e.d(n,"b",(function(){return S})),e.d(n,"e",(function(){return L})),e.d(n,"h",(function(){return T})),e.d(n,"i",(function(){return C})),e.d(n,"c",(function(){return E}));var r=e("b775"),a=e("d722");function o(t){return Object(r["a"])({url:a["a"].index,method:"post",data:t})}function i(t){return Object(r["a"])({url:a["a"].add,method:"post",data:t})}function u(t){return Object(r["a"])({url:a["a"].zhaopindetails,method:"post",data:t})}function c(t){return Object(r["a"])({url:a["a"].zhaopinedit,method:"post",data:t})}function d(t){return Object(r["a"])({url:a["a"].jobsList,method:"post",data:t})}function s(t){return Object(r["a"])({url:a["a"].deletejob,method:"post",data:t})}function l(t){return Object(r["a"])({url:a["a"].jobadd,method:"post",data:t})}function p(t){return Object(r["a"])({url:a["a"].jobedit,method:"post",data:t})}function f(t){return Object(r["a"])({url:a["a"].jobdetails,method:"post",data:t})}function h(t){return Object(r["a"])({url:a["a"].signUpList,method:"post",data:t})}function m(t){return Object(r["a"])({url:a["a"].signUpDetails,method:"post",data:t})}function b(t){return Object(r["a"])({url:a["a"].print_stub_form,method:"post",data:t})}function g(t){return Object(r["a"])({url:a["a"].gongaoList,method:"post",data:t})}function j(t){return Object(r["a"])({url:a["a"].getGongaoList,method:"POST",data:t})}function x(t){return Object(r["a"])({url:a["a"].gongaoAdd,method:"post",data:t})}function _(t){return Object(r["a"])({url:a["a"].gongaodelete,method:"post",data:t})}function O(t){return Object(r["a"])({url:a["a"].gongaoedit,method:"post",data:t})}function y(t){return Object(r["a"])({url:a["a"].verify,method:"post",data:t})}function v(t){return Object(r["a"])({url:a["a"].ImportAchievement,method:"post",data:t})}function w(t){return Object(r["a"])({url:a["a"].ExportForInImportAchievement,method:"post",data:t})}function k(t){return Object(r["a"])({url:a["a"].xiangmudelete,method:"post",data:t})}function S(t){return Object(r["a"])({url:a["a"].ExportForInImportAdmissionTicket,method:"post",data:t})}function L(t){return Object(r["a"])({url:a["a"].ImportAdmissionTicket,method:"post",data:t})}function T(t){return Object(r["a"])({url:a["a"].dindanList,method:"post",data:t})}function C(t){return Object(r["a"])({url:a["a"].dingdandetail,method:"post",data:t})}function E(t){return Object(r["a"])({url:a["a"].ExportSignList,method:"POST",data:t})}},c06e:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("留验单")]),e("el-button",{staticStyle:{float:"right",padding:"0","margin-left":"14px"},attrs:{type:"text"},on:{click:t.goto}},[t._v(" 返回 ")]),e("el-button",{staticClass:"print",staticStyle:{float:"right",padding:"0"},attrs:{type:"text"},on:{click:t.dayin}},[t._v(" 打印留验单 ")])],1),e("div",{ref:"print",staticClass:"print-list",staticStyle:{"text-align":"center"},attrs:{id:"print"}},[t._l(t.ex_list,(function(n,r){return[e("br",{key:r}),e("br",{key:r}),e("br",{key:r}),e("br",{key:r}),e("table",{key:r,staticStyle:{"table-layout":"fixed",width:"980px","border-collapse":"collapse","border-color":"#999"},attrs:{border:"1"}},[e("caption",{attrs:{STYLE:"margin-bottom:20px"}},[e("h1",[t._v(t._s(n.name))])]),t._l(n.list,(function(n,r){return e("tr",{key:r,staticStyle:{width:"auto"}},t._l(n,(function(n,r){return e("td",{key:r+" - "+r,staticStyle:{height:"155px",padding:"45px 0px 45px 1px","border-color":"#999","max-width":"280px"},attrs:{width:"280px",align:"left"}},[e("img",{attrs:{src:n.photo?"http://www.ahcfrc.com"+n.photo:"http://www.ahcfrc.com/upload/files/20220706/ba25c84ea4e2dc5112e4be023a628c06.png",align:"left",width:"90px"}}),e("div",{staticClass:"examinee_details_text",staticStyle:{"line-height":"26px",display:"inline-block","vertical-align":"top","padding-left":"8px"}},[e("p",[t._v("姓 名："+t._s(n.realname))]),e("p",[t._v("准考证："+t._s(n.room_code))]),e("p",[t._v("签 字：")])])])})),0)}))],2),e("div",{key:r+"_",staticStyle:{"page-break-after":"always"}})]}))],2)])],1)},a=[],o=e("63a1"),i=e("add5"),u=e.n(i),c={data:function(){return{exam_project_id:"",list:{},ex_list:[],lis:{}}},created:function(){this.getid(),this.getList()},methods:{getList:function(){var t=this,n=[],e={name:"",list:[]};Object(o["t"])({exam_project_id:this.exam_project_id}).then((function(r){if(200===r.code){for(var a in t.list=r.data,t.list){e={name:t.list[a][0].room,list:[]};var o=[],i=[];for(var u in t.list[a])i.push(t.list[a][u]),3==i.length&&(o.push(i),i=[],5==o.length&&(e.list=o,o=[],n.push(e),e={name:t.list[a][0].room,list:[]}));i.length>0&&o.push(i),o.length>0&&(e.list=o,n.push(e))}console.log(n),t.ex_list=n}}))},dayin:function(){u()({printable:this.$refs.print.innerHTML,type:"raw-html",header:null,targetStyles:["*"],style:"@page {margin:0 15mm};",ignoreElements:["no-print"],properties:null})},goto:function(){this.$router.push({path:"/theTest/recruitment/recruitment"})},getid:function(){this.exam_project_id=this.$route.query.exam_project_id}}},d=c,s=(e("04c1"),e("2877")),l=Object(s["a"])(d,r,a,!1,null,"73bdaf6a",null);n["default"]=l.exports}}]);