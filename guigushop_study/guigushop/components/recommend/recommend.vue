<template>
	<view class="recommendContainer">
		<swiper class="banners" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/a64f1bb6383da9a04791027ff580171e.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/dd6c3b2181338b2a87e11b13d2d460de.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/d0fa0684fc81c6c192cab0987197f686.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	
	 <!-- policyDescList三个图标区域 -->
	 <view class="policyDescList">
		 <view class="policyItem" v-for="item in indexData.policyDescList" :key='item.desc'>
			 <image :src="item.icon"></image>
			 <text>{{item.desc}}</text>
		 </view>
	 </view>
	 
	 <!-- 10个小图标区域 kingKongList -->
	 <view class="kingKongList" v-if="indexData.kingKongModule">
		 <view class="kingKongItem" v-for="item in indexData.kingKongModule.kingKongList" :key='item.L1Id'>
			 <image :src="item.picUrl" mode=""></image>
			 <text>{{item.text}}</text>
		 </view>
	 </view>
	 
	 <CategoryModule :categoryModule='indexData.categoryModule'></CategoryModule>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import CategoryModule from '../categoryModule/categoryModule.vue'
	export default {
		components:{
			CategoryModule
		},
		computed:{
			...mapState({
				indexData: state => state.home.indexData
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.recommendContainer
		.banners
			width 100%
			height 350rpx
			image
				width 100%
				height 350rpx
		.policyDescList
			display flex
			.policyItem
				flex 1  /* flex-grow:1 flex-shrink:1 flex-basies:auto*/
				text-align center
				image 
					width 32rpx
					height 32rpx
					vertical-align middle
					margin-right 10rpx
				text
					font-size 24rpx
					vertical-align middle
		.kingKongList
			display flex
			flex-wrap wrap
			.kingKongItem
				width 20%
				display flex
				flex-direction column
				align-items center
				image
					width 110rpx
					height 110rpx
					margin 20rpx 0
				text
					font-size 26rpx
					
				
.test
	font-size 0
</style>
