import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [], // banner轮播图数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 发送请求获取banner的数据
    // wx.request({
    //   url: 'http://localhost:3000/banner',
    //   data: {type: 2},
    //   success: (res) => {
    //     console.log(res);
    //     // 更新bannerList数据
    //     this.setData({
    //       bannerList: res.data.banners
    //     })
    //   },
    //   fail: (err) => {
    //     console.log(err);
    //   }
    // })
  
  
    let bannerListData = await request('/banner', {type: 2})
    this.setData({
      bannerList: bannerListData.banners
    })

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
