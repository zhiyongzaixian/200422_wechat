import config from './config.js'
export default (url, data={}, method='GET') => {
	return new Promise((resolve, reject) => {
		// 执行异步任务
		uni.request({
			url: config.host + url,
			data,
			method,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}