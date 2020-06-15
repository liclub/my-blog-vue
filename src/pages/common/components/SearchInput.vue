<template>
	<el-row class="search">
		<div class="search-input">
			<input type="text" placeholder="请输入要搜索的内容" />
		</div>
		<div class="search-btn">搜索</div>
	</el-row>
</template>

<script>

export default {
  name: 'SearchInput'
}
</script>

<style lang="less" scoped>
	.search {
        width: 392px;
		display: flex;
		.search-input {
			flex: 1;
		    border: 1px solid #ccc;
		    border-top-left-radius: 6px;
		    border-bottom-left-radius: 6px;
		    input {
		    	border: none;
			    width: 100%;
			    height: 50%;
			    padding: 0 0 0 5px;
			    margin-top: 11px;
			    outline: none;
		    }
		}
		.search-btn {
		    color: #fff;
		    background: #565757;
		    width: 65px;
		    height: 41px;
		    text-align: center;
		    line-height: 40px;
		    border-bottom-right-radius: 5px;
		    border-top-right-radius: 5px;
		}
	}
</style>
