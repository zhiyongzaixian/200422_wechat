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
const path = require('path');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const app = new express();


// express.static() 向外暴露静态资源
// express.json() 用来处理post请求 application/json 的请求参数
// express.urlencoded() 用来处理post请求 x-www--form-urlencoded的请求参数： a1=value1&b1=value2
// 全局使用， 通常放在所有请求的上边
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// __dirname：绝对根路径
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(multipartMiddleware);

// 局部使用
app.post('/login', multipartMiddleware,  (req, res) => {
  console.log(req.body);
  res.send('post请求返回的数据');
})


app.post('/login2',  (req, res) => {
  console.log(req.body);
  res.send('post请求返回的数据');
})

app.listen('3001', (err) => {
  if(err){
    console.log('服务器启动失败');
    console.log(err);
    return;
  }
  console.log('服务器启动成功');
  console.log('服务器地址: http://localhost:3001');
})
