require('./db');
const express = require('express');
const path = require('path');
const cors = require('cors');

const StudentsModel = require('./collections/students');
// 1. 创建应用实例
const app = new express();

app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))

// app.use(cors())
app.post('/register', async (req, res) => {
  // 1. 获取请求参数
  let {username, password} = req.body;
  // 2. 处理请求数据
  /*
  * 1. 根据当前注册的用户名查询数据库是否已有该用户
  * 2. 如果已有，直接返回，不能注册
  * 3. 如果没有，将当前注册用户的信息存入至数据库，再返回注册成功的信息
  * */
  try{
    let result = await StudentsModel.findOne({username});
    if(result){ // 已有该用户名
      res.send({
        code: 502,
        data: '该用户已存在'
      })
    }else {
      await StudentsModel.create({username, password});
      
      res.send({
        code: 200,
        data: '注册成功'
      })
    }
  }catch (e) {
    res.send({
      code: 502,
      data: '暂时无法注册，稍后再试'
    })
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
