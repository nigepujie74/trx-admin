(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42b2fa22"],{"40a7":function(e,t,n){"use strict";var a=n("41b2"),r=n.n(a),o={today:"今天",now:"此刻",backToToday:"返回今天",ok:"确定",timeSelect:"选择时间",dateSelect:"选择日期",weekSelect:"选择周",clear:"清除",month:"月",year:"年",previousMonth:"上个月 (翻页上键)",nextMonth:"下个月 (翻页下键)",monthSelect:"选择月份",yearSelect:"选择年份",decadeSelect:"选择年代",yearFormat:"YYYY年",dayFormat:"D日",dateFormat:"YYYY年M月D日",dateTimeFormat:"YYYY年M月D日 HH时mm分ss秒",previousYear:"上一年 (Control键加左方向键)",nextYear:"下一年 (Control键加右方向键)",previousDecade:"上一年代",nextDecade:"下一年代",previousCentury:"上一世纪",nextCentury:"下一世纪"},s={placeholder:"请选择时间"},c=s,i={lang:r()({placeholder:"请选择日期",rangePlaceholder:["开始日期","结束日期"]},o),timePickerLocale:r()({},c)};i.lang.ok="确 定";t["a"]=i},5058:function(e,t,n){},"88e6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-wrapper"},[n("a-card",[n("div",{staticClass:"flex flex-wrap",staticStyle:{display:"none"},attrs:{slot:"title"},slot:"title"},[n("div",{staticClass:"filter-wrapper",staticStyle:{margin:"0 15px"}},[n("span",{staticClass:"label"},[e._v("The type of competition：")]),n("a-tree-select",{staticStyle:{width:"100%"},attrs:{"dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-data":e.treeData,placeholder:"Please select","tree-default-expand-all":""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)]),n("standard-table",{attrs:{tableData:e.tableData,tableHead:e.tableHead,loading:e.loading,pagination:{pageSize:e.filterList.size,current:e.filterList.page,total:e.filterList.total,showTotal:function(t){return e.filterList.total+" 条"}}},on:{changeCurrent:e.handleChangeCurrent},scopedSlots:e._u([{key:"index",fn:function(t){var a=t.index;return n("div",{},[e._v(" "+e._s(a+1)+" ")])}},{key:"is_auto_pass",fn:function(t){var a=t.text,r=t.record;return n("div",{},[n("a-switch",{attrs:{checked:"1"==a,disabled:""},on:{change:function(t){return e.changeStatus(r,"is_auto_pass",t)}}})],1)}},{key:"contract_is_show",fn:function(t){var a=t.text,r=t.record;return n("div",{},[n("a-switch",{attrs:{checked:"1"==a},on:{change:function(t){return e.changeStatus(r,"contract_is_show",t)}}})],1)}},{key:"end_time",fn:function(t){var a=t.text;return n("div",{},[e._v(e._s(e.timestampToTime(a,!0)))])}},{key:"pass_lock",fn:function(t){var a=t.text,r=t.record;return n("div",{},[n("a-switch",{attrs:{checked:"1"==a},on:{change:function(t){return e.changeStatus(r,"pass_lock",t)}}})],1)}},{key:"is_pause",fn:function(t){var a=t.text,r=t.record;return n("div",{},[n("a-switch",{attrs:{checked:a},on:{change:function(t){return e.changePause(r,"is_pause",t)}}})],1)}},{key:"state",fn:function(t){var a=t.text;return n("div",{},[e._v(e._s(e.gameState[a]))])}},{key:"action",fn:function(t){var a=t.text,r=t.record;return n("div",{},[n("a-button",{attrs:{type:"primary",size:"small",disabled:3!=r.state},on:{click:function(t){return e.handleEdit(r,a)}}},[e._v(" 结算 ")]),n("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small",disabled:!(1==r.state)},on:{click:function(t){return e.handleAudit(r,a)}}},[e._v(" 审核 ")])],1)}}])})],1),n("a-modal",{attrs:{title:"edit",visible:e.editShow,okText:"ok",cancelText:"cancel",width:620},on:{ok:e.handleConfirm,cancel:function(t){e.editShow=!1}}},[n("a-form-model",{attrs:{hideRequiredMark:""}},e._l(e.activeList.detail,(function(t,a){return n("div",[n("h3",[e._v(e._s(t.game_type))]),n("a-table",{attrs:{scroll:{y:300},pagination:!1,columns:e.columns,"data-source":t.detail},scopedSlots:e._u([{key:"modulo",fn:function(t,r,o){return n("span",{},[n("a-checkbox",{on:{change:function(n){return e.changeWin(r,t,a,o)}}})],1)}}],null,!0)})],1)})),0)],1),n("a-modal",{attrs:{title:"警告"},on:{ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("h2",[e._v("请确认选择的选项，一旦结算无法更改!")]),e._l(e.confirm,(function(t){return n("h3",{staticStyle:{color:"#f00"}},[e._v(e._s(t))])}))],2),n("a-modal",{attrs:{title:"块选择"},on:{ok:e.handleAudOk},model:{value:e.auditVis,callback:function(t){e.auditVis=t},expression:"auditVis"}},[n("a-range-picker",{attrs:{locale:e.locale,"disabled-date":e.disabledDate,format:"YYYY-MM-DD HH:mm:ss","show-time":{defaultValue:e.moment("00:00:00","HH:mm:ss")},allowClear:!1},on:{change:e.onChangeEditTime}})],1)],1)},r=[],o=(n("a15b"),n("d81d"),n("b0c0"),n("96cf"),n("1da1")),s=n("40a7"),c=n("c1df"),i=n.n(c),l=n("89cb"),u=n("a567"),d=n("ad8f"),g=(n("ed08"),[{title:"投注名",align:"center",dataIndex:"bet_name",key:"bet_name"},{title:"倍率",align:"center",dataIndex:"odds",key:"odds"},{title:"赢家",align:"center",dataIndex:"modulo",key:"modulo",scopedSlots:{customRender:"modulo"}}]),f={name:"game",components:{standardTable:u["a"]},data:function(){return{locale:s["a"],visible:!1,auditVis:!1,count:5,columns:g,value:"newsType",gameState:["可开始","审核中","游戏中","待结算"],currentAccount:"",activeList:{detail:[],game:null},confirm:[],pauseArr:[],treeData:[{title:"newsType",value:"newsType",key:"1",children:[{title:"football",value:"football",key:"2",children:[{title:"football1",value:"football1",key:"3"},{title:"football12",value:"football12",key:"4"}]},{title:"game",value:"game",key:"5",children:[{key:"6",title:"lol",value:"lol"}]}]}],typeOption:[{key:"football",label:"football"},{key:"game",label:"game"}],tableHead:[{title:"标题",align:"center",dataIndex:"title.subtitle",ellipsis:!0},{title:"游戏名",align:"center",dataIndex:"game_name"},{title:"结束时间",align:"center",dataIndex:"end_time",scopedSlots:{customRender:"end_time"}},{title:"自动审批",align:"center",dataIndex:"is_auto_pass",scopedSlots:{customRender:"is_auto_pass"}},{title:"是否显示",align:"center",dataIndex:"contract_is_show",scopedSlots:{customRender:"contract_is_show"}},{title:"是否锁定",align:"center",dataIndex:"pass_lock",scopedSlots:{customRender:"pass_lock"}},{title:"是否暂停",align:"center",dataIndex:"is_pause",scopedSlots:{customRender:"is_pause"}},{title:"审核状态",align:"center",dataIndex:"last_result"},{title:"状态",align:"center",dataIndex:"state",scopedSlots:{customRender:"state"}},{title:"操作",align:"center",scopedSlots:{customRender:"action"},width:140}],tableData:[],loading:!1,selectedRowKeys:[],selectValue:[],currentEdit:{},editShow:!1,filterList:{name:"",status:"",page:1,size:15,total:0},actContract_address:"",deleteLoading:!1,exportLoading:!1,latestBlock:"",addBlock1:"",addBlock2:"",endBlock1:"",endBlock2:""}},mounted:function(){this.getAccounts(),this.getGameList({page:1,size:15})},methods:{moment:i.a,getAccounts:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$tronWeb&&(e.currentAccount=e.$tronWeb.defaultAddress.base58);case 1:case"end":return t.stop()}}),t)})))()},getGameList:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.loading=!0,n.prev=1,n.next=4,Object(l["h"])(e);case 4:a=n.sent,console.log("res",a),t.tableData=a.data.record,t.filterList.total=a.data.total||0,t.loading=!1,n.next=16;break;case 11:n.prev=11,n.t0=n["catch"](1),t.$message.error("系统繁忙"),console.log("e",n.t0),t.loading=!1;case 16:case"end":return n.stop()}}),n,null,[[1,11]])})))()},getContractList:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(l["h"])(e);case 3:a=n.sent,console.log("getContractListres",a),n.next=11;break;case 7:n.prev=7,n.t0=n["catch"](0),t.$message.error("系统繁忙"),console.log("e",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))()},settlementList:function(e,t,n){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("title",n),console.log("contract_address",e),r.prev=2,a.activeList={detail:[],game:null},r.next=6,Object(l["l"])({contract_address:e,game_id:t});case 6:o=r.sent,a.activeList.detail=o.data,a.activeList.game=e,a.activeList.title=n,a.editShow=!0,r.next=17;break;case 13:r.prev=13,r.t0=r["catch"](2),a.$message.error("系统繁忙"),console.log("e",r.t0);case 17:case"end":return r.stop()}}),r,null,[[2,13]])})))()},auditPass:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$tronWeb.contract().at(e);case 3:return a=n.sent,n.next=6,a.pass(t.endBlock1,t.endBlock2).send({from:t.currentAccount,gas:"5000000"});case 6:r=n.sent,r&&(t.$message.success("结算成功"),t.getGameList({page:1,size:15}),t.auditVis=!1),n.next=15;break;case 10:n.prev=10,n.t0=n["catch"](0),t.auditVis=!1,t.$message.error("结算失败"),console.log("e",n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,10]])})))()},getLatestBlock:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$tronWeb.trx.getBlock("latest");case 2:n=e.sent,console.log("temp",n),t.latestBlock=n.block_header.raw_data.number,t.auditVis=!0,console.log("this.latestBlock",t.latestBlock);case 7:case"end":return e.stop()}}),e)})))()},getPause:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$tronWeb.contract().at(e);case 3:return a=n.sent,n.next=6,a.pause().call();case 6:return r=n.sent,t.pauseArr.push({contract_address:e,value:r}),console.log("res1234",r),n.abrupt("return",r);case 12:return n.prev=12,n.t0=n["catch"](0),n.abrupt("return",!1);case 16:case"end":return n.stop()}}),n,null,[[0,12]])})))()},handleAudOk:function(){this.addBlock1?this.latestBlock?(this.endBlock1=this.addBlock1+this.latestBlock,this.endBlock2=this.addBlock2+this.latestBlock,console.log("this.actContract_address",this.actContract_address),this.auditPass(this.actContract_address)):this.$message.error("系统繁忙请稍后重试！"):this.$message.error("请选择日期！")},onChangeEditTime:function(e,t){console.log("timeString",t),console.log("time",e),this.addBlock1=parseInt((i()(t[0]).valueOf()-+new Date)/3e3),this.addBlock2=parseInt((i()(t[1]).valueOf()-+new Date)/3e3)},timestampToTime:function(e,t){var n=new Date(1e3*e),a=n.getFullYear()+"-",r=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",o=(n.getDate()<10?"0"+n.getDate():n.getDate())+" ",s=(n.getHours()<10?"0"+n.getHours():n.getHours())+":",c=(n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes())+":",i=n.getSeconds()<10?"0"+n.getSeconds():n.getSeconds();return t?a+r+o+s+c+i:a+r+o},handleSelect:function(e,t){this.selectedRowKeys=e,this.selectValue=t},createArray:function(e){for(var t=[],n=0;n<e;n++)t[n]=!1;return t},getFromData:function(){},getTableData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.filterList,n.name,n.status,a=n.page,r=n.size,e.loading=!0,t.prev=2,t.next=5,Object(l["h"])({page:a,size:r});case 5:o=t.sent,console.log("res",o.data.record),e.tableData=o.data.record,e.filterList.total=o.data.total||0,e.loading=!1,t.next=17;break;case 12:t.prev=12,t.t0=t["catch"](2),e.$message.error("系统繁忙"),console.log("e",t.t0),e.loading=!1;case 17:case"end":return t.stop()}}),t,null,[[2,12]])})))()},changePause:function(e,t,n){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(console.log("key, dataIndex, value",e,t,n),a.$tronWeb.defaultAddress.base58){r.next=4;break}return a.$message.error({content:"请先登录TronLink",duration:10,closable:!0}),r.abrupt("return");case 4:return r.next=6,a.$tronWeb.contract().at(e.contract_address);case 6:return o=r.sent,r.prev=7,console.log("this.currentAccount",a.currentAccount),console.log("contract",o),r.next=12,o.setPause(n).send({from:a.currentAccount,gas:"8000000"});case 12:s=r.sent,console.log("setPause",s),s&&(e[t]=n,a.$message.success({content:"The "+(n?"lock":"unlock")+" was successful",duration:10,closable:!0})),r.next=20;break;case 17:r.prev=17,r.t0=r["catch"](7),a.$message.error({content:"The lock failed",duration:10,closable:!0});case 20:case"end":return r.stop()}}),r,null,[[7,17]])})))()},changeStatus:function(e,t,n){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("key, dataIndex, value",e,t,n),o={contract_address:e.contract_address},o[t+""]=n?1:0,console.log("obj",o),r.prev=4,r.next=7,Object(l["m"])(o);case 7:s=r.sent,200==s.code&&(a.$message.success(s.message),e[t]=n),r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](4),a.$message.error("系统繁忙"),console.log(r.t0);case 15:case"end":return r.stop()}}),r,null,[[4,11]])})))()},disabledDate:function(e){return e&&e<i()().endOf("day")},changeWin:function(e,t,n,a){1==e["check"]?e["check"]=0:e["check"]=1},handleChangeCurrent:function(e){this.filterList.page=e,this.getTableData()},search:function(){this.filterList.page=1,this.getTableData()},handleEdit:function(e,t){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n.getAccounts(),n.currentAccount=n.$tronWeb.defaultAddress.base58,n.$tronWeb.defaultAddress.base58){a.next=5;break}return n.$message.error("请先登录TronLink"),a.abrupt("return");case 5:console.log("record,text",e,t),n.settlementList(e.contract_address,e.game_id,e.title);case 7:case"end":return a.stop()}}),a)})))()},handleAudit:function(e,t){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n.actContract_address=e.contract_address,console.log("this.$tronWeb.defaultAddress.base58",n.$tronWeb.defaultAddress.base58),a.prev=2,n.currentAccount=n.$tronWeb.defaultAddress.base58,n.$tronWeb.defaultAddress.base58){a.next=7;break}return n.$message.error("请先登录TronLink"),a.abrupt("return");case 7:a.next=15;break;case 9:if(a.prev=9,a.t0=a["catch"](2),n.currentAccount=n.$tronWeb.defaultAddress.base58,n.$tronWeb.defaultAddress.base58){a.next=15;break}return n.$message.error("请先登录TronLink"),a.abrupt("return");case 15:n.getLatestBlock(),console.log("record, text",e,t);case 17:case"end":return a.stop()}}),a,null,[[2,9]])})))()},handleDelete:function(e){var t=this,n=e.id;Object(d["b"])({id:n}).then((function(e){t.getTableData(),t.$message.success("删除成功")}))},batchDeleteTable:function(){var e=this;if(0!=this.selectValue.length){this.deleteLoading=!0;var t=this.selectValue.map((function(e){return e.id})).join(",");Object(d["a"])({batchId:t}).then((function(t){e.getTableData(),e.$message.success("批量删除成功"),e.deleteLoading=!1}))}else this.$message.warning("请至少勾选一项")},handleOk:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r,o,s,c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("this.activeList",e.activeList),t.prev=1,t.next=4,e.$tronWeb.contract().at(e.activeList.game);case 4:return n=t.sent,t.next=7,n.maxModulo().call();case 7:for(a=t.sent,console.log("maxModulo1",a),r=e.createArray(a),console.log("arr1",r),o=e.activeList.detail,s=0;s<o.length;s++)for(console.log("detail[i]",o[s]),c=0;c<o[s].detail.length;c++)1==o[s].detail[c].check&&(r[+o[s].detail[c].modulo-1]=!0);return t.next=15,n.settleRound(r).send({from:e.currentAccount,gas:"5000000"});case 15:i=t.sent,i.status&&(e.$message.error("结算成功"),e.getGameList({page:1,size:15})),e.visible=!1,t.next=25;break;case 20:t.prev=20,t.t0=t["catch"](1),console.log("e",t.t0),e.$message.error("结算失败"),e.visible=!1;case 25:case"end":return t.stop()}}),t,null,[[1,20]])})))()},handleConfirm:function(){var e=this.activeList.detail,t=!0;this.confirm=[];for(var n=0;n<e.length;n++){console.log("detail[i]",e[n]);for(var a=0;a<e[n].detail.length;a++)1==e[n].detail[a].check&&(t=!1,this.confirm.push(e[n].detail[a].bet_name))}t?this.$message.error("必须至少选择一项"):this.visible=!0}}},p=f,h=(n("dfc1"),n("2877")),m=Object(h["a"])(p,a,r,!1,null,"1c2b81f6",null);t["default"]=m.exports},"89cb":function(e,t,n){"use strict";n.d(t,"j",(function(){return o})),n.d(t,"k",(function(){return s})),n.d(t,"h",(function(){return c})),n.d(t,"l",(function(){return i})),n.d(t,"m",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return f})),n.d(t,"f",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"i",(function(){return m})),n.d(t,"a",(function(){return b}));var a=n("b775"),r=a.request;function o(e){return r.post("/game/getGameList",e)}function s(e){return r.post("/type/getTypeList",e)}function c(e){return r.post("/contract/getContractList",e)}function i(e){return r.post("/contract/settlementList",e)}function l(e){return r.post("/contract/updateState",e)}function u(e){return r.post("/game/editGameList",e)}function d(e){return r.post("/type/addType",e)}function g(e){return r.post("/type/addTypeGame",e)}function f(e){return r.post("/type/editTypeGame",e)}function p(e){return r.post("/type/editType",e)}function h(e){return r.post("/type/deleteTypeList",e)}function m(e){return r.post("/game/getDetailModel",e)}function b(e){return r.post("/game/addGameList",e)}},a15b:function(e,t,n){"use strict";var a=n("23e7"),r=n("44ad"),o=n("fc6a"),s=n("a640"),c=[].join,i=r!=Object,l=s("join",",");a({target:"Array",proto:!0,forced:i||!l},{join:function(e){return c.call(o(this),void 0===e?",":e)}})},a567:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tableCommon-wrapper"},[n("a-table",{attrs:{columns:e.tableHead,dataSource:e.tableData,loading:e.loading,pagination:e.pagination,"row-selection":e.rowSelection,rowKey:"id",scroll:e.scroll},on:{change:e.handleTableChange},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots).filter((function(e){return"expandedRowRender"!==e})),(function(t){return{key:t,fn:function(n,a,r){return[e._t(t,null,null,{text:n,record:a,index:r})]}}}))],null,!0)})],1)},r=[],o={name:"standardTable",props:{tableHead:{type:Array,required:!0},tableData:{type:Array,required:!0},loading:{type:Boolean,default:!1},pagination:{type:Boolean|Object},rowSelection:{type:Object},scroll:{type:Object}},data:function(){return{}},methods:{handleTableChange:function(e){this.$emit("changeCurrent",e.current)}}},s=o,c=n("2877"),i=Object(c["a"])(s,a,r,!1,null,"efa95cdc",null);t["a"]=i.exports},ad8f:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var a=n("b775"),r=a.request;function o(e){return r.post("/table/deleteTable",e)}function s(e){return r.post("/table/batchDeleteTable",e)}},dfc1:function(e,t,n){"use strict";var a=n("5058"),r=n.n(a);r.a},ed08:function(e,t,n){"use strict";function a(e,t){var n,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this;return function(){for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];if(a)return e.apply(r,s),void(a=!1);clearTimeout(n),n=setTimeout((function(){e.apply(r,s)}),t)}}n.d(t,"a",(function(){return a}))}}]);