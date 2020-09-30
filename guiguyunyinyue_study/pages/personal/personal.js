import request from '../../utils/request'

let startY = 0;
let moveY = 0;
let moveDistance = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverTransform: 'translateY(0)',
    coverTransition: '',
    userInfo: {}, // 用户信息
    recentPlayList: [], // 最近播放记录
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 读取本地存储的用户信息
    let userInfo = wx.getStorageSync('userInfo');
    if(userInfo){
      this.setData({
        userInfo
      })
      
      
      let recentListData = await request('/user/record', {uid: userInfo.userId, type: 0});
      let recentPlayList = recentListData.allData.slice(0, 10);
      let index = 0;
      recentPlayList = recentPlayList.map(item => {
        item.id = index++;
        return item;
      })
      this.setData({
        recentPlayList
      })
    }
  },
  
  handleTouchStart(event){
    this.setData({
      // transition: 过渡的属性 过渡的时间 过渡的曲线(贝塞尔曲线)
      coverTransition: ''
    })
    startY = event.touches[0].clientY;
  },
  handleTouchMove(event){
    moveY = event.touches[0].clientY;
    // 计算手指移动的距离
    moveDistance = moveY - startY;
    
    if(moveDistance <= 0){
      return;
    }
    if(moveDistance >= 80){
      moveDistance = 80;
    }
    // 修改移动的状态值coverTransform
    this.setData({
      coverTransform: `translateY(${moveDistance}rpx)`
    })
  },
  handleTouchEnd(){
    this.setData({
      coverTransform: `translateY(0rpx)`,
      // transition: 过渡的属性 过渡的时间 过渡的曲线(贝塞尔曲线)
      coverTransition: 'transform 1s linear'
    })
  
  },
  
  // 跳转至登录login界面
  toLogin(){
    if(this.data.userInfo.nickname){
      return;
    }
    wx.navigateTo({
      url: '/pages/login/login'
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
