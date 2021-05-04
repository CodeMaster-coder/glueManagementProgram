
//这两行写在page({})外面
const app = getApp()
var util = require("../../utils/util.js")
// pages/demo05/demo05.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //班组单选框
    shiftTeam: [
      { id: '1', value: 'A' },
      { id: '2', value: 'B' }
    ],
    //当前选中数组的下标值
    customIndex: [0, 0, 0],
    //当前选中数组
    onlyArray: [
      [],
      [],
      []
    ],
    //customArray假设为我们从后台获取到的json数据
    customArray: [
      //2.1侧围
      {
        name: '2.1侧围',
        product: [
          { name: 'AMV167S30' }, 
          { name: 'AMV167S30001' }, 
          { name: 'AMV160500001' }, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.2侧围
      {
        name: '2.2侧围',
        product: [
          { name: 'AMV167S30' }, 
          { name: 'AMV167S30001' }, 
          { name: 'AMV167S30002' }, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.1门盖
      {
        name: '2.1门盖',
        product: [
          { name: 'AKL450F40（高）' }, 
          { name: 'AMV153W24' }, 
          { name: 'AMV167S31' }, 
          { name: 'AMV167S3101' }, 
          { name: 'AKL450F4001' }, 
          { name: 'AKL450F4002' }, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.2门盖
      {
        name: '2.2门盖',
        product: [
          { name: 'AKD465F01' }, 
          { name: 'AMV167S31' }, 
          { name: 'AMV167S3101' }, 
          { name: 'AKL450F40（低）' }, 
          { name: 'AKL450F4001' }, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.1底板分拼
      {
        name: '2.1底板分拼',
        product: [
          { name: 'AKD465F0101' }, 
          { name: 'AMV160500' }, 
          { name: 'AMV167S30' }, 
          { name: 'AMV167S30001' }, 
          { name: 'AMV167S30002' }, 
          { name: 'AKD465F0102' }, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.2底板分拼
      {
        name: '2.2底板分拼',
        product: [
          { name: 'AKD465F01' }, 
          { name: 'AMV167S30' }, 
          { name: 'AMV167S30001' }, 
          { name: 'AMV167S30002' }, 
          { name: 'AKD465F0102' }, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.1底板主线
      {
        name: '2.1底板主线',
        product: [
          { name: 'AKD465F0101' }, 
          { name: 'AMV167S30' }, 
          { name: 'AMV167S30001' }, 
          { name: 'AMV167S30002' }, 
          { name: 'AKD465F0102' }, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.2底板主线
      {
        name: '2.2底板主线',
        product: [
          { name: 'AKD465F01' }, 
          { name: 'AMV160500' }, 
          { name: 'AMV167S30001' }, 
          { name: 'AMV167S30002' }, 
          { name: 'AKD465F0102' }, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.1总拼
      {
        name: '2.1总拼',
        product: [
          { name: 'AMV160500' }, 
          { name: 'AMV167S30' }, 
          { name: 'AMV167S30002' }, 
          { name: 'AKL450F40（低）' }, 
          { name: 'AKL450F4001' }, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.2总拼
      {
        name: '2.2总拼',
        product: [
          { name: 'AKL450F40（高）' }, 
          { name: 'AKL450F40（低）' }, 
          { name: 'AMV167S30' }, 
          { name: 'AMV167S30002' }, 
          { name: 'AMV153W2402' }, 
          { name: 'AKL450F15' }, 
          { name: 'AMV160500' }, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
    ],
  },
  //多列自定义选择器改变value的方法
  bindCustomPickerChange: function (e) {
    var customArray = this.data.customArray,
      customIndex = this.data.customIndex,
      onlyArray = this.data.onlyArray;

    console.log('picker发送选择改变，携带值为', e.detail.value);
    //此处e.detail.value为当前选择的列的下标值数组，如[0,1,0]

    console.log('picker最终选择值为：', onlyArray[0][customIndex[0]], onlyArray[1][customIndex[1]], onlyArray[2][customIndex[2]]);
    this.setData({
      customIndex: e.detail.value
    })
  },

//多列自创选择器换列方法
  bindCustomPickerColumnChange: function (e) {
    var customArray = this.data.customArray,
      customIndex = this.data.customIndex,
      onlyArray = this.data.onlyArray;

    customIndex[e.detail.column] = e.detail.value;
    // console.log(onlyArray);

    var searchColumn = () => {
      for (var i = 0; i < customArray.length; i++) {
        var arr1 = [];
        if (i == customIndex[0]) {
          for (var j = 0; j < customArray[i].product.length; j++) {
            arr1.push(customArray[i].product[j].name);
          }
          onlyArray[1] = arr1;
        }
      };
    }

    switch (e.detail.column) {
      case 0:
        customIndex[1] = 0;
        customIndex[2] = 0;
        searchColumn();
        break;
      case 1:
        customIndex[2] = 0;
        searchColumn();
        break;
    }
    this.setData({
      onlyArray: onlyArray,
      customIndex: customIndex
    });
  },




  //表单提交按钮。
  formSubmit:  util.throttle(function (ev) {
    var that =this,
    customIndex = that.data.customIndex,
    postData = ev.detail.value,
    label1 = postData.label1,
    collectBody = postData.collectBody;
      
    if (label1 != '' & that.data.onlyArray[0][customIndex[0]] != '' & collectBody != '') {
wx.request({
url: 'https://www.zqzqsmile.xyz/collect_glue/login',
data:{
    label1:label1,
    section:that.data.onlyArray[0][customIndex[0]],
    model:that.data.onlyArray[1][customIndex[1]],
    modelNum:that.data.onlyArray[2][customIndex[2]],
    collectBody:postData.collectBody},
    method:'POST',
    header:{'content-type': 'application/x-www-form-urlencoded'},
    success:function(res){
      console.log(res.data);
      if (label1 != '' & that.data.onlyArray[0][customIndex[0]] != '' & collectBody != '' & res.data.status == true){
        wx.showToast({
          title: '提交成功！！！',
          icon: 'none', 
          duration: 2000
        })
        that.setData({
          label1:'',
          collectBody:''
        })}     
}
    })
  } 
  else {
    wx.showToast({
      title: '数据不能为空，提交失败！！！',
      icon: 'none',
      duration: 2000
    })
}  
}),

  //表单重置按钮
  formReset: function (e) {
    console.log('form发生了reset事件')
    this.setData({
      label1:'',
      collectBody:'',
    })
  },
 



  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: function (options) {
    var data = {
      customArray: this.data.customArray,
      customIndex: this.data.customIndex,
      onlyArray: this.data.onlyArray,
    };
    for (var i = 0; i < data.customArray.length; i++) {
      data.onlyArray[0].push(data.customArray[i].name);
    }
    for (var j = 0; j < data.customArray[data.customIndex[0]].product.length; j++) {
      data.onlyArray[1].push(data.customArray[data.customIndex[0]].product[j].name);
    }
    for (var k = 0; k < data.customArray[data.customIndex[0]].num.length; k++) {
      data.onlyArray[2].push(data.customArray[data.customIndex[0]].num[k].name);
    }
    this.setData(data);
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