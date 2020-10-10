import PubSub from 'pubsub-js'

import request from "../../../utils/request";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    day: '',
    month: '',
    recommendList: [], // 推荐歌曲列表
    index: 0, // 标识音乐详情页是哪一首音乐
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 更新日期状态
    this.setData({
      day: new Date().getDate(),
      month: new Date().getMonth() + 1
    })
    
    
    // 获取推荐歌曲
    let recommendListData = await request('/recommend/songs')
    this.setData({
      recommendList: recommendListData.recommend
    })
    
    
    // 订阅songDetail发布的消息
    PubSub.subscribe('switchType', (msg, type) => {
      console.log('来自songDetail发布的消息： ');
      console.log(msg, type);
      let {recommendList, index} = this.data;
      if(type === 'pre'){ // 上一首
        (index === 0) && (index = recommendList.length);
        index -= 1;
      }else { // 下一首
        (index === recommendList.length - 1) && ( index = -1);
        index += 1;
      }
      
      this.setData({
        index
      })
      let musicId = recommendList[index].id;
      // 将 musicId 回传给songDetail页面
      PubSub.publish('musicId', musicId )
      
    })
  },
  

  // 跳转至songDetail
  toSongDetail(event){
    let musicId = event.currentTarget.dataset.musicid;
    let index = event.currentTarget.dataset.index;
    // 更新index的状态数据
    this.setData({
      index
    })
    wx.navigateTo({
      url: '/songPackage/pages/songDetail/songDetail?musicId=' + musicId
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
