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
export default (url, data={}, method='GET') => {
  return new Promise((resolve, reject) => {
    // 1. new Promise的产生实例，同时实例的状态pending
    wx.request({
      url: config.mobileHost + url,
      data,
      method,
      success: (res) => {
        resolve(res.data); // 修改promise实例的状态为成功状态resolved
      },
      fail: (err) => {
        reject(); // 修改promise实例的状态为失败状态rejected
      }
    })
  })
}
