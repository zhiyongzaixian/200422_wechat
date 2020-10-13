<template>
	<view class="indexContainer">
		<!-- 头部区域  -->
		<view class="header">
			<image class="logo" src="/static/images/logo.png" mode=""></image>
			<view class="search">
				<input type="text" placeholder="搜索商品">
			</view>
			<button>北方汉子</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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
			.logo
				width 140upx
				height 40upx
				margin 10upx 30rpx
			.search
				width 420rpx
				height 60rpx
			button
				width 144rpx
				height 60rpx
				text-align center
				line-height 60rpx
				font-size 24rpx
				color: #BB2C08
				padding 0 4rpx

</style>
