(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210fcf"],{b9df:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Table",{attrs:{border:!1,stripe:!0,"show-header":!0,data:e.tableData,loading:e.loading,columns:e.columns,size:"default","highlight-row":!0,editable:""},on:{"on-sort-change":e.handleSortChange}}),a("div",{staticClass:"page"},[a("Page",{attrs:{total:e.total,current:e.searchFormObj.current,"page-size":e.searchFormObj.size,"show-sizer":"","show-total":"","show-elevator":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1),a("Modal",{attrs:{title:""===e.formObj.resId?"新增":"修改",width:"560",scrollable:"",mask:"","mask-closable":!1,closable:!1,"class-name":"vertical-center-modal"},model:{value:e.baseFormModel,callback:function(t){e.baseFormModel=t},expression:"baseFormModel"}},[a("Form",{ref:"baseForm",attrs:{model:e.formObj,"label-width":120,rules:e.ruleValidate}},[a("FormItem",{attrs:{label:"链接",prop:"awardRulesUrl"}},[a("Input",{staticStyle:{width:"320px"},attrs:{placeholder:"请输入奖励规则链接地址"},model:{value:e.formObj.awardRulesUrl,callback:function(t){e.$set(e.formObj,"awardRulesUrl",t)},expression:"formObj.awardRulesUrl"}})],1)],1),e.submiting?a("Spin",{attrs:{size:"large",fix:""}}):e._e(),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:e.closeBaseFormHandle}},[e._v("关闭")]),a("Button",{attrs:{type:"primary"},on:{click:e.submitBaseFormHandle}},[e._v("提交")])],1)],1)],1)},o=[],s=a("66df"),l=function(e){return s["a"].request({url:"awardrules/list",data:e,method:"post"})},n=function(e){return s["a"].request({url:"awardrules/upinsert",data:e,method:"post"})},i=function(e){var t={resId:e};return s["a"].request({url:"awardrules/detail",data:t,method:"post"})},d=function(e){var t={resId:e};return s["a"].request({url:"awardrules/delete",data:t,method:"post"})},c={data:function(){return{searchFormObj:{current:1,size:10,orderField:"",orderType:""},loading:!1,tableData:[],total:0,submiting:!1,formObj:{resId:"",awardRulesUrl:""},baseFormModel:!1}},computed:{columns:function(){var e=this;return[{title:" ",key:"action",width:100,fixed:"right",render:function(t,a){return t("div",[t("Button",{props:{type:"text"},on:{click:function(){e.showEditForm(a)}}},"编辑")])}},{type:"index",width:60,align:"center"},{title:"链接",key:"awardRulesUrl",minWidth:200,tooltip:!0},{title:"版本",key:"version",minWidth:80,tooltip:!0},{title:"创建时间",sortable:"custom",width:210,key:"createAt"},{title:"最后编辑时间",sortable:"custom",width:210,key:"updateAt"}]},ruleValidate:function(){return{awardRulesUrl:[{required:!0,message:"奖励规则链接地址不允许为空",trigger:"blur"}]}}},methods:{load:function(){var e=this;e.loading=!0,l(e.searchFormObj).then(function(t){if(e.loading=!1,200===t.status&&200===t.data.code){var a=t.data.data;e.tableData=a.list,e.total=a.total}}).catch(function(t){e.$Modal.error({title:t.message}),e.tableData=[],e.loading=!1})},handleSearch:function(e){this.load()},changePage:function(e){this.searchFormObj.current=e,this.load()},changePageSize:function(e){this.searchFormObj.size=e,this.load()},handleSortChange:function(e){this.searchFormObj.orderField=e.key,this.searchFormObj.orderType=e.order,this.load()},showCreateForm:function(){this.formObj={resId:"",awardRulesUrl:""},this.baseFormModel=!0},showEditForm:function(e){var t=this;t.loading=!0,i(e.row.resId).then(function(e){t.loading=!1,200===e.status&&200===e.data.code&&(t.formObj=e.data.data,t.baseFormModel=!0)}).catch(function(e){t.loading=!1,t.$Modal.error({title:e.message})})},submitBaseFormHandle:function(){var e=this;e.$refs["baseForm"].validate(function(t){t&&(e.submiting=!0,n(e.formObj).then(function(t){e.submiting=!1,200===t.status&&200===t.data.code?(e.closeBaseFormHandle(),e.load()):e.$Modal.error({title:t.data.message})}).catch(function(t){e.submiting=!1,e.closeBaseFormHandle(),e.$Modal.error({title:t.message})}))})},closeBaseFormHandle:function(){this.$refs["baseForm"].resetFields(),this.baseFormModel=!1},handleDelete:function(e){var t=this,a=this;a.deleting=!0,d(e.row.resId).then(function(e){a.deleting=!1,200===e.status&&200===e.data.code?t.load():a.$Modal.error({title:e.data.message})}).catch(function(e){a.deleting=!1,a.$Modal.error({title:e.message})})}},mounted:function(){this.load()}},u=c,h=a("2877"),m=Object(h["a"])(u,r,o,!1,null,null,null);t["default"]=m.exports}}]);