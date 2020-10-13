const Koa = require('koa');
const router = require('./router');

const app = new Koa();

app
  .use(router.routes()) // 允许使用路由
  .use(router.allowedMethods()) // 声明使用路由的方法


app.listen('3000', (err) => {
  if(err){
    console.log('服务器启动失败');
    console.log(err);
    return;
  }
  
  console.log('服务器启动成功');
  console.log('服务器地址: http://localhost:3000');
})
