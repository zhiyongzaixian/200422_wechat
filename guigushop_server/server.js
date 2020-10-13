const Koa = require('koa');
const router = require('./router');

// 生成应用实例
const app = new Koa();

app
	.use(router.routes())
	.use(router.allowedMethods())
	
	
app.listen('3000' ,(err) => {
	if(err){
		console.log(err);
		return;
	}
	
	console.log('服务器启动成功')
	console.log('http://localhost:3000')
})
