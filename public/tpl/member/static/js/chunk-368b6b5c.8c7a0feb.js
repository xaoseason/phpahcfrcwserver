(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-368b6b5c"],{1984:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"p_recommend"},[a("personal-title",[t._v("智能推荐")]),t.intentionList.length>0?a("menu-nav",{attrs:{list:t.intentionList,"active-tab":t.params.id}}):t._e(),a("div",{staticClass:"p_group"},[t._l(t.dataset,(function(i,s){return a("div",{key:s,staticClass:"p_item"},[a("div",{staticClass:"p_name"},[1===i.emergency?a("div",{staticClass:"worry"},[t._v("急")]):t._e(),a("div",{staticClass:"name substring"},[a("a",{attrs:{href:i.job_link_url_web,target:"_blank"}},[t._v(t._s(i.jobname))])]),a("div",{staticClass:"clear"}),a("div",{staticClass:"wage"},[t._v(t._s(i.wage_text))])]),a("div",{staticClass:"p_info"},[a("div",{staticClass:"info_item"},[t._v(t._s(i.education_text))]),a("div",{staticClass:"info_item"},[t._v(t._s(i.experience_text))]),a("div",{staticClass:"info_item substring"},[t._v(t._s(i.district_text))]),a("div",{staticClass:"clear"})]),a("div",{staticClass:"p_tag"},[t._l(i.tag_text_arr.slice(0,5),(function(i,s){return a("div",{key:s,staticClass:"tag_item"},[t._v(t._s(i))])})),a("div",{staticClass:"clear"})],2)])})),a("div",{staticClass:"clear"})],2),a("pagination",{attrs:{total:t.total,"current-page":t.params.page,"page-size":t.params.pagesize},on:{handleCurrentChange:t.doSearch}})],1)},e=[],n=(i("14d9"),i("751a")),c=i("d722"),r={name:"PersonalRecommend",data(){return{intentionList:[],listLoading:!1,dataset:[],total:0,params:{id:0,page:1,pagesize:10}}},watch:{$route:function(t){void 0!==t.query.id&&(this.params.id=t.query.id,this.dataset=[],this.fetchData(!0))}},created(){void 0!==this.$route.query.id&&(this.params.id=this.$route.query.id),this.fetchDataIntention()},methods:{fetchDataIntention(){n["a"].get(c["a"].get_intentions,{}).then(t=>{let a=0;t.data.items.forEach(t=>{let i={label:t.category_text,href:"/personal/recommend?id="+t.id,name:t.id+"",active:0==a};this.intentionList.push(i),0!=a||this.params.id||(this.params.id=t.id),a++}),this.intentionList.length>0&&this.fetchData(!0)}).catch(()=>{})},fetchData(t){this.listLoading=!0,n["a"].get(c["a"].recommend_joblist,this.params).then(a=>{this.dataset=[...a.data.items],this.listLoading=!1,!0===t&&this.fetchDataTotal()}).catch(()=>{})},fetchDataTotal(){n["a"].get(c["a"].recommend_joblist_total,this.params).then(t=>{this.total=t.data}).catch(()=>{})},doSearch(t){this.params.page=t,this.fetchData()}}},d=r,o=(i("d116"),i("2877")),l=Object(o["a"])(d,s,e,!1,null,"5c37eb77",null);a["default"]=l.exports},"8f0a":function(t,a,i){},d116:function(t,a,i){"use strict";i("8f0a")}}]);