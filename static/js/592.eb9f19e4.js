"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[592],{3592:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var l=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"card",staticStyle:{flex:"1",height:"680px"}},[t("div",{staticClass:"card-title",staticStyle:{flex:"1","text-align":"center","font-size":"30px"}},[e._v("异常反馈")]),t("el-table",{staticStyle:{flex:"1","margin-top":"50px"},attrs:{data:e.information,stripe:"","header-cell-style":{backgroundColor:"aliceblue",color:"#666"}},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{label:"NFC标签值",prop:"nfcNum",align:"center"}}),t("el-table-column",{attrs:{label:"设备名称",prop:"equipmentName",align:"center"}}),t("el-table-column",{attrs:{label:"所属部门",prop:"department",align:"center"}}),t("el-table-column",{attrs:{label:"故障等级",prop:"failureLevel",align:"center"}}),t("el-table-column",{attrs:{label:"具体概述",width:"80",prop:"description",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{plain:"",type:"danger",plain:"",size:"mini"},on:{click:function(t){return e.redirectProblem(a.row.equipmentName)}}},[e._v("详情")])]}}])}),t("el-table-column",{attrs:{label:"反馈时间",prop:"time",align:"center"}})],1),t("div",{staticStyle:{margin:"10px 0"}},[t("el-pagination",{attrs:{"current-page":e.pageNum,"page-size":e.pageSize,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)])},r=[],n=(a(7658),{name:"feedback",data(){return{information:{},pageNum:1,pageSize:10,total:0,nfcNum:"",id:"",equipmentName:""}},created(){this.id=this.$route.query.id,this.$request.get("/problem/getRealDatas",{params:{pageNum:this.pageNum,pageSize:this.pageSize,taskNum:this.$route.query.taskNum,id:this.$route.query.id,searchText:this.searchText}}).then((e=>{this.information=e.data.records,this.equipmentName=e.data.records.equipmentName,this.total=e.data.total}))},methods:{handleCurrentChange(e){this.load(e)},redirectProblem(e){let t=encodeURIComponent(e);this.$router.push({path:"/problemDetail",query:{id:this.id,equipmentName:t}})}}}),i=n,o=a(1001),s=(0,o.Z)(i,l,r,!1,null,"10047167",null),u=s.exports}}]);
//# sourceMappingURL=592.eb9f19e4.js.map