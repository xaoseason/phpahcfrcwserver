(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a828f08"],{"712a":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t._self._c;return i("div",[t._m(0),i("div",{domProps:{innerHTML:t._s(t.data.guide)}}),i("div",{staticClass:"btn"},[i("el-button",{attrs:{size:"mini"},on:{click:t.back}},[t._v("取消")]),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.signup}},[t._v("立即报名")])],1),i("el-dialog",{attrs:{title:" 考生注意事项",visible:t.signup_dialogVisible,width:"800px"},on:{"update:visible":function(i){t.signup_dialogVisible=i}}},[i("div",{staticClass:"xieyi",domProps:{innerHTML:t._s(t.data.treaty)}}),i("div",{staticClass:"checkbox"},[i("el-checkbox",{model:{value:t.checked,callback:function(i){t.checked=i},expression:"checked"}},[t._v("我已阅读并同意相关事项")])],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(i){t.signup_dialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.sign}},[t._v("立即报名")])],1)])],1)},a=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"box"},[i("div",{staticClass:"box1"},[i("h2",{staticClass:"head"},[t._v("招聘岗位要求及数量")])])])}],o=(e("14d9"),e("751a")),n=e("d722"),c={data(){return{type:"",data:{},exam_project_id:"",exam_sign_id:"",checked:!1,signup_dialogVisible:!1}},created(){this.getid(),this.getlist()},methods:{getlist(){o["a"].post(n["a"].project_details,{exam_project_id:this.exam_project_id}).then(t=>{200===parseInt(t.code)&&(this.data=t.data)}).catch(t=>{console.log(t)})},back(){this.$router.go(-1)},signup(){this.signup_dialogVisible=!0},sign(){0==this.checked?this.$message({message:"请阅读并同意相关事项",type:"warning"}):1==this.checked&&this.$router.push({path:"/personal/test/signUpForm",query:{exam_project_id:this.exam_project_id,exam_sign_id:this.exam_sign_id,type:this.type}})},getid(){this.exam_project_id=this.$route.query.exam_project_id,this.exam_sign_id=this.$route.query.exam_sign_id,this.type=this.$route.query.type}}},d=c,r=(e("f981"),e("2877")),l=Object(r["a"])(d,s,a,!1,null,"14d31798",null);i["default"]=l.exports},e9e9:function(t,i,e){},f981:function(t,i,e){"use strict";e("e9e9")}}]);