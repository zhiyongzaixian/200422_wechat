/**  2020/9/29
  作者: Created by zhiyongzaixian
  说明: 封装函数 & 封装组件
  1. 封装函数：
    1) 相同的代码保留函数体内
    2) 动态的数据应该抽取成形参，供使用者调用的时候传入实参
    3) 使用者根据自身的情况动态的传入参数
    4) 一个良好的功能函数要规定传入的实参类型及默认值(ES6形参默认值)
  2. 封装组件:
    1) 组件体内保留固定的代码段
    2) 将动态的部分抽取成props属性
    3) 使用者根据自身的情况动态的以标签属性的形式传入： <Button type='danger' />
    4) 一个良好的组件应该规定props属性的必要性，默认值，数据类型：
      props: {
        username: {
          required: true,
          type: String,
          default: '我是默认值'
        }
      }
*/


// 封装一个发请求的功能函数
import config from './config'

// let musicStr = wx.getStorageSync('cookie').find(item => /MUSIC_U/.test(item));
// let cookie = musicStr.split(';')[0];

/**  2020/9/30
  作者: Created by zhiyongzaixian
  说明: 操作cookie流程说明：
    1. 需要本地读取cookie
      1) 有
      2) 没有
    2. 有cookie
      1) 获取到的是一个数组，需要的cookie是该数组中某一个字段(包含MUSIC_U) find找到某一个元素就停止查找
      2) /MUSIC_U/ 表达的意思包含MUSIC_U ---> /MUSIC_U/.test(item)
      3) 拆分字符串： split()   面试题： 如何判断一个字符串是否是回文
    3. 没有cookie
      1) 预处理，防止报错
      2) 实现： 如果本地cookie，设置cookie为空串
  
*/


// let cookie = wx.getStorageSync('cookie')?wx.getStorageSync('cookie').find(item => /MUSIC_U/.test(item)).split(';')[0]:'';
let cookie = wx.getStorageSync('cookie')?wx.getStorageSync('cookie').find(item => item.indexOf('MUSIC_U') !== -1).split(';')[0]:'';


export default (url, data={}, method='GET') => {
  return new Promise((resolve, reject) => {
    // 1. new Promise的产生实例，同时实例的状态pending
    wx.request({
      url: config.host + url,
      data,
      method,
      header: {
        // cookie: wx.getStorageSync('cookie').toString()
        cookie: cookie
      },
      success: (res) => {
        console.log(res);
        // 当前的请求是登录请求
        if(data.isLogin){
          // 将对应的cookies存入至本地
          wx.setStorage({
            key: 'cookie',
            data: res.cookies
          })
        }
        resolve(res.data); // 修改promise实例的状态为成功状态resolved
      },
      fail: (err) => {
        reject(); // 修改promise实例的状态为失败状态rejected
      }
    })
  })
}
