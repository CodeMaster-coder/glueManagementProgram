// pages/demo01/demo01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select:false,
    area_name:'--请选择工段--',
    areas: [
      '2.1总拼',
      '2.1底板主线',
      '2.1底板分拼',
      '2.1侧围',
      '2.1门盖',
      '2.2总拼',
      '2.2底板主线',
      '2.2底板分拼',
      '2.2侧围',
      '2.2门盖'
     ],
     model:[],
     number:[]
   },/**
   * 点击下拉框
   */
   bindShowMsg() {
    this.setData({
     select: !this.data.select
    })
   },
  /**
   * 已选下拉框
   */
   mySelect(e) {
    console.log(e)
    var name = e.currentTarget.dataset.name
    // console.log(name)
    this.setData({
     area_name: name,
     select: false
    })

   },

   //查询按钮功能实现
   query:function(e){
    var that = this;//把this对象复制到临时变量that，解决作用域不够的问题
    that.setData({
      model: [],
      number: []
    });
    wx.request({
          url: 'https://www.zqzqsmile.xyz/substorage/login',
          data:{
            area:JSON.stringify(this.data.area_name)},
          method:'POST',
          header: {
            'content-type': 'application/json' // 默认值
          },
         
          success: function(res) {
            console.log(res.data);
var obj = res.data;


for(var i=0;i<obj.length;i++)
{
  var model1 = obj[i].model,
  number1 = obj[i].number,
  model = that.data.model,
  number = that.data.number;

  model.push(model1);
  number.push(number1);

   that.setData({
    model: that.data.model,
    number: that.data.number
  });   
  // 调试时打开该语句
}
// console.log(obj.model);
// console.log(that.data.number);
          }
        })
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})