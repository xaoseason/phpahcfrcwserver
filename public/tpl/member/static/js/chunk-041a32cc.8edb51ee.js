(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-041a32cc"],{"2fcf":function(e,t,i){"use strict";i("e296")},"9b29":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e._self._c;return t("div",[t("el-steps",{attrs:{active:1,"align-center":""}},[t("el-step",{attrs:{title:"基本信息"}}),t("el-step",{attrs:{title:"经历信息"}}),t("el-step",{attrs:{title:"证件照片"}})],1),t("br"),t("br"),t("br"),t("div",{staticClass:"form-box"},[t("el-form",{ref:"form",staticClass:"form",attrs:{size:"small",model:e.form,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"姓名",prop:"realname"}},[t("el-input",{model:{value:e.form.realname,callback:function(t){e.$set(e.form,"realname",t)},expression:"form.realname"}})],1),t("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[t("el-input",{model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),1==e.data.switch_email?t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1):e._e(),t("el-form-item",{attrs:{label:"身份证号",prop:"idcard"}},[t("el-input",{on:{change:function(t){return e.getbirthday()}},model:{value:e.form.idcard,callback:function(t){e.$set(e.form,"idcard",t)},expression:"form.idcard"}})],1),t("el-form-item",{attrs:{label:"出生日期",prop:"birthday"}},[t("el-date-picker",{attrs:{disabled:"",type:"date","value-format":"yyyy-MM-dd"},model:{value:e.form.birthday,callback:function(t){e.$set(e.form,"birthday",t)},expression:"form.birthday"}})],1),t("el-form-item",{attrs:{label:"性别",prop:"sex"}},[t("el-input",{model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}})],1),t("el-form-item",{attrs:{label:"民族",prop:"nation"}},[t("el-input",{model:{value:e.form.nation,callback:function(t){e.$set(e.form,"nation",t)},expression:"form.nation"}})],1),1==e.data.switch_height?t("el-form-item",{attrs:{label:"身高",prop:"height"}},[t("el-input",{model:{value:e.form.height,callback:function(t){e.$set(e.form,"height",t)},expression:"form.height"}}),e._v(" cm ")],1):e._e(),1==e.data.switch_weight?t("el-form-item",{attrs:{label:"体重",prop:"weight"}},[t("el-input",{model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight",t)},expression:"form.weight"}}),e._v(" kg ")],1):e._e(),1==e.data.switch_vision?t("el-form-item",{attrs:{label:"左眼视力",prop:"vision"}},[t("el-input",{model:{value:e.form.vision,callback:function(t){e.$set(e.form,"vision",t)},expression:"form.vision"}})],1):e._e(),t("el-form-item",{attrs:{label:"政治面貌",prop:"custom_field_1"}},[t("el-input",{model:{value:e.form.custom_field_1,callback:function(t){e.$set(e.form,"custom_field_1",t)},expression:"form.custom_field_1"}})],1),t("el-form-item",{attrs:{label:"家庭住址",prop:"residence"}},[t("el-input",{model:{value:e.form.residence,callback:function(t){e.$set(e.form,"residence",t)},expression:"form.residence"}})],1),t("el-form-item",{attrs:{label:"户籍地",prop:"hjd"}},[t("el-input",{model:{value:e.form.hjd,callback:function(t){e.$set(e.form,"hjd",t)},expression:"form.hjd"}})],1),t("el-form-item",{attrs:{label:"最高学历",prop:"education"}},[t("el-select",{attrs:{placeholder:"请选择最高学历"},model:{value:e.form.education,callback:function(t){e.$set(e.form,"education",t)},expression:"form.education"}},e._l(e.optionEducation,(function(e,i){return t("el-option",{key:i,attrs:{label:e.text,value:e.id}})})),1)],1),1==e.data.switch_title?t("el-form-item",{attrs:{label:"职称",prop:"title"}},[t("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1):e._e(),t("el-form-item",{attrs:{label:"学制",prop:"schoolsystem"}},[t("el-select",{attrs:{placeholder:"请选择学制"},model:{value:e.form.schoolsystem,callback:function(t){e.$set(e.form,"schoolsystem",t)},expression:"form.schoolsystem"}},[t("el-option",{attrs:{label:"全日制",value:1}}),t("el-option",{attrs:{label:"非全日制",value:2}})],1)],1),t("el-form-item",{attrs:{label:"毕业院校",prop:"school"}},[t("el-input",{model:{value:e.form.school,callback:function(t){e.$set(e.form,"school",t)},expression:"form.school"}})],1),t("el-form-item",{attrs:{label:"所学专业",prop:"basicMajor"}},[t("el-cascader",{ref:"intMajor",attrs:{options:e.optionMajor,filterable:"",placeholder:"请选择所学专业"},model:{value:e.form.basicMajor,callback:function(t){e.$set(e.form,"basicMajor",t)},expression:"form.basicMajor"}})],1),t("el-form-item",{attrs:{label:"毕业时间",prop:"custom_field_2"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form.custom_field_2,callback:function(t){e.$set(e.form,"custom_field_2",t)},expression:"form.custom_field_2"}})],1),1==e.data.switch_fresh_graduates?t("el-form-item",{attrs:{label:"应届毕业生",prop:"fresh_graduates"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.fresh_graduates,callback:function(t){e.$set(e.form,"fresh_graduates",t)},expression:"form.fresh_graduates"}},[t("el-option",{attrs:{label:"是",value:1}}),t("el-option",{attrs:{label:"否",value:2}})],1)],1):e._e(),t("el-form-item",{attrs:{label:"退伍军人",prop:"custom_field_3"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.custom_field_3,callback:function(t){e.$set(e.form,"custom_field_3",t)},expression:"form.custom_field_3"}},[t("el-option",{attrs:{label:"是",value:"1"}}),t("el-option",{attrs:{label:"否",value:"2"}})],1)],1),t("el-form-item",{attrs:{label:"紧急联系人",prop:"sos_name"}},[t("el-input",{model:{value:e.form.sos_name,callback:function(t){e.$set(e.form,"sos_name",t)},expression:"form.sos_name"}})],1),t("el-form-item",{attrs:{label:"紧急联系电话",prop:"sos_mobile"}},[t("el-input",{model:{value:e.form.sos_mobile,callback:function(t){e.$set(e.form,"sos_mobile",t)},expression:"form.sos_mobile"}})],1),1==e.data.switch_marriage?t("el-form-item",{attrs:{label:"婚姻状态",prop:"marriage"}},[t("el-select",{model:{value:e.form.marriage,callback:function(t){e.$set(e.form,"marriage",t)},expression:"form.marriage"}},[t("el-option",{attrs:{label:"已婚",value:1}}),t("el-option",{attrs:{label:"未婚",value:2}})],1)],1):e._e(),t("el-form-item",{attrs:{label:"岗位",prop:"exam_post_id"}},[t("el-select",{attrs:{placeholder:"请选择岗位"},model:{value:e.form.exam_post_id,callback:function(t){e.$set(e.form,"exam_post_id",t)},expression:"form.exam_post_id"}},e._l(e.post,(function(e,i){return t("el-option",{key:i,attrs:{label:e.name,value:e.exam_post_id}})})),1)],1),1==e.data.switch_birth?t("el-form-item",{attrs:{label:"生育状况",prop:"birth"}},[t("el-select",{model:{value:e.form.birth,callback:function(t){e.$set(e.form,"birth",t)},expression:"form.birth"}},[t("el-option",{attrs:{label:"已育",value:1}}),t("el-option",{attrs:{label:"未育",value:2}})],1)],1):e._e(),e._l(e.custom_field,(function(i,s){return[3!=i.type?t("el-form-item",{key:i.id,attrs:{label:i.name}},[1==i.type?t("el-input",{attrs:{size:"small"},model:{value:e.form.custom_field[s].value,callback:function(t){e.$set(e.form.custom_field[s],"value",t)},expression:"form.custom_field[index].value"}}):e._e(),2==i.type?t("el-input",{staticStyle:{width:"240px"},attrs:{size:"small",type:"textarea"},model:{value:e.form.custom_field[s].value,callback:function(t){e.$set(e.form.custom_field[s],"value",t)},expression:"form.custom_field[index].value"}}):e._e()],1):e._e()]})),e._l(e.custom_field,(function(i,s){return[3==i.type?t("el-form-item",{key:i.id,attrs:{label:i.name}},[3==i.type?t("div",[t("el-button",{staticStyle:{height:"150px",width:"120px",padding:"0px"},on:{click:function(t){return e.UoloadingBtnOnClick(s)}}},[""==e.form.custom_field[s].value||void 0==e.form.custom_field[s].value?t("i",{staticClass:"el-icon-plus avatar-uploader-icon"}):t("img",{staticClass:"avatar",staticStyle:{width:"115px",height:"145px"},attrs:{src:"http://www.ahcfrc.com"+e.form.custom_field[s].value}})])],1):e._e()]):e._e()]})),t("input",{ref:"custom_field_upload_input",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.UploadOnChange}})],2)],1),t("div",{staticClass:"dialog-footer"},[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.next("form")}}},[e._v("下一步")])],1)],1)},o=[],a=(i("14d9"),i("751a")),r=i("d722"),l={data(){return{loading:null,jump:!1,exam_project_id:"",exam_sign_id:"",type:"",data:{},optionEducation:[],optionMajor:[],MyInfo:{},form:{realname:"",mobile:"",email:"",idcard:"",birthday:"",sex:"",nation:"",height:"",weight:"",vision:"",custom_field_1:"",residence:"",hjd:"",major2:"",major1:"",education:"",title:"",schoolsystem:"",school:"",basicMajor:"",custom_field_2:"",fresh_graduates:"",sos_mobile:"",sos_name:"",marriage:"",birth:"",exam_post_id:"",custom_field_3:"",custom_field:[],optionMajor:null},post:[],custom_field:[],fixed_custom_field:[],custom_field_upload_input_index:-1,rules:{realname:[{required:!0,message:"请输入姓名",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{min:11,max:11,message:"请输入格式正确的手机号",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"}],idcard:[{required:!0,message:"请输入身份证",trigger:"blur"},{min:15,max:18,message:"请输入格式正确的身份证",trigger:"blur"}],birthday:[{required:!0,message:"请输入生日",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],nation:[{required:!0,message:"请输入民族",trigger:"blur"}],height:[{required:!0,message:"请输入身高",trigger:"blur"}],weight:[{required:!0,message:"请输入体重",trigger:"blur"}],vision:[{required:!0,message:"请输入左眼视力",trigger:"blur"}],custom_field_1:[{required:!0,message:"请输入政治面貌",trigger:"blur"}],residence:[{required:!0,message:"请输入家庭住址",trigger:"blur"}],hjd:[{required:!0,message:"请输入户籍地",trigger:"blur"}],education:[{required:!0,message:"请选择学历",trigger:"change"}],title:[{required:!0,message:"请输入职称",trigger:"blur"}],schoolsystem:[{required:!0,message:"请选择学制",trigger:"change"}],school:[{required:!0,message:"请输入毕业院校",trigger:"blur"}],basicMajor:[{required:!0,message:"请选择所学专业",trigger:"change"}],custom_field_2:[{required:!0,message:"请选择毕业时间",trigger:"change"}],fresh_graduates:[{required:!0,message:"请选择应届毕业生",trigger:"change"}],sos_name:[{required:!0,message:"请输入紧急联系人",trigger:"blur"}],sos_mobile:[{required:!0,message:"请输入紧急联系电话",trigger:"blur"},{min:11,max:11,message:"请输入格式正确的手机号",trigger:"blur"}],marriage:[{required:!0,message:"请选择婚姻状态",trigger:"change"}],birth:[{required:!0,message:"请选择生育状况",trigger:"change"}],exam_post_id:[{required:!0,message:"请选择岗位",trigger:"change"}],custom_field_3:[{required:!0,message:"请选择是否为退伍军人",trigger:"change"}]}}},mounted(){this.$store.dispatch("getClassify","education").then(()=>{this.optionEducation=JSON.parse(JSON.stringify(this.$store.state.classifyEdu))}),this.$store.dispatch("getClassify","major").then(()=>{this.optionMajor=JSON.parse(JSON.stringify(this.$store.state.classifyMajor))})},created(){this.loading=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),this.getid(),this.getMyInfo()},watch:{custom_field:function(e){console.log(e,"侦听函数侦听custom_field")},"form.exam_post_id"(e){for(let t=0;t<this.post.length;t++)if(e==this.post[t].exam_post_id)if(void 0!=this.post[t].custom_field&&null!=this.post[t].custom_field&&""!=this.post[t].custom_field&&this.post[t].custom_field.length>0){let e=[];e=[...this.fixed_custom_field],this.custom_field=[...e,...this.post[t].custom_field];const i=JSON.parse(JSON.stringify(this.form.custom_field));if(this.form.custom_field=this.custom_field,i.length>0)for(let t in i)for(let e in this.form.custom_field)i[t].key==this.form.custom_field[e].key&&(this.form.custom_field[e].value=i[t].value)}else this.custom_field=[...this.fixed_custom_field],this.form.custom_field=[...this.fixed_custom_field]},"form.basicMajor"(e){this.form.major1=e[0],this.form.major2=e[1]},"form.schoolsystem"(e){console.log(e),1!=this.form.schoolsystem&&2!=this.form.schoolsystem&&(this.form.schoolsystem="")},"form.fresh_graduates"(e){console.log(e),1!=this.form.fresh_graduates&&2!=this.form.fresh_graduates&&(this.form.fresh_graduates="")},"form.custom_field_3"(e){console.log(e),1!=this.form.custom_field_3&&2!=this.form.custom_field_3&&(this.form.custom_field_3="")},"form.marriage"(e){console.log(e),1!=this.form.marriage&&2!=this.form.marriage&&(this.form.marriage="")},"form.switch_birth"(e){console.log(e),1!=this.form.switch_birth&&2!=this.form.switch_birth&&(this.form.switch_birth="")}},methods:{getMyInfo(){a["a"].get(r["a"].get_my_info).then(e=>{200===parseInt(e.code)&&(console.log(e,"myinfo"),this.getlist(),this.MyInfo.realname=e.data.basic.realname,this.MyInfo.mobile=e.data.contact.mobile,this.MyInfo.email=e.data.contact.email,this.MyInfo.idcard=e.data.basic.idcard,this.MyInfo.birthday=e.data.basic.idcard.substring(6,4)+"-"+e.data.basic.idcard.substring(10,2)+"-"+e.data.basic.idcard.substring(12,2),this.MyInfo.sex=e.data.basic.sex,this.MyInfo.nation=e.data.basic.nation,this.MyInfo.height=e.data.basic.height,this.MyInfo.weight=e.data.basic.weight,this.MyInfo.vision=e.data.basic.vision,this.MyInfo.major2=e.data.basic.major,this.MyInfo.custom_field_1=e.data.basic.custom_field_1,this.MyInfo.custom_field_2=e.data.basic.custom_field_2,this.MyInfo.custom_field_3=e.data.basic.custom_field_3,this.MyInfo.residence=e.data.basic.residence,this.MyInfo.hjd=e.data.basic.hjd,this.MyInfo.education=e.data.basic.education,this.MyInfo.title=e.data.basic.title,null==e.data.basic.schoolsystem||void 0==e.data.basic.schoolsystem?this.MyInfo.schoolsystem="":this.MyInfo.schoolsystem=e.data.basic.schoolsystem,this.MyInfo.school=e.data.basic.school,this.MyInfo.marriage=e.data.basic.marriage,this.MyInfo.sos_mobile=e.data.contact.sos_mobile,this.MyInfo.sos_name=e.data.contact.sos_name,null==e.data.basic.birth||void 0==e.data.basic.schoolsystem?this.MyInfo.birth="":this.MyInfo.birth=e.data.basic.birth,this.MyInfo.basicMajor=[e.data.basic.major1,e.data.basic.major2],this.form=Object.assign(this.form,this.MyInfo),this.getbirthday())}).catch(e=>{console.log(e)})},editList(){a["a"].post(r["a"].get_sign_details,{exam_sign_id:this.exam_sign_id}).then(e=>{if(200===parseInt(e.code)){console.log(e,"edilist"),null!=this.loading&&this.loading.close(),this.form.realname=e.data.sign.realname,this.form.mobile=e.data.contact.mobile,this.form.email=e.data.contact.email,this.form.idcard=e.data.sign.idcard,this.form.birthday=e.data.sign.idcard.substring(6,4)+"-"+e.data.sign.idcard.substring(10,2)+"-"+e.data.sign.idcard.substring(12,2),this.form.sex=e.data.basic.sex,this.form.nation=e.data.basic.nation,this.form.height=e.data.basic.height,this.form.weight=e.data.basic.weight,this.form.vision=e.data.basic.vision,this.form.custom_field_1=e.data.basic.custom_field_1,this.form.custom_field_2=e.data.basic.custom_field_2,this.form.custom_field_3=e.data.basic.custom_field_3,this.form.residence=e.data.basic.residence,this.form.hjd=e.data.basic.hjd,this.form.education=e.data.basic.education,this.form.title=e.data.basic.title,this.form.schoolsystem=e.data.basic.schoolsystem,this.form.school=e.data.basic.school,this.form.fresh_graduates=e.data.sign.fresh_graduates,this.form.marriage=e.data.basic.marriage,this.form.sos_mobile=e.data.contact.sos_mobile,this.form.sos_name=e.data.contact.sos_name,this.form.birth=e.data.basic.birth,this.form.exam_post_id=e.data.sign.exam_post_id,this.form.custom_field=e.data.sign.custom_field,this.custom_field=[...this.form.custom_field],this.form.major2=e.data.basic.major2,this.form.major1=e.data.basic.major1,this.form.basicMajor=[e.data.basic.major1,e.data.basic.major2];for(let e=0;e<this.post.length;e++)if(this.form.exam_post_id==this.post[e].exam_post_id)if(void 0!=this.post[e].custom_field&&null!=this.post[e].custom_field&&""!=this.post[e].custom_field&&this.post[e].custom_field.length>0){let t=[];t=[...this.fixed_custom_field],this.custom_field=[...t,...this.post[e].custom_field];const i=JSON.parse(JSON.stringify(this.form.custom_field));if(this.form.custom_field=this.custom_field,i.length>0)for(let e in i)for(let t in this.form.custom_field)i[e].key==this.form.custom_field[t].key&&(this.form.custom_field[t].value=i[e].value)}else this.custom_field=[...this.fixed_custom_field],this.form.custom_field=[...this.fixed_custom_field];this.getbirthday()}}).catch(e=>{console.log(e)})},getlist(){a["a"].post(r["a"].project_details,{exam_project_id:this.exam_project_id}).then(e=>{if(200===parseInt(e.code)){console.log(e,"list"),"edit"==this.type?this.editList():null!=this.loading&&this.loading.close(),this.data=e.data,this.custom_field=e.data.custom_field,this.post=e.data.post;let t=[];e.data.custom_field&&e.data.custom_field.forEach(e=>{t.push({name:e.name,type:e.type,required:e.required,key:e.key,value:""})}),this.fixed_custom_field=t,this.form.custom_field=t}}).catch(e=>{console.log(e)})},UoloadingBtnOnClick(e){console.log(e),this.custom_field_upload_input_index=e,this.$refs.custom_field_upload_input.click()},UploadOnChange(){if(void 0!=this.$refs.custom_field_upload_input.files[0]&&null!=this.$refs.custom_field_upload_input.files[0]&&"image"==this.$refs.custom_field_upload_input.files[0].type.slice(0,5)){const e=this.$loading({lock:!0,text:"正在上传...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),t=new FileReader;t.readAsDataURL(this.$refs.custom_field_upload_input.files[0]),t.onload=e=>{this.preview3=e.target.result};const i=new FormData;i.append("file",this.$refs.custom_field_upload_input.files[0]),a["a"].post(r["a"].uploadimg,i).then(t=>{if(e.close(),200===parseInt(t.code)){let e=t.data.path;this.form.custom_field[this.custom_field_upload_input_index].value=e;let i=[...this.form.custom_field];this.form.custom_field=[],this.form.custom_field=i}else this.$message({message:"上传失败",type:"warning"})}).catch(e=>{console.log(e)})}else this.$message({message:"仅支持图片格式上传",type:"warning"})},next(e){this.jump=!0,this.post.forEach(e=>{this.form.exam_post_id==e.exam_post_id&&e.custom_field&&e.custom_field.forEach(e=>{1==e.required&&this.form.custom_field.forEach(t=>{t.key==e.key&&(void 0==t.value||null==t.value||""==t.value.replace(/\s*/g,"")?this.jump=!1:this.jump=!0)})})}),1==this.jump?this.$refs[e].validate(e=>{if(!e)return console.log("error submit!!"),!1;this.$router.push({path:"/personal/test/experience",query:{exam_project_id:this.exam_project_id,exam_sign_id:this.exam_sign_id,row:encodeURIComponent(JSON.stringify(this.form))}})}):0==this.jump&&this.$message({message:"请填写自定义字段",type:"warning"})},getid(){this.exam_project_id=this.$route.query.exam_project_id,this.exam_sign_id=this.$route.query.exam_sign_id,this.type=this.$route.query.type},getbirthday(){var e=this.form.idcard,t="";null!=e&&""!=e&&(15==e.length?t="19"+e.substr(6,6):18==e.length&&(t=e.substr(6,8)),t=t.replace(/(.{4})(.{2})/,"$1-$2-")),this.form.birthday=t}}},m=l,c=(i("2fcf"),i("2877")),d=Object(c["a"])(m,s,o,!1,null,"252de06c",null);t["default"]=d.exports},e296:function(e,t,i){}}]);