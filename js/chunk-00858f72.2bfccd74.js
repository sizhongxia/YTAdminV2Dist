(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00858f72"],{"019f":function(e,t,a){},"0d03":function(e,t,a){"use strict";var o=a("019f"),r=a.n(o);r.a},1437:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Card",{staticClass:"search-con",attrs:{shadow:""}},[a("Form",{ref:"searchFormObj",attrs:{model:e.searchFormObj}},[a("Input",{staticClass:"search-input",attrs:{placeholder:"按换油中心名称查询",clearable:""},model:{value:e.searchFormObj.fivesName,callback:function(t){e.$set(e.searchFormObj,"fivesName",t)},expression:"searchFormObj.fivesName"}}),e._v("  \n      "),a("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:e.handleSearch}},[a("Icon",{attrs:{type:"ios-search-outline"}}),e._v(" 检索")],1)],1)],1),a("Button",{staticStyle:{"margin-bottom":"18px"},attrs:{type:"primary",icon:"ios-add-circle-outline"},on:{click:e.showCreateForm}},[e._v("新增")]),a("Table",{attrs:{border:!1,stripe:!0,"show-header":!0,data:e.tableData,loading:e.loading||e.areasLoading,columns:e.columns,size:"default","highlight-row":!0,editable:""},on:{"on-sort-change":e.handleSortChange}}),a("div",{staticClass:"page"},[a("Page",{attrs:{total:e.total,current:e.searchFormObj.current,"page-size":e.searchFormObj.size,"show-sizer":"","show-total":"","show-elevator":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1),a("Modal",{attrs:{title:""===e.formObj.resId?"新增":"修改",width:"960",scrollable:"",mask:"","mask-closable":!1,closable:!1,"class-name":"vertical-center-modal"},model:{value:e.baseFormModel,callback:function(t){e.baseFormModel=t},expression:"baseFormModel"}},[a("div",{staticStyle:{width:"100%",height:"420px",overflow:"auto","text-align":"left"}},[a("Form",{ref:"baseForm",attrs:{model:e.formObj,"label-width":120,rules:e.ruleValidate}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"名称",prop:"fivesName"}},[a("Input",{staticStyle:{width:"320px"},attrs:{placeholder:"请输入换油中心名称"},model:{value:e.formObj.fivesName,callback:function(t){e.$set(e.formObj,"fivesName",t)},expression:"formObj.fivesName"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"客服电话",prop:"customerServiceTel"}},[a("Input",{staticStyle:{width:"320px"},attrs:{placeholder:"请输入换油中心客服电话"},model:{value:e.formObj.customerServiceTel,callback:function(t){e.$set(e.formObj,"customerServiceTel",t)},expression:"formObj.customerServiceTel"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"简述",prop:"fivesResume"}},[a("Input",{staticStyle:{width:"320px"},attrs:{placeholder:"请输入换油中心简述"},model:{value:e.formObj.fivesResume,callback:function(t){e.$set(e.formObj,"fivesResume",t)},expression:"formObj.fivesResume"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"占地面积",prop:"floorSpace"}},[a("Input",{staticStyle:{width:"320px"},attrs:{placeholder:"请输入换油中心室内建筑面积"},model:{value:e.formObj.floorSpace,callback:function(t){e.$set(e.formObj,"floorSpace",t)},expression:"formObj.floorSpace"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"区域",prop:"areas"}},[a("Cascader",{staticStyle:{width:"320px"},attrs:{data:e.areaData,"load-data":e.loadAreaLevelData,trigger:"hover",clearable:""},model:{value:e.formObj.areas,callback:function(t){e.$set(e.formObj,"areas",t)},expression:"formObj.areas"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"详细地址",prop:"addrDetail"}},[a("Input",{staticStyle:{width:"320px"},attrs:{placeholder:"请输入换油中心详细地址"},model:{value:e.formObj.addrDetail,callback:function(t){e.$set(e.formObj,"addrDetail",t)},expression:"formObj.addrDetail"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"经度",prop:"addrLng"}},[a("Input",{staticStyle:{width:"320px"},attrs:{placeholder:"请输入地图经度"},model:{value:e.formObj.addrLng,callback:function(t){e.$set(e.formObj,"addrLng",t)},expression:"formObj.addrLng"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"纬度",prop:"addrLat"}},[a("Input",{staticStyle:{width:"320px"},attrs:{placeholder:"请输入地图纬度"},model:{value:e.formObj.addrLat,callback:function(t){e.$set(e.formObj,"addrLat",t)},expression:"formObj.addrLat"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"负责人",prop:"fivesLeadUserNo"}},[a("Input",{staticStyle:{width:"320px"},attrs:{placeholder:"请输入换油中心负责人编号"},model:{value:e.formObj.fivesLeadUserNo,callback:function(t){e.$set(e.formObj,"fivesLeadUserNo",t)},expression:"formObj.fivesLeadUserNo"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"负责人简介",prop:"fivesLeadSynopsis"}},[a("Input",{staticStyle:{width:"770px"},attrs:{type:"textarea",rows:4,placeholder:"请输入换油中心负责人简介"},model:{value:e.formObj.fivesLeadSynopsis,callback:function(t){e.$set(e.formObj,"fivesLeadSynopsis",t)},expression:"formObj.fivesLeadSynopsis"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"封面图",prop:"coverPicUrl"}},[a("Input",{staticStyle:{width:"320px"},attrs:{placeholder:"请上传一张封面图",disabled:""},model:{value:e.formObj.coverPicUrl,callback:function(t){e.$set(e.formObj,"coverPicUrl",t)},expression:"formObj.coverPicUrl"}},[a("Button",{attrs:{slot:"append",icon:"ios-cloud-upload-outline"},on:{click:e.uploadFivesPicUrl},slot:"append"},[e._v("上传")])],1)],1),a("div",{staticStyle:{"text-align":"center"}},[e.formObj.coverPicUrl?a("img",{staticStyle:{width:"260px","min-height":"60px",display:"block",margin:"10px auto"},attrs:{src:e.formObj.coverPicUrl},on:{click:function(t){e.showBigPictureModel(e.formObj.coverPicUrl)}}}):e._e()])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"内容介绍",prop:"fivesContent"}},[a("Input",{staticStyle:{width:"775px"},attrs:{type:"textarea",rows:4,placeholder:"请输入换油中心内容介绍"},model:{value:e.formObj.fivesContent,callback:function(t){e.$set(e.formObj,"fivesContent",t)},expression:"formObj.fivesContent"}})],1)],1)],1)],1),e.submiting?a("Spin",{attrs:{size:"large",fix:""}}):e._e()],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:e.closeBaseFormHandle}},[e._v("关闭")]),a("Button",{attrs:{type:"primary"},on:{click:e.submitBaseFormHandle}},[e._v("提交")])],1)]),a("Modal",{attrs:{"footer-hide":!0},model:{value:e.uploadFivesPicModel,callback:function(t){e.uploadFivesPicModel=t},expression:"uploadFivesPicModel"}},[a("div",{attrs:{slot:"header"},slot:"header"},[e._v("上传图片")]),a("Upload",{attrs:{type:"drag",accept:".jpg,.png,.gif",multiple:!1,format:e.uploadFormat,headers:e.uploadHeaders,"before-upload":e.uploadPicBeforeHandle,"on-success":e.uploadPicSuccessHandle,"on-error":e.uploadPicErrorHandle,"on-format-error":e.uploadPicErrorFormatHandle,"on-exceeded-size":e.uploadPicErrorSizeHandle,"max-size":4096,"show-upload-list":!1,action:e.baseUrl+"upload"}},[a("div",{staticStyle:{padding:"20px 0"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),a("p",[e._v("单击或拖动文件到此处上传")])],1),e.picUploading?a("Spin",{attrs:{size:"large",fix:""}}):e._e()],1),a("div",{attrs:{slot:"footer"},slot:"footer"})],1),a("Modal",{attrs:{"footer-hide":!0},model:{value:e.uploadDetailPicModel,callback:function(t){e.uploadDetailPicModel=t},expression:"uploadDetailPicModel"}},[a("div",{attrs:{slot:"header"},slot:"header"},[e._v("上传图片")]),a("Upload",{attrs:{type:"drag",accept:".jpg,.png,.gif",multiple:!1,format:e.uploadFormat,headers:e.uploadHeaders,"before-upload":e.uploadPicBeforeHandle,"on-success":e.uploadDetailPicSuccessHandle,"on-error":e.uploadPicErrorHandle,"on-format-error":e.uploadPicErrorFormatHandle,"on-exceeded-size":e.uploadPicErrorSizeHandle,"max-size":4096,"show-upload-list":!1,action:e.baseUrl+"upload"}},[a("div",{staticStyle:{padding:"20px 0"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),a("p",[e._v("单击或拖动文件到此处上传")])],1),e.picUploading?a("Spin",{attrs:{size:"large",fix:""}}):e._e()],1),a("div",{attrs:{slot:"footer"},slot:"footer"})],1),a("Modal",{attrs:{draggable:"",width:"750","footer-hide":!0},model:{value:e.picModelVisible,callback:function(t){e.picModelVisible=t},expression:"picModelVisible"}},[a("div",{attrs:{slot:"header"},slot:"header"},[e._v("图片大图")]),e.picModelPicUrl?a("img",{staticStyle:{width:"100%"},attrs:{src:e.picModelPicUrl}}):e._e(),a("div",{attrs:{slot:"footer"},slot:"footer"})]),a("Modal",{attrs:{draggable:"",width:"750","footer-hide":!0},model:{value:e.detailPicModel,callback:function(t){e.detailPicModel=t},expression:"detailPicModel"}},[a("div",{attrs:{slot:"header"},slot:"header"},[e._v("详情页图片列表")]),a("div",[a("Button",{staticStyle:{"margin-bottom":"18px"},attrs:{type:"primary",icon:"ios-add-circle-outline"},on:{click:e.showUploadDetailPicForm}},[e._v("上传新图片")])],1),a("Table",{attrs:{border:"",columns:e.detailPicColumns,data:e.detailPicLs,loading:e.loading}})],1),a("Modal",{attrs:{title:""===e.detailPicFormObj.resId?"新增":"修改",width:"960",scrollable:"",mask:"","mask-closable":!1,closable:!1,"class-name":"vertical-center-modal"},model:{value:e.detailPicFormModel,callback:function(t){e.detailPicFormModel=t},expression:"detailPicFormModel"}},[a("div",{staticStyle:{width:"100%",height:"220px",overflow:"auto","text-align":"left"}},[a("Form",{ref:"detailPicForm",attrs:{model:e.formObj,"label-width":120}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"序号"}},[a("Input",{staticStyle:{width:"320px"},attrs:{placeholder:"请输入图片序号"},model:{value:e.detailPicFormObj.sortNo,callback:function(t){e.$set(e.detailPicFormObj,"sortNo",t)},expression:"detailPicFormObj.sortNo"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"展示状态",placeholder:"请选择展示状态"}},[a("Select",{staticStyle:{width:"320px"},attrs:{clearable:""},model:{value:e.detailPicFormObj.showStatus,callback:function(t){e.$set(e.detailPicFormObj,"showStatus",t)},expression:"detailPicFormObj.showStatus"}},[a("Option",{attrs:{value:"Y"}},[e._v("展示")]),a("Option",{attrs:{value:"N"}},[e._v("下线")])],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"图片"}},[a("Input",{staticStyle:{width:"320px"},attrs:{placeholder:"请上传一张图片",disabled:""},model:{value:e.detailPicFormObj.picUrl,callback:function(t){e.$set(e.detailPicFormObj,"picUrl",t)},expression:"detailPicFormObj.picUrl"}},[a("Button",{attrs:{slot:"append",icon:"ios-cloud-upload-outline"},on:{click:e.uploadDetailPicUrl},slot:"append"},[e._v("上传")])],1)],1),a("div",{staticStyle:{"text-align":"center"}},[e.detailPicFormObj.picUrl?a("img",{staticStyle:{width:"260px","min-height":"60px",display:"block",margin:"10px auto"},attrs:{src:e.detailPicFormObj.picUrl},on:{click:function(t){e.showBigPictureModel(e.detailPicFormObj.picUrl)}}}):e._e()])],1)],1)],1),e.submiting||e.loading?a("Spin",{attrs:{size:"large",fix:""}}):e._e()],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:e.closeDetailPicFormHandle}},[e._v("关闭")]),a("Button",{attrs:{type:"primary"},on:{click:e.submitDetailPicFormHandle}},[e._v("提交")])],1)])],1)},r=[],i=(a("cadf"),a("551c"),a("097d"),a("66df")),l=function(e){return i["a"].request({url:"fives/list",data:e,method:"post"})},s=function(e){return i["a"].request({url:"fives/upinsert",data:e,method:"post"})},d=function(e){var t={resId:e};return i["a"].request({url:"fives/detail",data:t,method:"post"})},c=function(e){var t={resId:e};return i["a"].request({url:"fives/detailPics",data:t,method:"post"})},n=function(e){return i["a"].request({url:"fives/upinsertDetailPic",data:e,method:"post"})},u=function(e){var t={resId:e};return i["a"].request({url:"fives/deleteDetailPic",data:t,method:"post"})},p=function(e){var t={resId:e};return i["a"].request({url:"fives/delete",data:t,method:"post"})},m=a("2b74"),f=a("f121"),h={data:function(){var e=this;return{searchFormObj:{current:1,size:10,orderField:"",orderType:"",fivesName:""},loading:!1,tableData:[],total:0,submiting:!1,formObj:{resId:"",fivesName:"",fivesResume:"",customerServiceTel:"",areas:[],addrDetail:"",addrLng:"",addrLat:"",floorSpace:"",coverPicUrl:"",fivesLeadUserNo:"",fivesLeadSynopsis:"",fivesContent:""},baseFormModel:!1,areasLoading:!1,areaData:[],deleting:!1,uploadFivesPicModel:!1,baseUrl:f["a"].baseUrl.pro,uploadFormat:["jpg","png","gif"],uploadHeaders:{type:"fives"},picUploading:!1,picModelVisible:!1,picModelPicUrl:"",detailPicModel:!1,detailPicLs:[],detailPicColumns:[{title:" ",key:"action",width:180,fixed:"right",render:function(t,a){return t("div",[t("Button",{props:{type:"text"},on:{click:function(){e.showEditDetailPicForm(a)}}},"编辑"),t("Poptip",{props:{transfer:!0,confirm:!0,title:"确认要删除此记录吗？"},on:{"on-ok":function(){e.handleDeleteDetailPic(a)}}},[t("Button",{props:{type:"text",loading:e.deleting}},"删除")])])}},{title:"序号",key:"sortNo",width:60},{title:"图片地址",key:"picUrl"},{title:"显示状态",key:"showStatusTxt",width:100}],detailPicFormModel:!1,detailPicFormObj:{resId:"",fivesId:"",sortNo:"",showStatus:"",picUrl:""},uploadDetailPicModel:!1}},computed:{columns:function(){var e=this;return[{title:" ",key:"action",width:180,fixed:"right",render:function(t,a){return t("div",[t("Button",{props:{type:"text"},on:{click:function(){e.showEditForm(a)}}},"编辑"),t("Button",{props:{type:"text"},on:{click:function(){e.showDetailPicModel(a.row.resId)}}},"详情页图"),t("Poptip",{props:{transfer:!0,confirm:!0,title:"确认要删除此记录吗？"},on:{"on-ok":function(){e.handleDelete(a)}}},[t("Button",{props:{type:"text",loading:e.deleting}},"删除")])])}},{type:"index",width:60,align:"center"},{title:"名称",key:"fivesName",minWidth:200,tooltip:!0},{title:"占地面积",key:"floorSpace",minWidth:120,tooltip:!0},{title:"负责人编号",key:"fivesLeadUserNo",minWidth:200,tooltip:!0},{title:"版本",key:"version",minWidth:80,tooltip:!0},{title:"创建时间",sortable:"custom",width:210,key:"createAt"},{title:"最后编辑时间",sortable:"custom",width:210,key:"updateAt"}]},ruleValidate:function(){return{fivesName:[{required:!0,message:"换油中心名称不允许为空",trigger:"blur"}],fivesResume:[{required:!0,message:"换油中心简述不允许为空",trigger:"blur"}],customerServiceTel:[{required:!0,message:"换油中心服务电话不允许为空",trigger:"blur"}],areas:[{required:!0,type:"array",message:"请选择换油中心所在区域",trigger:"change"}],addrDetail:[{required:!0,message:"请输入换油中心详细地址",trigger:"blur"}],addrLng:[{required:!0,message:"请输入换油中心地图经度",trigger:"blur"}],addrLat:[{required:!0,message:"请输入换油中心地图纬度",trigger:"blur"}],floorSpace:[{required:!0,message:"请输入换油中心占地面积",trigger:"blur"}],coverPicUrl:[{required:!0,message:"请上传一张换油中心封面图",trigger:"change"}]}}},methods:{load:function(){var e=this;e.loading=!0,l(e.searchFormObj).then(function(t){if(e.loading=!1,200===t.status&&200===t.data.code){var a=t.data.data;e.tableData=a.list,e.total=a.total}}).catch(function(t){e.$Modal.error({title:t.message}),e.tableData=[],e.loading=!1})},handleSearch:function(e){this.load()},changePage:function(e){this.searchFormObj.current=e,this.load()},changePageSize:function(e){this.searchFormObj.size=e,this.load()},handleSortChange:function(e){this.searchFormObj.orderField=e.key,this.searchFormObj.orderType=e.order,this.load()},showCreateForm:function(){this.formObj={resId:"",fivesName:"",fivesResume:"",customerServiceTel:"",areas:[],addrDetail:"",addrLng:"",addrLat:"",floorSpace:"",coverPicUrl:"",fivesLeadUserNo:"",fivesLeadSynopsis:"",fivesContent:""},this.baseFormModel=!0},showEditForm:function(e){var t=this;t.loading=!0,d(e.row.resId).then(function(e){t.loading=!1,200===e.status&&200===e.data.code&&(t.formObj=e.data.data,t.baseFormModel=!0)}).catch(function(e){t.loading=!1,t.$Modal.error({title:e.message})})},submitBaseFormHandle:function(){var e=this;e.$refs["baseForm"].validate(function(t){t&&(e.submiting=!0,s(e.formObj).then(function(t){e.submiting=!1,200===t.status&&200===t.data.code?(e.closeBaseFormHandle(),e.load()):e.$Modal.error({title:t.data.message})}).catch(function(t){e.submiting=!1,e.closeBaseFormHandle(),e.$Modal.error({title:t.message})}))})},closeBaseFormHandle:function(){this.$refs["baseForm"].resetFields(),this.baseFormModel=!1},handleDelete:function(e){var t=this,a=this;a.deleting=!0,p(e.row.resId).then(function(e){a.deleting=!1,200===e.status&&200===e.data.code?t.load():a.$Modal.error({title:e.data.message})}).catch(function(e){a.deleting=!1,a.$Modal.error({title:e.message})})},handleDeleteDetailPic:function(e){var t=this,a=this;a.deleting=!0,u(e.row.resId).then(function(o){a.deleting=!1,200===o.status&&200===o.data.code?t.showDetailPicModel(e.row.fivesId):a.$Modal.error({title:o.data.message})}).catch(function(e){a.deleting=!1,a.$Modal.error({title:e.message})})},showUploadDetailPicForm:function(){this.detailPicFormModel=!0},closeDetailPicFormHandle:function(){this.$refs["detailPicForm"].resetFields(),this.detailPicFormModel=!1},showDetailPicModel:function(e){var t=this;t.loading=!0,c(e).then(function(a){t.loading=!1,t.detailPicLs=a.data.data,t.detailPicModel=!0,t.detailPicFormObj={resId:"",fivesId:e,sortNo:"",showStatus:"Y",picUrl:""}}).catch(function(e){t.loading=!1,t.$Modal.error({title:e.message})})},showEditDetailPicForm:function(e){var t=this;t.detailPicFormObj={resId:e.row.resId,fivesId:e.row.fivesId,sortNo:e.row.sortNo,showStatus:e.row.showStatus,picUrl:e.row.picUrl},t.detailPicFormModel=!0},submitDetailPicFormHandle:function(){var e=this;e.submiting=!0,n(e.detailPicFormObj).then(function(t){e.submiting=!1,200===t.status&&200===t.data.code?(e.showDetailPicModel(e.detailPicFormObj.fivesId),e.closeDetailPicFormHandle()):e.$Modal.error({title:t.data.message})}).catch(function(t){e.submiting=!1,e.$Modal.error({title:t.message})})},uploadDetailPicUrl:function(){this.uploadDetailPicModel=!0},uploadDetailPicSuccessHandle:function(e,t){this.detailPicFormObj.picUrl=t.response.data,this.uploadDetailPicModel=!1,this.picUploading=!1},uploadFivesPicUrl:function(){this.uploadFivesPicModel=!0},uploadPicBeforeHandle:function(){this.picUploading=!0},uploadPicSuccessHandle:function(e,t){this.formObj.coverPicUrl=t.response.data,this.uploadFivesPicModel=!1,this.picUploading=!1},uploadPicErrorHandle:function(e){var t=this;t.picUploading=!1,t.$Modal.error({title:"上传失败，请稍后重试"})},uploadPicErrorSizeHandle:function(e){var t=this;t.picUploading=!1,t.$Modal.error({title:"图片太大，请压缩后重试"})},uploadPicErrorFormatHandle:function(e,t){var a=this;a.picUploading=!1,a.$Modal.error({title:"图片格式错误"})},showBigPictureModel:function(e){this.picModelVisible=!0,this.picModelPicUrl=e},loadAreaLevelData:function(e,t){var a=this;e.loading=!0,Object(m["b"])(e.value).then(function(o){e.loading=!1,200===o.status&&200===o.data.code?(e.children=o.data.data,t()):a.$Modal.error({title:o.data.message})}).catch(function(t){e.loading=!1,a.$Modal.error({title:t.message})})}},mounted:function(){var e=this;e.load(),e.areasLoading=!0,Object(m["b"])("").then(function(t){e.areasLoading=!1,200===t.status&&200===t.data.code?e.areaData=t.data.data:e.$Modal.error({title:t.data.message})}).catch(function(t){e.areasLoading=!1,e.$Modal.error({title:t.message})})}},b=h,v=(a("0d03"),a("2877")),g=Object(v["a"])(b,o,r,!1,null,null,null);t["default"]=g.exports},"2b74":function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return i});var o=a("66df"),r=function(e){var t={pcode:e};return o["a"].request({url:"areaLevels",data:t,method:"post"})},i=function(e){var t={pcode:e};return o["a"].request({url:"area2Levels",data:t,method:"post"})}}}]);