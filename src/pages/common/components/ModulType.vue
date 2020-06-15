<template>
	<el-row class="module-type">
		<el-row class="art-title">
			<span class="iconfont">&#xe60c;</span>
			栏目导航
		</el-row>
		<div class="modules">
			<div class="module">
				WEB前端
			</div>
			<div class="module">
				编程语言
			</div>
			<div class="module">
				网络
			</div>
			<div class="module">
				算法
			</div>
			<div class="module">
				数据库
			</div>
			<div class="module">
				操作系统
			</div>
		</div>
		
	</el-row>
</template>

<script>

export default {
  name: 'ModulType'
}
</script>

<style lang="less" scoped>
	.module-type {
		.art-title{
			list-style: none;
			height: 31px;
			line-height: 31px;
			border-bottom: 1px solid #eee;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		    overflow: hidden;
		    font-size: 20px;
		    margin-top: 17px;
		}
		.modules {
			display: flex;
			flex-direction: row;
		    flex-wrap: wrap;
		    justify-content: center;
		    width: 392px;
		    margin-top: 10px;
		    .module {
		    	width: 40%;
			    text-align: center;
			    padding: 9px 0;
			    border: 1px solid #ccc;
			    margin: 8px;
			    border-radius: 7px;
			    cursor: pointer;
		    }
		}
	}
</style>
