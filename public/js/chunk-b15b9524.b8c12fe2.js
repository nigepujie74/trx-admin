(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b15b9524"],{4143:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"roleManage-wrapper"},[n("a-card",{attrs:{hoverable:!0,bordered:!1}},[n("div",{staticClass:"flex flex-wrap",attrs:{slot:"title"},slot:"title"}),n("standard-table",{attrs:{tableData:e.tableData.record,tableHead:e.tableHead,loading:e.loading,pagination:!1},scopedSlots:e._u([{key:"index",fn:function(t){var r=t.index;return n("div",{},[e._v(" "+e._s(r+1)+" ")])}},{key:"action",fn:function(t){var r=t.text;return n("div",{},[n("a-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleEdit(r)}}},[e._v(" 编辑 ")]),n("a-popconfirm",{attrs:{title:"你确定要删除当前列吗?","ok-text":"是","cancel-text":"否",disabled:r.role&&"admin"==r.role},on:{confirm:function(t){return e.handleDelete(r)}}},[n("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"danger",size:"small",disabled:r.role&&"admin"==r.role}},[e._v(" 删除 ")])],1)],1)}}])})],1),e.dialogVisible?n("role-model",{attrs:{currentRow:e.currentRow,dialogVisible:e.dialogVisible,tableData:e.tableData.record},on:{ok:e.handleOk,cancel:function(t){e.dialogVisible=!1}}}):e._e()],1)},o=[],a=n("5530"),l=(n("53ca"),n("a567")),i=n("b775"),c=i.request;i.request2;function s(e){return c.post("/roleManage/roleTableData",e)}function u(e){return c.post("/roleManage/deleteRole",e)}function d(e){return c.post("/roleManage/editRole",e)}function f(e){return c.post("/roleManage/addRole",e)}function h(e){return c.post("/roleManage/getRoleRoute",e)}var m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{title:e.currentRow?"编辑":"新增",visible:e.dialogVisible,okText:"确认",cancelText:"取消",width:620,confirmLoading:e.loading},on:{ok:e.handleSure,cancel:function(){e.$emit("cancel")}}},[n("a-form-model",{ref:"roleFrom",attrs:{model:e.roleFrom,rules:e.roleRule,"label-col":{span:4},"wrapper-col":{span:16},hideRequiredMark:""}},[n("a-form-model-item",{directives:[{name:"show",rawName:"v-show",value:e.currentRow,expression:"currentRow"}],attrs:{prop:"id",label:"id"}},[n("a-input",{attrs:{disabled:""},model:{value:e.roleFrom.id,callback:function(t){e.$set(e.roleFrom,"id",t)},expression:"roleFrom.id"}})],1),n("a-form-model-item",{attrs:{prop:"role",label:"角色名称"}},[n("a-input",{model:{value:e.roleFrom.role,callback:function(t){e.$set(e.roleFrom,"role",t)},expression:"roleFrom.role"}})],1),n("a-form-model-item",{attrs:{prop:"text",label:"描述"}},[n("a-textarea",{attrs:{placeholder:"描述...",autoSize:{minRows:3,maxRows:5}},model:{value:e.roleFrom.text,callback:function(t){e.$set(e.roleFrom,"text",t)},expression:"roleFrom.text"}})],1),e._v(" "+e._s(e.roleFrom.menu)+" ")],1)],1)},p=[],b=(n("c975"),n("d81d"),n("498a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-tree",{attrs:{checkable:"","tree-data":e.treeData,checkedKeys:e.checkKeyList},on:{check:e.handleSelect}})}),g=[],R=(n("99af"),n("4de4"),n("4160"),n("159b"),n("5880")),y=n("a18c"),v={name:"standardTree",model:{prop:"checkKeyList",event:"change-checkKeyList"},props:{role:String,checkKeyList:{type:Array,default:[]}},data:function(){return{treeData:[]}},computed:Object(a["a"])(Object(a["a"])({},Object(R["mapGetters"])(["baseRoute"])),{},{asyncRoutes:function(){return y["a"]}}),created:function(){var e=this.filtrRoute(this.asyncRoutes);this.treeData=this.generateRoutes(e),this.gerRoleRoute()},methods:{gerRoleRoute:function(){var e=this;this.role&&h(this.role).then((function(t){var n=t.data||[];e.checkKeyList=n}))},filtrRoute:function(e){return 0==e.length?[]:e.filter((function(e){return e.children}))[0].children},generateRoutes:function(e){var t=this,n=[];return e.forEach((function(e){var r={key:e.path,title:e.meta.title};e.children&&(r.children=t.generateRoutes(e.children)),n.push(r)})),n},getSelectRoute:function(e){var t=this,n=[];return e.forEach((function(e){e.children?n=n.concat(t.getSelectRoute(e.children)):n.push(e.path)})),n},handleSelect:function(e){this.checkKeyList=e,this.$emit("change-checkKeyList",this.checkKeyList)}},watch:{role:function(e,t){this.gerRoleRoute()}}},w=v,x=n("2877"),k=Object(x["a"])(w,b,g,!1,null,"7d36206c",null),S=k.exports,_={name:"roleModel",props:{currentRow:[Object,null],dialogVisible:Boolean,tableData:Array},components:{standardTree:S},data:function(){var e=this,t=function(t,n,r){e.currentRow&&r(),0===n.trim().length?r(new Error("角色名称不能为空！")):-1!=e.roleList.indexOf(n)?r(new Error("已存在相同角色名称！")):r()};return{roleRule:{role:[{required:!0,trigger:"blur",validator:t}],text:[{required:!0,trigger:"blur",min:5,message:"请至少输入五个字符描述！"}]},roleFrom:{role:"",menu:[]},loading:!1}},computed:{roleList:function(){return this.tableData.map((function(e){return e.role}))}},mounted:function(){this.roleFrom=Object(a["a"])({},this.currentRow)||{role:""}},methods:{handleSure:function(){var e=this;this.$refs.roleFrom.validate((function(t){e.loading=!0,t?e.currentRow?d(e.roleFrom).then((function(){e.$message.success("修改成功!"),e.loading=!1,e.$emit("ok")})):f(e.roleFrom).then((function(){e.$message.success("添加成功!"),e.loading=!1,e.$emit("ok")})):e.loading=!1}))}}},F=_,O=Object(x["a"])(F,m,p,!1,null,null,null),$=O.exports,D=[{title:"序号",dataIndex:"index",scopedSlots:{customRender:"index"},width:60},{title:"id",dataIndex:"id",ellipsis:!0},{title:"权限",dataIndex:"role",ellipsis:!0},{title:"描述",dataIndex:"text",ellipsis:!0},{title:"操作",scopedSlots:{customRender:"action"},width:140}],j={name:"roleManage",components:{standardTable:l["a"],roleModel:$},data:function(){return{loading:!1,tableData:[],currentRow:null,dialogVisible:!1,tableHead:D}},created:function(){this.getRoleTable()},methods:{handleAdd:function(){this.currentRow=null,this.dialogVisible=!0},getRoleTable:function(){var e=this;s().then((function(t){e.tableData=t.data||[]}))},handleEdit:function(e){this.currentRow=Object(a["a"])({},e),this.dialogVisible=!0},handleOk:function(){this.dialogVisible=!1,this.currentRow=null,this.getRoleTable()},handleDelete:function(e){var t=this;u({id:e.id}).then((function(){t.$message.success("删除成功!"),t.getRoleTable()}))}}},T=j,L=Object(x["a"])(T,r,o,!1,null,"0132645a",null);t["default"]=L.exports},"498a":function(e,t,n){"use strict";var r=n("23e7"),o=n("58a8").trim,a=n("c8d2");r({target:"String",proto:!0,forced:a("trim")},{trim:function(){return o(this)}})},"53ca":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}},a567:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tableCommon-wrapper"},[n("a-table",{attrs:{columns:e.tableHead,dataSource:e.tableData,loading:e.loading,pagination:e.pagination,"row-selection":e.rowSelection,rowKey:"id",scroll:e.scroll},on:{change:e.handleTableChange},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots).filter((function(e){return"expandedRowRender"!==e})),(function(t){return{key:t,fn:function(n,r,o){return[e._t(t,null,null,{text:n,record:r,index:o})]}}}))],null,!0)})],1)},o=[],a={name:"standardTable",props:{tableHead:{type:Array,required:!0},tableData:{type:Array,required:!0},loading:{type:Boolean,default:!1},pagination:{type:Boolean|Object},rowSelection:{type:Object},scroll:{type:Object}},data:function(){return{}},methods:{handleTableChange:function(e){this.$emit("changeCurrent",e.current)}}},l=a,i=n("2877"),c=Object(i["a"])(l,r,o,!1,null,"efa95cdc",null);t["a"]=c.exports},c8d2:function(e,t,n){var r=n("d039"),o=n("5899"),a="​᠎";e.exports=function(e){return r((function(){return!!o[e]()||a[e]()!=a||o[e].name!==e}))}}}]);