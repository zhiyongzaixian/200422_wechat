<template>
	<view class="cateGoryContainer">
		<view class="header">
			<view class="search">
				搜索商品
			</view>
		</view>
		
		<!-- 内容区 -->
		<view class="contentContainer">
			<view class="leftContainer">
				<scroll-view scroll-y="true" class="leftScroll">
					<view class="navItem " :class="{active: navIndex === index}" @click="changeNavIndex(index)" v-for="(item, index) in categoryList" :key='item.id'>
						{{item.name}}
					</view>
				</scroll-view>
			</view>
			<view class="rightContainer"></view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				categoryList: [],
				navIndex: 0, 
			};
		},
		mounted(){
			this.getCateGoryDatas();
		},
		methods: {
			async getCateGoryDatas(){
				this.categoryList = await request('/getCateGoryDatas')
			},
			changeNavIndex(navIndex){
				this.navIndex = navIndex
			}
		}
	}
</script>

<style lang="stylus">
	.cateGoryContainer
		.header
			padding 10rpx 0
			.search
				width 92%
				height 60rpx
				background #EEEEEE
				border-radius 10rpx
				font-size 26rpx
				line-height 60rpx
				text-align center
				margin 0 auto
		.contentContainer
			display flex
			border-top 1rpx solid #eee
			box-sizing border-box
			height calc(100vh - 80rpx)
			.leftContainer
				width 20%
				.leftScroll
					height calc(100vh - 82rpx)
					.navItem
						position relative
						height 80rpx
						line-height 80rpx
						font-size 26rpx
						text-align center
						&.active:before
							position absolute
							top 10rpx
							left 6rpx
							content ''
							width 2rpx
							height 60rpx
							background #BB2C08
			.rightContainer
				width 80%
				background green
</style>
