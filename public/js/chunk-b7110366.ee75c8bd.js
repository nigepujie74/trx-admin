(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7110366"],{"36fa":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-upload",{staticClass:"avatar-uploader",attrs:{name:"logo","list-type":"picture-card","show-upload-list":!1,action:"/upload","before-upload":e.beforeUpload},on:{change:e.handleChange}},[e.imageUrl?i("img",{staticStyle:{width:"100%"},attrs:{src:e.imageUrl,alt:"avatar"}}):i("div",[i("a-icon",{attrs:{type:e.loading?"loading":"plus"}}),i("div",{staticClass:"ant-upload-text"},[e._v(" Upload ")])],1)])},n=[];function c(e,t){var i=new FileReader;i.addEventListener("load",(function(){return t(i.result)})),i.readAsDataURL(e)}var r={props:{imageUrl1:String,type:String},data:function(){return{loading:!1,imageUrl:""}},created:function(){this.imageUrl=this.imageUrl1},watch:{imageUrl1:function(e){this.imageUrl=e}},methods:{handleChange:function(e){var t=this;"uploading"!==e.file.status?"done"===e.file.status&&c(e.file.originFileObj,(function(i){t.$emit("changeImg",e.fileList[e.fileList.length-1].response.data[0],t.type),t.loading=!1})):this.loading=!0},beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||this.$message.error("You can only upload JPG file!");var i=e.size/1024/1024<2;return i||this.$message.error("Image must smaller than 2MB!"),t&&i}}},s=r,o=(i("7316"),i("2877")),d=Object(o["a"])(s,a,n,!1,null,null,null);t["a"]=d.exports},"380d":function(e,t,i){},"498a":function(e,t,i){"use strict";var a=i("23e7"),n=i("58a8").trim,c=i("c8d2");a({target:"String",proto:!0,forced:c("trim")},{trim:function(){return n(this)}})},"53ca":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0");function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}},6062:function(e,t,i){"use strict";var a=i("6d61"),n=i("6566");e.exports=a("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n)},6566:function(e,t,i){"use strict";var a=i("9bf2").f,n=i("7c73"),c=i("e2cc"),r=i("0366"),s=i("19aa"),o=i("2266"),d=i("7dd0"),l=i("2626"),u=i("83ab"),h=i("f183").fastKey,f=i("69f3"),p=f.set,m=f.getterFor;e.exports={getConstructor:function(e,t,i,d){var l=e((function(e,a){s(e,l,t),p(e,{type:t,index:n(null),first:void 0,last:void 0,size:0}),u||(e.size=0),void 0!=a&&o(a,e[d],e,i)})),f=m(t),g=function(e,t,i){var a,n,c=f(e),r=v(e,t);return r?r.value=i:(c.last=r={index:n=h(t,!0),key:t,value:i,previous:a=c.last,next:void 0,removed:!1},c.first||(c.first=r),a&&(a.next=r),u?c.size++:e.size++,"F"!==n&&(c.index[n]=r)),e},v=function(e,t){var i,a=f(e),n=h(t);if("F"!==n)return a.index[n];for(i=a.first;i;i=i.next)if(i.key==t)return i};return c(l.prototype,{clear:function(){var e=this,t=f(e),i=t.index,a=t.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete i[a.index],a=a.next;t.first=t.last=void 0,u?t.size=0:e.size=0},delete:function(e){var t=this,i=f(t),a=v(t,e);if(a){var n=a.next,c=a.previous;delete i.index[a.index],a.removed=!0,c&&(c.next=n),n&&(n.previous=c),i.first==a&&(i.first=n),i.last==a&&(i.last=c),u?i.size--:t.size--}return!!a},forEach:function(e){var t,i=f(this),a=r(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:i.first){a(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!v(this,e)}}),c(l.prototype,i?{get:function(e){var t=v(this,e);return t&&t.value},set:function(e,t){return g(this,0===e?0:e,t)}}:{add:function(e){return g(this,e=0===e?0:e,e)}}),u&&a(l.prototype,"size",{get:function(){return f(this).size}}),l},setStrong:function(e,t,i){var a=t+" Iterator",n=m(t),c=m(a);d(e,t,(function(e,t){p(this,{type:a,target:e,state:n(e),kind:t,last:void 0})}),(function(){var e=c(this),t=e.kind,i=e.last;while(i&&i.removed)i=i.previous;return e.target&&(e.last=i=i?i.next:e.state.first)?"keys"==t?{value:i.key,done:!1}:"values"==t?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),l(t)}}},"661c":function(e,t,i){},"6d61":function(e,t,i){"use strict";var a=i("23e7"),n=i("da84"),c=i("94ca"),r=i("6eeb"),s=i("f183"),o=i("2266"),d=i("19aa"),l=i("861d"),u=i("d039"),h=i("1c7e"),f=i("d44e"),p=i("7156");e.exports=function(e,t,i){var m=-1!==e.indexOf("Map"),g=-1!==e.indexOf("Weak"),v=m?"set":"add",y=n[e],S=y&&y.prototype,b=y,_={},x=function(e){var t=S[e];r(S,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(g&&!l(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return g&&!l(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(g&&!l(e))&&t.call(this,0===e?0:e)}:function(e,i){return t.call(this,0===e?0:e,i),this})};if(c(e,"function"!=typeof y||!(g||S.forEach&&!u((function(){(new y).entries().next()})))))b=i.getConstructor(t,e,m,v),s.REQUIRED=!0;else if(c(e,!0)){var k=new b,w=k[v](g?{}:-0,1)!=k,D=u((function(){k.has(1)})),T=h((function(e){new y(e)})),N=!g&&u((function(){var e=new y,t=5;while(t--)e[v](t,t);return!e.has(-0)}));T||(b=t((function(t,i){d(t,b,e);var a=p(new y,t,b);return void 0!=i&&o(i,a[v],a,m),a})),b.prototype=S,S.constructor=b),(D||N)&&(x("delete"),x("has"),m&&x("get")),(N||w)&&x(v),g&&S.clear&&delete S.clear}return _[e]=b,a({global:!0,forced:b!=y},_),f(b,e),g||i.setStrong(b,e,m),b}},7316:function(e,t,i){"use strict";var a=i("661c"),n=i.n(a);n.a},"7f964":function(e,t,i){"use strict";var a=i("380d"),n=i.n(a);n.a},"89cb":function(e,t,i){"use strict";i.d(t,"j",(function(){return c})),i.d(t,"k",(function(){return r})),i.d(t,"h",(function(){return s})),i.d(t,"l",(function(){return o})),i.d(t,"m",(function(){return d})),i.d(t,"e",(function(){return l})),i.d(t,"b",(function(){return u})),i.d(t,"c",(function(){return h})),i.d(t,"g",(function(){return f})),i.d(t,"f",(function(){return p})),i.d(t,"d",(function(){return m})),i.d(t,"i",(function(){return g})),i.d(t,"a",(function(){return v}));var a=i("b775"),n=a.request;function c(e){return n.post("/game/getGameList",e)}function r(e){return n.post("/type/getTypeList",e)}function s(e){return n.post("/contract/getContractList",e)}function o(e){return n.post("/contract/settlementList",e)}function d(e){return n.post("/contract/updateState",e)}function l(e){return n.post("/game/editGameList",e)}function u(e){return n.post("/type/addType",e)}function h(e){return n.post("/type/addTypeGame",e)}function f(e){return n.post("/type/editTypeGame",e)}function p(e){return n.post("/type/editType",e)}function m(e){return n.post("/type/deleteTypeList",e)}function g(e){return n.post("/game/getDetailModel",e)}function v(e){return n.post("/game/addGameList",e)}},b2f6:function(e,t,i){"use strict";var a=i("d535"),n=i.n(a);n.a},bb2f:function(e,t,i){var a=i("d039");e.exports=!a((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c8d2:function(e,t,i){var a=i("d039"),n=i("5899"),c="​᠎";e.exports=function(e){return a((function(){return!!n[e]()||c[e]()!=c||n[e].name!==e}))}},d535:function(e,t,i){},e106:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{background:"#ECECEC",overflow:"hidden",padding:"20px",width:"1650px"}},[i("a-card",{staticStyle:{width:"450px",height:"800px",float:"left"}},[i("div",{attrs:{slot:"title"},slot:"title"},[i("div",[i("a-button",{on:{click:function(t){return e.handleShow("添加同级")}}},[e._v("添加同级")]),i("a-divider",{attrs:{type:"vertical"}}),i("a-button",{directives:[{name:"show",rawName:"v-show",value:e.addShow,expression:"addShow"}],on:{click:function(t){return e.handleShow("添加下级")}}},[e._v("添加下级")]),i("a-divider",{directives:[{name:"show",rawName:"v-show",value:e.addShow,expression:"addShow"}],attrs:{type:"vertical"}}),i("a-button",{on:{click:function(t){return e.handleShow("修改")}}},[e._v("修改")]),i("a-divider",{attrs:{type:"vertical"}}),i("a-button",{on:{click:e.deleteTree}},[e._v("删除")])],1)]),e.treeData.length?i("a-tree",{staticStyle:{overflow:"auto",height:"400px"},attrs:{"replace-fields":e.replaceFields,"tree-data":e.treeData,defaultExpandAll:!0,selectedKeys:e.selectKeys,showLine:""},on:{"update:selectedKeys":function(t){e.selectKeys=t},"update:selected-keys":function(t){e.selectKeys=t},select:e.treeSelect}}):e._e()],1),i("a-card",{staticStyle:{width:"1150px",height:"800px",float:"left"}}),i("a-modal",{attrs:{title:e.editTitle,visible:e.modalShow,okText:"ok",cancelText:"cancel",width:620},on:{ok:e.handleConfirm,cancel:function(t){e.modalShow=!1}}},[i("a-form-model",{attrs:{"label-col":{span:4},"wrapper-col":{span:16},hideRequiredMark:""}},[i("a-form-model-item",{attrs:{prop:"name",label:"名字"}},[i("a-input",{model:{value:e.addData.name,callback:function(t){e.$set(e.addData,"name",t)},expression:"addData.name"}})],1),e.addShow&&"添加下级"!=e.editTitle?i("a-form-model-item",{attrs:{prop:"logo",label:"图片"}},[i("upload",{attrs:{imageUrl1:e.addData.logo,type:"logo"},on:{changeImg:e.changeImg}})],1):e._e()],1)],1)],1)},n=[],c=(i("4160"),i("c975"),i("a434"),i("b0c0"),i("159b"),i("96cf"),i("1da1")),r=i("ade3"),s=i("36fa"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vue-sku"},[i("a-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[e._v("产品规格设置")])]),i("section",{staticClass:"ovea"},[e.specification.length?i("div",e._l(e.specification,(function(t,a){return i("div",{key:a,staticClass:"spec-line"},[i("div",[e.cacheSpecification[a].status?e._e():i("span",{staticClass:"game-type"},[e._v(e._s(t.game_type))]),e.cacheSpecification[a].status?i("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"输入投注名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveSpec(a)}},model:{value:e.cacheSpecification[a].game_type,callback:function(t){e.$set(e.cacheSpecification[a],"game_type",t)},expression:"cacheSpecification[index].game_type"}},[i("a-icon",{attrs:{slot:"addonAfter",type:"check"},on:{click:function(t){return e.saveSpec(a)}},slot:"addonAfter"})],1):e._e(),e.cacheSpecification[a].status?e._e():i("a-icon",{style:{fontSize:"22px"},attrs:{type:"edit"},on:{click:function(t){return e.updateSpec(a)}}})],1),i("a-table",{attrs:{scroll:{y:300},pagination:!1,columns:e.columns,"data-source":e.specification[a].detail},scopedSlots:e._u([{key:"bet_name",fn:function(t,a,n){return i("div",{},[i("a-input",{on:{change:function(t){return e.onChange(a,"bet_name",t)}},model:{value:t,callback:function(e){t=e},expression:"text"}})],1)}},{key:"min_odds",fn:function(t,a,n){return i("div",{},[i("a-input-number",{attrs:{min:1,max:1e7},on:{change:function(t){return e.onChange(a,"min_odds",t)}},model:{value:t,callback:function(e){t=e},expression:"text"}})],1)}},{key:"max_odds",fn:function(t,a,n){return i("div",{},[i("a-input-number",{attrs:{min:1,max:1e7},on:{change:function(t){return e.onChange(a,"max_odds",t)}},model:{value:t,callback:function(e){t=e},expression:"text"}})],1)}}],null,!0)}),i("div",{staticStyle:{float:"right",margin:"20px"}},[i("a-button",{attrs:{size:"small"},on:{click:function(t){return e.delDetail(a)}}},[e._v("删除列")])],1),i("div",{staticStyle:{float:"right",margin:"20px"}},[i("a-button",{attrs:{size:"small"},on:{click:function(t){return e.addDetail(a)}}},[e._v("新增列")])],1),i("a-icon",{staticClass:"icon a-icon-circle-close spec-deleted",style:{fontSize:"22px"},attrs:{size:"large",type:"close"},on:{click:function(t){return e.delSpec(a)}}}),i("a-divider")],1)})),0):i("div",[i("h1",{staticStyle:{"text-align":"center"}},[e._v("暂无模块,请点击左下角按钮添加项目")])])])]),i("a-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[e._v("规格展示")]),i("a-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){e.specificationStatus=!e.specificationStatus}}},[e._v(e._s(e.specificationStatus?"隐藏":"显示"))])],1),e.specificationStatus?i("section",[i("a-row",e._l(e.specification,(function(t,a){return i("a-col",{key:a,staticClass:"text item bold",attrs:{span:2}},[e._v(e._s(t.game_type))])})),1),e._l(e.countSum(0),(function(t,a){return i("a-row",{key:a},e._l(e.specification.length,(function(t,n){return i("a-col",{key:t,staticClass:"text item",attrs:{span:2}},[e._v(e._s(e.getSpecAttr(n,a)))])})),1)}))],2):e._e()]),i("div",{staticClass:"add-spec"},[i("a-button",{attrs:{type:"primary",disabled:e.specification.length>=10},on:{click:e.addSpec}},[e._v("添加投注项目")])],1),i("a-button",{staticStyle:{float:"right",margin:"10px"},attrs:{size:"large"},on:{click:e.submitSkus}},[e._v("确认生成模块")])],1)},d=[],l=(i("99af"),i("c740"),i("a630"),i("d81d"),i("d3b7"),i("25f0"),i("6062"),i("3ca3"),i("498a"),i("ddb0"),i("53ca"));function u(e,t){for(var i in e){if(e.hasOwnProperty(i)!==t.hasOwnProperty(i))return!1;if(Object(l["a"])(e[i])!==Object(l["a"])(t[i]))return!1}for(var a in t){if(e.hasOwnProperty(a)!==t.hasOwnProperty(a))return!1;if(Object(l["a"])(e[a])!==Object(l["a"])(t[a]))return!1;if(e.hasOwnProperty(a))if(e[a]instanceof Array&&t[a]instanceof Array){if(u(!e[a],t[a]))return!1}else if(e[a]instanceof Object&&t[a]instanceof Object){if(u(!e[a],t[a]))return!1}else if(e[a]!==t[a])return!1}return!0}var h=[{title:"队伍",align:"center",dataIndex:"team",key:"team"},{title:"投注名",align:"center",dataIndex:"bet_name",key:"bet_name",scopedSlots:{customRender:"bet_name"}},{title:"最小倍率",align:"center",dataIndex:"min_odds",key:"min_odds",scopedSlots:{customRender:"min_odds"}},{title:"最大倍率",align:"center",dataIndex:"max_odds",key:"max_odds",scopedSlots:{customRender:"max_odds"}}],f={name:"app",props:{specArray:Array},data:function(){return{columns:h,module:1,specificationStatus:!1,specification:[],childProductArray:[],addValues:[],defaultProductNo:"PRODUCTNO_",isSetListShow:!0,batchValue:"",currentType:"",cacheSpecification:[]}},computed:{stockSpecArr:function(){return this.childProductArray.map((function(e){return e.childProductSpec}))}},created:function(){this.createData()},watch:{specArray:function(e){this.specification=[],this.cacheSpecification=[],this.addValues=[];for(var t=0;t<e.length;t++)this.addSpecInit(),this.specification[t]=e[t],this.addValues[t]=e[t].detail,this.cacheSpecification[t]={status:!1,game_type:e[t].game_type}}},methods:{submitSkus:function(){this.$emit("submit",this.specification)},createData:function(){0==this.specArray.length&&(this.specification=[],this.cacheSpecification=[],this.addValues=[]);for(var e=0;e<this.specArray.length;e++)this.addSpecInit(),this.specification[e]=this.specArray[e],this.addValues[e]=this.specArray[e].detail,this.cacheSpecification[e]={status:!1,game_type:this.specArray[e].game_type}},addSpec:function(){this.specification.length<10&&(this.cacheSpecification.push({status:!0,game_type:""}),this.specification.push({game_type:"",detail:[{team:"红色方",max_odds:"19",min_odds:"1",default_odds:"1",bet_name:"红色方赢"},{team:"蓝色方",max_odds:"19",min_odds:"1",default_odds:"1",bet_name:"红色方赢"}]}))},addSpecInit:function(){this.specification.length<5&&(this.cacheSpecification.push({status:!0,game_type:""}),this.specification.push({game_type:"",detail:[]}))},updateSpec:function(e){this.cacheSpecification[e].status=!0,this.cacheSpecification[e].game_type=this.specification[e].game_type,this.$set(this.cacheSpecification,e,this.cacheSpecification[e])},delDetail:function(e){this.specification[e].detail.length>2?(this.specification[e].detail.pop(),this.specification[e].detail.pop()):this.$message.error("无法删除此列,至少需要两个队！")},addDetail:function(e){this.specification[e].detail.push({team:"红色方",max_odds:"19",min_odds:"1",default_odds:"1",bet_name:"红色方赢"},{team:"蓝色方",max_odds:"19",min_odds:"1",default_odds:"1",bet_name:"红色方赢"})},onChange:function(e,t,i){e[t]="bet_name"==t?i.target.value:i},saveSpec:function(e){this.cacheSpecification[e].game_type.trim()?this.specification[e].game_type===this.cacheSpecification[e].game_type?this.cacheSpecification[e].status=!1:this.verifyRepeat(e)?this.$message.error("名称重复，请注意修改"):(this.specification[e].game_type=this.cacheSpecification[e].game_type,this.cacheSpecification[e].status=!1):this.$message.error("名称不能为空，请注意修改")},delSpec:function(e){this.specification.splice(e,1),this.cacheSpecification.splice(e,1)},verifyRepeat:function(e){var t=this,i=!1;return this.specification.forEach((function(a,n){e!==n&&t.specification[n].game_type===t.cacheSpecification[e].game_type&&(i=!0)})),i},addSpecTag:function(e){this.addValues[e];var t=this.specification[e].detail.concat(arr);t=Array.from(new Set(t)),this.$set(this.specification[e],"detail",t),this.clearAddValues(e),this.handleSpecChange("add"),this.specification[e].game_type=this.cacheSpecification[e].game_type,this.cacheSpecification[e].status=!1},delSpecTag:function(e,t){this.specification[e].detail.splice(t,1),this.handleSpecChange("del")},clearAddValues:function(e){this.$set(this.addValues,e,"")},getSpecAttr:function(e,t){var i,a=this.specification[e].detail;i=this.specification[e+1]&&this.specification[e+1].detail.length?t/this.countSum(e+1):t;var n=Math.floor(i%a.length);return"NaN"!==n.toString()?a[n]:""},countSum:function(e){var t=1;return this.specification.forEach((function(i,a){a>=e&&i.detail.length&&(t*=i.detail.length)})),t},showTd:function(e,t){return!!this.specification[e]&&t%this.countSum(e+1)===0},handleSpecChange:function(e){var t=JSON.parse(JSON.stringify(this.childProductArray));"del"===e&&(this.childProductArray=[]);for(var i=0;i<this.countSum(0);i++)this.changeStock(e,i,t)},changeStock:function(e,t,i){var a={childProductId:0,childProductSpec:this.getChildProductSpec(t),childProductNo:this.defaultProductNo+t,childProductStock:0,childProductPrice:0,childProductCost:0,isUse:!0},n=a.childProductSpec;if("add"===e)-1===this.stockSpecArr.findIndex((function(e){return u(n,e)}))&&this.$set(this.childProductArray,t,a);else if("del"===e){var c="";i.forEach((function(e){if(u(n,e.childProductSpec))return c=e,!1})),this.childProductArray.push(c||a)}},getChildProductSpec:function(e){var t=this,i={};return this.specification.forEach((function(a,n){i[a.game_type]=t.getSpecAttr(n,e)})),i},handleUserChange:function(e,t){if(t){var i=this.makeProductNoNotRepet(e);this.$set(this.childProductArray[e],"childProductNo",i)}else this.$set(this.childProductArray[e],"childProductNo","")},handleNo:function(e){var t,i=this.childProductArray[e].childProductNo;this.childProductArray.forEach((function(a,n){a.childProductNo===i&&n!==e&&(t=!0)})),t&&(this.$message({type:"warning",message:"不允许输入重复的商品编号"}),this.$set(this.childProductArray[e],"childProductNo",this.makeProductNoNotRepet(e)))},makeProductNoNotRepet:function(e){var t,i=e,a=!0;while(a)t=this.defaultProductNo+i,a=this.isProductNoRepet(t),i++;return t},isProductNoRepet:function(e){var t=this.childProductArray.findIndex((function(t){return t.childProductNo===e}));return t>-1},openBatch:function(e){this.currentType=e,this.isSetListShow=!1},setBatch:function(){var e=this;"string"!==typeof this.batchValue?(this.childProductArray.forEach((function(t){t.isUse&&(t[e.currentType]=e.batchValue)})),this.cancelBatch()):this.$message({type:"warning",message:"请输入正确的值"})},cancelBatch:function(){this.batchValue="",this.currentType="",this.isSetListShow=!0}}},p=f,m=(i("b2f6"),i("2877")),g=Object(m["a"])(p,o,d,!1,null,"b4bc4e96",null),v=g.exports,y=i("89cb"),S={data:function(){var e;return e={modalShow:!1,treeData:[],specArray:[],addShow:!0,detail_model:[],replaceFields:{children:"child",title:"title"},editTitle:"",addData:{name:"",logo:""},activeData:{value:"",url:""},selectKeys:["0-0-0"],eventSelectedNode:null,addSameTitle:"newsnewsType",addSubTitle:"game1"},Object(r["a"])(e,"editTitle","editName"),Object(r["a"])(e,"selectNode",null),e},components:{upload:s["a"],addDetailModel:v},watch:{treeData:{handler:function(e,t){},deep:!0}},created:function(){this.getTypeList()},methods:{getTypeList:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(y["k"])();case 2:i=t.sent,200==i.code&&(e.treeData=i.data);case 5:case"end":return t.stop()}}),t)})))()},getDetailModel:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(y["i"])({type_game_id:e});case 3:a=i.sent,200==a.code&&(a.data.length>0?t.specArray=a.data[0].detail_model:t.specArray=[]),i.next=11;break;case 8:i.prev=8,i.t0=i["catch"](0);case 11:case"end":return i.stop()}}),i,null,[[0,8]])})))()},changeImg:function(e,t){this.addData.logo=e,this.selectNode.value=e},treeSelect:function(e,t){var i=this.getTreeDataByKey(this.treeData,e);this.eventSelectedNode=t,this.selectNode=i,this.activeData.value=i,i.child?(this.specArray=[],this.addShow=!0):(this.addShow=!1,this.getDetailModel(i.id))},handleShow:function(e){this.selectNode?(this.editTitle=e,this.addData={name:"",logo:""},"修改"==e&&(this.addData={name:this.selectNode.title,logo:this.selectNode.value}),this.modalShow=!0):this.$message.error("未选择节点")},submitSku:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function i(){var a,n,c,r,s,o,d;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:for(a=e,n=0,c=0;c<a.length;c++)for(r=0;r<a[c].detail.length;r++)a[c].detail[r].modulo=++n+"";return s=t.getTreeParentChildsId(t.treeData,t.selectNode.key),o=t.treeData[s].type_id,i.next=7,Object(y["b"])({type_id:o,detail_model:e});case 7:d=i.sent,200==d.code&&t.$message.success("添加成功");case 10:case"end":return i.stop()}}),i)})))()},deleteTree:function(){if(this.selectNode){var e=this;this.$confirm({content:"确定删除"+this.selectNode.title+"节点",onOk:function(){e.dataDriveDelete()},cancelText:"取消"})}else this.$message.error("未选择节点")},handleConfirm:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var i,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.selectNode){t.next=3;break}return e.$message.error("未选择节点"),t.abrupt("return");case 3:if(t.prev=4,i={},a="",!e.selectNode.child||"添加下级"==e.editTitle){t.next=19;break}if("修改"!=e.editTitle){t.next=14;break}return t.next=11,Object(y["f"])({type_id:e.selectNode.type_id,type_logo:e.addData.logo,type_name:e.addData.name});case 11:i=t.sent,t.next=17;break;case 14:return t.next=16,Object(y["b"])({type_logo:e.addData.logo,type_name:e.addData.name});case 16:i=t.sent;case 17:t.next=31;break;case 19:if(e.selectNode.child?a=e.selectNode.type_id:(n=e.getTreeParentChildsId(e.treeData,e.selectNode.key),a=e.treeData[n].type_id),"修改"!=e.editTitle){t.next=28;break}return a=e.selectNode.id,t.next=25,Object(y["g"])({game_name:e.addData.name,type_game_id:a,is_show:1,stream:100,modulo_list:"",type_name_list:"",detail_model:""});case 25:i=t.sent,t.next=31;break;case 28:return t.next=30,Object(y["c"])({game_name:e.addData.name,type_id:a,is_show:1,stream:100,modulo_list:"",type_name_list:"",detail_model:""});case 30:i=t.sent;case 31:e.getTypeList(),e.modalShow=!1,200==i.code?e.$message.success(i.message):e.$message.error(i.message),t.next=40;break;case 36:t.prev=36,t.t0=t["catch"](4),e.modalShow=!1;case 40:case"end":return t.stop()}}),t,null,[[4,36]])})))()},getTreeDataByKey:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,i=null,a=0,n=e.length;a<n;a++){var c=e[a];if(c.key!==t&&c.child&&c.child.length>0&&(i=this.getTreeDataByKey(c.child,t)),c.key==t&&(i=c),null!=i)break}return i},getTreeParentChilds:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,i=[],a=0,n=e.length;a<n;a++){var c=e[a];if(c.key!==t&&c.child&&c.child.length>0&&(i=this.getTreeParentChilds(c.child,t)),c.key==t&&(i=e),i.length>0)break}return i},getTreeParentChildsId:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,i="",a=0,n=e.length;a<n;a++)for(var c=e[a],r=0;r<c.child.length;r++)c.child[r].key==t&&(i=a);return i},dataDriveAddSame:function(){var e=this.getTreeParentChilds(this.treeData,this.selectKeys[0]);e.forEach((function(e){})),e.push({title:this.addSameTitle,key:(new Date).getTime()})},dataDriveAddSub:function(){var e=this.getTreeDataByKey(this.treeData,this.selectKeys[0]);e.child||this.$set(e,"child",[]),e.child.push({title:this.addSubTitle,key:(new Date).getTime()}),this.$forceUpdate()},dataDriveModify:function(){var e=this.getTreeDataByKey(this.treeData,this.selectKeys[0]);e.title=this.editTitle},dataDriveDelete:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var i,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.getTreeParentChilds(e.treeData,e.selectKeys[0]),a=e.getTreeDataByKey(e.treeData,e.selectKeys[0]),!a.child||1!=i.length){t.next=5;break}return e.$message.error("不可删除所有节点"),t.abrupt("return");case 5:if(t.prev=6,n=null,!e.selectNode.child){t.next=14;break}return t.next=11,Object(y["d"])({type_id:e.selectNode.type_id});case 11:n=t.sent,t.next=17;break;case 14:return t.next=16,Object(y["d"])({type_game_id:e.selectNode.id});case 16:n=t.sent;case 17:e.getTypeList(),200==n.code?e.$message.success(n.message):e.$message.error(n.message),e.selectKeys=[],t.next=26;break;case 22:t.prev=22,t.t0=t["catch"](6),e.$message.error("网络繁忙");case 26:case"end":return t.stop()}}),t,null,[[6,22]])})))()},slotAddSame:function(e){this.$warn({content:"采用插槽方式,找不到父级对象,添加失败!请通过添加下级添加"})},slotAddSub:function(e){e.child||this.$set(e,"child",[]),e.child.push({title:this.addSubTitle,key:(new Date).getTime(),scopedSlots:{title:"title"},child:[]})},slotModify:function(e){e.title=this.editTitle,e.dataRef.title=e.title},slotDelete:function(e){this.$warn({content:"采用插槽方式,找不到父级对象,删除失败!请通过添加下级添加"}),delete e.dataRef},onEventTreeNodeSelected:function(e,t){t.selected?this.eventSelectedNode=t.node:this.eventSelectedNode=null},eventAddSame:function(){var e=this.eventSelectedNode.$parent.dataRef;e.child||this.$set(e,"child",[]),e.child.push({title:this.addSameTitle,key:(new Date).getTime()})},eventAddSub:function(){var e=this.eventSelectedNode.dataRef;e.child||this.$set(e,"child",[]),e.child.push({title:this.addSubTitle,key:(new Date).getTime(),scopedSlots:{title:"title"},child:[]})},eventModify:function(){var e=this.eventSelectedNode.dataRef;e.title=this.editTitle},eventDelete:function(){var e=this.eventSelectedNode.$parent.dataRef,t=e.child,i=this.eventSelectedNode.dataRef,a=t.indexOf(i);t.splice(a,1)}}},b=S,_=(i("7f964"),Object(m["a"])(b,a,n,!1,null,"790c00e2",null));t["default"]=_.exports},f183:function(e,t,i){var a=i("d012"),n=i("861d"),c=i("5135"),r=i("9bf2").f,s=i("90e3"),o=i("bb2f"),d=s("meta"),l=0,u=Object.isExtensible||function(){return!0},h=function(e){r(e,d,{value:{objectID:"O"+ ++l,weakData:{}}})},f=function(e,t){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!c(e,d)){if(!u(e))return"F";if(!t)return"E";h(e)}return e[d].objectID},p=function(e,t){if(!c(e,d)){if(!u(e))return!0;if(!t)return!1;h(e)}return e[d].weakData},m=function(e){return o&&g.REQUIRED&&u(e)&&!c(e,d)&&h(e),e},g=e.exports={REQUIRED:!1,fastKey:f,getWeakData:p,onFreeze:m};a[d]=!0}}]);