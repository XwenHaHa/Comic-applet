// pages/data/data.js
const db = wx.cloud.database({
  env:'manhua-6gzdgw9udfcf0adc'
})

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:''
  },
  // 获取并且设置定义的用户名和密码
  getUsername:function(e){
    console.log(e.detail.value)
    this.setData({
      username:e.detail.value
    })
  },
  getPassword:function(e){
    console.log(e.detail.value)
    this.setData({
      password:e.detail.value
    })
  },
  loginClick:function(e){
    var that = this
    if(this.data.username.length==0 || this.data.password.length==0){
      wx.showModal({
        title:'温馨提示',
        content:'没有输入账号或密码！',
        showCancel:true
      })
    }else{
      db.collection('users').where({name:that.data.username}).get({
        success:function(res){
          console.log(res.data)
          if(that.data.password == res.data[0].password){
            wx.switchTab({
              url: '../cartoon/cartoon',
            })
          }else{
            wx.showModal({
              title:'错误提示',
              content:'您输入的密码有误！',
              showCancel:true
            })
          }
        }
      })
    }
  },
  registerClick:function(){
    wx.navigateTo({
      url: '../personal/personal',
    })
  },
  insert:function(){
    db.collection('users').add({
      data:{
        name:'lisi',
        password:'222',
        age:18
      }
    })
    .then(res=>{
      console.log(res)
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