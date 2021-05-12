
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
  password: ''
  },
  // 获取输入账号 
usernameInput: function (e) {
  this.setData({
    username: e.detail.value
  })
},

// 获取输入密码 
passwordInput: function (e) {
  this.setData({
    password: e.detail.value
  })
},

//登录处理
login: function (e) {
if(this.data.username == 'PFH2B-1' & this.data.password == 'glue'){     
  wx.reLaunch({       
   url: '../inventory/inventory',      
   }) 
}else if(this.data.username == '' || this.data.password == '' || 
this.data.username !== 'PFH2B-1' || this.data.password !== 'glue' ){
  wx.showToast({
    title: '请输入正确的账号密码',
    icon: 'none',
    duration: 2000
  })
}
},



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {},





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