(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f00fa62"],{"0d09":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r}));var i=[{title:"京东E卡",id:1},{title:"课程",id:2}],r=[{label:"E卡库存不足",id:1},{label:"E卡交易无匹配渠道",id:2}]},"2c5b":function(e,t,a){},"333d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},r=[];a("a9e3");Math.easeInOutQuad=function(e,t,a,i){return e/=i/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,a){var i=l(),r=e-i,s=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=s;var l=Math.easeInOutQuad(c,i,r,t);o(l),c<t?n(e):a&&"function"===typeof a&&a()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&s(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},u=c,d=(a("5660"),a("2877")),p=Object(d["a"])(u,i,r,!1,null,"6af373ef",null);t["a"]=p.exports},4381:function(e,t,a){"use strict";a("d3b7"),a("caad"),a("2532");var i=a("4360");function r(e,t){var a=t.value,r=i["a"].getters&&i["a"].getters.roles;if(!(a&&a instanceof Array))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");if(a.length>0){var n=a,o=r.some((function(e){return n.includes(e)}));o||e.parentNode&&e.parentNode.removeChild(e)}}var n={inserted:function(e,t){r(e,t)},update:function(e,t){r(e,t)}},o=function(e){e.directive("permission",n)};window.Vue&&(window["permission"]=n,Vue.use(o)),n.install=o;t["a"]=n},"4bc8":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{width:"700px",title:"设置预警",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.form,"label-position":"left","label-width":"100px"}},e._l(e.formArray,(function(t,i){return a("el-form-item",{key:i,attrs:{label:t.label,prop:t.props}},["input"==t.type?a("el-input",{attrs:{maxlength:"30",placeholder:t.placeholder},model:{value:e.form[t.props],callback:function(a){e.$set(e.form,t.props,a)},expression:"form[item.props]"}}):e._e(),"select"==t.type?a("el-select",{attrs:{placeholder:t.placeholder,clearable:""},model:{value:e.form[t.props],callback:function(a){e.$set(e.form,t.props,a)},expression:"form[item.props]"}},e._l(e.selectOption,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.id}})})),1):e._e()],1)})),1),e._t("tip"),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(" "+e._s(e.$t("table.cancel"))+" ")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.setwarnSubmit()}}},[e._v(" "+e._s(e.$t("table.confirm"))+" ")])],1)],2)],1)},r=[],n={props:{selectOption:{type:Array},title:{type:String,default:"设置预警"},rules:{type:Object,requires:!0},form:{type:Object,requires:!0},formArray:{type:Array,requires:!0}},data:function(){return{dialogFormVisible:!1}},watch:{},activated:function(){},created:function(){},mounted:function(){},methods:{setwarnSubmit:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&e.$emit("setwarnSubmit",e.form)}))}}},o=n,l=(a("5145"),a("2877")),s=Object(l["a"])(o,i,r,!1,null,"eaaef6c6",null);t["a"]=s.exports},5145:function(e,t,a){"use strict";a("2c5b")},5660:function(e,t,a){"use strict";a("7a30")},"5c9a":function(e,t,a){"use strict";a("822d")},6724:function(e,t,a){"use strict";a("8d41");var i="@@wavesContext";function r(e,t){function a(a){var i=Object.assign({},t.value),r=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),n=r.ele;if(n){n.style.position="relative",n.style.overflow="hidden";var o=n.getBoundingClientRect(),l=n.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(o.width,o.height)+"px",n.appendChild(l)),r.type){case"center":l.style.top=o.height/2-l.offsetHeight/2+"px",l.style.left=o.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(a.pageY-o.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(a.pageX-o.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=r.color,l.className="waves-ripple z-active",!1}}return e[i]?e[i].removeHandle=a:e[i]={removeHandle:a},a}var n={bind:function(e,t){e.addEventListener("click",r(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[i].removeHandle,!1),e.addEventListener("click",r(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[i].removeHandle,!1),e[i]=null,delete e[i]}},o=function(e){e.directive("waves",n)};window.Vue&&(window.waves=n,Vue.use(o)),n.install=o;t["a"]=n},"7a30":function(e,t,a){},"822d":function(e,t,a){},"8d41":function(e,t,a){},d011:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("div",{staticClass:"header"},[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["admin","channer-insert"],expression:"['admin','channer-insert']"},{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-refresh-right"},on:{click:e.handleFilter}},[e._v(" 刷新 ")])],1)]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"渠道编号",prop:"code",width:"80",align:"center"}}),a("el-table-column",{attrs:{label:"渠道名称",prop:"name",align:"center"}}),a("el-table-column",{attrs:{label:"渠道简称",prop:"abbreviation",align:"center"}}),a("el-table-column",{attrs:{label:"E卡单批次入库限量",prop:"maxCount",align:"center"}}),a("el-table-column",{attrs:{label:"创建时间",prop:"createTime",align:"center"}}),a("el-table-column",{directives:[{name:"permission",rawName:"v-permission",value:["admin","channer-update"],expression:"['admin','channer-update']"}],attrs:{label:e.$t("table.actions"),align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(i)}}},[e._v(" "+e._s(e.$t("table.edit"))+" ")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.current,limit:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"current",t)},"update:limit":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.getList}}),a("el-dialog",{attrs:{width:"700px",title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.form,"label-position":"left","label-width":"150px"}},[a("el-form-item",{attrs:{label:"渠道名称",prop:"name"}},[a("el-input",{attrs:{maxlength:"30",placeholder:"仅限输入30个字符以内"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"渠道简称",prop:"abbreviation"}},[a("el-input",{attrs:{maxlength:"10",placeholder:"限输入10个字符以内的中文简称"},model:{value:e.form.abbreviation,callback:function(t){e.$set(e.form,"abbreviation",t)},expression:"form.abbreviation"}})],1),a("el-form-item",{attrs:{label:"采购商品",prop:"categoryCodeList"}},[a("el-select",{attrs:{multiple:"",placeholder:"采购商品",clearable:""},model:{value:e.form.categoryCodeList,callback:function(t){e.$set(e.form,"categoryCodeList",t)},expression:"form.categoryCodeList"}},e._l(e.dict.PRODUCT_CATEGORY,(function(e){return a("el-option",{key:e.code,attrs:{label:e.msg,value:e.code}})})),1)],1),e.form.categoryCodeList&&e.form.categoryCodeList.indexOf("COUPON")>-1?a("div",[a("h3",[e._v("京东E卡配置")]),a("el-form-item",{attrs:{label:"京东E卡规格",prop:"ecardSpecs"}},[a("el-input",{attrs:{onkeyup:"value=value.replace(/[^0-9;]/g,'')",placeholder:"仅限数字，多个用英文“；”间隔，请仔细填写"},model:{value:e.form.ecardSpecs,callback:function(t){e.$set(e.form,"ecardSpecs",t)},expression:"form.ecardSpecs"}})],1),a("el-form-item",{attrs:{label:"单批次E卡入库限量",prop:"maxCount"}},[a("el-input",{attrs:{onkeyup:"value=value.replace(/[^0-9.]/g,'')",placeholder:"仅限输入数字"},model:{value:e.form.maxCount,callback:function(t){e.$set(e.form,"maxCount",t)},expression:"form.maxCount"}})],1)],1):e._e()],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(" "+e._s(e.$t("table.cancel"))+" ")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v(" "+e._s(e.$t("table.confirm"))+" ")])],1)],1),a("SetwarnCard",{ref:"setwarn",attrs:{form:e.setWarnForm,"form-array":e.setWarnFormArray,rules:e.setWarnrules},on:{setwarnSubmit:e.setwarnSubmit}},[a("template",{slot:"tip"},[a("span",{staticClass:"tip"},[e._v("注：设置余额预警值后，低于该值将触发邮件预警，请及时关注处理！")])])],2)],1)},r=[],n=(a("e9c4"),a("b775"));function o(e){return Object(n["a"])({url:"/channel/page",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/channel/insert",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/channel/getById/".concat(e),method:"get"})}function c(e){return Object(n["a"])({url:"/channel/update",method:"post",data:e})}var u=a("6724"),d=a("333d"),p=a("4bc8"),m=a("0d09"),f=a("4381"),g={name:"Channelmanagement",components:{Pagination:d["a"],SetwarnCard:p["a"]},directives:{waves:u["a"],permission:f["a"]},dicts:["PRODUCT_CATEGORY"],filters:{statusFilter:function(e){var t={published:"success",draft:"info",deleted:"danger"};return t[e]}},data:function(){return{productTypeData:m["b"],tableKey:0,list:null,total:0,listLoading:!0,listQuery:{current:1,size:10},importanceOptions:[1,2,3],form:{id:void 0,name:void 0,abbreviation:void 0,categoryCodeList:void 0,ecardSpecs:void 0,maxCount:void 0},rules:{name:[{required:!0,message:"仅限输入30个字符以内",trigger:"blur"}],abbreviation:[{required:!0,message:"限输入10个字符以内的中文简称",trigger:"blur"}],categoryCodeList:[{required:!0,message:"请选择采购商品",trigger:"change"}],ecardSpecs:[{required:!0,message:"仅限数字，多个用英文“；”间隔，请仔细填写",trigger:"blur"}],priority:[{required:!0,message:"仅限输入数字",trigger:"blur"}],quota:[{required:!0,message:"仅限输入数字",trigger:"blur"}],maxCount:[{required:!0,message:"仅限输入数字",trigger:"blur"}]},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"新增"},setWarnForm:{},setWarnFormArray:[{type:"input",props:"surplus",placeholder:"仅限输入数字",label:"余额预警"},{type:"input",props:"email",placeholder:'多个用英文";"分隔',label:"预警邮箱"}],setWarnrules:{surplus:[{required:!0,message:"仅限输入数字",trigger:"blur"},{pattern:/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,message:"请输入正确额格式,可保留两位小数"}],email:[{required:!0,message:'多个用英文";"分隔',trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,o(Object.assign({},this.listQuery,{query:{}})).then((function(t){e.list=t.data.records,e.total=t.data.total,e.listLoading=!1}))},handleFilter:function(){this.listQuery.current=1,this.getList()},resetTemp:function(){for(var e in this.form)this.form[e]=""},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(console.log(e.form,"this.form"),t){var a=JSON.parse(JSON.stringify(e.form));l(a).then((function(t){e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})).then((function(){e.getList(),e.dialogFormVisible=!1}))}}))},handleUpdate:function(e){var t=this;s(e.id).then((function(e){for(var a in t.form)t.form[a]=e.data[a];t.dialogStatus="update",t.dialogFormVisible=!0,t.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var a=JSON.parse(JSON.stringify(e.form));c(a).then((function(t){e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})).then((function(){e.getList(),e.dialogFormVisible=!1}))}}))},setWarn:function(e){this.$refs.setwarn.dialogFormVisible=!0},setwarnSubmit:function(e){console.log("预警确定",e)}}},b=g,h=(a("5c9a"),a("2877")),v=Object(h["a"])(b,i,r,!1,null,"9c82f336",null);t["default"]=v.exports}}]);