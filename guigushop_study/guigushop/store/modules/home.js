import request from '../../utils/request.js'
const state = {
	initData: '初始化测试数据',
	indexData: {}, // 主页的数据
}

const mutations = {
	// 修改主页数据
	changeIndexDataMutation(state, indexData){
		// Vue中在mutation中异步修改数据： 1. 可以修改  2. 修改以后Vue开发工具无法捕获最新的数据
		state.indexData = indexData;
	}
}


const actions = {
	async getIndexDataAction({commit}){
		// 1. 执行异步任务
		let indexData = await request('/getIndexData'); // 小程序
		// let indexData = await request('/api/getIndexData'); // H5
		// 2. 触发mutation，将异步数据交给mutation
		commit('changeIndexDataMutation', indexData)
	}
}



const getters = {
	
}


export default {
	state,
	mutations,
	actions,
	getters
}