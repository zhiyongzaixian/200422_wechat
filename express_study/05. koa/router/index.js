const KoaRouter = require('koa-router');
// 生成路由器
const router = new KoaRouter();


// express: req, res, next
// koa: ctx, next
router.get('/login', (ctx, next) => {
  console.log(ctx.query);
  // 返回数据
  ctx.body = 'koa返回的数据'
  
});






module.exports = router;
