module.exports = {
	devServer: {
		proxy: {
			'/api': {// 同代理服务器devServer约定好的接头暗号。url中是以/api开头的就需要代理
				target: 'http://localhost:3000',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '' // 去掉接头暗号
				}
			}
		}
	}
}