<template>
	<el-row class="pages">
		<div class="page" onmouseover="changebg(1)" onmouserout="changebg(0)">首页</div>
		<div class="page">1</div>
		<div class="page">2</div>
		<div class="page">3</div>
		<div class="page">4</div>
		<div class="page">5</div>
		<div class="page">6</div>
		<div class="page">7</div>
		<div class="page">上一页</div>
		<div class="page">下一页</div>
		<div class="page">尾页</div>
	</el-row>
</template>

<script>

export default {
  name: 'Pages'
}
</script>

<style lang="less" scoped>
	.pages {
	    margin-left: 10%;
		margin-top: 24px;
    	width: 775px;
    	padding-right: 36px;
    	display: flex;
	    flex-direction: row;
	    flex-wrap: nowrap;
	    align-content: left;
	    .page {
		    text-align: center;
		    height: 20px;
		    line-height: 20px;
		    border: 1px solid #ccc;
		    border-radius: 8px;
		    margin: 5px;
		    padding: 1px 16px;
		    cursor: pointer;
	    }
	}
</style>
