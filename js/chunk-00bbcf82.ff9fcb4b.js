(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00bbcf82"],{"2b74":function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return o});var r=a("66df"),l=function(e){var t={pcode:e};return r["a"].request({url:"areaLevels",data:t,method:"post"})},o=function(e){var t={pcode:e};return r["a"].request({url:"area2Levels",data:t,method:"post"})}},8194:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return o});var r=a("66df"),l=function(e){return r["a"].request({url:"member/list",data:e,method:"post"})},o=function(e){var t={userId:e};return r["a"].request({url:"member/detail",data:t,method:"post"})}},c8d1:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Card",{staticClass:"search-con",attrs:{shadow:""}},[a("Form",{ref:"searchFormObj",attrs:{model:e.searchFormObj}},[a("Row",{attrs:{gutter:16}},[a("Col",{staticStyle:{padding:"8px"},attrs:{xs:12,sm:8,md:6,lg:6}},[a("Input",{attrs:{placeholder:"按用户编号查询",clearable:""},model:{value:e.searchFormObj.userNo,callback:function(t){e.$set(e.searchFormObj,"userNo",t)},expression:"searchFormObj.userNo"}})],1),a("Col",{staticStyle:{padding:"8px"},attrs:{xs:12,sm:8,md:6,lg:6}},[a("Input",{attrs:{placeholder:"按用户昵称查询",clearable:""},model:{value:e.searchFormObj.nickName,callback:function(t){e.$set(e.searchFormObj,"nickName",t)},expression:"searchFormObj.nickName"}})],1),a("Col",{staticStyle:{padding:"8px"},attrs:{xs:12,sm:8,md:6,lg:6}},[a("Input",{attrs:{placeholder:"按用户真实名称查询",clearable:""},model:{value:e.searchFormObj.realName,callback:function(t){e.$set(e.searchFormObj,"realName",t)},expression:"searchFormObj.realName"}})],1),a("Col",{staticStyle:{padding:"8px"},attrs:{xs:12,sm:8,md:6,lg:6}},[a("Input",{attrs:{placeholder:"按用户手机号查询",clearable:""},model:{value:e.searchFormObj.phoneNo,callback:function(t){e.$set(e.searchFormObj,"phoneNo",t)},expression:"searchFormObj.phoneNo"}})],1),a("Col",{staticStyle:{padding:"8px"},attrs:{xs:12,sm:8,md:6,lg:6}},[a("Select",{attrs:{placeholder:"按会员状态查询",clearable:""},model:{value:e.searchFormObj.memberFlag,callback:function(t){e.$set(e.searchFormObj,"memberFlag",t)},expression:"searchFormObj.memberFlag"}},[a("Option",{attrs:{value:""}},[e._v("全部")]),a("Option",{attrs:{value:"Y"}},[e._v("会员")]),a("Option",{attrs:{value:"N"}},[e._v("非会员")])],1)],1),a("Col",{staticStyle:{padding:"8px"},attrs:{xs:12,sm:8,md:6,lg:6}},[a("Select",{attrs:{placeholder:"按认证状态查询",clearable:""},model:{value:e.searchFormObj.authenticationFlag,callback:function(t){e.$set(e.searchFormObj,"authenticationFlag",t)},expression:"searchFormObj.authenticationFlag"}},[a("Option",{attrs:{value:""}},[e._v("全部")]),a("Option",{attrs:{value:"Y"}},[e._v("已认证")]),a("Option",{attrs:{value:"N"}},[e._v("未认证")])],1)],1),a("Col",{staticStyle:{padding:"8px"},attrs:{xs:12,sm:8,md:6,lg:6}},[a("Cascader",{attrs:{data:e.areaData,"load-data":e.loadAreaLevelData,placeholder:"按城市区域查询",trigger:"click",clearable:""},model:{value:e.searchFormObj.areas,callback:function(t){e.$set(e.searchFormObj,"areas",t)},expression:"searchFormObj.areas"}})],1),a("Col",{staticStyle:{padding:"8px"},attrs:{xs:12,sm:8,md:6,lg:6}},[a("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:e.handleSearch}},[a("Icon",{attrs:{type:"ios-search-outline"}}),e._v(" 检索")],1)],1)],1)],1)],1),a("Table",{attrs:{border:!1,stripe:!0,"show-header":!0,data:e.tableData,loading:e.loading||e.areasLoading,columns:e.columns,size:"default","highlight-row":!0,editable:""},on:{"on-sort-change":e.handleSortChange}}),a("div",{staticClass:"page"},[a("Page",{attrs:{total:e.total,current:e.searchFormObj.current,"page-size":e.searchFormObj.size,"show-sizer":"","show-total":"","show-elevator":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1),a("Modal",{attrs:{title:"会员信息",width:"900",scrollable:"",mask:"","mask-closable":!1,closable:!0,"class-name":"vertical-center-modal"},model:{value:e.detailModel,callback:function(t){e.detailModel=t},expression:"detailModel"}},[a("div",{staticStyle:{width:"100%",height:"420px",overflow:"auto","text-align":"left"}},[a("Form",{attrs:{model:e.memberObj,"label-width":120}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"用户编号"}},[a("Input",{attrs:{readonly:"",placeholder:"用户编号"},model:{value:e.memberObj.userNo,callback:function(t){e.$set(e.memberObj,"userNo",t)},expression:"memberObj.userNo"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"用户昵称"}},[a("Input",{attrs:{readonly:"",placeholder:"用户昵称"},model:{value:e.memberObj.nickName,callback:function(t){e.$set(e.memberObj,"nickName",t)},expression:"memberObj.nickName"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"真实名称"}},[a("Input",{attrs:{readonly:"",placeholder:"真实名称"},model:{value:e.memberObj.realName,callback:function(t){e.$set(e.memberObj,"realName",t)},expression:"memberObj.realName"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"用户手机号"}},[a("Input",{attrs:{readonly:"",placeholder:"用户手机号"},model:{value:e.memberObj.phoneNo,callback:function(t){e.$set(e.memberObj,"phoneNo",t)},expression:"memberObj.phoneNo"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"用户头像地址"}},[a("Input",{attrs:{readonly:"",placeholder:"用户头像地址"},model:{value:e.memberObj.headImgUrl,callback:function(t){e.$set(e.memberObj,"headImgUrl",t)},expression:"memberObj.headImgUrl"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"所在城市"}},[a("Input",{attrs:{readonly:"",placeholder:"所在城市"},model:{value:e.memberObj.cityName,callback:function(t){e.$set(e.memberObj,"cityName",t)},expression:"memberObj.cityName"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"认证标识"}},[a("Input",{attrs:{readonly:"",placeholder:"认证标识"},model:{value:e.memberObj.authenticationFlag,callback:function(t){e.$set(e.memberObj,"authenticationFlag",t)},expression:"memberObj.authenticationFlag"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"认证时间"}},[a("Input",{attrs:{readonly:"",placeholder:"认证时间"},model:{value:e.memberObj.authenticationAt,callback:function(t){e.$set(e.memberObj,"authenticationAt",t)},expression:"memberObj.authenticationAt"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"会员标识"}},[a("Input",{attrs:{readonly:"",placeholder:"会员标识"},model:{value:e.memberObj.memberFlag,callback:function(t){e.$set(e.memberObj,"memberFlag",t)},expression:"memberObj.memberFlag"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"会员加入时间"}},[a("Input",{attrs:{readonly:"",placeholder:"会员加入时间"},model:{value:e.memberObj.memberAt,callback:function(t){e.$set(e.memberObj,"memberAt",t)},expression:"memberObj.memberAt"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"一级分销人数"}},[a("Input",{attrs:{readonly:"",placeholder:"一级分销人数"},model:{value:e.memberObj.level1Num,callback:function(t){e.$set(e.memberObj,"level1Num",t)},expression:"memberObj.level1Num"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"二级分销人数"}},[a("Input",{attrs:{readonly:"",placeholder:"二级分销人数"},model:{value:e.memberObj.level2Num,callback:function(t){e.$set(e.memberObj,"level2Num",t)},expression:"memberObj.level2Num"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"课程购买数量"}},[a("Input",{attrs:{readonly:"",placeholder:"课程购买数量"},model:{value:e.memberObj.courseNum,callback:function(t){e.$set(e.memberObj,"courseNum",t)},expression:"memberObj.courseNum"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"消费总金额"}},[a("Input",{attrs:{readonly:"",placeholder:"消费总金额"},model:{value:e.memberObj.consumeAmount,callback:function(t){e.$set(e.memberObj,"consumeAmount",t)},expression:"memberObj.consumeAmount"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"分销来源"}},[a("Input",{attrs:{readonly:"",placeholder:"分销来源"},model:{value:e.memberObj.originUser,callback:function(t){e.$set(e.memberObj,"originUser",t)},expression:"memberObj.originUser"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"记录版本"}},[a("Input",{attrs:{readonly:"",placeholder:"记录版本"},model:{value:e.memberObj.version,callback:function(t){e.$set(e.memberObj,"version",t)},expression:"memberObj.version"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"创建(注册)时间"}},[a("Input",{attrs:{readonly:"",placeholder:"创建(注册)时间"},model:{value:e.memberObj.createAt,callback:function(t){e.$set(e.memberObj,"createAt",t)},expression:"memberObj.createAt"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"最后修改时间"}},[a("Input",{attrs:{readonly:"",placeholder:"最后修改时间"},model:{value:e.memberObj.updateAt,callback:function(t){e.$set(e.memberObj,"updateAt",t)},expression:"memberObj.updateAt"}})],1)],1)],1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"})])],1)},l=[],o=a("8194"),s=a("2b74"),n={data:function(){return{searchFormObj:{current:1,size:10,orderField:"",orderType:"",userNo:"",nickName:"",realName:"",phoneNo:"",memberFlag:"",authenticationFlag:"",areas:[]},loading:!1,tableData:[],total:0,areasLoading:!1,areaData:[],detailModel:!1,memberLoading:!1,memberObj:{}}},computed:{columns:function(){var e=this;return[{title:" ",key:"action",width:100,fixed:"right",render:function(t,a){return t("div",[t("Button",{props:{type:"text",loading:e.memberLoading},on:{click:function(){e.showDetailModel(a)}}},"详细")])}},{type:"index",width:60,align:"center"},{title:"用户编号",key:"userNo",minWidth:200,tooltip:!0},{title:"用户昵称",key:"nickName",minWidth:200,tooltip:!0},{title:"手机号",key:"phoneNo",minWidth:200,tooltip:!0},{title:"真实名称",key:"realName",minWidth:120,tooltip:!0},{title:"城市",key:"cityName",minWidth:120,tooltip:!0},{title:"认证状态",key:"authenticationFlag",sortable:"custom",minWidth:120,tooltip:!0},{title:"会员状态",key:"memberFlag",sortable:"custom",minWidth:200,tooltip:!0},{title:"版本",key:"version",minWidth:80,tooltip:!0},{title:"创建时间",sortable:"custom",width:210,key:"createAt"},{title:"最后编辑时间",sortable:"custom",width:210,key:"updateAt"}]}},methods:{load:function(){var e=this;e.loading=!0,Object(o["a"])(e.searchFormObj).then(function(t){if(e.loading=!1,200===t.status&&200===t.data.code){var a=t.data.data;e.tableData=a.list,e.total=a.total}}).catch(function(t){e.$Modal.error({title:t.message}),e.tableData=[],e.loading=!1})},handleSearch:function(e){this.load()},changePage:function(e){this.searchFormObj.current=e,this.load()},changePageSize:function(e){this.searchFormObj.size=e,this.load()},handleSortChange:function(e){this.searchFormObj.orderField=e.key,this.searchFormObj.orderType=e.order,this.load()},showDetailModel:function(e){var t=this;t.detailModel=!1,t.memberLoading=!0,Object(o["b"])(e.row.userId).then(function(e){t.memberLoading=!1,200===e.status&&200===e.data.code?(t.detailModel=!0,t.memberObj=e.data.data):t.$Modal.error({title:e.data.message})}).catch(function(e){t.memberLoading=!1,t.$Modal.error({title:e.message})})},loadAreaLevelData:function(e,t){var a=this;e.loading=!0,Object(s["a"])(e.value).then(function(r){e.loading=!1,200===r.status&&200===r.data.code?(e.children=r.data.data,t()):a.$Modal.error({title:r.data.message})}).catch(function(t){e.loading=!1,a.$Modal.error({title:t.message})})}},mounted:function(){var e=this;e.load(),e.areasLoading=!0,Object(s["a"])("").then(function(t){e.areasLoading=!1,200===t.status&&200===t.data.code?e.areaData=t.data.data:e.$Modal.error({title:t.data.message})}).catch(function(t){e.areasLoading=!1,e.$Modal.error({title:t.message})})}},m=n,c=a("2877"),i=Object(c["a"])(m,r,l,!1,null,null,null);t["default"]=i.exports}}]);