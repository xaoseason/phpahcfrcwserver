(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-125439e0"],{"45a2":function(t,e,a){"use strict";a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return r}));var n=a("b775"),i=a("d722");function l(t){return Object(n["a"])({url:i["a"].pageList,method:"get",params:t})}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"post";return"post"==e?Object(n["a"])({url:i["a"].pageEdit,method:e,data:t}):Object(n["a"])({url:i["a"].pageEdit,method:e,params:t})}},"8a68":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("页面管理")])]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"页面名称",prop:"name","min-width":"150"}}),a("el-table-column",{attrs:{label:"seo标题",prop:"seo_title","min-width":"300"}}),a("el-table-column",{attrs:{label:"缓存时长","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.enable_cache?a("span",[t._v(t._s(0==e.row.expire?"不缓存":e.row.expire+"秒"))]):a("span",{staticStyle:{"font-style":"italic",color:"#d3d3d3","font-size":"13px"}},[t._v("不可缓存")])]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return t.funEdit(e.$index,e.row)}}},[t._v(" 编辑 ")])]}}])})],1)],1)],1)},i=[],l=a("45a2"),r={data:function(){return{list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(l["b"])({}).then((function(e){t.list=e.data,t.listLoading=!1}))},funEdit:function(t,e){this.$router.push({path:"/sys/basic/page/edit",query:{id:e.id}})}}},s=r,o=a("2877"),c=Object(o["a"])(s,n,i,!1,null,null,null);e["default"]=c.exports}}]);