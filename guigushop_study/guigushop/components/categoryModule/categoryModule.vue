<template>
	<view class="categoryModuleContianer">
		<view class="categoryItem" v-for="item in categoryModule" :key='item.titlePicUrl'>
			<image class="titlePic" :src='item.titlePicUrl'></image>
			<scroll-view scroll-x="true" class="shopListScroll" enable-flex>
				<view class="shopItem" v-for="shopItem in item.itemList" :key='shopItem.id'>
					<image :src="shopItem.showPicUrl" mode=""></image>
					<view>{{shopItem.name}}</view>
				</view>
				<view class="shopItem more">
					查看更多>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		// props: ['categoryModule'],
		props: {
			categoryModule: {
				type: Array,
				required: true
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.categoryItem
		margin-bottom 20rpx
		.titlePic
			width 100%
			height 370rpx
		.shopListScroll
			white-space nowrap
			.shopItem 
				display inline-block
				width 200rpx
				margin-right 20rpx
				vertical-align top
				&.more
					width 200rpx
					height 200rpx
					background #EEEEEE
					line-height 200rpx
					text-align center
					font-size 26rpx
				image
					width 200rpx
					height 200rpx
					background #eee
				view
					overflow hidden
					text-overflow ellipsis
					white-space pre-wrap
					display -webkit-box
					-webkit-box-orient vertical
					-webkit-line-clamp 2
					font-size 26rpx
				
					
					
						
</style>
