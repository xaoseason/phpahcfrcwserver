(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d43bb"],{"5fc7":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[e("JobForm",{ref:"child",attrs:{type:"edit"},on:{submit:t.submit}})],1)},s=[],r=(a("14d9"),a("981b")),c=a("751a"),o=a("d722"),h={components:{JobForm:r["a"]},data(){return{}},created(){this.fetchData(this.$route.params.id)},methods:{fetchData(t){const e=this.$loading({lock:!0,text:"Loading"});c["a"].get(o["a"].company_jobedit_pre,{id:t}).then(t=>{this.$refs.child.field_rule=t.data.field_rule;let a=t.data.basic,i=t.data.contact;a.citycategory_arr=[],a.jobcategory_arr=[],0!=a.category1&&a.jobcategory_arr.push(a.category1),0!=a.category2&&a.jobcategory_arr.push(a.category2),0!=a.category3&&a.jobcategory_arr.push(a.category3),0!=a.district1&&a.citycategory_arr.push(a.district1),0!=a.district2&&a.citycategory_arr.push(a.district2),0!=a.district3&&a.citycategory_arr.push(a.district3);let s=a.tag.toString(),r=s.split(",");for(var c=0;c<r.length;c++)isNaN(r[c])||(r[c]=parseInt(r[c]));a.minwage&&this.$refs.child.handleMaxwageChange(a.minwage),a.minage&&this.$refs.child.handleMaxageChange(a.minage),!1===this.$refs.child.field_rule.basic.negotiable?a.negotiable=!1:a.negotiable=1==a.negotiable,a.age_na=1==a.age_na,a.tag=r,i.mobile_show=1==i.mobile_show,i.telephone_show=1==i.telephone_show,this.$refs.child.form.basic=a,this.$refs.child.form.contact=i,this.$refs.child.contactHidden=1!=i.is_display,this.$refs.child.weixin_sync_mobile=i.weixin===i.mobile,this.$refs.child.location=a.district_text_full,e.close()}).catch(()=>{})},submit(t){c["a"].post(o["a"].company_jobedit_save,t).then(t=>{this.$message({type:"success",message:t.message}),this.$router.push("/company/joblist")}).catch(()=>{})}}},n=h,d=a("2877"),l=Object(d["a"])(n,i,s,!1,null,"885dc6f8",null);e["default"]=l.exports}}]);