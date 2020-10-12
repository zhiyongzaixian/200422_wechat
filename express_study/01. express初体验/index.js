const express = require('express');

// 1. 创建应用实例
const app = new express();

// 3. 注册接口
// request: 请求信息对象  response: 响应信息对象
app.get('/', (request, response) => {
  console.log('1111');
  response.end('success data')
});

app.get('/login', (request, response) => {
  console.log('2222');
  response.end('login success data')
});


app.post('/register', (request, response) => {
  console.log('3333');
  response.end('register success data')
});

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
