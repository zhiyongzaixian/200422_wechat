import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoGroupList: [], // 导航标签的数据
    navId: '', // 导航标签的id
    videoList: [], // 视频列表数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 判断用户是否登录
    let userInfo =  wx.getStorageSync('userInfo')
    if(!userInfo){
      wx.reLaunch({
        url: '/pages/login/login'
      })
      return;
    }
    // 发请求获取导航标签的数据
    let videoGroupListData = await request('/video/group/list')
    this.setData({
      videoGroupList:videoGroupListData.data.slice(0, 14),
      navId: videoGroupListData.data[0].id
    })
    
    
    
    // 获取导航标签对应的视频列表数据
    // let videoListData = await request('/video/group', {id: this.data.navId});
    // let index = 0;
    // let videoList = videoListData.datas.map(item => {
    //   item.id = index++;
    //   return item;
    // })
    // this.setData({
    //   videoList
    // })
    this.getVideoList(this.data.navId);
  },
  // 动态获取视频数据
  async getVideoList(navId){
    let videoListData = await request('/video/group', {id: navId});
    wx.hideLoading();
    let index = 0;
    let videoList = videoListData.datas.map(item => {
      item.id = index++;
      return item;
    })
    this.setData({
      videoList
    })
  },

  // 切换导航id
  changeNavId(event){
    // 显示提示消息
    wx.showLoading({
      title: '正在加载'
    })
    this.setData({
      // navId: event.currentTarget.dataset.id // data-key: value
      navId: event.currentTarget.id>>>0, // id
      videoList: []
    })
    this.getVideoList(this.data.navId);
    
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
