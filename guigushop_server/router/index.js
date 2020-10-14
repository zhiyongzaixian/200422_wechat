const KoaRouter = require('koa-router');

// 生成路由器
const router = new KoaRouter();

// 主页index的数据
const indexData = require('../datas/index.json');
console.log(typeof indexData) // object
router.get('/getIndexData', (ctx) => {
	ctx.body = indexData;
});


// 主页分类的数据
const indexCateListData = require('../datas/indexCateList.json');
console.log(typeof indexData) // object
router.get('/getindexCateList', (ctx) => {
	ctx.body = indexCateListData;
});

// 分类页的数据
const categoryDatas = require('../datas/categoryDatas.json');
router.get('/getCateGoryDatas', (ctx) => {
	ctx.body = categoryDatas;
});


module.exports = router;