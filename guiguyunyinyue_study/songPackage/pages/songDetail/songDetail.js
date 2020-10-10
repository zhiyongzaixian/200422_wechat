import PubSub from 'pubsub-js'
import moment from 'moment'
import request from '../../../utils/request'

// 获取全局唯一的应用实例：
const appInstance = getApp();
console.log(appInstance);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay: false, // 标识音乐是否在播放
    songDetail: {}, // 音乐详情
    musicId: '', // 音乐id
    musicLink: '', // 音乐链接
    durationTime: '00:00', // 音乐的总时长
    currentTime: '00:00', // 实时的播放时长
    currentWidth: 0, // 实时进度条的长度
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    
    // 原生的小程序中对路由传参长度有限制，如果过长会自动截取
    // console.log(JSON.parse(options.song));
    let musicId = options.musicId;
    this.getMusicInfo(musicId);
  
    // 判断当前页面的音乐是否在播放
    if(appInstance.globalData.isMusicPlay && appInstance.globalData.musicId === musicId){
      // 当前页面音乐在播放
      this.setData({
        isPlay: true
      })
    }
  
    // 创建管理音频的实例
    this.backgroundAudioManager = wx.getBackgroundAudioManager();
    // 播放
    this.backgroundAudioManager.onPlay(() => {
      this.changeMusicPlayState(true);
      appInstance.globalData.musicId = musicId;
    })
    // 暂停
    this.backgroundAudioManager.onPause(() => {
      this.changeMusicPlayState(false);
    })
    // 停止
    this.backgroundAudioManager.onStop(() => {
      this.changeMusicPlayState(false);
    })
    
    // 监听音乐自然播放结束
    this.backgroundAudioManager.onEnded(() => {
      // 自动切换至下一首
      PubSub.publish('switchType', 'next');
    })
    // 监听音乐播放的时候进度
    this.backgroundAudioManager.onTimeUpdate(() => {
      // console.log(this.backgroundAudioManager.duration);
      // console.log(this.backgroundAudioManager.currentTime);
      // 格式化实时播放的事件
      let currentTime = moment(this.backgroundAudioManager.currentTime*1000).format('mm:ss');
      
      let currentWidth = this.backgroundAudioManager.currentTime/this.backgroundAudioManager.duration*450;
      this.setData({
        currentTime,
        currentWidth
      })
    })
    
    
    // 订阅recommend发布的消息
    PubSub.subscribe('musicId',  (msg, musicId) => {
      console.log('recommend发布的消息： ', musicId);
      // 获取音乐信息
      this.getMusicInfo(musicId);
      // 自动播放当前音乐
      this.musicControl(true, musicId);
    })
    
  },
  
  // 封装获取音乐详情的功能函数
  async getMusicInfo(musicId){
    let songDetailData = await request('/song/detail', {ids: musicId});
    // moment格式化时间的的单位是ms
    let durationTime = moment(songDetailData.songs[0].dt).format('mm:ss')
    
    this.setData({
      songDetail: songDetailData.songs[0],
      musicId,
      durationTime
    })
  
    // 动态设置窗口标题
    wx.setNavigationBarTitle({
      title: this.data.songDetail.name
    })
  },
  // 封装修改状态的函数
  changeMusicPlayState(isPlay){
    this.setData({
      isPlay
    })
    appInstance.globalData.isMusicPlay = isPlay;
  },
  
  // 点击播放/暂停的回调
  handleMusicPlay(){
    // 修改isPlay的状态
    let isPlay = !this.data.isPlay;
    this.setData({
      isPlay
    })
    let {musicId, musicLink} = this.data;
    this.musicControl(isPlay, musicId, musicLink);
  },
  // 封装控制音乐播放/暂停的功能函数
  async musicControl(isPlay, musicId, musicLink){
    
    if(isPlay){ // 播放
      // 之前没有现成的音乐链接
      if(!musicLink){
        let musicLinkData = await request('/song/url', {id: musicId});
        musicLink = musicLinkData.data[0].url;
  
        this.setData({
          musicLink
        })
      }
      this.backgroundAudioManager.src = musicLink;
      this.backgroundAudioManager.title = this.data.songDetail.name;
      
    }else { // 暂停
      this.backgroundAudioManager.pause(); // 暂停
    }
  },
  
  
  // 点击切换歌曲的回调
  switchSong(event){
    let type = event.target.id;
    
    // 停止当前音乐的播放
    this.backgroundAudioManager.stop();
    /*
    * 思路：
    *    1. 当前页面只有当前一首音乐的信息，没有办法找到上一首或者下一首音乐的信息
    *    2. recommend页面有音乐列表数据
    *    3. 需要将切换歌曲的类型交给 recommend 页面
    *
    *
    * */
    // 发布消息给recommend页面
    PubSub.publish('switchType', type);
    // PubSub.subscribe('musicId', (msg, musicId) => {
    //   console.log('recommend发布的消息： ', musicId);
    //
    //   // 取消订阅
    //   PubSub.unsubscribe('musicId')
    // })
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
    // 取消订阅
    PubSub.unsubscribe('musicId');
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
