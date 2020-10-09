import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoGroupList: [], // 导航标签的数据
    navId: '', // 导航标签的id
    videoList: [], // 视频列表数据
    videoId: '', // 视频id标识
    isTriggered: false, // 标识是否下拉刷新
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
      isTriggered: false,
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
  
  // 点击开始/继续播放的视频回调
  handlePlay(event){
    let vid = event.target.id;
    
    /*
    * 思考： 如何找到上一个播放视频的标签实例
    *   1. 首次点击播放： this.videoContext === undefined
    *   2. 再次点击播放： this.videoContext === 上次点击播放视频的实例
    * js设计模式： 单例模式
    *   1. 原本需要生成多个对象的模式，现在只需要一个对象去控制，在生成新的对象的时候就把之前的对象覆盖掉
    * js设计模式： 工厂函数模式
    *   1. 批量生产多个对象
    *   2. 生成的多个对象属性大致相同
    *   3. 不能明确到底生产出来的对象到底是谁的实例
    * */
    // 创建控制video标签的实例
  
    this.setData({
      videoId: vid
    })
    // this.vid !== vid && this.videoContext && this.videoContext.stop();
    
    // if(this.videoContext){
    //   if(this.vid !== vid){
    //     this.videoContext.stop();
    //   }
    // }
    // this.vid = vid;
    this.videoContext = wx.createVideoContext(vid);
    this.videoContext.play();
    // this.videoContext.stop();
  },
  
  // 自定义下拉刷新的回调
  handleRefresher(){
    // 发送请求获取最新的数据
    console.log('发送请求');
    this.getVideoList(this.data.navId);
  },
  
  // scroll-view上拉加载的回调
  handleScrollToLower(){
    console.log('scroll-view触底了。。。');
    // 网易云没有上拉加载的接口
    /*
    * 分页：
    *   1. 分类:
    *     1) 前端分页
    *     2) 后端分页
    *   2. 前端分页
    *     1) 统一获取所有的数据
    *     2) 对数据的处理在前端
    *   3. 后端分页
    *     1) 根据请求参数的不同(page, size)获取不同的数据
    *     2) 处理数据在后端
    *
    *
    * */
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
    console.log('页面下拉刷新。。。');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面上拉触底。。。');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
