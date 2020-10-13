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
		<scroll-view scroll-x="true" class="navScroll" enable-flex>
			<view class="navItem">
				每日推荐
			</view>
			<view class="navItem">
				每日推荐
			</view><view class="navItem">
				每日推荐
			</view><view class="navItem">
				每日推荐
			</view><view class="navItem">
				每日推荐
			</view><view class="navItem">
				每日推荐
			</view><view class="navItem">
				每日推荐
			</view><view class="navItem">
				每日推荐
			</view><view class="navItem">
				每日推荐
			</view><view class="navItem">
				每日推荐
			</view><view class="navItem">
				每日推荐
			</view><view class="navItem">
				每日推荐
			</view><view class="navItem">
				每日推荐
			</view><view class="navItem">
				每日推荐
			</view><view class="navItem">
				每日推荐
			</view><view class="navItem">
				每日推荐
			</view><view class="navItem">
				每日推荐
			</view><view class="navItem">
				每日推荐
			</view><view class="navItem">
				每日推荐
			</view>
		</scroll-view>
	
		
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				
			};
		},
		mounted() {
			this.getIndexData();
			
			console.log(this.$store.state.home.initData)
		},
		methods: {
			async getIndexData(){
				let result = await request('/getIndexData')  // 小程序
				// let result = await request('/api/getIndexData') // H5
				console.log('result: ', result)
			}
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
				font-size 26rpx


.test
	font-size 0
</style>
