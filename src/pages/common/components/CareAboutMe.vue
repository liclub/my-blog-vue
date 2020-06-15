<template>
	<el-row class="care-list">
		<el-row class="care-title">
			<span class="iconfont">&#xe60c;</span>
			关注我们
		</el-row>
		<img class="ewm" src="@/assets/img/ewmpic.png" />
	</el-row>
</template>

<script>

export default {
  name: 'CareAboutMe'
}
</script>

<style lang="less" scoped>
	.care-list {
		width: 400px;
		.care-title{
			list-style: none;
			height: 31px;
			line-height: 31px;
			border-bottom: 1px solid #eee;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		    overflow: hidden;
		    font-size: 15px;
		    border-bottom: 1px solid #ccc;
			font-size: 16px;
		}
		.ewm {
			margin: 10px 0 60px 60px;
		}
	}
</style>
