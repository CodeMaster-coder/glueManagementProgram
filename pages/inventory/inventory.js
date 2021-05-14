//这两行写在page({})外面
const app = getApp()
var util = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    viewShowed: false, //显示结果view的状态
    inputVal: "", // 搜索框值
    inputNum: "",//数量输入值
    inputProductDate:"",
    inputEffectiveDate:"",
    inputVoucher:"",
    catList: [], //搜索渲染推荐数据
    list1: [
    "AMV167S30",
    "AMV167S30001",
    "AMV160500001",
    "AMV167S30002",
    "AKL450F40（高）",
    "AMV153W24",
    "AMV167S31",
    "AMV167S3101",
    "AKL450F4001",
    "AKL450F4002",
    "AKD465F01",
    "AKL450F40（低）",
    "AKD465F0101",
    "AMV160500",
    "AKD465F0102",
    "AMV153W2402",
    "AKL450F15",
       
      ],
      model:[],
      modelNumber:[],
      productDate:[],
      effectiveDate:[],
      voucher:[],
      del:[],
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {},
  inputNumber:function(e){this.setData({inputNum:e.detail.value})},
  inputVouVal:function(e){this.setData({inputVoucher:e.detail.value})},
  bindDateChange1: function(e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      inputProductDate: e.detail.value
    })
  },
  bindDateChange2: function(e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      inputEffectiveDate: e.detail.value
    })
  },
  //添加按钮功能实现
  addition:function(e){
var model1 = this.data.inputVal,
modelNumber1 = this.data.inputNum,
productDate1 = this.data.inputProductDate,
effectiveDate1 = this.data.inputEffectiveDate,
voucher1 = this.data.inputVoucher,
del1 = '删除',
model = this.data.model,
modelNumber = this.data.modelNumber,
productDate = this.data.productDate,
effectiveDate = this.data.effectiveDate,
voucher = this.data.voucher,
del = this.data.del;
if(!model1 || !modelNumber1 || !productDate1 || !effectiveDate1 || !voucher1){
  wx.showToast({
    title: '数据不能为空，添加失败！！！',
    icon: 'none',
    duration: 2000
  })
}else{model.push(model1);
  modelNumber.push(modelNumber1);
  productDate.push(productDate1);
  effectiveDate.push(effectiveDate1);
  voucher.push(voucher1);
  del.push(del1);
  
  this.setData({
    model: this.data.model,
    modelNumber:this.data.modelNumber,
    productDate:this.data.productDate,
    effectiveDate:this.data.effectiveDate,
    voucher:this.data.voucher,
    del:this.data.del,
    inputVal: "", 
    inputNum: "",
    inputProductDate:"",
    inputEffectiveDate:"",
    inputVoucher:"",
  });
  console.log(this.data.model);
  console.log(this.data.modelNumber);
  console.log(this.data.productDate);
  console.log(this.data.effectiveDate);
  console.log(this.data.voucher);
  console.log(this.data.del);
}
  },
 // 清空按钮功能实现
 hideInput: function() {
  this.setData({
    inputVal: "",
    inputNum:'',
    inputProductDate:"",
    inputEffectiveDate:"",
    inputVoucher:"",
    viewShowed: false,
  });
},
 //删除按钮功能实现
 delelement: function (e) {
  const that = this
  const delid = e.currentTarget.dataset.index
    that.data.model.splice(delid, 1),
    that.data.modelNumber.splice(delid, 1),
    that.data.productDate.splice(delid, 1),
    that.data.effectiveDate.splice(delid, 1),
    that.data.voucher.splice(delid, 1),
    that.data.del.splice(delid, 1)
  that.setData({
    model: that.data.model,
    modelNumber: that.data.modelNumber,
    productDate:this.data.productDate,
    effectiveDate:this.data.effectiveDate,
    voucher:this.data.voucher,
    del: that.data.del
  })
  console.log(that.data.model);
  console.log(that.data.modelNumber);
},


  // 键盘抬起事件2
  inputTyping: function(e) {
    var value = e.detail.value
    var that = this;
    var list1 = that.data.list1
    if (value == '') {
      that.setData({
        viewShowed: false,
      });
    } else {
    //“这里需要特别注意，不然在选中下拉框值的时候，下拉框又出现”
      if (e.detail.cursor) { //e.detail.cursor表示input值当前焦点所在的位置
        var arr = [];
        for (var i = 0; i < list1.length; i++) {
          if (list1[i].indexOf(value) >= 0) {
            arr.push(list1[i]);
          }
        }
        that.setData({
          viewShowed: true,
          carList: arr
        });
      }
    }
  },

   // 获取选中推荐列表中的值
   name: function(res) {
    console.log(res.currentTarget.dataset.index);
    var index = res.currentTarget.dataset.index
    var that = this;
    that.setData({
      inputVal: that.data.carList[index],
      viewShowed: false,
    });
    console.log(that.data.inputVal);
  },
 //表单提交按钮
 formSubmit:  util.throttle(function (ev) {

  var that = this,
  model = that.data.model,
  modelNumber = that.data.modelNum,
  productDate = that.data.productDate,
  effectiveDate = that.data.effectiveDate,
  voucher = that.data.voucher;
  if (model != '' & modelNumber != '' & productDate != '' & effectiveDate != '' & voucher != '') {
   wx.request({
     url: 'https://www.zqzqsmile.xyz/inventory_glue/login',
     data:{
         model:JSON.stringify(that.data.model),
         modelNum:JSON.stringify(that.data.modelNumber),
         productDate:JSON.stringify(that.data.productDate),
         effectiveDate:JSON.stringify(that.data.effectiveDate),
         voucher:JSON.stringify(that.data.voucher),
       },
         method:'POST',
         header:{'content-type': 'application/x-www-form-urlencoded'},
         success:function(res){
           console.log(res.data);
           if (model != '' & modelNumber != '' & productDate != '' & effectiveDate != '' & voucher != '' & res.data.status == true){
             wx.showToast({
               title: '提交成功！！！',
               icon: 'none',
               duration: 2000
             })
             that.setData({
              model: [],
              modelNumber: [],
              productDate:[],
              effectiveDate:[],
              voucher:[],
              del: [],
            })}
           
     }
         })} else {
          wx.showToast({
            title: '数据不能为空，提交失败！！！',//这里打印出登录成功
            icon: 'none',
            duration: 1000
          })
      }    
  
}),

//表单重置按钮
formReset: function (e) {
 this.setData({
   model: [],
   modelNumber: [],
   productDate:[],
   effectiveDate:[],
   voucher:[],
   del: []
 })

 console.log('form发生了reset事件')
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