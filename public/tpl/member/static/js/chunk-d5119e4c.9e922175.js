(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5119e4c"],{"45ce":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",[e(t.who,{ref:"child",tag:"components",attrs:{mask:t.mask}})],1)},i=[],r=function(){var t=this,e=t._self._c;return e("div")},o=[],c={name:"CaptchaTencent",props:["mask"],data(){return{}},mounted(){if(void 0===window.TencentCaptcha){let t=document.createElement("script"),e=document.getElementsByTagName("head")[0];t.type="text/javascript",t.charset="UTF-8",t.src="https://ssl.captcha.qq.com/TCaptcha.js",e.appendChild(t)}},created(){},computed:{},methods:{show(t){let e=this;if(""==e.$store.state.config.captcha_tencent_appid)return this.$message.error("请正确配置腾讯防水墙appid"),!1;var s=new window.TencentCaptcha(e.$store.state.config.captcha_tencent_appid,(function(e){0===e.ret&&t(e)}));s.show()}}},l=c,n=s("2877"),h=Object(n["a"])(l,r,o,!1,null,"6b7a70b0",null),d=h.exports,p=function(){var t=this,e=t._self._c;return e("div")},m=[],u={name:"CaptchaVaptcha",props:["mask"],data(){return{}},mounted(){if(void 0===window.vaptcha){let t=document.createElement("script"),e=document.getElementsByTagName("head")[0];t.type="text/javascript",t.charset="UTF-8",t.src="https://v.vaptcha.com/v3.js",e.appendChild(t)}},created(){},computed:{},methods:{show(t){let e=this;if(""==e.$store.state.config.captcha_vaptcha_vid)return this.$message.error("请正确配置手势验证vid"),!1;window.vaptcha({vid:e.$store.state.config.captcha_vaptcha_vid,type:"invisible",scene:0,offline_server:""}).then((function(e){e.validate(),e.listen("pass",(function(){var s={code:e.getToken()};t(s)})),e.listen("close",(function(){}))}))}}},f=u,w=Object(n["a"])(f,p,m,!1,null,"7abd7660",null),v=w.exports,b=function(){var t=this,e=t._self._c;return e("div",[e("el-dialog",{attrs:{title:"验证码",visible:t.showDialog,modal:t.showMadal,width:"350px","close-on-press-escape":!1,"close-on-click-modal":!1,"destroy-on-close":!0},on:{"update:visible":function(e){t.showDialog=e}}},[e("el-form",{attrs:{"label-width":"0px",inline:!0},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-form-item",{attrs:{label:" "}},[e("el-input",{ref:"ipt",staticStyle:{width:"120px"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handlerConfirm.apply(null,arguments)}},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),e("el-form-item",{attrs:{label:" "}},[e("img",{staticClass:"captcha_img",attrs:{src:t.src},on:{click:t.changeImg}})]),e("div",{staticClass:"clearfix"}),e("el-form-item",{attrs:{label:" "}},[e("el-button",{staticStyle:{width:"280px"},attrs:{type:"primary"},on:{click:t.handlerConfirm}},[t._v("确定")])],1)],1)],1)],1)},_=[],g=s("751a"),$=s("d722"),y={name:"CaptchaPicture",props:["mask"],data(){return{showDialog:!1,code:"",src:"",secret_str:"",callback:null,showMadal:!1}},mounted(){},created(){},computed:{},methods:{handlerConfirm(){if(""==this.code)return this.$message.error("请输入验证码"),!1;let t={code:this.code,secret_str:this.secret_str};this.callback(t),this.showDialog=!1,this.code=""},show(t){this.showDialog=!0,this.$nextTick(()=>{this.$refs.ipt.focus()}),this.callback=t,!0===this.mask&&(this.showMadal=!0),this.changeImg()},changeImg(){g["a"].get($["a"].captcha_picture,{}).then(t=>{this.secret_str=t.data.secret_str,this.src=t.data.src}).catch(()=>{})}}},C=y,k=(s("6323"),Object(n["a"])(C,b,_,!1,null,"2ad42de7",null)),x=k.exports,E={name:"Captcha",props:["mask"],components:{ctencent:d,cvaptcha:v,cpicture:x},data(){return{who:""}},mounted(){},created(){this.who=""==this.$store.state.config.captcha_type?"picture":this.$store.state.config.captcha_type,this.who="c"+this.who},computed:{},methods:{show(t,e){1!=this.$store.state.config.captcha_open||void 0!==e&&!0!==e?t():this.$refs.child.show(t)}}},T=E,F=Object(n["a"])(T,a,i,!1,null,"b60cad64",null);e["a"]=F.exports},"5f49":function(t,e,s){},6323:function(t,e,s){"use strict";s("ad37")},"7e04":function(t,e,s){"use strict";s.r(e);s("14d9");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"reg_box"},[t.showForm?e("div",{staticClass:"reg_group"},[e("div",{staticClass:"g_title"},[t._v(t._s("mobile"==t.type?"手机":"邮箱")+"找回密码")]),e("div",{staticClass:"sw_b"},[e("router-link",{staticClass:"swb",class:2==t.utype?"active":"",attrs:{to:"/forget/2"}},[t._v("求职者用户")]),e("router-link",{staticClass:"swb r",class:1==t.utype?"active":"",attrs:{to:"/forget/1"}},[t._v("企业招聘用户")]),e("div",{staticClass:"clear"})],1),"mobile"==t.type?e("div",{staticClass:"g_input"},[e("el-input",{attrs:{placeholder:"请输入手机号",clearable:""},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),e("el-input",{attrs:{placeholder:"请输入验证码",clearable:""},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),e("div",{staticClass:"for_position"},[e("el-button",{style:"color:"+t.$store.state.sendSmsBtnTextColor,attrs:{type:"text"},on:{click:t.sendSms}},[t._v(t._s(t.$store.state.sendSmsBtnText))])],1),e("el-input",{attrs:{placeholder:"新密码","show-password":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e("el-input",{attrs:{placeholder:"确认密码","show-password":""},model:{value:t.repeatPassword,callback:function(e){t.repeatPassword=e},expression:"repeatPassword"}})],1):t._e(),"email"==t.type?e("div",{staticClass:"g_input"},[e("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e("el-input",{attrs:{placeholder:"请输入验证码",clearable:""},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),e("div",{staticClass:"for_position"},[e("el-button",{style:"color:"+t.$store.state.sendEmailBtnTextColor,attrs:{type:"text"},on:{click:t.sendEmail}},[t._v(t._s(t.$store.state.sendEmailBtnText))])],1),e("el-input",{attrs:{placeholder:"新密码","show-password":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e("el-input",{attrs:{placeholder:"确认密码","show-password":""},model:{value:t.repeatPassword,callback:function(e){t.repeatPassword=e},expression:"repeatPassword"}})],1):t._e(),e("el-button",{staticClass:"g_btn",attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("提交")]),e("div",{staticClass:"g_sw_login"},[e("span",{on:{click:t.changeMethod}},[t._v("邮箱找回密码")])]),e("div",{staticClass:"b_t1"},[t._v("上面的方式都不可用？")]),e("div",{staticClass:"b_t2"},[t._v("你还可以进行 "),e("router-link",{attrs:{to:"/appeal"}},[t._v("账号申诉")]),t._v(" 或 电话联系我们 ("),e("span",[t._v(t._s(t.$store.state.config.contact_tel))]),t._v(") ")],1)],1):t._e(),t.showForm?t._e():e("div",{staticClass:"find_result"},[e("div",{staticClass:"fr_1"},[t._v("重置密码成功")]),e("br"),e("div",{staticClass:"fr_2"},[t._v("下次登录请使用新密码登录")]),e("el-button",{staticClass:"f_btn",attrs:{type:"primary",round:""},on:{click:function(e){return t.$router.push("/login")}}},[t._v("登录")])],1),e("Captcha",{ref:"captcha"})],1)},i=[],r=s("751a"),o=s("d722"),c=s("45ce"),l={name:"FindPwd",components:{Captcha:c["a"]},data(){return{utype:1,showForm:!0,type:"mobile",mobile:"",email:"",code:"",password:"",repeatPassword:"",regularMobile:/^13[0-9]{9}$|14[0-9]{9}$|15[0-9]{9}$|18[0-9]{9}$|17[0-9]{9}$|16[0-9]{9}$|19[0-9]{9}$/,regularEmail:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/}},created(){this.utype=void 0===this.$route.params.utype?1:this.$route.params.utype,this.$store.commit("clearCountDownFun")},methods:{changeMethod(){"mobile"==this.type?this.type="email":this.type="mobile"},sendSms(){return!this.$store.state.sendSmsBtnDisabled&&(this.mobile?this.regularMobile.test(this.mobile)?void this.$refs.captcha.show(t=>{this.$store.dispatch("sendSmsFun",{url:o["a"].sendsms_forget,mobile:this.mobile,type:this.utype,captcha:t}).then(t=>{if(200!==t.code)return this.$message.error(this.$store.state.sendSmsMessage),!1;this.$message({type:"success",message:this.$store.state.sendSmsMessage})})}):(this.$message.error("手机号格式不正确"),!1):(this.$message.error("请输入手机号"),!1))},sendEmail(){return!this.$store.state.sendEmailBtnDisabled&&(this.email?this.regularEmail.test(this.email)?void this.$store.dispatch("sendEmailFun",{url:o["a"].sendmail_forget,email:this.email,type:this.utype}).then(t=>{if(200!==t.code)return this.$message.error(this.$store.state.sendEmailMessage),!1;this.$message({type:"success",message:this.$store.state.sendEmailMessage})}):(this.$message.error("手机号格式不正确"),!1):(this.$message.error("请输入邮箱"),!1))},handleSubmit(){if("mobile"==this.type&&!this.mobile)return this.$message.error("请输入手机号"),!1;if("mobile"==this.type&&!this.regularMobile.test(this.mobile))return this.$message.error("手机号格式不正确"),!1;if("email"==this.type&&!this.email)return this.$message.error("请输入邮箱"),!1;if("email"==this.type&&!this.regularEmail.test(this.email))return this.$message.error("邮箱格式不正确"),!1;if(!this.code)return this.$message.error("请输入验证码"),!1;if(!this.password)return this.$message.error("请输入新密码"),!1;if(!this.repeatPassword)return this.$message.error("请再次确认密码"),!1;if(this.password!==this.repeatPassword)return this.$message.error("两次输入的密码不一致"),!1;let t={mobile:this.mobile,email:this.email,code:this.code,password:this.password,utype:this.utype},e="mobile"==this.type?o["a"].set_pwd_bymobile:o["a"].set_pwd_byemail;r["a"].post(e,t).then(t=>{if(200!==parseInt(t.code))return this.$message.error(t.message),!1;this.$store.commit("clearCountDownFun"),this.$store.commit("clearCountDownFunEmail"),this.showForm=!1}).catch(()=>{})}}},n=l,h=(s("d6dc"),s("2877")),d=Object(h["a"])(n,a,i,!1,null,"174e8517",null);e["default"]=d.exports},ad37:function(t,e,s){},d6dc:function(t,e,s){"use strict";s("5f49")}}]);