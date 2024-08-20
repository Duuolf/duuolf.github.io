"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[53],{4053:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var l=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{display:"flex"}},[t("div",{staticClass:"intro-text",staticStyle:{"min-height":"calc(100vh - 60px)",width:"155px","background-color":"#ecedf1","flex-shrink":"0"}},[t("el-menu",{staticStyle:{border:"none"},attrs:{"default-openeds":["info"],collapse:e.isCollapse,"collapse-transition":!1,router:"","background-color":"#ecedf1","text-color":"#222221","active-text-color":"#fff","default-active":e.$route.path}},[t("el-menu-item",{attrs:{index:"/taskCreate"}},[t("i",{staticClass:"el-icon-caret-right"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("创建")])]),t("el-menu-item",{attrs:{index:"/taskView"}},[t("i",{staticClass:"el-icon-caret-right"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("查看")])])],1),e._m(0)],1),t("div",{staticStyle:{padding:"20px",width:"100%"}},[t("div",[t("el-input",{staticStyle:{width:"300px","margin-right":"10px"},attrs:{placeholder:"请输入搜索内容"},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.load(1)}}},[e._v("查询")]),t("el-button",{attrs:{type:"info"},on:{click:e.reset}},[e._v("重置")])],1),t("div",{staticStyle:{margin:"10px 0"}},[t("el-button",{attrs:{type:"danger",plain:""},on:{click:e.delBatch}},[e._v("批量删除")]),t("el-button",{attrs:{type:"info",plain:""},on:{click:e.exportData}},[e._v("批量导出")])],1),t("el-table",{staticStyle:{"max-width":"calc(100vw - 155px - 150px - 40px)"},attrs:{data:e.tableData,height:"530",border:"",stripe:"","header-cell-style":{backgroundColor:"aliceblue",color:"#666"}},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",align:"center",width:"50"}}),t("el-table-column",{attrs:{label:"任务包名称",prop:"packageName",align:"center",width:"120","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"任务类型",prop:"type",align:"center",width:"110","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"任务描述",prop:"description",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"点检周期",prop:"checkCycle",align:"center",width:"70","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"超时时间",prop:"timeout",align:"center",width:"100","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"点检设备/仪表",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:a.row.equipments||a.row.meters,placement:"top"}},[t("div",{staticClass:"custom-tooltip"},[a.row.equipments?t("span",[e._v(e._s(a.row.equipments))]):t("span",[e._v(e._s(a.row.meters))])])])]}}])}),t("el-table-column",{attrs:{label:"点检人员",prop:"checkPeople",align:"center",width:"120","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"开始时间",prop:"startTime",align:"center",width:"130","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"结束时间",prop:"endTime",align:"center",width:"130","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"状态",prop:"state",align:"center",width:"50","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"领取人员",prop:"receivePeople",align:"center",width:"80","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"操作",align:"center",width:"195",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",{staticStyle:{display:"flex","justify-content":"flex-end","align-items":"center",width:"100%"}},["设备点检任务"===a.row.type||"仪表点检任务"===a.row.type?t("el-switch",{staticStyle:{"margin-right":"10px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(t){return e.changeOpen(a.row)}},model:{value:a.row.isPublish,callback:function(t){e.$set(a.row,"isPublish",t)},expression:"scope.row.isPublish"}}):e._e(),t("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(t){return e.handleEdit(a.row)}}},[e._v("编辑")]),t("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(t){return e.del(a.row.id)}}},[e._v("删除")])],1)]}}])})],1),t("div",{staticStyle:{margin:"10px 0"}},[t("el-pagination",{attrs:{"current-page":e.pageNum,"page-size":e.pageSize,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),t("el-dialog",{staticStyle:{"align-items":"center"},attrs:{title:"修改任务包信息",visible:e.fromVisible,width:"40%"},on:{"update:visible":function(t){e.fromVisible=t}}},[t("el-form",{ref:"formRef",staticStyle:{"padding-right":"20px"},attrs:{model:e.form,"label-width":"120px",rules:e.rules}},[t("el-form-item",{attrs:{label:"任务包名称",prop:"packageName"}},[t("el-input",{attrs:{placeholder:"任务包名称"},model:{value:e.form.packageName,callback:function(t){e.$set(e.form,"packageName",t)},expression:"form.packageName"}})],1),t("el-form-item",{attrs:{label:"任务类型",prop:"type"}},[t("el-input",{attrs:{placeholder:"任务类型"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})],1),t("el-form-item",{attrs:{label:"任务描述",prop:"description"}},[t("el-input",{attrs:{type:"textarea",placeholder:"任务描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),t("el-form-item",{attrs:{label:"点检周期",prop:"checkCycle"}},[t("el-input",{attrs:{placeholder:"点检周期"},model:{value:e.form.checkCycle,callback:function(t){e.$set(e.form,"checkCycle",t)},expression:"form.checkCycle"}})],1),t("div",{staticStyle:{display:"flex"}},[t("el-form-item",{attrs:{label:"开始时间",prop:"startTime"}},[t("el-input",{attrs:{placeholder:"开始时间"},model:{value:e.form.startTime,callback:function(t){e.$set(e.form,"startTime",t)},expression:"form.startTime"}})],1),t("el-form-item",{attrs:{label:"结束时间",prop:"endTime"}},[t("el-input",{attrs:{placeholder:"结束时间"},model:{value:e.form.endTime,callback:function(t){e.$set(e.form,"endTime",t)},expression:"form.endTime"}})],1)],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.fromVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)],1)])},i=[function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"padding-top":"160px"}},[t("img",{attrs:{src:a(7282),height:"234",width:"153"}})])}],s={name:"TaskView",data(){return{searchText:"",tableData:[],pageNum:1,pageSize:10,packageName:"",equipments:"",type:"",total:0,fromVisible:!1,form:{},user:JSON.parse(localStorage.getItem("honey-user")||"{}"),rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"}]},ids:[]}},created(){this.load(),console.log(this.user)},methods:{changeOpen(e){console.log(e),this.$request.put("/task/updateIsPublish",e.id).then((e=>{"200"===e.code?this.$message.success("更新成功"):this.$message.error(e.msg),this.load(this.pageNum)}))},truncateText(e){if(!e)return"";const t=7;return e.length>t?e.slice(0,t)+"...":e},exportData(){if(this.ids.length){let e=this.ids.join(",");window.open(this.$baseUrl+"/taskView/export?token="+this.user.token+"&ids="+e)}else window.open(this.$baseUrl+"/taskView/export?token="+this.user.token)},delBatch(){this.ids.length?this.$confirm("您确认批量删除这些数据吗？","确认删除",{type:"warning"}).then((e=>{this.$request.delete("/task/delete/batch",{data:this.ids}).then((e=>{"200"===e.code?(this.$message.success("操作成功"),this.load(1)):this.$message.error(e.msg)}))})).catch((()=>{})):this.$message.warning("请选择数据")},handleSelectionChange(e){this.ids=e.map((e=>e.id))},del(e){this.$confirm("您确认删除吗？","确认删除",{type:"warning"}).then((t=>{this.$request.delete("/task/delete/"+e).then((e=>{"200"===e.code?(this.$message.success("操作成功"),this.load(1)):this.$message.error(e.msg)}))})).catch((()=>{}))},handleEdit(e){this.form=JSON.parse(JSON.stringify(e)),this.fromVisible=!0},save(){this.$refs.formRef.validate((e=>{e&&this.sendSaveRequest()}))},sendSaveRequest(){this.$request({url:this.form.id?"/task/update":"/task/add",method:this.form.id?"PUT":"POST",data:this.form}).then((e=>{"200"===e.code?(this.$message.success("保存成功"),this.load(1),this.fromVisible=!1):this.$message.error(e.msg)}))},reset(){this.searchText="",this.load(1)},handleCurrentChange(e){this.load(e)},load(e){console.log("loading"),e&&(this.pageNum=e),this.$request.get("/taskView/selectByPage",{params:{pageNum:this.pageNum,pageSize:this.pageSize,searchText:this.searchText}}).then((e=>{this.tableData=e.data.records,this.total=e.data.total,console.log(this.tableData)}))}}},o=s,r=a(1001),n=(0,r.Z)(o,l,i,!1,null,null,null),c=n.exports},7282:function(e,t,a){e.exports=a.p+"static/img/金色时代.75266d23.png"}}]);
//# sourceMappingURL=53.8b513e53.js.map