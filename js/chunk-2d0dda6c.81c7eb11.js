(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dda6c"],{"81fc":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Card",{staticClass:"search-con",attrs:{shadow:""}},[r("Form",{ref:"searchFormObj",attrs:{model:e.searchFormObj}},[r("Row",{attrs:{gutter:16}},[r("Col",{staticStyle:{padding:"8px"},attrs:{xs:12,sm:8,md:6,lg:6}},[r("Input",{attrs:{placeholder:"按订单编号查询",clearable:""},model:{value:e.searchFormObj.orderNo,callback:function(t){e.$set(e.searchFormObj,"orderNo",t)},expression:"searchFormObj.orderNo"}})],1),r("Col",{staticStyle:{padding:"8px"},attrs:{xs:12,sm:8,md:6,lg:6}},[r("Input",{attrs:{placeholder:"按产品名称查询",clearable:""},model:{value:e.searchFormObj.productName,callback:function(t){e.$set(e.searchFormObj,"productName",t)},expression:"searchFormObj.productName"}})],1),r("Col",{staticStyle:{padding:"8px"},attrs:{xs:12,sm:8,md:6,lg:6}},[r("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"datetimerange","split-panels":"",placeholder:"按下单时间查询"},model:{value:e.searchFormObj.orderAts,callback:function(t){e.$set(e.searchFormObj,"orderAts",t)},expression:"searchFormObj.orderAts"}})],1),r("Col",{staticStyle:{padding:"8px"},attrs:{xs:12,sm:8,md:6,lg:6}},[r("Select",{attrs:{placeholder:"按订单状态查询",clearable:""},model:{value:e.searchFormObj.orderStatus,callback:function(t){e.$set(e.searchFormObj,"orderStatus",t)},expression:"searchFormObj.orderStatus"}},[r("Option",{attrs:{value:""}},[e._v("全部")]),r("Option",{attrs:{value:"DZF"}},[e._v("待支付")]),r("Option",{attrs:{value:"DFH"}},[e._v("待发货")]),r("Option",{attrs:{value:"DSH"}},[e._v("待收货")]),r("Option",{attrs:{value:"YWC"}},[e._v("已完成")]),r("Option",{attrs:{value:"YQX"}},[e._v("已取消")])],1)],1),r("Col",{staticStyle:{padding:"8px"},attrs:{xs:12,sm:8,md:6,lg:6}},[r("Select",{attrs:{placeholder:"按支付状态查询",clearable:""},model:{value:e.searchFormObj.payStatus,callback:function(t){e.$set(e.searchFormObj,"payStatus",t)},expression:"searchFormObj.payStatus"}},[r("Option",{attrs:{value:""}},[e._v("全部")]),r("Option",{attrs:{value:"Y"}},[e._v("已支付")]),r("Option",{attrs:{value:"N"}},[e._v("未支付")])],1)],1),r("Col",{staticStyle:{padding:"8px"},attrs:{xs:12,sm:8,md:6,lg:6}},[r("Select",{attrs:{placeholder:"按发货状态查询",clearable:""},model:{value:e.searchFormObj.expressStatus,callback:function(t){e.$set(e.searchFormObj,"expressStatus",t)},expression:"searchFormObj.expressStatus"}},[r("Option",{attrs:{value:""}},[e._v("全部")]),r("Option",{attrs:{value:"Y"}},[e._v("已发货")]),r("Option",{attrs:{value:"N"}},[e._v("未发货")])],1)],1),r("Col",{staticStyle:{padding:"8px"},attrs:{xs:12,sm:8,md:6,lg:6}},[r("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:e.handleSearch}},[r("Icon",{attrs:{type:"ios-search-outline"}}),e._v(" 检索")],1)],1)],1)],1)],1),r("Table",{attrs:{border:!1,stripe:!0,"show-header":!0,data:e.tableData,loading:e.loading,columns:e.columns,size:"default","highlight-row":!0,editable:""},on:{"on-sort-change":e.handleSortChange}}),r("div",{staticClass:"page"},[r("Page",{attrs:{total:e.total,current:e.searchFormObj.current,"page-size":e.searchFormObj.size,"show-sizer":"","show-total":"","show-elevator":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1),r("Modal",{attrs:{title:"订单详情",width:"900",scrollable:"",mask:"","mask-closable":!1,closable:!0,"footer-hide":!0,"class-name":"vertical-center-modal"},model:{value:e.detailModel,callback:function(t){e.detailModel=t},expression:"detailModel"}},[r("div",{staticStyle:{width:"100%",height:"420px",overflow:"auto","text-align":"left"}},[r("Form",{attrs:{model:e.orderObj,"label-width":120}},[r("Row",[r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"订单编号"}},[r("Input",{attrs:{readonly:"",placeholder:"订单编号"},model:{value:e.orderObj.orderNo,callback:function(t){e.$set(e.orderObj,"orderNo",t)},expression:"orderObj.orderNo"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"订单状态"}},[r("Input",{attrs:{readonly:"",placeholder:"订单状态"},model:{value:e.orderObj.orderStatus,callback:function(t){e.$set(e.orderObj,"orderStatus",t)},expression:"orderObj.orderStatus"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"购买用户"}},[r("Input",{attrs:{readonly:"",placeholder:"购买用户"},model:{value:e.orderObj.userRealName,callback:function(t){e.$set(e.orderObj,"userRealName",t)},expression:"orderObj.userRealName"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"用户手机号"}},[r("Input",{attrs:{readonly:"",placeholder:"用户手机号"},model:{value:e.orderObj.userPhoneNo,callback:function(t){e.$set(e.orderObj,"userPhoneNo",t)},expression:"orderObj.userPhoneNo"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"产品价格"}},[r("Input",{attrs:{readonly:"",placeholder:"产品价格"},model:{value:e.orderObj.productPrice,callback:function(t){e.$set(e.orderObj,"productPrice",t)},expression:"orderObj.productPrice"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"产品名称"}},[r("Input",{attrs:{readonly:"",placeholder:"产品名称"},model:{value:e.orderObj.productName,callback:function(t){e.$set(e.orderObj,"productName",t)},expression:"orderObj.productName"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"产品数量"}},[r("Input",{attrs:{readonly:"",placeholder:"产品数量"},model:{value:e.orderObj.productNum,callback:function(t){e.$set(e.orderObj,"productNum",t)},expression:"orderObj.productNum"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"支付价格"}},[r("Input",{attrs:{readonly:"",placeholder:"支付价格"},model:{value:e.orderObj.payPrice,callback:function(t){e.$set(e.orderObj,"payPrice",t)},expression:"orderObj.payPrice"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"支付状态"}},[r("Input",{attrs:{readonly:"",placeholder:"支付状态"},model:{value:e.orderObj.payStatus,callback:function(t){e.$set(e.orderObj,"payStatus",t)},expression:"orderObj.payStatus"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"收件人"}},[r("Input",{attrs:{readonly:"",placeholder:"收件人"},model:{value:e.orderObj.recipientName,callback:function(t){e.$set(e.orderObj,"recipientName",t)},expression:"orderObj.recipientName"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"收件人手机号"}},[r("Input",{attrs:{readonly:"",placeholder:"收件人手机号"},model:{value:e.orderObj.recipientPhoneNo,callback:function(t){e.$set(e.orderObj,"recipientPhoneNo",t)},expression:"orderObj.recipientPhoneNo"}})],1)],1),r("Col",{attrs:{span:"24"}},[r("FormItem",{attrs:{label:"收件人地址"}},[r("Input",{attrs:{readonly:"",placeholder:"收件人地址"},model:{value:e.orderObj.recipientAddrDetail,callback:function(t){e.$set(e.orderObj,"recipientAddrDetail",t)},expression:"orderObj.recipientAddrDetail"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"下单时间"}},[r("Input",{attrs:{readonly:"",placeholder:"下单时间"},model:{value:e.orderObj.orderAt,callback:function(t){e.$set(e.orderObj,"orderAt",t)},expression:"orderObj.orderAt"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"支付时间"}},[r("Input",{attrs:{readonly:"",placeholder:"支付时间"},model:{value:e.orderObj.payAt,callback:function(t){e.$set(e.orderObj,"payAt",t)},expression:"orderObj.payAt"}})],1)],1),e.orderObj.paid?r("Col",{attrs:{span:"24"}},[r("Row",[r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"通知结果"}},[r("Input",{attrs:{readonly:"",placeholder:"通知结果"},model:{value:e.orderObj.resultCode,callback:function(t){e.$set(e.orderObj,"resultCode",t)},expression:"orderObj.resultCode"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"用户标识"}},[r("Input",{attrs:{readonly:"",placeholder:"用户标识"},model:{value:e.orderObj.openId,callback:function(t){e.$set(e.orderObj,"openId",t)},expression:"orderObj.openId"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"小程序ID"}},[r("Input",{attrs:{readonly:"",placeholder:"小程序ID"},model:{value:e.orderObj.appId,callback:function(t){e.$set(e.orderObj,"appId",t)},expression:"orderObj.appId"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"商户号"}},[r("Input",{attrs:{readonly:"",placeholder:"商户号"},model:{value:e.orderObj.mchId,callback:function(t){e.$set(e.orderObj,"mchId",t)},expression:"orderObj.mchId"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"交易类型"}},[r("Input",{attrs:{readonly:"",placeholder:"交易类型"},model:{value:e.orderObj.tradeType,callback:function(t){e.$set(e.orderObj,"tradeType",t)},expression:"orderObj.tradeType"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"付款银行"}},[r("Input",{attrs:{readonly:"",placeholder:"付款银行"},model:{value:e.orderObj.bankType,callback:function(t){e.$set(e.orderObj,"bankType",t)},expression:"orderObj.bankType"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"签名"}},[r("Input",{attrs:{readonly:"",placeholder:"签名"},model:{value:e.orderObj.sign,callback:function(t){e.$set(e.orderObj,"sign",t)},expression:"orderObj.sign"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"签名类型"}},[r("Input",{attrs:{readonly:"",placeholder:"签名类型"},model:{value:e.orderObj.signType,callback:function(t){e.$set(e.orderObj,"signType",t)},expression:"orderObj.signType"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"随机字符串"}},[r("Input",{attrs:{readonly:"",placeholder:"随机字符串"},model:{value:e.orderObj.nonceStr,callback:function(t){e.$set(e.orderObj,"nonceStr",t)},expression:"orderObj.nonceStr"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"支付完成时间"}},[r("Input",{attrs:{readonly:"",placeholder:"支付完成时间"},model:{value:e.orderObj.timeEnd,callback:function(t){e.$set(e.orderObj,"timeEnd",t)},expression:"orderObj.timeEnd"}})],1)],1),r("Col",{attrs:{span:"24"}},[r("FormItem",{attrs:{label:"商家数据包"}},[r("Input",{attrs:{readonly:"",placeholder:"商家数据包"},model:{value:e.orderObj.attach,callback:function(t){e.$set(e.orderObj,"attach",t)},expression:"orderObj.attach"}})],1)],1)],1)],1):e._e(),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"记录版本"}},[r("Input",{attrs:{readonly:"",placeholder:"记录版本"},model:{value:e.orderObj.version,callback:function(t){e.$set(e.orderObj,"version",t)},expression:"orderObj.version"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"创建时间"}},[r("Input",{attrs:{readonly:"",placeholder:"创建时间"},model:{value:e.orderObj.createAt,callback:function(t){e.$set(e.orderObj,"createAt",t)},expression:"orderObj.createAt"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"最后修改时间"}},[r("Input",{attrs:{readonly:"",placeholder:"最后修改时间"},model:{value:e.orderObj.updateAt,callback:function(t){e.$set(e.orderObj,"updateAt",t)},expression:"orderObj.updateAt"}})],1)],1)],1)],1)],1)])],1)},o=[],l=(r("cadf"),r("551c"),r("097d"),r("66df")),s=function(e){return l["a"].request({url:"productOrder/list",data:e,method:"post"})},d=function(e){var t={orderId:e};return l["a"].request({url:"productOrder/detail",data:t,method:"post"})},n=function(e){var t={orderId:e};return l["a"].request({url:"productOrder/delete",data:t,method:"post"})},c={data:function(){return{searchFormObj:{current:1,size:10,orderField:"",orderType:"",orderNo:"",productName:"",orderStatus:"",payStatus:"",expressStatus:"",orderAts:[]},loading:!1,tableData:[],total:0,deleting:!1,detailModel:!1,orderLoading:!1,orderObj:{}}},computed:{columns:function(){var e=this;return[{title:" ",key:"action",width:180,fixed:"right",render:function(t,r){return t("div",[t("Button",{props:{type:"text",loading:e.orderLoading},on:{click:function(){e.showDetailModel(r)}}},"详细"),t("Poptip",{props:{transfer:!0,confirm:!0,title:"确认要删除此记录吗？"},on:{"on-ok":function(){e.handleDelete(r)}}},[t("Button",{props:{type:"text",loading:e.deleting}},"删除")])])}},{type:"index",width:60,align:"center"},{title:"订单编号",key:"orderNo",minWidth:200,tooltip:!0},{title:"产品名称",key:"productName",minWidth:200,tooltip:!0},{title:"产品单价",key:"productPrice",minWidth:200,tooltip:!0},{title:"购买数量",key:"productNum",minWidth:200,tooltip:!0},{title:"订单价格",key:"payPrice",minWidth:120,tooltip:!0},{title:"收货人",key:"recipientName",minWidth:120,tooltip:!0},{title:"收货人手机号",key:"recipientPhoneNo",minWidth:120,tooltip:!0},{title:"订单状态",key:"orderStatus",sortable:"custom",minWidth:200,tooltip:!0},{title:"下单时间",key:"orderAt",sortable:"custom",minWidth:200,tooltip:!0},{title:"版本",key:"version",minWidth:80,tooltip:!0},{title:"创建时间",sortable:"custom",width:210,key:"createAt"},{title:"最后编辑时间",sortable:"custom",width:210,key:"updateAt"}]}},methods:{load:function(){var e=this;e.loading=!0,s(e.searchFormObj).then(function(t){if(e.loading=!1,200===t.status&&200===t.data.code){var r=t.data.data;e.tableData=r.list,e.total=r.total}}).catch(function(t){e.$Modal.error({title:t.message}),e.tableData=[],e.loading=!1})},handleSearch:function(e){this.load()},changePage:function(e){this.searchFormObj.current=e,this.load()},changePageSize:function(e){this.searchFormObj.size=e,this.load()},handleSortChange:function(e){this.searchFormObj.orderField=e.key,this.searchFormObj.orderType=e.order,this.load()},showDetailModel:function(e){var t=this;t.detailModel=!1,t.orderLoading=!0,d(e.row.orderId).then(function(e){t.orderLoading=!1,200===e.status&&200===e.data.code?(t.detailModel=!0,t.orderObj=e.data.data):t.$Modal.error({title:e.data.message})}).catch(function(e){t.orderLoading=!1,t.$Modal.error({title:e.message})})},handleDelete:function(e){var t=this,r=this;r.deleting=!0,n(e.row.orderId).then(function(e){r.deleting=!1,200===e.status&&200===e.data.code?t.load():r.$Modal.error({title:e.data.message})}).catch(function(e){r.deleting=!1,r.$Modal.error({title:e.message})})}},mounted:function(){var e=this;e.load()}},i=c,p=r("2877"),u=Object(p["a"])(i,a,o,!1,null,null,null);t["default"]=u.exports}}]);