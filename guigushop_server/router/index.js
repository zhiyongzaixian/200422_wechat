const KoaRouter = require('koa-router');
const Fly=require("flyio/src/node")
const jwt = require('jsonwebtoken');
const fly=new Fly;
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



// 获取用户唯一标识openId的接口
router.get('/getOpenId', async (ctx) => {
	//1. 获取请求参数code
	let code = ctx.query.code;
	let appId = 'wx810e8b1fde386fde';
	let appSecret = '94120b535162fda4571464b07c0c2e68';
	let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`;
	
	// 2. 发请求给微信服务器获取用户标识
	let result = await fly.get(url)
	console.log(result.data)
	let openId = JSON.parse(result.data).openid;
	let userInfo = {
		username: 'curry',
		monay: 100000000000,
		openId
	}
	// 3. 需要对返回的数据加密
	let token = jwt.sign(userInfo, 'atguigu');
	// 4. 测试token反编译
	// let testResult = jwt.verify(token);
	// let testResult = jwt.verify(token, 'xxx');
	let testResult = jwt.verify(token, 'atguigu');
	console.log(testResult)
	ctx.body = token;
});


module.exports = router;