(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd6e8430"],{"00dd":function(t,e,i){t.exports=i.p+"static/img/8_1_bg.f1d325a7.jpg"},"062a":function(t,e,i){t.exports=i.p+"static/img/7_1_bg.433ced9d.jpg"},"0a51":function(t,e,i){t.exports=i.p+"static/img/1_1_bg.85cdbbde.jpg"},"0b35":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-card",[s("company-title",[t._v("微海报")]),s("el-alert",{attrs:{title:"选择模板。点击预览可在手机端查看并保存海报",type:"warning",closable:!1,"show-icon":""}}),s("div",{staticClass:"whb_template_bottom"},[s("ul",[t._l(t.tpllist,(function(e,g){return s("li",{key:g},[s("div",{staticClass:"whb_template_img"},[s("a",{attrs:{href:"javascript:;"}},[s("img",{attrs:{src:i("7743")("./"+e.thumb+"_bg.jpg")}})])]),s("div",{staticClass:"whb_template_imgtxt"},[s("a",{attrs:{href:"javascript:;"}},[t._v(t._s(e.name))]),s("a",{staticClass:"preview",attrs:{href:"javascript:;"}},[t._v(" 预览 "),s("div",{staticClass:"whb_template_position"},[s("div",{staticClass:"whb_template_sqr"},[s("img",{attrs:{src:t.makeUrl(e.thumb)}})]),s("div",{staticClass:"whb_template_sqrtext"},[t._v(" 手机扫码保存海报 ")])])])])])})),s("div",{staticClass:"clearfix"})],2)])],1)},g=[],p=i("751a"),c=i("d722"),_={components:{},data(){return{result:[],tpllist:[],qrcodeUrl:""}},created(){if(this.qrcodeUrl=window.global.RequestBaseUrl+c["a"].get_qrcode,void 0!==this.$route.query.jobid){let t=this.$route.query.jobid.split(",");return t.forEach(t=>{this.result.push(t)}),this.initCB(),!1}},methods:{getTplByJobnum(){this.tpllist=[];let t=this.result.length;p["a"].get(c["a"].microposte_get_tpl_by_jobnum,{jobnum:t}).then(t=>{this.tpllist=t.data.items}).catch(()=>{})},initCB(){if(0===this.result.length)return this.$message.error("请选择职位"),!1;this.getTplByJobnum()},makeUrl(t){let e=this.$store.state.config.mobile_domain+"member/scan_microposte?jobid="+this.$route.query.jobid+"&tpl="+t;return e=encodeURIComponent(e),this.qrcodeUrl+"?type=normal&url="+e}}},a=_,o=(i("c676"),i("2877")),n=Object(o["a"])(a,s,g,!1,null,"91523ff4",null);e["default"]=n.exports},"0e4f":function(t,e,i){t.exports=i.p+"static/img/4_3_bg.43f43eea.jpg"},"2d15":function(t,e,i){t.exports=i.p+"static/img/4_2_bg.5e77b4cf.jpg"},"47a6":function(t,e,i){t.exports=i.p+"static/img/5_3_bg.c36f3ccb.jpg"},5018:function(t,e,i){t.exports=i.p+"static/img/3_2_bg.993ab9c4.jpg"},"51bc":function(t,e,i){t.exports=i.p+"static/img/2_2_bg.7ff2c9ff.jpg"},"5b37":function(t,e,i){t.exports=i.p+"static/img/7_3_bg.da2b9c1f.jpg"},"65fb":function(t,e,i){t.exports=i.p+"static/img/1_3_bg.95e53be9.jpg"},"66e0":function(t,e,i){},"728a":function(t,e,i){t.exports=i.p+"static/img/3_1_bg.e366fbc7.jpg"},7743:function(t,e,i){var s={"./1_1_bg.jpg":"0a51","./1_2_bg.jpg":"d959","./1_3_bg.jpg":"65fb","./2_1_bg.jpg":"eb82","./2_2_bg.jpg":"51bc","./2_3_bg.jpg":"e58b","./3_1_bg.jpg":"728a","./3_2_bg.jpg":"5018","./3_3_bg.jpg":"d4e8","./4_1_bg.jpg":"db4b","./4_2_bg.jpg":"2d15","./4_3_bg.jpg":"0e4f","./5_1_bg.jpg":"f7bd","./5_2_bg.jpg":"e06c","./5_3_bg.jpg":"47a6","./6_1_bg.jpg":"f9a1","./6_2_bg.jpg":"a510","./6_3_bg.jpg":"b0f1","./7_1_bg.jpg":"062a","./7_2_bg.jpg":"d15a","./7_3_bg.jpg":"5b37","./8_1_bg.jpg":"00dd","./8_2_bg.jpg":"b35d","./8_3_bg.jpg":"c84a"};function g(t){var e=p(t);return i(e)}function p(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}g.keys=function(){return Object.keys(s)},g.resolve=p,t.exports=g,g.id="7743"},a510:function(t,e,i){t.exports=i.p+"static/img/6_2_bg.84b8d50f.jpg"},b0f1:function(t,e,i){t.exports=i.p+"static/img/6_3_bg.fd3d4bba.jpg"},b35d:function(t,e,i){t.exports=i.p+"static/img/8_2_bg.b0cf9804.jpg"},c676:function(t,e,i){"use strict";i("66e0")},c84a:function(t,e,i){t.exports=i.p+"static/img/8_3_bg.f1102265.jpg"},d15a:function(t,e,i){t.exports=i.p+"static/img/7_2_bg.15f23ccd.jpg"},d4e8:function(t,e,i){t.exports=i.p+"static/img/3_3_bg.65e14f37.jpg"},d959:function(t,e,i){t.exports=i.p+"static/img/1_2_bg.ee804997.jpg"},db4b:function(t,e,i){t.exports=i.p+"static/img/4_1_bg.27392c6e.jpg"},e06c:function(t,e,i){t.exports=i.p+"static/img/5_2_bg.dda4cfc4.jpg"},e58b:function(t,e,i){t.exports=i.p+"static/img/2_3_bg.8374527c.jpg"},eb82:function(t,e,i){t.exports=i.p+"static/img/2_1_bg.832b8c1b.jpg"},f7bd:function(t,e,i){t.exports=i.p+"static/img/5_1_bg.cb3dcd0f.jpg"},f9a1:function(t,e,i){t.exports=i.p+"static/img/6_1_bg.060e736a.jpg"}}]);