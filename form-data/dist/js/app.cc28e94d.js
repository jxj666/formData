(function(e){function t(t){for(var r,n,i=t[0],s=t[1],c=t[2],p=0,u=[];p<i.length;p++)n=i[p],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&u.push(l[n][0]),l[n]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);m&&m(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var s=a[i];0!==l[s]&&(r=!1)}r&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},l={app:0},o=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/formData/form-data/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var m=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),l=a("5c96"),o=a.n(l),n=(a("0fae"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Formdata",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)}),i=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticStyle:{"max-width":"100vw","min-height":"100vh"}},[a("el-header",{staticStyle:{height:"5vw","line-height":"5vw",background:"#1f2d3d"}},[a("h1",{staticStyle:{"font-size":"2vw",color:"rgb(183, 195, 210)"}},[e._v("formData辅助模板系统")])]),a("el-container",[a("div",{staticStyle:{width:"100%"}},[a("el-tabs",{staticStyle:{padding:"1vw"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"静态模板",name:"jtmb"}},[e._v("静态模板")]),a("el-tab-pane",{attrs:{label:"HfqDataEle模板",name:"elemb"}},[e._v("HfqDataEle模板")]),a("el-tab-pane",{attrs:{label:"HfqDataFrom模板",name:"arrmb"}},[e._v("HfqDataEle连写模板")])],1),"jtmb"==e.activeName?a("el-container",[a("el-header",{staticStyle:{"min-height":"5vw",height:"auto"}},[a("DataSelect",{attrs:{dataArr:e.dataArr},on:{textareaChange:e.textareaChange}})],1),a("el-main",[a("DataArea",{attrs:{textarea:e.textarea}})],1)],1):"elemb"==e.activeName?a("el-container",[a("DataEle",{attrs:{type:"elemb"}})],1):"arrmb"==e.activeName?a("el-container",[a("DataEle",{attrs:{type:"arrmb"}})],1):e._e()],1)])],1)},c=[],m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"100%","min-height":"50vh"}},[a("div",[a("el-input",{attrs:{type:"textarea",autosize:{minRows:9,maxRows:99},placeholder:"请输入内容"},model:{value:e.str,callback:function(t){e.str=t},expression:"str"}})],1),a("div",{staticStyle:{padding:"1vw"}},[a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:function(){return e.str},expression:"()=>str"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccessHandler,expression:"clipboardSuccessHandler",arg:"success"}],attrs:{type:"success"}},[e._v("复制")]),a("el-button",{attrs:{type:"primary"},on:{click:e.dialogShow}},[e._v("录入")])],1),a("DataForm",{attrs:{showDialog:e.showDialog}})],1)},p=[],u=(a("0d03"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",[a("el-form",{attrs:{"label-position":"top"}},[a("el-form-item",{attrs:{label:"模板类型"}},[a("el-radio-group",{attrs:{size:"small"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-radio-button",{attrs:{label:"ym"}},[e._v("页面")]),a("el-radio-button",{attrs:{label:"bd"}},[e._v("表单")]),a("el-radio-button",{attrs:{label:"ajax"}},[e._v("ajax")]),a("el-radio-button",{attrs:{label:"js"}},[e._v("JavaScript")])],1)],1),a("el-form-item",{attrs:{label:"模板"}},[a("el-input",{attrs:{type:"input",rows:5,placeholder:"请输入内容"},model:{value:e.form.model,callback:function(t){e.$set(e.form,"model",t)},expression:"form.model"}})],1),a("el-form-item",{attrs:{label:"代码"}},[a("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:e.form.textarea,callback:function(t){e.$set(e.form,"textarea",t)},expression:"form.textarea"}})],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("关闭")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveModel}},[e._v("确 定")])],1)])}),d=[],f={props:["showDialog"],data:function(){return{form:{},dialogVisible:!1}},created:function(){this.initForm()},methods:{initForm:function(){this.form={type:"",model:"",textarea:""}},saveModel:function(){var e=this.form.textarea;this.form.textarea=encodeURI(e);var t=JSON.stringify(this.form);console.log(t)}},watch:{showDialog:function(e){e&&this.initForm(),this.dialogVisible=!!e}}},b=f,v=a("2877"),h=Object(v["a"])(b,u,d,!1,null,null,null),y=h.exports,x={name:"DataArea",props:{textarea:String},components:{DataForm:y},data:function(){return{showDialog:0,str:""}},methods:{dialogShow:function(){this.showDialog=+new Date},clipboardSuccessHandler:function(e){var t=e.value;console.log("复制",t);var a=this.$createElement;this.$notify({title:"成功",message:a("i",{style:"color: green"},"复制成功!")})}},watch:{textarea:function(e){this.str=decodeURI(e||"")}}},A=x,g=(a("e06e"),Object(v["a"])(A,m,p,!1,null,"2fafa86a",null)),_=g.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dataSelect",staticStyle:{padding:"1vw 1vw 0"}},[a("el-form",{ref:"form",attrs:{"label-width":"80px","label-position":"left"}},[a("el-form-item",{attrs:{label:"模板类型"}},[a("el-radio-group",{attrs:{size:"small"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[a("el-radio-button",{attrs:{label:"ym"}},[e._v("页面")]),a("el-radio-button",{attrs:{label:"bd"}},[e._v("表单")]),a("el-radio-button",{attrs:{label:"ajax"}},[e._v("ajax")]),a("el-radio-button",{attrs:{label:"js"}},[e._v("JavaScript")])],1)],1),a("el-form-item",{attrs:{label:"模板"}},[a("el-radio-group",{attrs:{size:"mini"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}},e._l(e.modelList,(function(t,r){return a("el-radio-button",{key:r,attrs:{label:t.textarea}},[e._v(e._s(t.model))])})),1)],1)],1)],1)},E=[],D=(a("4de4"),[{type:"bd",model:"fd多选框",textarea:"%20%20%20%3Chfq-data-ele%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20:formObj=%22%7Btype:'checkbox',name:'is_hide',arr:%5B%7Blabel:'%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%9A%90%E8%97%8F%E6%A0%87%E9%A2%98',trueLabe:1,falseLabel:0%7D%5D%7D%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20:dataObj=%22formData%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%3C/hfq-data-ele%3E"},{type:"bd",model:"fd输入",textarea:"%3Chfq-data-ele%20:formObj=%22%7Btype:'',name:''%7D%22%20:dataObj=%22%7B%7D%22%3E%3C/hfq-data-ele%3E%0A"},{type:"bd",model:"fd日期时间",textarea:"%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Chfq-data-ele%20:formObj=%22%7Btype:'datetime',name:'effected_at'%7D%22%20:dataObj=%22formData%22%3E%3C/hfq-data-ele%3E%0A"},{type:"bd",model:"fd选择",textarea:"%20%20%20%20%3Chfq-data-ele%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20:formObj=%22%7Btype:'select',name:'style',disabled:dialogInfo.dialogType%20=='add'?null:'disabled',arr:styleList%7D%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20:dataObj=%22formData%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%3C/hfq-data-ele%3E"},{type:"ym",model:"cms页面",textarea:"%3Ctemplate%3E%0A%20%20%3Ctab-page%20ref=%22tabPage%22%3E%0A%20%20%20%20%3Ctemplate%20slot=%22firstTabPage%22%3E%0A%0A%20%20%20%20%3C/template%3E%0A%20%20%3C/tab-page%3E%0A%3C/template%3E%0A%3Cstyle%3E%0A%3C/style%3E%0A%3Cscript%3E%0Aimport%20TabPage%20from%20%22@/components/TabPage%22;%0Aimport%20Common%20from%20%22@/utils/common%22;%0Aexport%20default%20%7B%0A%20%20data()%20%7B%0A%20%20%20%20return%20%7B%7D;%0A%20%20%7D,%0A%20%20components:%20%7B%0A%20%20%20%20TabPage,%0A%20%20%7D,%0A%20%20mounted()%20%7B%0A%20%20%20%20var%20defaultPage%20=%20%7B%0A%20%20%20%20%20%20label:%20%22%22,%0A%20%20%20%20%20%20name:%20%22default%22,%0A%20%20%20%20%20%20slotName:%20%22firstTabPage%22,%0A%20%20%20%20%20%20closable:%20false,%0A%20%20%20%20%7D;%0A%20%20%20%20this.$refs.tabPage.$emit(%22open-tab%22,%20defaultPage);%0A%20%20%7D,%0A%20%20methods:%20%7B%7D,%0A%7D;%0A%3C/script%3E"},{type:"ajax",model:"cmsPost",textarea:"%20%20%20%20%20%20Common.ajax(%7B%0A%20%20%20%20%20%20%20%20url:%20%22%22,%0A%20%20%20%20%20%20%20%20type:%20%22post%22,%0A%20%20%20%20%20%20%20%20restful:%20true,%0A%20%20%20%20%20%20%20%20contentType:%20%22application/json%22,%0A%20%20%20%20%20%20%20%20data:%20%7B%7D,%0A%20%20%20%20%20%20%20%20dataType:%20%22json%22,%0A%20%20%20%20%20%20%20%20success:%20res%20=%3E%20%7B%7D,%0A%20%20%20%20%20%20%20%20error:%20err%20=%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20let%20error%20=%20err.message%20%7C%7C%20err;%0A%20%20%20%20%20%20%20%20%20%20err.message%20&&%0A%20%20%20%20%20%20%20%20%20%20%20%20this.$alert(error,%20%22%22,%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type:%20%22error%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20confirmButtonText:%20%22%E7%9F%A5%E9%81%93%E4%BA%86%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20callback:%20action%20=%3E%20%7B%7D,%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D);%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%7D);"},{type:"ajax",model:"cmsGet",textarea:"%20%20%20%20%20%20Common.ajax(%7B%0A%20%20%20%20%20%20%20%20url:%20%22%22,%0A%20%20%20%20%20%20%20%20type:%20%22get%22,%0A%20%20%20%20%20%20%20%20contentType:%20%22application/json%22,%0A%20%20%20%20%20%20%20%20success:%20res%20=%3E%20%7B%7D,%0A%20%20%20%20%20%20%20%20error:%20err%20=%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20this.$notify.error(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title:%20%22%E9%94%99%E8%AF%AF%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20message:%20%22%E8%8E%B7%E5%8F%96%E5%A4%B1%E8%B4%A5%EF%BC%81%22,%0A%20%20%20%20%20%20%20%20%20%20%7D);%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%7D);"},{type:"ym",model:"apptem",textarea:"%3Ctemplate%3E%3C/template%3E%0A%0A%3Cstyle%20lang=%22scss%22%20scoped%3E%0A@import%20%22src/style/mixin%22;%0A%3C/style%3E%0A%0A%3Cscript%3E%0Aexport%20default%20%7B%0A%20%20props:%20%5B%5D,%0A%20%20components:%20%7B%7D,%0A%20%20data()%20%7B%0A%20%20%20%20return%20%7B%7D;%0A%20%20%7D,%0A%20%20created()%20%7B%7D,%0A%20%20mounted()%20%7B%7D,%0A%20%20methods:%20%7B%7D,%0A%7D;%0A%3C/script%3E"}]),j=D,k={name:"DataSelect",props:{dataArr:Array},data:function(){return{type:"",model:"",textarea:"",modelList:[]}},created:function(){},methods:{},watch:{type:function(e){console.log(e);var t=j.filter((function(t){return t.type==e}));this.textarea="",this.modelList=t||[]},textarea:function(e){this.$emit("textareaChange",e)}}},S=k,C=Object(v["a"])(S,w,E,!1,null,null,null),B=C.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticStyle:{margin:"1vw","min-width":"666px"},attrs:{gutter:10}},[a("el-col",{staticStyle:{background:"#eee",padding:"1vw"},attrs:{span:12}},["elemb"==e.type?a("div",[a("h3",[e._v("条目参数配置区")]),a("div",{staticClass:"h_1"})]):e._e(),"arrmb"==e.type?a("div",[a("h3",[e._v("条目数组配置区")]),a("div",{staticClass:"h_1"})]):e._e(),a("div",[a("el-form",{attrs:{"label-position":"left","label-width":"110px"}},["arrmb"==e.type?a("el-form-item",{attrs:{label:"表单数据对象",required:""}},[a("el-input",{attrs:{size:"small",type:"input",placeholder:"请输入内容"},model:{value:e.dataObj,callback:function(t){e.dataObj=t},expression:"dataObj"}})],1):e._e(),"elemb"==e.type?a("el-form-item",{attrs:{label:"表单数据对象",required:""}},[a("el-input",{attrs:{size:"small",type:"input",placeholder:"请输入内容"},model:{value:e.form.parent,callback:function(t){e.$set(e.form,"parent",t)},expression:"form.parent"}})],1):e._e(),a("el-form-item",{attrs:{label:"变量属性名",required:""}},[a("el-input",{attrs:{size:"small",type:"input",placeholder:"请输入内容"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),"elemb"==e.type?a("el-form-item",{attrs:{label:"表单元素标题"}},[a("el-tooltip",{staticClass:"item",attrs:{content:"决定是否有表单标题(可选)"}},[a("el-input",{attrs:{size:"small",type:"input",placeholder:"请输入内容"},model:{value:e.form.label,callback:function(t){e.$set(e.form,"label",t)},expression:"form.label"}})],1)],1):e._e(),"arrmb"==e.type?a("el-form-item",{attrs:{label:"表单元素标题",required:""}},[a("el-input",{attrs:{size:"small",type:"input",placeholder:"请输入内容"},model:{value:e.form.label,callback:function(t){e.$set(e.form,"label",t)},expression:"form.label"}})],1):e._e(),a("el-form-item",{attrs:{label:"表单提示语句"}},[a("el-input",{attrs:{size:"small",type:"input",placeholder:"请输入内容"},model:{value:e.form.placeholder,callback:function(t){e.$set(e.form,"placeholder",t)},expression:"form.placeholder"}})],1),e.form.label?a("el-form-item",{attrs:{label:"必填符号"}},[a("el-radio-group",{model:{value:e.form.required,callback:function(t){e.$set(e.form,"required",t)},expression:"form.required"}},[a("el-radio-button",{attrs:{label:"false"}},[e._v("否")]),a("el-radio-button",{attrs:{label:"true"}},[e._v("是")])],1)],1):e._e(),a("el-form-item",{attrs:{label:"模板类型",required:""}},[a("el-radio-group",{attrs:{size:"small"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.typeList,(function(t,r){return a("el-radio",{key:r,attrs:{label:t.value}},[e._v(e._s(t.name))])})),1)],1),a("el-form-item",{attrs:{label:"失能条件"}},[a("el-input",{attrs:{size:"small",type:"input",placeholder:"请输入内容"},model:{value:e.form.disabled,callback:function(t){e.$set(e.form,"disabled",t)},expression:"form.disabled"}})],1),a("el-form-item",{attrs:{label:"上一级级联"}},[a("el-input",{attrs:{size:"small",type:"input",placeholder:"请输入内容"},model:{value:e.form.upLevel,callback:function(t){e.$set(e.form,"upLevel",t)},expression:"form.upLevel"}})],1),a("div",["radio"==e.form.type||"checkbox"==e.form.type?a("div",[a("el-form-item",{attrs:{label:"数组名"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"数组结构应为: [{label:'选项名',trueLabe:'选中值',falseLabel:'不选值'}]",placement:"top"}},[a("el-input",{attrs:{size:"small",type:"input",placeholder:"请输入内容"},model:{value:e.form.arr,callback:function(t){e.$set(e.form,"arr",t)},expression:"form.arr"}})],1)],1)],1):e._e(),"select"==e.form.type?a("div",[a("el-form-item",{attrs:{label:"数组名/数组"}},[a("el-tooltip",{staticClass:"item",attrs:{content:"数组结构应为: [{label:'选项名',value:'选项值'}]"}},[a("el-input",{attrs:{size:"small",type:"input",placeholder:"请输入内容"},model:{value:e.form.arr,callback:function(t){e.$set(e.form,"arr",t)},expression:"form.arr"}})],1)],1)],1):e._e()]),a("div",[a("el-button",{attrs:{type:"warning"},on:{click:e.initForm}},[e._v("表单重置")]),"elemb"==e.type?a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:function(){return e.str},expression:"()=>str"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccessHandler,expression:"clipboardSuccessHandler",arg:"success"}],attrs:{type:"success"}},[e._v("复制表单")]):e._e(),"elemb"==e.type?a("el-button",{attrs:{type:"danger"},on:{click:e.clearStorage}},[e._v("清除暂存")]):e._e(),"elemb"==e.type?a("el-button",{attrs:{type:"primary"},on:{click:e.saveStorage}},[e._v("暂存代码")]):e._e(),"arrmb"==e.type?a("el-button",{attrs:{type:"primary"},on:{click:e.saveArr}},[e._v("添加本条")]):e._e(),"arrmb"==e.type?a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:function(){return e.formArrText.text},expression:"()=>formArrText.text"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccessHandler2,expression:"clipboardSuccessHandler2",arg:"success"}],attrs:{type:"success"}},[e._v("复制总表单")]):e._e()],1)],1),a("div")],1)]),a("el-col",{staticStyle:{background:"#eee",padding:"1vw"},attrs:{span:12}},[a("div",[a("h3",[e._v("代码展示区")]),a("div",{staticClass:"h_1"})]),"elemb"==e.type?a("div",[a("el-input",{attrs:{type:"textarea",autosize:{minRows:9,maxRows:99},placeholder:"当前配置代码展示"},model:{value:e.str,callback:function(t){e.str=t},expression:"str"}}),a("div",{staticClass:"h_1"}),a("el-input",{attrs:{type:"textarea",autosize:{minRows:9,maxRows:99},placeholder:"暂存代码区域"},model:{value:e.storage,callback:function(t){e.storage=t},expression:"storage"}})],1):a("div",[a("el-input",{attrs:{type:"textarea",autosize:{minRows:9,maxRows:99},placeholder:"总结构代码"},model:{value:e.formArrText.text,callback:function(t){e.$set(e.formArrText,"text",t)},expression:"formArrText.text"}}),a("div",{staticClass:"h_1"}),a("el-input",{attrs:{type:"textarea",autosize:{minRows:9,maxRows:99},placeholder:"template代码"},model:{value:e.formArrText.code,callback:function(t){e.$set(e.formArrText,"code",t)},expression:"formArrText.code"}})],1),a("div",{staticStyle:{margin:"1vw"}},[a("pre",[e._v('import HfqDataEle from "@/components/common/HfqDataEle";\n        ')])])])],1)},$=[],T=(a("99af"),a("b0c0"),a("ac1f"),a("5319"),{props:["type"],data:function(){return{dataObj:"",formArrText:{pre:"",text:"",code:""},storage:"",form:{},typeList:[]}},created:function(){this.initForm(),this.getTypeList()},computed:{str:function(){var e,t,a=JSON.parse(JSON.stringify(this.form));for(e in a)a[e]&&(t=!0);if(t){var r="<hfq-data-ele \n        :formObj=\"{ \n          type:'".concat(this.form.type,"',\n          name:'").concat(this.form.name,"',\n          ").concat(this.form.placeholder?"placeholder: ".concat(this.form.placeholder,","):"","\n          ").concat(this.form.label?"required: ".concat(this.form.required,","):"","\n          ").concat(this.form.arr?"arr: ".concat(this.form.arr,","):"","\n          ").concat(this.form.upLevel?"upLevel: ".concat(this.form.upLevel,","):"","\n          ").concat(this.form.disabled?"disabled: ".concat(this.form.disabled,","):"","\n          ").concat(this.form.label?"label: '".concat(this.form.label,"',"):"",'\n          }"\n        :dataObj="').concat(this.form.parent,'" \n        ></hfq-data-ele>'),l=r.replace(/[\s\f\n\r]+/gim," ");return l}return""}},methods:{clipboardSuccessHandler2:function(e){var t=e.value;console.log("复制",t);var a=this.$createElement;this.$notify({title:"成功",message:a("i",{style:"color: green"},"复制成功!")})},clipboardSuccessHandler:function(e){var t=e.value;console.log("复制",t);var a=this.$createElement;this.$notify({title:"成功",message:a("i",{style:"color: green"},"复制成功!")})},clearStorage:function(){this.storage=""},saveStorage:function(){this.storage=this.storage+"\n"+this.str},saveArr:function(){var e=JSON.parse(JSON.stringify(this.form)),t="{ \n          label: '".concat(e.label,"',\n          type:'").concat(e.type,"',\n          name:'").concat(e.name,"',\n          placeholder: ").concat(e.placeholder||null,",\n          required: ").concat(e.required||null,",\n          arr: ").concat(e.arr||null,",\n          disabled: ").concat(e.disabled||null,",\n          upLevel: ").concat(e.upLevel||null,",\n          }\n      "),a=t.replace(/[\s\f\n\r]+/gim," ");this.formArrText.pre="".concat(this.formArrText.pre?"".concat(this.formArrText.pre,","):"","\n      ").concat(a),this.formArrText.text="\n      [".concat(this.formArrText.pre,"]\n        "),this.formArrText.code='\n        <HfqDataEle\n          v-for="x,index in '.concat(this.formArrText.text,'"\n          :key="index"\n          :formObj="x"\n          :dataObj="').concat(this.dataObj,'"\n        />\n      ')},getTypeList:function(){this.typeList=[{name:"文字input",value:"input"},{name:"选择框select",value:"select"},{name:"单选框radio",value:"radio"},{name:"多选框checkbox",value:"checkbox"},{name:"数字框inputNumber",value:"inputNumber"},{name:"时间time",value:"time"},{name:"日期date",value:"date"},{name:"日期时间datetime",value:"datetime"},{name:"数字number",value:"number"},{name:"文本textarea",value:"textarea"},{name:"网址url",value:"url"}]},initForm:function(){this.form={arr:"",type:"input",name:"",parent:"",disabled:"",upLevel:"",label:"",required:!1,placeholder:""}},saveModel:function(){var e=this.form.textarea;this.form.textarea=encodeURI(e);var t=JSON.stringify(this.form);console.log(t)}},watch:{showDialog:function(e){e&&this.initForm(),this.dialogVisible=!!e}}}),q=T,L=Object(v["a"])(q,O,$,!1,null,null,null),N=L.exports,z={name:"Formdata",components:{DataArea:_,DataSelect:B,DataEle:N},props:{msg:String,dataArr:j},data:function(){return{showDialog:0,textarea:"",activeName:"jtmb"}},methods:{handleClick:function(e,t){console.log(e,t)},textareaChange:function(e){this.textarea=e}}},F=z,P=Object(v["a"])(F,s,c,!1,null,null,null),H=P.exports,R={name:"app",components:{Formdata:H}},J=R,M=(a("5c0b"),Object(v["a"])(J,n,i,!1,null,null,null)),V=M.exports,I=a("4ae6"),U=a.n(I);r["default"].config.productionTip=!1,r["default"].use(o.a),r["default"].use(U.a),new r["default"]({render:function(e){return e(V)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var r=a("a0de"),l=a.n(r);l.a},a0de:function(e,t,a){},a8c5:function(e,t,a){},e06e:function(e,t,a){"use strict";var r=a("a8c5"),l=a.n(r);l.a}});
//# sourceMappingURL=app.cc28e94d.js.map