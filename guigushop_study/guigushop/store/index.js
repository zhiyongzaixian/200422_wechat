import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.js'
import cart from './modules/cart.js'
// 面试题： Vue.use都做了哪些事情
Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		home,
		cart
	}
})

export default store;