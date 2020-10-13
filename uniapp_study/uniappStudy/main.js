import Vue from 'vue'
import App from './App'
// 关闭VUe的提示
Vue.config.productionTip = false

// 声明App组件代表整个应用
App.mpType = 'app' // application

const app = new Vue({
    ...App
})
app.$mount()


// new Vue({
// 	render: h => h(App)
// })