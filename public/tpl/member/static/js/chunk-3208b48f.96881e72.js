(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3208b48f"],{abfe:function(t,s,a){},bc27:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{ref:"print",staticClass:"box",attrs:{id:"print"}},[a("div",{staticClass:"box1"},[a("br"),a("h2",{staticClass:"head"},[t._v(t._s(t.data.project_name)+" - 报名表")]),a("br"),a("table",{staticClass:"body",attrs:{border:"1"}},[a("tr",{staticClass:"tr-txt"},[a("td",{staticClass:"titles"},[t._v("姓名")]),a("td",[t._v(t._s(t.data.realname))]),a("td",{staticClass:"titles"},[t._v("性别")]),a("td",[t._v(t._s(t.data.sex))]),a("td",{staticClass:"titles"},[t._v("民族")]),a("td",[t._v(t._s(t.data.nation))]),a("td",{staticClass:"img",attrs:{rowspan:"4"}},[a("img",{staticClass:"photo",staticStyle:{width:"150px",height:"200px"},attrs:{src:"http://www.ahcfrc.com/"+t.data.photo,alt:""}})])]),a("tr",{staticClass:"tr-txt"},[a("td",{staticClass:"nowap titles"},[t._v("报考岗位")]),a("td",{attrs:{colspan:"2"}},[t._v(t._s(t.data.post))]),a("td",{staticClass:"nowap titles"},[t._v("身份证号")]),a("td",{attrs:{colspan:"2"}},[t._v(t._s(t.data.idcard))])]),a("tr",{staticClass:"tr-txt"},[a("td",{staticClass:"nowap titles"},[t._v("出生年月")]),a("td",[t._v(t._s(t.data.birthday))]),a("td",{staticClass:"nowap titles"},[t._v("政治面貌")]),a("td",{staticClass:"nowap"},[t._v(t._s(t.data.custom_field_1))]),a("td",{staticClass:"titles"},[t._v("婚姻")]),a("td",[t._v(" "+t._s(1==t.data.marriage?"已婚":2==t.data.marriage?"未婚":"保密")+" ")])]),a("tr",{staticClass:"tr-txt"},[a("td",{staticClass:"nowap titles"},[t._v("最高学历")]),a("td",[t._v(t._s(t.education))]),a("td",{staticClass:"titles",staticStyle:{"font-size":"12px"}},[t._v("最高学历所学专业")]),a("td",[t._v(t._s(t.major))]),a("td",{staticClass:"titles",staticStyle:{"font-size":"12px"}},[t._v("最高学历毕业时间")]),a("td",[t._v(t._s(t.data.custom_field_2))])]),a("tr",{staticClass:"tr-txt"},[a("td",{staticClass:"titles"},[t._v("学位")]),a("td",[t._v(t._s(1==t.data.degree?"是":3==t.data.degree?"-":"否"))]),a("td",{staticClass:"titles"},[t._v("职称")]),a("td",{attrs:{colspan:"2"}},[t._v(t._s(t.data.title))]),a("td",{staticClass:"titles"},[t._v("应届生")]),a("td",[t._v(t._s(1==t.data.fresh_graduates?"是":3==t.data.fresh_graduates?"-":"否"))])]),a("tr",{staticClass:"tr-txt"},[a("td",{staticClass:"titles",staticStyle:{"line-height":"20px"}},[t._v("最高学历毕业院校")]),a("td",{attrs:{colspan:"3"}},[t._v(t._s(t.data.school))]),a("td",{staticClass:"titles"},[t._v("户籍地")]),a("td",{attrs:{colspan:"2"}},[t._v(t._s(t.data.hjd))])]),t._l(t.data.custom_field,(function(s,i){return a("tr",{key:i,staticClass:"tr-txt"},[t._l(s,(function(e,r){return[a("td",{key:r+""+i+"1"},[t._v(t._s(e.name))]),a("td",{key:r+""+i+"2",attrs:{colspan:1==s.length?6:0==r?3:2}},[t._v(t._s(e.value))])]}))],2)})),a("tr",{staticClass:"tr7"},[a("td",{staticClass:"td1 titles"},[t._v("学习经历（自高中填起，注明学制年限，如4年制）")]),a("td",{attrs:{colspan:"6"}},t._l(t.data.education_list,(function(s){return a("span",{key:s.id},[t._v(" "+t._s(s.school)+" "+t._s(s.major)+" "+t._s(s.education_text)+" "+t._s(s.starttime)+"-"+t._s(s.endtime)),a("br")])})),0)]),a("tr",{staticClass:"tr8"},[a("td",{staticClass:"titles"},[t._v("工作经历（不能断档）")]),a("td",{attrs:{colspan:"6"}},t._l(t.data.work_list,(function(s,i){return a("div",{key:s.id,staticStyle:{"font-weight":"500","font-family":"Source Han Sans CN","margin-bottom":"3px"}},[a("b",[t._v("第"+t._s(i+1)+"条：")]),t._v(t._s(s.companyname)+"  "+t._s(s.jobname)+"   "+t._s(s.starttime)+"-"+t._s(s.endtime)+"   "+t._s(s.duty))])})),0)]),a("tr",{staticClass:"tr9"},[a("td",{staticClass:"titles"},[t._v("家庭背景(没有填写无)")]),a("td",{attrs:{colspan:"6"}},t._l(t.data.resume_family,(function(s){return a("span",{key:s.if},[t._v(t._s(s.name)+"-"+t._s(s.relation)+"-"+t._s(s.mobile)+" "),a("br")])})),0)]),t._m(0),t._m(1),t._m(2)],2)])]),a("div",{staticClass:"btns"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.print}},[t._v("打印")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.back}},[t._v("关闭")])],1)])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",{staticClass:"tr10"},[a("td",{staticClass:"titles"},[t._v("诚信承诺")]),a("td",{attrs:{colspan:"6"}},[a("span",[t._v("本人或家庭成员、近亲属未参加非法组织或从事其他危害国家安全活动的")]),a("br"),a("span",[t._v("本人上述所填的情况和提供的相关材料、证件均证实有效。若有虚假，责任自负。")]),a("br"),a("span",[t._v("签字：")]),a("span",{staticClass:"year"},[t._v("        年        月        日")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",{staticClass:"tr11"},[a("td",{attrs:{colspan:"7"}},[t._v("以下由工作人员填写资格审查意见：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",{staticClass:"tr12"},[a("td",{attrs:{colspan:"7"}},[t._v(" 审核人： "),a("span",{staticClass:"year"},[t._v("        年        月        日")])])])}],r=a("add5"),l=a.n(r),n=a("751a"),c=a("d722"),d={data(){return{education:"",major:"",data:{},optionEducation:[],optionMajor:[]}},mounted(){this.$store.dispatch("getClassify","education").then(()=>{this.optionEducation=JSON.parse(JSON.stringify(this.$store.state.classifyEdu))}),this.$store.dispatch("getClassify","major").then(()=>{this.optionMajor=JSON.parse(JSON.stringify(this.$store.state.classifyMajor)),this.getlist()})},created(){this.getid(),this.getlist()},methods:{back(){this.$router.go(-1)},print(){l()({printable:this.$refs.print,type:"html",header:null,targetStyles:["*"],style:"@page {margin:0 10mm};",ignoreElements:["no-print"],properties:null})},getlist(){n["a"].post(c["a"].print_form,{type:this.type,exam_project_id:this.exam_project_id}).then(t=>{200==parseInt(t.code)&&(this.data=t.data,this.optionMajor.forEach(s=>{s.children.forEach(s=>{s.value==t.data.major&&(this.major=s.label)})}),this.optionEducation.forEach(s=>{s.id==t.data.education&&(this.education=s.text)}))}).catch(t=>{console.log(t)})},getid(){this.type=this.$route.query.type,this.exam_project_id=this.$route.query.exam_project_id}}},o=d,_=(a("f868"),a("2877")),p=Object(_["a"])(o,i,e,!1,null,"fddcf6cc",null);s["default"]=p.exports},f868:function(t,s,a){"use strict";a("abfe")}}]);