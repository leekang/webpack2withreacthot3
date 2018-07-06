import Ajax from 'core/ajax';
class KaoqinServer{
    //审批列表
    flowApproveList(data){
        return Ajax.post("/flow/approve/list",data)
    }
    //申请列表
    flowApplyList(data){
        return Ajax.post("/flow/apply/list",data)
    }
    //审批详情
    flowDetail(data){
        return Ajax.get("/flow/detail",data);
    }
    flowApprove(data){
        return Ajax.post("/flow/approve",data);
    }
    //获取每个假期的基本信息
    commLeaveBasicInfo(data){
        return Ajax.get("/comm/leaveBasicInfo",data);
    }
    commSearchUser(data){
        return Ajax.get("/comm/searchUser",data);
    }
    commSearchMail(data){
        return Ajax.get("/comm/searchMail",data);
    }
    commGetWorkDays(data){
        return Ajax.get("/comm/getWorkDays",data);
    }
    flowApplySubmitLeave(data){
        return Ajax.post("/flow/apply/submitLeave",data);
    }
    recordSearch(data){
        this.emit("recordSearchList",data)
    }
    resetSearch(data){
        this.emit("resetSearch")
    }
    leaveAdminGetLeaveQueryList(data){
        return Ajax.post("/leave/admin/getLeaveQueryList",data);
    }
    searchAnnualLeave(data){
        this.emit("searchAnnualLeave",data)
    }
    commRemainLeave(data){
        return Ajax.get("/comm/remainLeave",data)
    }
    resetAnnualLeave(){
        this.emit("resetAnnualLeave")
    }
    //事假补提
    flowApplyMention(data){
        return Ajax.post("/flow/apply/mention",data)
    }
    //查询时的状态
    leaveTypeGetLeaveStatusList(){
        return Ajax.get("/leaveType/getLeaveStatusList");
    }
    //假期类型列表
    leaveTypeGetAllLeaveType(){
        return Ajax.get("/leaveType/getAllLeaveType");
    }
    //获取请假查询结果的假期天数累计求和
    leaveAdminSumDaysLeaveQueryList(data){
        return Ajax.post("/leave/admin/sumDaysLeaveQueryList",data);
    }
    //获取年休假查询结果的假期天数
    leaveAdminSumDaysVacationYearQueryList(data){
        return Ajax.post("/leave/admin/sumDaysVacationYearQueryList",data)
    }
    //假期类型配置列表
    leaveTypeGetLeaveTypeList(){
        return Ajax.get("/leaveType/getLeaveTypeList")
    }
    //更新温馨提示
    leaveTypeUpdateLeaveType(data){
        return Ajax.post("/leaveType/updateLeaveType",data);
    }
    flowApplyCancelApplyLeave(data){
        return Ajax.get("/flow/apply/cancelApplyLeave",data);
    }
    flowApplyRevokeLeave(data){
        this.emit("reGetListNew")
        return Ajax.get("/flow/apply/revokeLeave",data);
    }
    //查询这个月的工作日一共有多少天
    leaveAdminQueryLeaveCalendar(data){
        return Ajax.post("/leave/admin/queryLeaveCalendar",data);
    }
    getLeaveCalendar(data){
        this.emit("getLeaveCalendar",data)
    }
    leaveAdminSaveCalendarSet(data){
        return Ajax.post("/leave/admin/saveCalendarSet",data)
    }
    //清空之前选择的时间
    clearChooseTime(){
        this.emit("clearChooseTime");
    }
    //更新指定时间段的配置
    leaveAdminUpdateCalendarSet(data){
        return Ajax.post("/leave/admin/updateCalendarSet",data);
    }
    //获取家庭关系
    commGetRelationship(){
        return Ajax.post("/comm/getRelationship");
    }
    //年休假查询
    leaveAdminGetVacationYearQueryList(data){
        return Ajax.post("/leave/admin/getVacationYearQueryList",data)
    }
    //产看详情流水
    leaveAdminGetVacationYearDetailList(data){
        return Ajax.post("/leave/admin/getVacationYearDetailList",data)
    }
    commListImageUrls(data){
        return Ajax.post("/comm/listImageUrls",data)
    }
    //审批完之后数字的变化。
    approveChange(){
        this.emit("approveChange");
    }
    //获取当前登录人
    getCurrentUser(){
        return Ajax.get('/comm/getCurrentUserInfo');
    }
}
export default new KaoqinServer;
