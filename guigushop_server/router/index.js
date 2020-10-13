const KoaRouter = require('koa-router');

// 生成路由器
const router = new KoaRouter();

// 主页index的数据
const indexData = require('../datas/index.json');
console.log(typeof indexData) // object
router.get('/getIndexData', (ctx) => {
	ctx.body = indexData;
});


module.exports = router;