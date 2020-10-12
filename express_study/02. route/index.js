/**
  作者: Created by zhiyongzaixian
  说明: 路由
    1. 本质:
      路由其实就是索取和给与的关系， key(路由地址): value(请求对应的路由返回的数据)
    2. 分类：
      1) 前端路由
      2) 后端路由
    3. 前端路由
      1) 不需要发请求给服务器， 从请求到返回数据都是在前端完成的
      2) 应用场景： SPA(single page application)
      3) 解析： 由对应的js库(vue-router, react-router-dom)
    4. 后端路由
      1) 需要发请求走网络传输层
      2) 应用场景: 前后端交互
      3) 解析: 对应的服务器
    5. 路由参数:
      1) GET请求
        1. query: url?key1=value1&key2=value2 ---> req.query
        2. params: url/:a/:b ---> req.params
      2) POST请求
        1. query
        2. params
        3. body： post请求请求体参数不能获取，需要使用中间件获取对应的请求参数
    6. res方法列表：
      1. res.set() 设置响应头
      2. res.end() 直接返回数据，不做任何处理
      3. res.send() 根据返回数据的不同自动做出不同的响应处理，比如： 如果是中文的数据，就会自动添加content-type属性
      4. res.json() 返回是json数据
      5. redirect() 重定向，通常返回的是一个新的链接地址
      6. res.download() 返回文件，前端接收到响应，自动下载该文件
*/
const express = require('express');

const app = new express();

// query + params参数
app.get('/login/:a/:b', (req, res) => {
  console.log('11111');
  console.log(req.query);
  console.log(req.params);
  res.end('login success data');
});


app.get('/methodTest', (req, res) => {
  
  // 设置响应头
  // res.set({
  //   'content-type': 'text/html;charset=utf-8'
  // })
  // res.end('成功 data');
  res.send('成功 data');
});


// query
// app.post('/register', (req, res) => {
//   console.log('query: ', req.query);
//   res.end('register success data');
// })

// params
// app.post('/register/:a', (req, res) => {
//   console.log('params: ', req.params);
//   res.end('register success data');
// })


// body
app.post('/register', (req, res) => {
  // post请求请求体参数不能获取，需要使用中间件获取对应的请求参数
  console.log('body: ', req.body);
  res.end('register success data');
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
