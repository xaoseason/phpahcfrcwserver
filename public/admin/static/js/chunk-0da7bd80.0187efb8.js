(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0da7bd80"],{"3fc9":function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"app-container"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("订单详情")])]),r("h3",[t._v("订单详情")]),r("div",{staticClass:"xiangqin"},[r("span",[t._v("订单id:"+t._s(t.form.exam_order_id))]),r("br"),r("span",[t._v("三方订单号:"+t._s(t.form.trade_no))]),r("br"),r("span",[t._v("订单编号:"+t._s(t.form.out_trade_no))]),r("br"),r("span",[t._v("姓名:"+t._s(t.form.realname))]),r("br"),r("span",[t._v("项目名:"+t._s(t.form.project_name))]),r("br"),r("span",[t._v("订单金额:￥"),r("span",{staticClass:"money"},[t._v(t._s(t.form.money))]),t._v("元")]),r("br"),r("span",[t._v("实际支付金额:￥"),r("span",{staticClass:"money"},[t._v(t._s(t.form.callback_money))]),t._v("元")]),r("br"),r("span",[t._v("订单描述:"+t._s(t.form.service_name))]),r("br"),r("span",[t._v("支付方式:"+t._s(1==t.form.pay_type?"微信":2==t.form.pay_type?"支付宝":""))]),r("br"),r("span",[t._v("岗位名称:"+t._s(t.form.post_name))]),r("br"),r("span",[t._v("支付类型:"+t._s(1==t.form.type?"笔试":"面试"))]),r("br")]),r("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.back}},[t._v("返回")])],1)],1)},a=[],o=r("63a1"),u={data:function(){return{exam_order_id:"",form:{}}},created:function(){this.getid(),this.getList()},methods:{getList:function(){var t=this;Object(o["h"])({exam_order_id:this.exam_order_id}).then((function(n){200===n.code&&(console.log(n),t.form=n.data)}))},back:function(){this.$router.push({path:"/theTest/order/order"})},getid:function(){this.exam_order_id=this.$route.query.exam_order_id}}},d=u,i=(r("fc50"),r("2877")),c=Object(i["a"])(d,e,a,!1,null,"a64d6be2",null);n["default"]=c.exports},"63a1":function(t,n,r){"use strict";r.d(n,"m",(function(){return o})),r.d(n,"e",(function(){return u})),r.d(n,"w",(function(){return d})),r.d(n,"x",(function(){return i})),r.d(n,"q",(function(){return c})),r.d(n,"f",(function(){return s})),r.d(n,"n",(function(){return f})),r.d(n,"p",(function(){return p})),r.d(n,"o",(function(){return m})),r.d(n,"t",(function(){return l})),r.d(n,"s",(function(){return b})),r.d(n,"r",(function(){return _})),r.d(n,"j",(function(){return h})),r.d(n,"i",(function(){return j})),r.d(n,"k",(function(){return v})),r.d(n,"l",(function(){return O})),r.d(n,"u",(function(){return g})),r.d(n,"c",(function(){return x})),r.d(n,"a",(function(){return y})),r.d(n,"v",(function(){return k})),r.d(n,"b",(function(){return w})),r.d(n,"d",(function(){return C})),r.d(n,"g",(function(){return I})),r.d(n,"h",(function(){return L}));var e=r("b775"),a=r("d722");function o(t){return Object(e["a"])({url:a["a"].index,method:"post",data:t})}function u(t){return Object(e["a"])({url:a["a"].add,method:"post",data:t})}function d(t){return Object(e["a"])({url:a["a"].zhaopindetails,method:"post",data:t})}function i(t){return Object(e["a"])({url:a["a"].zhaopinedit,method:"post",data:t})}function c(t){return Object(e["a"])({url:a["a"].jobsList,method:"post",data:t})}function s(t){return Object(e["a"])({url:a["a"].deletejob,method:"post",data:t})}function f(t){return Object(e["a"])({url:a["a"].jobadd,method:"post",data:t})}function p(t){return Object(e["a"])({url:a["a"].jobedit,method:"post",data:t})}function m(t){return Object(e["a"])({url:a["a"].jobdetails,method:"post",data:t})}function l(t){return Object(e["a"])({url:a["a"].signUpList,method:"post",data:t})}function b(t){return Object(e["a"])({url:a["a"].signUpDetails,method:"post",data:t})}function _(t){return Object(e["a"])({url:a["a"].print_stub_form,method:"post",data:t})}function h(t){return Object(e["a"])({url:a["a"].gongaoList,method:"post",data:t})}function j(t){return Object(e["a"])({url:a["a"].gongaoAdd,method:"post",data:t})}function v(t){return Object(e["a"])({url:a["a"].gongaodelete,method:"post",data:t})}function O(t){return Object(e["a"])({url:a["a"].gongaoedit,method:"post",data:t})}function g(t){return Object(e["a"])({url:a["a"].verify,method:"post",data:t})}function x(t){return Object(e["a"])({url:a["a"].ImportAchievement,method:"post",data:t})}function y(t){return Object(e["a"])({url:a["a"].ExportForInImportAchievement,method:"post",data:t})}function k(t){return Object(e["a"])({url:a["a"].xiangmudelete,method:"post",data:t})}function w(t){return Object(e["a"])({url:a["a"].ExportForInImportAdmissionTicket,method:"post",data:t})}function C(t){return Object(e["a"])({url:a["a"].ImportAdmissionTicket,method:"post",data:t})}function I(t){return Object(e["a"])({url:a["a"].dindanList,method:"post",data:t})}function L(t){return Object(e["a"])({url:a["a"].dingdandetail,method:"post",data:t})}},f073:function(t,n,r){},fc50:function(t,n,r){"use strict";var e=r("f073"),a=r.n(e);a.a}}]);