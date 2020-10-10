import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [], // banner轮播图数据
    recommendList: [], // 推荐歌曲
    topList: [], // 排行榜数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 发送请求获取banner的数据
    let bannerListData = await request('/banner', {type: 2})
    this.setData({
      bannerList: bannerListData.banners
    })

    // 获取推荐歌曲的数据
    let recommendListData = await request('/personalized', {limit: 15})
    this.setData({
      recommendList: recommendListData.result
    })
    
    // 获取排行榜数据
    /*
    * 需求分析：
    *   1. 需要idx的值获取对应分类的数据
    *   2. idx取值范围： 0-20, 只需要前5个，我们的取值范围0-4；
    *   3. 需要发5次请求
    *
    * */
    let index = 0;
    let resultArr = [];
    while(index < 5){
      let result = await request('/top/list', {idx: index++});
      // slice  splice
      let obj = {name: result.playlist.name, tracks: result.playlist.tracks.slice(0, 3)};
      resultArr.push(obj);
  
      // 更新topList的状态数据
      // 每次拿到数据就更新，可以尽早显示到页面上，用户体验较好
      this.setData({
        topList: resultArr
      })
    }
    
    
    // // 更新topList的状态数据
    // 需要等待五次请求全部结束去统一更新状态，会导致长时间白屏，用户体验差
    // this.setData({
    //   topList: resultArr
    // })
  },
  
  // 跳转至recommend页面
  toRecommend(){
    
    wx.navigateTo({
      url: '/songPackage/pages/recommend/recommend'
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
