(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b20e656"],{"060a":function(t,e,i){t.exports=i.p+"static/img/alipay.af064f92.png"},"4df8":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.data,(function(e){return n("el-card",{key:e.id},[n("div",{staticClass:"details"},[n("span",[t._v(t._s(e.projectname)+" - "+t._s(e.name))]),n("span",[t._v("招聘人数 "+t._s(e.number)+"人")]),n("span",[t._v("报名时间"+t._s(e.sign_up_start_time)+"-"+t._s(e.sign_up_end_time))])]),n("div",{staticClass:"btns"},[n("el-button",{attrs:{size:"mini",type:"primary",disabled:1!=e.is_open_signup&&2!=e.is_open_modify||2!=e.my_sign_up_status},on:{click:function(i){return t.signup(e.exam_project_id,e.exam_sign_id)}}},[t._v("修改报名")]),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){return t.looks(e)}}},[t._v("查看报名")]),n("el-button",{attrs:{size:"mini",disabled:1!=e.my_sign_up_status||1!=e.is_pen_pay||1==e.is_pay_pen},on:{click:function(i){return t.pay(e,1)}}},[t._v("笔试缴费")]),n("el-button",{attrs:{size:"mini",disabled:1!=e.my_sign_up_status||1!=e.is_itw_pay||1!=e.my_is_itw||1==e.is_pay_itw},on:{click:function(i){return t.pay(e,2)}}},[t._v("面试缴费")]),n("el-button",{attrs:{size:"mini",disabled:1!=e.my_sign_up_status||0==e.is_pen_print||1!=e.is_pay_pen},on:{click:function(i){return t.admissionTicket(e)}}},[t._v("打印准考证")]),n("el-button",{attrs:{size:"mini",disabled:1!=e.my_sign_up_status||1!=e.is_pay_itw&&1!=e.is_pay_pen||1!=e.is_open_sign_table},on:{click:function(i){return t.sign(e)}}},[t._v("打印报名表")]),n("el-button",{attrs:{size:"mini",disabled:1!=e.my_sign_up_status||1!=e.is_itw_print||1!=e.my_is_itw||1!=e.is_pay_itw},on:{click:function(i){return t.interview(e)}}},[t._v("打印面试表")]),n("el-button",{attrs:{size:"mini",disabled:0==e.is_pen_query||1!=e.my_sign_up_status||0==e.is_pen_pay&&0==e.is_itw_pay||1!=e.is_pay_pen&&1!=e.is_pay_itw},on:{click:function(i){return t.look_results(e)}}},[t._v("查看成绩")])],1),n("div",{staticStyle:{"margin-top":"0.8rem"}},[t._v(" 审核状态: "),""!=e.note&&2==e.my_sign_up_status?n("span",{staticClass:"not_accept_tip"},[t._v("审核未通，过原因："+t._s(e.note))]):t._e(),0==e.my_sign_up_status?n("span",{staticClass:"not_accept_tip"},[t._v(" 审核中 ")]):t._e(),1==e.my_sign_up_status?n("span",{staticClass:"not_accept_tip",staticStyle:{color:"#43a047"}},[t._v(" 审核通过 "),1==e.is_pay_pen?n("span",[t._v("，已支付笔试考试费用")]):t._e(),1==e.is_pay_itw?n("span",[t._v("，已支付面试考试费用")]):t._e()]):t._e()])])})),n("div",{staticClass:"paging"},[n("el-pagination",{attrs:{"page-sizes":[10,50,100,200],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),n("el-dialog",{attrs:{title:"缴费",visible:t.paydialogVisible,width:"400px","before-close":t.handleClose},on:{"update:visible":function(e){t.paydialogVisible=e}}},[n("div",{staticClass:"pay-box"},[n("img",{staticClass:"pay",attrs:{src:i("060a"),alt:""},on:{click:function(e){return t.alipay()}}}),n("img",{staticClass:"pay1",attrs:{src:i("6f5b"),alt:""},on:{click:function(e){return t.wxpay()}}})]),n("hr"),t.money?n("div",{staticClass:"money_title"},[t._v("付款金额"+t._s(t.money)+"元")]):t._e(),n("div",{staticStyle:{display:"flex","justify-content":"center"}},[""!=t.pay_url_alipay?n("el-link",{staticClass:"el-button el-button--success",staticStyle:{color:"#fff",margin:"auto","margin-top":"1rem",width:"550px"},attrs:{type:"primary",href:t.pay_url_alipay,target:"_blank"},on:{click:function(e){t.is_show_pay_close_btn=!0}}},[t._v("前往支付宝缴费")]):t._e(),n("div",{ref:"qrcode",staticClass:"qrcode-box",staticStyle:{"text-align":"center"},attrs:{id:"qrcode"}})],1),n("div",{staticStyle:{display:"flex","justify-content":"center"}},[t.is_show_pay_close_btn?n("el-button",{staticStyle:{margin:"auto","margin-top":"1rem",width:"550px"},attrs:{type:"primary"},on:{click:t.reload}},[t._v("支付完成")]):t._e()],1)]),n("el-dialog",{attrs:{title:"查看成绩",visible:t.resultsFormVisible,width:"900px"},on:{"update:visible":function(e){t.resultsFormVisible=e}}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.gradeList}},[n("el-table-column",{attrs:{prop:"post_name",label:"岗位名称","min-width":"180"}}),n("el-table-column",{attrs:{prop:"project_name",label:"考试名次","min-width":"180"}}),n("el-table-column",{attrs:{prop:"grade_pen","min-width":"180",label:"笔试成绩"}}),t.is_itw?n("el-table-column",{attrs:{prop:"grade_itw","min-width":"180",label:"面试成绩"}}):t._e()],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.resultsFormVisible=!1}}},[t._v("关闭")])],1)],1),n("el-dialog",{attrs:{title:"报名情况",visible:t.dialogFormVisible,width:"900px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.signUpStateList}},[n("el-table-column",{attrs:{prop:"name",label:"岗位名称","min-width":"180"}}),n("el-table-column",{attrs:{prop:"number",label:"招录人数","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.number)+"人")])]}}])}),n("el-table-column",{attrs:{prop:"sign_number","min-width":"180",label:"报名人数"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.sign_number)+"人")])]}}])}),n("el-table-column",{attrs:{prop:"sign_adopt_number","min-width":"180",label:"审核通过"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.sign_adopt_number)+"人")])]}}])}),n("el-table-column",{attrs:{prop:"sign_not_adopt_number","min-width":"180",label:"未审核通过人数"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.sign_not_adopt_number)+"人")])]}}])}),n("el-table-column",{attrs:{prop:"sign_wait_number","min-width":"180",label:"等待审核人数"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.sign_wait_number)+"人")])]}}])}),n("el-table-column",{attrs:{prop:"sign_pay_pen_number","min-width":"180",label:"支付笔试费用人数"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.sign_pay_pen_number)+"人")])]}}])}),t.sign_is_itw?n("el-table-column",{attrs:{prop:"sign_pay_itw_number","min-width":"180",label:"支付面试费用人数"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.sign_pay_itw_number)+"人")])]}}],null,!1,1429430650)}):t._e(),t.sign_is_itw?n("el-table-column",{attrs:{prop:"sign_print_itw_number","min-width":"180",label:"打印面试单人数"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.sign_print_itw_number)+"人")])]}}],null,!1,2849262915)}):t._e(),n("el-table-column",{attrs:{prop:"sign_print_pen_number","min-width":"180",label:"打印笔试准考证人数"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.sign_print_pen_number)+"人")])]}}])})],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("关闭")])],1)],1)],2)},r=[],a=i("d044"),s=i.n(a),o=i("751a"),l=i("d722"),u={data(){return{money:"",exam_project_id:"",pay_url_alipay:"",type:1,data:{},form:{},total:0,dialogFormVisible:!1,resultsFormVisible:!1,paydialogVisible:!1,page:1,pagesize:10,tableData:[],gradeList:[],is_itw:!1,signUpStateList:[],sign_is_itw:!1,is_show_pay_close_btn:!1}},created(){this.getlist()},methods:{getlist(){o["a"].post(l["a"].mySignList,{page:this.page,pagesize:this.pagesize}).then(t=>{200==parseInt(t.code)&&(this.data=t.data.items,this.total=t.data.total)}).catch(t=>{console.log(t)})},handleClose(){this.paydialogVisible=!1,this.$refs.qrcode.innerHTML=""},pay(t,e){this.is_show_pay_close_btn=!1,this.pay_url_alipay="",this.type=e,this.exam_project_id=t.exam_project_id,this.paydialogVisible=!0},creatQrCode(t){this.$refs.qrcode.innerHTML="";let e=t;var i=new s.a(this.$refs.qrcode,{text:e,width:250,height:250,colorDark:"#000000",colorLight:"#ffffff",correctLevel:s.a.CorrectLevel.H});return i},alipay(){let t=this.$loading({lock:!0,text:"订单生成中,请稍后...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});o["a"].post(l["a"].pay,{exam_project_id:this.exam_project_id,is_alpay:1,type:this.type}).then(e=>{t.close(),200==parseInt(e.code)?(this.money=e.data.money,this.pay_url_alipay=e.data.pay_url,setTimeout(()=>{this.is_show_pay_close_btn=!0},3e3),console.log(this.pay_url_alipay)):this.$message({showClose:!0,message:e.msg,type:"error"})}).catch(e=>{t.close(),console.log(e)})},wxpay(){let t=this.$loading({lock:!0,text:"订单生成中,请稍后...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});o["a"].post(l["a"].pay,{exam_project_id:this.exam_project_id,is_alpay:0,type:this.type}).then(e=>{t.close(),200==parseInt(e.code)?(this.is_show_pay_close_btn=!0,this.creatQrCode(e.data.pay_url),this.money=e.data.money):this.$message({showClose:!0,message:e.msg,type:"error"})}).catch(e=>{t.close(),console.log(e)})},reload(){history.go(0)},looks(t){o["a"].post(l["a"].signUpState,{exam_project_id:t.exam_project_id}).then(t=>{200==parseInt(t.code)&&(this.signUpStateList=t.data.post,1==t.data.project.is_itw?this.sign_is_itw=!0:this.sign_is_itw=!1)}).catch(t=>{console.log(t)}),this.dialogFormVisible=!0},look_results(t){o["a"].post(l["a"].grade,{exam_project_id:t.exam_project_id}).then(t=>{200==parseInt(t.code)&&(this.gradeList=[],this.gradeList.push(t.data),1==t.data.is_itw?this.is_itw=!0:this.is_itw=!1)}).catch(t=>{console.log(t)}),this.resultsFormVisible=!0},sign(t){this.$router.push({path:"/personal/test/sign",query:{type:3,exam_project_id:t.exam_project_id}})},signup(t,e){this.$router.push({path:"/personal/test/signUpForm",query:{exam_project_id:t,exam_sign_id:e,type:"edit"}})},admissionTicket(t){this.$router.push({path:"/personal/test/admissionTicket",query:{type:1,exam_project_id:t.exam_project_id}})},interview(t){this.$router.push({path:"/personal/test/interview",query:{type:2,exam_project_id:t.exam_project_id}})},mphone(){this.dialogFormVisible=!1},handleSizeChange(t){this.pagesize=t,this.getlist()},handleCurrentChange(t){this.page=t,this.getlist()}}},h=u,p=(i("b654"),i("2877")),_=Object(p["a"])(h,n,r,!1,null,"55e2051a",null);e["default"]=_.exports},"6f5b":function(t,e,i){t.exports=i.p+"static/img/wxpay.e05fe5e5.png"},8659:function(t,e,i){},b654:function(t,e,i){"use strict";i("8659")},d044:function(t,e,i){var n;(function(e,i){t.exports=i()})(0,(function(){function t(t){this.mode=i.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,n=this.data.length;e<n;e++){var r=[],a=this.data.charCodeAt(e);a>65536?(r[0]=240|(1835008&a)>>>18,r[1]=128|(258048&a)>>>12,r[2]=128|(4032&a)>>>6,r[3]=128|63&a):a>2048?(r[0]=224|(61440&a)>>>12,r[1]=128|(4032&a)>>>6,r[2]=128|63&a):a>128?(r[0]=192|(1984&a)>>>6,r[1]=128|63&a):r[0]=a,this.parsedData.push(r)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,i=this.parsedData.length;e<i;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var i=new t(e);this.dataList.push(i),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,i){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,i),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,i)},setupPositionProbePattern:function(t,e){for(var i=-1;i<=7;i++)if(!(t+i<=-1||this.moduleCount<=t+i))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+i][e+n]=0<=i&&i<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==i||6==i)||2<=i&&i<=4&&2<=n&&n<=4)},getBestMaskPattern:function(){for(var t=0,e=0,i=0;i<8;i++){this.makeImpl(!0,i);var n=s.getLostPoint(this);(0==i||t>n)&&(t=n,e=i)}return e},createMovieClip:function(t,e,i){var n=t.createEmptyMovieClip(e,i),r=1;this.make();for(var a=0;a<this.modules.length;a++)for(var s=a*r,o=0;o<this.modules[a].length;o++){var l=o*r,u=this.modules[a][o];u&&(n.beginFill(0,100),n.moveTo(l,s),n.lineTo(l+r,s),n.lineTo(l+r,s+r),n.lineTo(l,s+r),n.endFill())}return n},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=s.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var i=0;i<t.length;i++){var n=t[e],r=t[i];if(null==this.modules[n][r])for(var a=-2;a<=2;a++)for(var o=-2;o<=2;o++)this.modules[n+a][r+o]=-2==a||2==a||-2==o||2==o||0==a&&0==o}},setupTypeNumber:function(t){for(var e=s.getBCHTypeNumber(this.typeNumber),i=0;i<18;i++){var n=!t&&1==(e>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=n}for(i=0;i<18;i++){n=!t&&1==(e>>i&1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=n}},setupTypeInfo:function(t,e){for(var i=this.errorCorrectLevel<<3|e,n=s.getBCHTypeInfo(i),r=0;r<15;r++){var a=!t&&1==(n>>r&1);r<6?this.modules[r][8]=a:r<8?this.modules[r+1][8]=a:this.modules[this.moduleCount-15+r][8]=a}for(r=0;r<15;r++){a=!t&&1==(n>>r&1);r<8?this.modules[8][this.moduleCount-r-1]=a:r<9?this.modules[8][15-r-1+1]=a:this.modules[8][15-r-1]=a}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var i=-1,n=this.moduleCount-1,r=7,a=0,o=this.moduleCount-1;o>0;o-=2){6==o&&o--;while(1){for(var l=0;l<2;l++)if(null==this.modules[n][o-l]){var u=!1;a<t.length&&(u=1==(t[a]>>>r&1));var h=s.getMask(e,n,o-l);h&&(u=!u),this.modules[n][o-l]=u,r--,-1==r&&(a++,r=7)}if(n+=i,n<0||this.moduleCount<=n){n-=i,i=-i;break}}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,i,n){for(var r=h.getRSBlocks(t,i),a=new p,o=0;o<n.length;o++){var l=n[o];a.put(l.mode,4),a.put(l.getLength(),s.getLengthInBits(l.mode,t)),l.write(a)}var u=0;for(o=0;o<r.length;o++)u+=r[o].dataCount;if(a.getLengthInBits()>8*u)throw new Error("code length overflow. ("+a.getLengthInBits()+">"+8*u+")");a.getLengthInBits()+4<=8*u&&a.put(0,4);while(a.getLengthInBits()%8!=0)a.putBit(!1);while(1){if(a.getLengthInBits()>=8*u)break;if(a.put(e.PAD0,8),a.getLengthInBits()>=8*u)break;a.put(e.PAD1,8)}return e.createBytes(a,r)},e.createBytes=function(t,e){for(var i=0,n=0,r=0,a=new Array(e.length),o=new Array(e.length),l=0;l<e.length;l++){var h=e[l].dataCount,p=e[l].totalCount-h;n=Math.max(n,h),r=Math.max(r,p),a[l]=new Array(h);for(var _=0;_<a[l].length;_++)a[l][_]=255&t.buffer[_+i];i+=h;var c=s.getErrorCorrectPolynomial(p),d=new u(a[l],c.getLength()-1),g=d.mod(c);o[l]=new Array(c.getLength()-1);for(_=0;_<o[l].length;_++){var f=_+g.getLength()-o[l].length;o[l][_]=f>=0?g.get(f):0}}var m=0;for(_=0;_<e.length;_++)m+=e[_].totalCount;var y=new Array(m),w=0;for(_=0;_<n;_++)for(l=0;l<e.length;l++)_<a[l].length&&(y[w++]=a[l][_]);for(_=0;_<r;_++)for(l=0;l<e.length;l++)_<o[l].length&&(y[w++]=o[l][_]);return y};for(var i={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},r={L:1,M:0,Q:3,H:2},a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(s.getBCHDigit(e)-s.getBCHDigit(s.G15)>=0)e^=s.G15<<s.getBCHDigit(e)-s.getBCHDigit(s.G15);return(t<<10|e)^s.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(s.getBCHDigit(e)-s.getBCHDigit(s.G18)>=0)e^=s.G18<<s.getBCHDigit(e)-s.getBCHDigit(s.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return s.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,i){switch(t){case a.PATTERN000:return(e+i)%2==0;case a.PATTERN001:return e%2==0;case a.PATTERN010:return i%3==0;case a.PATTERN011:return(e+i)%3==0;case a.PATTERN100:return(Math.floor(e/2)+Math.floor(i/3))%2==0;case a.PATTERN101:return e*i%2+e*i%3==0;case a.PATTERN110:return(e*i%2+e*i%3)%2==0;case a.PATTERN111:return(e*i%3+(e+i)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new u([1],0),i=0;i<t;i++)e=e.multiply(new u([1,o.gexp(i)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case i.MODE_NUMBER:return 10;case i.MODE_ALPHA_NUM:return 9;case i.MODE_8BIT_BYTE:return 8;case i.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case i.MODE_NUMBER:return 12;case i.MODE_ALPHA_NUM:return 11;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case i.MODE_NUMBER:return 14;case i.MODE_ALPHA_NUM:return 13;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),i=0,n=0;n<e;n++)for(var r=0;r<e;r++){for(var a=0,s=t.isDark(n,r),o=-1;o<=1;o++)if(!(n+o<0||e<=n+o))for(var l=-1;l<=1;l++)r+l<0||e<=r+l||0==o&&0==l||s==t.isDark(n+o,r+l)&&a++;a>5&&(i+=3+a-5)}for(n=0;n<e-1;n++)for(r=0;r<e-1;r++){var u=0;t.isDark(n,r)&&u++,t.isDark(n+1,r)&&u++,t.isDark(n,r+1)&&u++,t.isDark(n+1,r+1)&&u++,0!=u&&4!=u||(i+=3)}for(n=0;n<e;n++)for(r=0;r<e-6;r++)t.isDark(n,r)&&!t.isDark(n,r+1)&&t.isDark(n,r+2)&&t.isDark(n,r+3)&&t.isDark(n,r+4)&&!t.isDark(n,r+5)&&t.isDark(n,r+6)&&(i+=40);for(r=0;r<e;r++)for(n=0;n<e-6;n++)t.isDark(n,r)&&!t.isDark(n+1,r)&&t.isDark(n+2,r)&&t.isDark(n+3,r)&&t.isDark(n+4,r)&&!t.isDark(n+5,r)&&t.isDark(n+6,r)&&(i+=40);var h=0;for(r=0;r<e;r++)for(n=0;n<e;n++)t.isDark(n,r)&&h++;var p=Math.abs(100*h/e/e-50)/5;return i+=10*p,i}},o={glog:function(t){if(t<1)throw new Error("glog("+t+")");return o.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return o.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},l=0;l<8;l++)o.EXP_TABLE[l]=1<<l;for(l=8;l<256;l++)o.EXP_TABLE[l]=o.EXP_TABLE[l-4]^o.EXP_TABLE[l-5]^o.EXP_TABLE[l-6]^o.EXP_TABLE[l-8];for(l=0;l<255;l++)o.LOG_TABLE[o.EXP_TABLE[l]]=l;function u(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var i=0;while(i<t.length&&0==t[i])i++;this.num=new Array(t.length-i+e);for(var n=0;n<t.length-i;n++)this.num[n]=t[n+i]}function h(t,e){this.totalCount=t,this.dataCount=e}function p(){this.buffer=[],this.length=0}u.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),i=0;i<this.getLength();i++)for(var n=0;n<t.getLength();n++)e[i+n]^=o.gexp(o.glog(this.get(i))+o.glog(t.get(n)));return new u(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=o.glog(this.get(0))-o.glog(t.get(0)),i=new Array(this.getLength()),n=0;n<this.getLength();n++)i[n]=this.get(n);for(n=0;n<t.getLength();n++)i[n]^=o.gexp(o.glog(t.get(n))+e);return new u(i,0).mod(t)}},h.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h.getRSBlocks=function(t,e){var i=h.getRsBlockTable(t,e);if(void 0==i)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=i.length/3,r=[],a=0;a<n;a++)for(var s=i[3*a+0],o=i[3*a+1],l=i[3*a+2],u=0;u<s;u++)r.push(new h(o,l));return r},h.getRsBlockTable=function(t,e){switch(e){case r.L:return h.RS_BLOCK_TABLE[4*(t-1)+0];case r.M:return h.RS_BLOCK_TABLE[4*(t-1)+1];case r.Q:return h.RS_BLOCK_TABLE[4*(t-1)+2];case r.H:return h.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},p.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var i=0;i<e;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var _=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function c(){return"undefined"!=typeof CanvasRenderingContext2D}function d(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var i=e.toString().match(/android ([0-9]\.[0-9])/i);i&&i[1]&&(t=parseFloat(i[1]))}return t}var g=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){var e=this._htOption,i=this._el,n=t.getModuleCount();Math.floor(e.width/n),Math.floor(e.height/n);function r(t,e){var i=document.createElementNS("http://www.w3.org/2000/svg",t);for(var n in e)e.hasOwnProperty(n)&&i.setAttribute(n,e[n]);return i}this.clear();var a=r("svg",{viewBox:"0 0 "+String(n)+" "+String(n),width:"100%",height:"100%",fill:e.colorLight});a.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),i.appendChild(a),a.appendChild(r("rect",{fill:e.colorLight,width:"100%",height:"100%"})),a.appendChild(r("rect",{fill:e.colorDark,width:"1",height:"1",id:"template"}));for(var s=0;s<n;s++)for(var o=0;o<n;o++)if(t.isDark(s,o)){var l=r("use",{x:String(o),y:String(s)});l.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),a.appendChild(l)}},t.prototype.clear=function(){while(this._el.hasChildNodes())this._el.removeChild(this._el.lastChild)},t}(),f="svg"===document.documentElement.tagName.toLowerCase(),m=f?g:c()?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}if(this._android&&this._android<=2.1){var e=1/window.devicePixelRatio,i=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,n,r,a,s,o,l,u,h){if("nodeName"in t&&/img/i.test(t.nodeName))for(var p=arguments.length-1;p>=1;p--)arguments[p]=arguments[p]*e;else"undefined"==typeof u&&(arguments[1]*=e,arguments[2]*=e,arguments[3]*=e,arguments[4]*=e);i.apply(this,arguments)}}function n(t,e){var i=this;if(i._fFail=e,i._fSuccess=t,null===i._bSupportDataURI){var n=document.createElement("img"),r=function(){i._bSupportDataURI=!1,i._fFail&&i._fFail.call(i)},a=function(){i._bSupportDataURI=!0,i._fSuccess&&i._fSuccess.call(i)};return n.onabort=r,n.onerror=r,n.onload=a,void(n.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===i._bSupportDataURI&&i._fSuccess?i._fSuccess.call(i):!1===i._bSupportDataURI&&i._fFail&&i._fFail.call(i)}var r=function(t,e){this._bIsPainted=!1,this._android=d(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return r.prototype.draw=function(t){var e=this._elImage,i=this._oContext,n=this._htOption,r=t.getModuleCount(),a=n.width/r,s=n.height/r,o=Math.round(a),l=Math.round(s);e.style.display="none",this.clear();for(var u=0;u<r;u++)for(var h=0;h<r;h++){var p=t.isDark(u,h),_=h*a,c=u*s;i.strokeStyle=p?n.colorDark:n.colorLight,i.lineWidth=1,i.fillStyle=p?n.colorDark:n.colorLight,i.fillRect(_,c,a,s),i.strokeRect(Math.floor(_)+.5,Math.floor(c)+.5,o,l),i.strokeRect(Math.ceil(_)-.5,Math.ceil(c)-.5,o,l)}this._bIsPainted=!0},r.prototype.makeImage=function(){this._bIsPainted&&n.call(this,t)},r.prototype.isPainted=function(){return this._bIsPainted},r.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},r.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},r}():function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,i=this._el,n=t.getModuleCount(),r=Math.floor(e.width/n),a=Math.floor(e.height/n),s=['<table style="border:0;border-collapse:collapse;">'],o=0;o<n;o++){s.push("<tr>");for(var l=0;l<n;l++)s.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+r+"px;height:"+a+"px;background-color:"+(t.isDark(o,l)?e.colorDark:e.colorLight)+';"></td>');s.push("</tr>")}s.push("</table>"),i.innerHTML=s.join("");var u=i.childNodes[0],h=(e.width-u.offsetWidth)/2,p=(e.height-u.offsetHeight)/2;h>0&&p>0&&(u.style.margin=p+"px "+h+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();function y(t,e){for(var i=1,n=w(t),a=0,s=_.length;a<=s;a++){var o=0;switch(e){case r.L:o=_[a][0];break;case r.M:o=_[a][1];break;case r.Q:o=_[a][2];break;case r.H:o=_[a][3];break}if(n<=o)break;i++}if(i>_.length)throw new Error("Too long data");return i}function w(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}return n=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:r.H},"string"===typeof e&&(e={text:e}),e)for(var i in e)this._htOption[i]=e[i];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(m=g),this._android=d(),this._el=t,this._oQRCode=null,this._oDrawing=new m(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},n.prototype.makeCode=function(t){this._oQRCode=new e(y(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},n.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},n.prototype.clear=function(){this._oDrawing.clear()},n.CorrectLevel=r,n}))}}]);