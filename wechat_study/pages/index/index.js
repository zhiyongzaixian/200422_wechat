// pages/index/index.js
// 初始化页面实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '初始化的测试数据111'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // debugger;
    console.log('onLoad() 监听页面加载')

    // this.setData({
    //   msg: '修改之后的值222'
    // })
    // console.log(this.data.msg) // 
    // 修改状态数据: this.setData()
    // setTimeout(() => {
    //   this.setData({
    //     msg: '修改之后的值222'
    //   })
    //   console.log(this.data.msg) // 
    // }, 2000)

    
    
  },

  handleParent(){
    console.log('parent')
  },
  handleChild(){
    console.log('child')
  },

  toLogs(){
    // 跳转至logs页面
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady() 监听页面初次渲染完成')

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow() 监听页面显示')

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide()')

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload()')

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