/**
  作者: Created by zhiyongzaixian
  说明: 中间件
    1. 本质：
      1) 函数： (req, res, next) => {}
      2) req: 请求信息对象
      3) res: 响应信息对象
      4) next: 本质也是函数，用来调用 || 执行下一个中间件
    2. 作用:
      1) 用来添加一些扩展功能
      2) 处理req, res对象中的一些属性
      3) 拦截任意请求，拦截之后针对请求作出处理
    3. 使用:
      1) app.use(中间件函数)
    4. 注意点:
      1. 当注册的请求和中间件同时使用，先匹配谁，谁先执行
*/

const express = require('express');

const app = new express();


app.use((req, res, next) => {
  console.log('中间件111');
  next();
});


app.get('/', (req, res, next) => {
  console.log('get请求');
  res.send('get请求返回的数据');
});






app.listen('3001', (err) => {
  if(err){
    console.log('服务器启动失败');
    console.log(err);
    return;
  }
  console.log('服务器启动成功');
  console.log('服务器地址: http://localhost:3001');
})
