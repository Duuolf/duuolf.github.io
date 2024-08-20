"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[59],{2059:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var l=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{display:"flex"}},[t("div",{staticClass:"intro-text",staticStyle:{"min-height":"calc(100vh - 60px)",width:"155px","background-color":"#ecedf1","flex-shrink":"0"}},[t("el-menu",{staticStyle:{border:"none"},attrs:{"default-openeds":["info"],collapse:e.isCollapse,"collapse-transition":!1,router:"","background-color":"#ecedf1","text-color":"#222221","active-text-color":"#fff","default-active":e.$route.path}},[t("el-menu-item",{attrs:{index:"/user"}},[t("i",{staticClass:"el-icon-caret-right"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("用户管理")])]),t("el-menu-item",{attrs:{index:"/notice"}},[t("i",{staticClass:"el-icon-caret-right"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("通知公告")])])],1),e._m(0)],1),t("div",{staticStyle:{padding:"20px 0 0 20px",width:"100%"}},[t("div",[t("el-input",{staticStyle:{width:"300px","margin-right":"10px"},attrs:{placeholder:"请输入搜索内容"},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.load(1)}}},[e._v("查询")]),t("el-button",{attrs:{type:"info"},on:{click:e.reset}},[e._v("重置")])],1),t("div",{staticStyle:{margin:"10px 0"}},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:e.handleAdd}},[e._v("新增")]),"超级管理员"===e.user.authority?t("el-button",{attrs:{type:"danger",plain:""},on:{click:e.delBatch}},[e._v("批量删除")]):e._e(),t("el-button",{attrs:{type:"info",plain:""},on:{click:e.exportData}},[e._v("批量导出")]),t("el-upload",{staticStyle:{display:"inline-block","margin-left":"10px"},attrs:{action:e.$baseUrl+"/user/import",headers:{token:e.user.token},"on-success":e.handleImport,"show-file-list":!1}},[t("el-button",{attrs:{type:"primary",plain:""}},[e._v("批量导入")])],1)],1),t("el-table",{attrs:{data:e.tableData,stripe:"","header-cell-style":{backgroundColor:"aliceblue",color:"#666"}},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"用户ID",prop:"id",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"用户账号",prop:"account",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"用户姓名",prop:"name",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"所属部门",prop:"department",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"工段",prop:"workSection",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"电话",prop:"phone",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"地址",prop:"address",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"用户权限",prop:"authority",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"操作",align:"center",width:"180",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(a){return["管理员"===e.user.authority||"超级管理员"===e.user.authority?t("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(t){return e.handleEdit(a.row)}}},[e._v("编辑")]):e._e(),"超级管理员"===e.user.authority?t("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(t){return e.del(a.row.id)}}},[e._v("删除")]):e._e()]}}])})],1),t("div",{staticStyle:{margin:"10px 0"}},[t("el-pagination",{attrs:{"current-page":e.pageNum,"page-size":e.pageSize,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),t("el-dialog",{attrs:{title:"新增用户信息",visible:e.fromVisible,width:"40%"},on:{"update:visible":function(t){e.fromVisible=t}}},[t("el-form",{ref:"formRef",staticStyle:{"padding-right":"20px"},attrs:{model:e.form,"label-width":"100px",rules:e.rules}},[t("el-form-item",{attrs:{label:"用户账号",prop:"account"}},[t("el-input",{attrs:{placeholder:"用户账号"},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}})],1),t("el-form-item",{attrs:{label:"用户姓名",prop:"name"}},[t("el-input",{attrs:{placeholder:"用户昵称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"所属部门",prop:"department"}},[t("el-input",{attrs:{placement:"所属部门"},model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}})],1),t("div",{staticStyle:{display:"flex"}},[t("el-form-item",{attrs:{label:"电话",prop:"phone"}},[t("el-input",{attrs:{placeholder:"电话"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),t("el-form-item",{attrs:{label:"工段",prop:"workSection"}},[t("el-input",{attrs:{placeholder:"工段"},model:{value:e.form.workSection,callback:function(t){e.$set(e.form,"workSection",t)},expression:"form.workSection"}})],1)],1),t("el-form-item",{attrs:{label:"地址",prop:"address"}},[t("el-input",{attrs:{type:"textarea",placeholder:"地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),t("el-form-item",{attrs:{label:"用户权限",prop:"authority"}},[t("el-select",{model:{value:e.form.authority,callback:function(t){e.$set(e.form,"authority",t)},expression:"form.authority"}},e._l(e.authorityList,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"头像"}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$baseUrl+"/file/upload",headers:{token:e.user.token},"file-list":e.form.avatar?[e.form.avatar]:[],"list-type":"picture","on-success":e.handleAvatarSuccess}},[t("el-button",{attrs:{type:"primary"}},[e._v("上传头像")])],1)],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.fromVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"修改用户信息",visible:e.fromVisible1,width:"40%"},on:{"update:visible":function(t){e.fromVisible1=t}}},[t("el-form",{ref:"formRef",staticStyle:{"padding-right":"20px"},attrs:{model:e.form,"label-width":"100px",rules:e.rules}},[t("el-form-item",{attrs:{label:"用户账号",prop:"account"}},[t("el-input",{attrs:{placeholder:"用户账号"},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}})],1),t("el-form-item",{attrs:{label:"用户姓名",prop:"name"}},[t("el-input",{attrs:{placeholder:"用户昵称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"所属部门",prop:"department"}},[t("el-input",{attrs:{placement:"所属部门"},model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}})],1),t("div",{staticStyle:{display:"flex"}},[t("el-form-item",{attrs:{label:"电话",prop:"phone"}},[t("el-input",{attrs:{placeholder:"电话"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),t("el-form-item",{attrs:{label:"工段",prop:"workSection"}},[t("el-input",{attrs:{placeholder:"工段"},model:{value:e.form.workSection,callback:function(t){e.$set(e.form,"workSection",t)},expression:"form.workSection"}})],1)],1),t("el-form-item",{attrs:{label:"地址",prop:"address"}},[t("el-input",{attrs:{type:"textarea",placeholder:"地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),"超级管理员"===e.user.authority?t("el-form-item",{attrs:{label:"用户权限",prop:"authority"}},[t("el-select",{model:{value:e.form.authority,callback:function(t){e.$set(e.form,"authority",t)},expression:"form.authority"}},e._l(e.authorityList,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),t("el-form-item",{attrs:{label:"头像"}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$baseUrl+"/file/upload",headers:{token:e.user.token},"file-list":e.form.avatar?[e.form.avatar]:[],"list-type":"picture","on-success":e.handleAvatarSuccess}},[t("el-button",{attrs:{type:"primary"}},[e._v("上传头像")])],1)],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.fromVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)],1)])},o=[function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"padding-top":"160px"}},[t("img",{attrs:{src:a(7282),height:"234",width:"153"}})])}],r={name:"User",data(){return{searchText:"",tableData:[],pageNum:1,pageSize:10,account:"",total:0,fromVisible:!1,fromVisible1:!1,form:{},user:JSON.parse(localStorage.getItem("honey-user")||"{}"),authorityList:[{value:"超级管理员",label:"超级管理员"},{value:"管理员",label:"管理员"},{value:"点检员",label:"点检员"},{value:"维修工",label:"维修工"},{value:"安全员",label:"安全员"}],ids:[]}},created(){this.load()},methods:{handleImport(e,t,a){"200"===e.code?(this.$message.success("操作成功"),this.load(1)):this.$message.error(e.msg)},exportData(){if(this.ids.length){let e=this.ids.join(",");window.open(this.$baseUrl+"/user/export?token="+this.user.token+"&ids="+e)}else window.open(this.$baseUrl+"/user/export?token="+this.user.token+"&account="+this.account)},delBatch(){this.ids.length?this.$confirm("您确认批量删除这些数据吗？","确认删除",{type:"warning"}).then((e=>{this.$request.delete("/user/delete/batch",{data:this.ids}).then((e=>{"200"===e.code?(this.$message.success("操作成功"),this.load(1)):this.$message.error(e.msg)}))})).catch((()=>{})):this.$message.warning("请选择数据")},handleSelectionChange(e){this.ids=e.map((e=>e.id))},del(e){this.$confirm("您确认删除吗？","确认删除",{type:"warning"}).then((t=>{this.$request.delete("/user/delete/"+e).then((e=>{"200"===e.code?(this.$message.success("操作成功"),this.load(1)):this.$message.error(e.msg)}))})).catch((()=>{}))},handleEdit(e){this.form=JSON.parse(JSON.stringify(e)),this.fromVisible1=!0},handleAdd(){this.form={role:"一般员工"},this.fromVisible=!0},save(){this.$refs.formRef.validate((e=>{e&&this.$request({url:this.form.id?"/user/update":"/user/add",method:this.form.id?"PUT":"POST",data:this.form}).then((e=>{"200"===e.code?(this.$message.success("保存成功"),this.load(1),this.fromVisible=!1):this.$message.error(e.msg)}))}))},reset(){this.searchText="",this.load(1)},load(e){this.$request.get("/user/getDepartmentList").then((e=>{console.log(e.data)})),e&&(this.pageNum=e),this.$request.get("/user/selectByPage",{params:{pageNum:this.pageNum,pageSize:this.pageSize,account:this.account,searchText:this.searchText}}).then((e=>{this.tableData=e.data.records,this.total=e.data.total}))},handleCurrentChange(e){this.load(e)},handleAvatarSuccess(e,t,a){this.form.avatar=e.data}}},s=r,i=a(1001),n=(0,i.Z)(s,l,o,!1,null,"1242b25d",null),c=n.exports},7282:function(e,t,a){e.exports=a.p+"static/img/金色时代.75266d23.png"}}]);
//# sourceMappingURL=59.5d8d5806.js.map