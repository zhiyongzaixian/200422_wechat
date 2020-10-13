const KoaRouter = require('koa-router');
// 生成路由器
const router = new KoaRouter();


// express: req, res, next
// koa: ctx, next
router.get('/login', (ctx, next) => {
  console.log(ctx.request.query.a);
  // 返回数据
  ctx.body = 'koa返回的数据'
});


router.get('/login2/:a', (ctx, next) => {
  console.log(ctx.params.a);
  // 返回数据
  ctx.body = 'koa返回的数据'
});

router.post('/register', (ctx) => {
  console.log(ctx.request.body);
  
  ctx.body = 'register返回的数据'
})




module.exports = router;
