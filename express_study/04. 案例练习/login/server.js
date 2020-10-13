const express = require('express');
const path = require('path');
// 1. 创建应用实例
const app = new express();
const cors = require('cors');
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))

// app.use(cors())


// app.use((req, res, next) => {
//   res.set({
//     'Access-Control-Allow-Credentials': true, //允许后端发送cookie
//     'Access-Control-Allow-Origin':  '*', //任意域名都可以访问,或者基于我请求头里面的域
//     'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type', //设置请求头格式和类型
//     'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',//允许支持的请求方式
//     'Content-Type': 'application/json; charset=utf-8'//默认与允许的文本格式json和编码格式
//   })
//
//   next();
// }

app.post('/login', (req, res) => {
  // 1. 获取请求参数
  let {username, password} = req.body;
  password = password*1;
  console.log(username, password);
  // 2. 根据请求参数处理数据
  // 假设数据库已有的用户： {username: 'curry', password: 123123};
  let userInfo = {username: 'curry', password: 123123};
  if(username !== userInfo.username){
    res.send({
      code: 400,
      data: '用户名不存在'
    })
  }else {// 用户名存在
    if(password !== userInfo.password){
      res.send({
        code: 502,
        data: '密码错误'
      })
    }else {
      res.send({
        code: 200,
        data: '登录成功',
        info: userInfo
      })
    }
   
  }
  
  
  // 3. 返回响应数据
})



// 2. 监听端口号
app.listen('3000', (err) => {
  if(err){
    console.log('服务器启动失败');
    console.log(err);
    return;
  }
  
  console.log('服务器启动成功');
  console.log('服务器地址: http://localhost:3000');
});
