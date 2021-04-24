// pages/mybook/mybook.js
Page({

  /* 页面的初始数据 */
  data: {
    cateItems: [{
        cate_id: 1,
        cate_name: '篇章1',
        children: [{
            child_id: 1,
            name: '第一话',
            image: "https://manhua.acimg.cn/manhua_detail/0/30_15_03_ade0e881e1c0b07c55eb7d41573edede3_11977442.jpg/800"
          },
          {
            child_id: 2,
            name: '第二话',
            image: "https://manhua.acimg.cn/manhua_detail/0/30_21_40_a4af0390f2604f8de1c67fe5d731a0b3c_50010168.jpg/800"
          },
          {
            child_id: 3,
            name: '第三话',
            image: "https://manhua.acimg.cn/manhua_detail/0/30_21_46_a5b8c8f1b8b9f9e0c5502fddad1110bea_66718590.jpg/800"
          },
          {
            child_id: 2,
            name: '第四话',
            image: "https://manhua.acimg.cn/manhua_detail/0/30_21_51_a48368186e39fdf6e988634e175e9b89e_62693104.jpg/800"
          },
          {
            child_id: 2,
            name: '第五话',
            image: "https://manhua.acimg.cn/manhua_detail/0/30_22_03_a0a96927d189654bbab65a8d3bb7bc00b_18479623.jpg/800"
          },
          {
            child_id: 2,
            name: '第六话',
            image: "https://manhua.acimg.cn/manhua_detail/0/30_22_09_ac6635afed50ea6dc4df4553a3c901003_75055298.jpg/800"
          },
          {
            child_id: 2,
            name: '第七话',
            image: "https://manhua.acimg.cn/manhua_detail/0/30_22_09_ac6635afed50ea6dc4df4553a3c901003_75055298.jpg/800"
          },
          {
            child_id: 2,
            name: '第八话',
            image: "https://manhua.acimg.cn/manhua_detail/0/30_22_09_ac6635afed50ea6dc4df4553a3c901003_75055298.jpg/800"
          },
        ]
      },
      {
        cate_id: 2,
        cate_name: '篇章2',
        children: [{
          child_id: 1,
          name: '第一话',
          image: "https://manhua.acimg.cn/manhua_detail/0/30_15_03_ade0e881e1c0b07c55eb7d41573edede3_11977442.jpg/800"
        },
        {
          child_id: 2,
          name: '第二话',
          image: "https://manhua.acimg.cn/manhua_detail/0/30_21_40_a4af0390f2604f8de1c67fe5d731a0b3c_50010168.jpg/800"
        },
        {
          child_id: 3,
          name: '第三话',
          image: "https://manhua.acimg.cn/manhua_detail/0/30_21_46_a5b8c8f1b8b9f9e0c5502fddad1110bea_66718590.jpg/800"
        },
        {
          child_id: 2,
          name: '第四话',
          image: "https://manhua.acimg.cn/manhua_detail/0/30_21_51_a48368186e39fdf6e988634e175e9b89e_62693104.jpg/800"
        },
        {
          child_id: 2,
          name: '第五话',
          image: "https://manhua.acimg.cn/manhua_detail/0/30_22_03_a0a96927d189654bbab65a8d3bb7bc00b_18479623.jpg/800"
        },
        {
          child_id: 2,
          name: '第六话',
          image: "https://manhua.acimg.cn/manhua_detail/0/30_22_09_ac6635afed50ea6dc4df4553a3c901003_75055298.jpg/800"
        },
        {
          child_id: 2,
          name: '第七话',
          image: "https://manhua.acimg.cn/manhua_detail/0/30_22_09_ac6635afed50ea6dc4df4553a3c901003_75055298.jpg/800"
        },
        {
          child_id: 2,
          name: '第八话',
          image: "https://manhua.acimg.cn/manhua_detail/0/30_22_09_ac6635afed50ea6dc4df4553a3c901003_75055298.jpg/800"
        },
      ]
      },
      {
        cate_id: 3,
        cate_name: '篇章3'
      },
      {
        cate_id: 4,
        cate_name: '篇章4'
      },
      {
        cate_id: 5,
        cate_name: '篇章5'
      },
      {
        cate_id: 6,
        cate_name: '篇章6'
      },
      {
        cate_id: 7,
        cate_name: '篇章7'
      },
      {
        cate_id: 8,
        cate_name: '篇章8'
      },
      {
        cate_id: 9,
        cate_name: '篇章9'
      },
      {
        cate_id: 10,
        cate_name: '篇章10'
      },
      {
        cate_id: 11,
        cate_name: '篇章11'
      },
      {
        cate_id: 12,
        cate_name: '篇章12'
      },
      {
        cate_id: 13,
        cate_name: '篇章13'
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  switchRightTab: function (e) {
    let id = e.target.dataset.id,
      index = e.target.dataset.index;
    this.setData({
      curNav: id,
      curIndex: index
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