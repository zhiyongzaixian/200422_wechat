<template>
	<view class="indexContainer">
		<!-- 头部区域  -->
		<view class="header">
			<image class="logo" src="/static/images/logo.png" mode=""></image>
			<view class="search">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" placeholder="搜索商品" placeholder-class="placeholder">
			</view>
			<button>北方汉子</button>
		</view>
	
		<!-- 导航区域  -->
		<scroll-view scroll-x="true" class="navScroll" enable-flex v-if="indexData.kingKongModule">
			<view class="navItem" :class="{active: navIndex === -1}"  @click="changeNav(-1)">
				推荐
			</view>
			<view class="navItem " :class="{active: navIndex === index}" @click="changeNav(index)"  v-for="(item, index) in indexData.kingKongModule.kingKongList" :key='item.L1Id'>
				{{item.text}}
			</view>
		</scroll-view>
	
		<!-- 内容区 -->
		<scroll-view scroll-y="true" class="contentScroll">
			<Recommend></Recommend>
		</scroll-view>
	</view>
</template>

<script>
	import {mapState, mapActions, mapMutations} from 'vuex'
	import request from '../../utils/request.js'
	import Recommend from '../../components/recommend/recommend.vue'
	export default {
		
		data() {
			return {
				navIndex: -1
			};
		},
		components:{
			Recommend
		},
		mounted() {
			// this.getIndexData();
			// 组件实例和store耦合度太高
			// this.$store.dispatch('getIndexDataAction')
			// console.log(this.$store.state.home.initData)
			this.getIndexDataAction();
		},
		methods: {
			...mapActions({
				getIndexDataAction: 'getIndexDataAction'
			}),
			async getIndexData(){
				let result = await request('/getIndexData')  // 小程序
				// let result = await request('/api/getIndexData') // H5
			},
			// 点击切换导航标识
			changeNav(navIndex){
				this.navIndex = navIndex
			}
		},
		computed: {
			...mapState({
				indexData: state => state.home.indexData
			})
		}
	}
</script>

<style lang="stylus">
	/* 
		stylus
		： 1.省略大括号
			 2.省略封号和冒号
			 3.支持样式嵌套
	 
	 */
	.indexContainer
		.header
			display flex
			padding 10rpx 0
			.logo
				width 140upx
				height 40upx
				margin 10upx 30rpx
			.search
				position relative
				width 420rpx
				height 60rpx
				background #eee
				.iconfont 
					position absolute
					font-size 30rpx
					top 15rpx
					left 10rpx
				input
					height 60rpx
					width 370rpx
					margin-left 50rpx
					.placeholder
						font-size 26rpx
			button
				width 144rpx
				height 60rpx
				text-align center
				line-height 60rpx
				font-size 24rpx
				color: #BB2C08
				padding 0 4rpx
				margin 0 10rpx
		.navScroll
			white-space nowrap
			.navItem
				display inline-block
				width 140rpx
				height 80rpx
				text-align center
				line-height 80rpx
				box-sizing border-box
				font-size 26rpx
				/* &: 父级引用， 代表所处位置的父级 */
				&.active
					border-bottom 1rpx solid #BB2C08
		.contentScroll
			height calc(100vh - 160rpx)

</style>
