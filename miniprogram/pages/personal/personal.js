// pages/personal/personal.js
const db = wx.cloud.database({
  env: 'manhua-6gzdgw9udfcf0adc'
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    userage: '',
    password: '',
    againword: ''
  },
  // 获取并且设置定义的用户名和密码
  getUsername: function (e) {
    console.log(e.detail.value)
    this.setData({
      username: e.detail.value
    })
  },
  getAge: function (e) {
    console.log(e.detail.value)
    this.setData({
      userage: e.detail.value
    })
  },
  getPassword: function (e) {
    console.log(e.detail.value)
    this.setData({
      password: e.detail.value
    })
  },
  getAgainword: function (e) {
    console.log(e.detail.value)
    this.setData({
      againword: e.detail.value
    })
  },
  registerClick: function (e) {
    var that = this
    if (this.data.username == 0 || this.data.userage == 0 || this.data.password == 0 || this.data.againword == 0) {
      wx.showModal({
        title: '温馨提示',
        content: '您的注册信息输入不全！',
        showCancel: true
      })
    } else {
      if (this.data.password == this.data.againword) {
        db.collection('users').add({
            data: {
              name: this.data.username,
              password: this.data.password,
              age: this.data.userage
            }
          })
          .then(res => {
            wx.showModal({
              title: '恭喜你',
              content: '注册成功！',
              showCancel: true
            })
            console.log(res)
          })
      } else {
        wx.showModal({
          title: '温馨提示',
          content: '确认有误,请再次输入密码！',
          showCancel: true
        })
      }
    }
  },
  resetClick: function (e) {
    this.setData({
      username: '',
      userage: '',
      password: '',
      againword: ''
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