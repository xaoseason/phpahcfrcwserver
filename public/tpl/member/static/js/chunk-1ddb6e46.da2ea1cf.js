(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ddb6e46"],{"0a88":function(e,t,s){"use strict";s("b6ed")},"45ce":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s(e.who,{ref:"child",tag:"components",attrs:{mask:e.mask}})],1)},i=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div")},o=[],c={name:"CaptchaTencent",props:["mask"],data(){return{}},mounted(){if(void 0===window.TencentCaptcha){let e=document.createElement("script"),t=document.getElementsByTagName("head")[0];e.type="text/javascript",e.charset="UTF-8",e.src="https://ssl.captcha.qq.com/TCaptcha.js",t.appendChild(e)}},created(){},computed:{},methods:{show(e){let t=this;if(""==t.$store.state.config.captcha_tencent_appid)return this.$message.error("请正确配置腾讯防水墙appid"),!1;var s=new window.TencentCaptcha(t.$store.state.config.captcha_tencent_appid,(function(t){0===t.ret&&e(t)}));s.show()}}},l=c,n=s("2877"),h=Object(n["a"])(l,r,o,!1,null,"6b7a70b0",null),d=h.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div")},m=[],u={name:"CaptchaVaptcha",props:["mask"],data(){return{}},mounted(){if(void 0===window.vaptcha){let e=document.createElement("script"),t=document.getElementsByTagName("head")[0];e.type="text/javascript",e.charset="UTF-8",e.src="https://v.vaptcha.com/v3.js",t.appendChild(e)}},created(){},computed:{},methods:{show(e){let t=this;if(""==t.$store.state.config.captcha_vaptcha_vid)return this.$message.error("请正确配置手势验证vid"),!1;window.vaptcha({vid:t.$store.state.config.captcha_vaptcha_vid,type:"invisible",scene:0,offline_server:""}).then((function(t){t.validate(),t.listen("pass",(function(){var s={code:t.getToken()};e(s)})),t.listen("close",(function(){}))}))}}},f=u,w=Object(n["a"])(f,p,m,!1,null,"7abd7660",null),v=w.exports,b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-dialog",{attrs:{title:"验证码",visible:e.showDialog,modal:e.showMadal,width:"350px","close-on-press-escape":!1,"close-on-click-modal":!1,"destroy-on-close":!0},on:{"update:visible":function(t){e.showDialog=t}}},[s("el-form",{attrs:{"label-width":"0px",inline:!0},nativeOn:{submit:function(e){e.preventDefault()}}},[s("el-form-item",{attrs:{label:" "}},[s("el-input",{ref:"ipt",staticStyle:{width:"120px"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handlerConfirm.apply(null,arguments)}},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),s("el-form-item",{attrs:{label:" "}},[s("img",{staticClass:"captcha_img",attrs:{src:e.src},on:{click:e.changeImg}})]),s("div",{staticClass:"clearfix"}),s("el-form-item",{attrs:{label:" "}},[s("el-button",{staticStyle:{width:"280px"},attrs:{type:"primary"},on:{click:e.handlerConfirm}},[e._v("确定")])],1)],1)],1)],1)},_=[],g=s("751a"),$=s("d722"),y={name:"CaptchaPicture",props:["mask"],data(){return{showDialog:!1,code:"",src:"",secret_str:"",callback:null,showMadal:!1}},mounted(){},created(){},computed:{},methods:{handlerConfirm(){if(""==this.code)return this.$message.error("请输入验证码"),!1;let e={code:this.code,secret_str:this.secret_str};this.callback(e),this.showDialog=!1,this.code=""},show(e){this.showDialog=!0,this.$nextTick(()=>{this.$refs.ipt.focus()}),this.callback=e,!0===this.mask&&(this.showMadal=!0),this.changeImg()},changeImg(){g["a"].get($["a"].captcha_picture,{}).then(e=>{this.secret_str=e.data.secret_str,this.src=e.data.src}).catch(()=>{})}}},C=y,k=(s("0a88"),Object(n["a"])(C,b,_,!1,null,"2ad42de7",null)),x=k.exports,E={name:"Captcha",props:["mask"],components:{ctencent:d,cvaptcha:v,cpicture:x},data(){return{who:""}},mounted(){},created(){this.who=""==this.$store.state.config.captcha_type?"picture":this.$store.state.config.captcha_type,this.who="c"+this.who},computed:{},methods:{show(e,t){1!=this.$store.state.config.captcha_open||void 0!==t&&!0!==t?e():this.$refs.child.show(e)}}},T=E,F=Object(n["a"])(T,a,i,!1,null,"b60cad64",null);t["a"]=F.exports},"7e04":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"reg_box"},[e.showForm?s("div",{staticClass:"reg_group"},[s("div",{staticClass:"g_title"},[e._v(e._s("mobile"==e.type?"手机":"邮箱")+"找回密码")]),s("div",{staticClass:"sw_b"},[s("router-link",{staticClass:"swb",class:2==e.utype?"active":"",attrs:{to:"/forget/2"}},[e._v("求职者用户")]),s("router-link",{staticClass:"swb r",class:1==e.utype?"active":"",attrs:{to:"/forget/1"}},[e._v("企业招聘用户")]),s("div",{staticClass:"clear"})],1),"mobile"==e.type?s("div",{staticClass:"g_input"},[s("el-input",{attrs:{placeholder:"请输入手机号",clearable:""},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),s("el-input",{attrs:{placeholder:"请输入验证码",clearable:""},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),s("div",{staticClass:"for_position"},[s("el-button",{style:"color:"+e.$store.state.sendSmsBtnTextColor,attrs:{type:"text"},on:{click:e.sendSms}},[e._v(e._s(e.$store.state.sendSmsBtnText))])],1),s("el-input",{attrs:{placeholder:"新密码","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),s("el-input",{attrs:{placeholder:"确认密码","show-password":""},model:{value:e.repeatPassword,callback:function(t){e.repeatPassword=t},expression:"repeatPassword"}})],1):e._e(),"email"==e.type?s("div",{staticClass:"g_input"},[s("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),s("el-input",{attrs:{placeholder:"请输入验证码",clearable:""},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),s("div",{staticClass:"for_position"},[s("el-button",{style:"color:"+e.$store.state.sendEmailBtnTextColor,attrs:{type:"text"},on:{click:e.sendEmail}},[e._v(e._s(e.$store.state.sendEmailBtnText))])],1),s("el-input",{attrs:{placeholder:"新密码","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),s("el-input",{attrs:{placeholder:"确认密码","show-password":""},model:{value:e.repeatPassword,callback:function(t){e.repeatPassword=t},expression:"repeatPassword"}})],1):e._e(),s("el-button",{staticClass:"g_btn",attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("提交")]),s("div",{staticClass:"g_sw_login"},[s("span",{on:{click:e.changeMethod}},[e._v("邮箱找回密码")])]),s("div",{staticClass:"b_t1"},[e._v("上面的方式都不可用？")]),s("div",{staticClass:"b_t2"},[e._v("你还可以进行 "),s("router-link",{attrs:{to:"/appeal"}},[e._v("账号申诉")]),e._v(" 或 电话联系我们 ("),s("span",[e._v(e._s(e.$store.state.config.contact_tel))]),e._v(") ")],1)],1):e._e(),e.showForm?e._e():s("div",{staticClass:"find_result"},[s("div",{staticClass:"fr_1"},[e._v("重置密码成功")]),s("br"),s("div",{staticClass:"fr_2"},[e._v("下次登录请使用新密码登录")]),s("el-button",{staticClass:"f_btn",attrs:{type:"primary",round:""},on:{click:function(t){return e.$router.push("/login")}}},[e._v("登录")])],1),s("Captcha",{ref:"captcha"})],1)},i=[],r=s("751a"),o=s("d722"),c=s("45ce"),l={name:"FindPwd",components:{Captcha:c["a"]},data(){return{utype:1,showForm:!0,type:"mobile",mobile:"",email:"",code:"",password:"",repeatPassword:"",regularMobile:/^13[0-9]{9}$|14[0-9]{9}$|15[0-9]{9}$|18[0-9]{9}$|17[0-9]{9}$|16[0-9]{9}$|19[0-9]{9}$/,regularEmail:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/}},created(){this.utype=void 0===this.$route.params.utype?1:this.$route.params.utype,this.$store.commit("clearCountDownFun")},methods:{changeMethod(){"mobile"==this.type?this.type="email":this.type="mobile"},sendSms(){return!this.$store.state.sendSmsBtnDisabled&&(this.mobile?this.regularMobile.test(this.mobile)?void this.$refs.captcha.show(e=>{this.$store.dispatch("sendSmsFun",{url:o["a"].sendsms_forget,mobile:this.mobile,type:this.utype,captcha:e}).then(e=>{if(200!==e.code)return this.$message.error(this.$store.state.sendSmsMessage),!1;this.$message({type:"success",message:this.$store.state.sendSmsMessage})})}):(this.$message.error("手机号格式不正确"),!1):(this.$message.error("请输入手机号"),!1))},sendEmail(){return!this.$store.state.sendEmailBtnDisabled&&(this.email?this.regularEmail.test(this.email)?void this.$store.dispatch("sendEmailFun",{url:o["a"].sendmail_forget,email:this.email,type:this.utype}).then(e=>{if(200!==e.code)return this.$message.error(this.$store.state.sendEmailMessage),!1;this.$message({type:"success",message:this.$store.state.sendEmailMessage})}):(this.$message.error("手机号格式不正确"),!1):(this.$message.error("请输入邮箱"),!1))},handleSubmit(){if("mobile"==this.type&&!this.mobile)return this.$message.error("请输入手机号"),!1;if("mobile"==this.type&&!this.regularMobile.test(this.mobile))return this.$message.error("手机号格式不正确"),!1;if("email"==this.type&&!this.email)return this.$message.error("请输入邮箱"),!1;if("email"==this.type&&!this.regularEmail.test(this.email))return this.$message.error("邮箱格式不正确"),!1;if(!this.code)return this.$message.error("请输入验证码"),!1;if(!this.password)return this.$message.error("请输入新密码"),!1;if(!this.repeatPassword)return this.$message.error("请再次确认密码"),!1;if(this.password!==this.repeatPassword)return this.$message.error("两次输入的密码不一致"),!1;let e={mobile:this.mobile,email:this.email,code:this.code,password:this.password,utype:this.utype},t="mobile"==this.type?o["a"].set_pwd_bymobile:o["a"].set_pwd_byemail;r["a"].post(t,e).then(e=>{if(200!==parseInt(e.code))return this.$message.error(e.message),!1;this.$store.commit("clearCountDownFun"),this.$store.commit("clearCountDownFunEmail"),this.showForm=!1}).catch(()=>{})}}},n=l,h=(s("cd1c"),s("2877")),d=Object(h["a"])(n,a,i,!1,null,"174e8517",null);t["default"]=d.exports},b6ed:function(e,t,s){},cd1c:function(e,t,s){"use strict";s("ffed")},ffed:function(e,t,s){}}]);