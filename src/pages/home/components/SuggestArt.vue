<template>
	<el-row class="arg-list">
		<el-row class="art-title">
			<span v-if="artObj.type=='1'" class="iconfont">&#xe60c;</span>
			{{artObj.title}}
		</el-row>
		<el-row>
			<ul class="article">
				<li v-for="(item,index) of artObj.artList" :key="item.id">
					<span class="iconfont point-font">&#xec1e;</span>
					<a>{{item.title}}</a>
				</li>
			</ul>
		</el-row>
	</el-row>
</template>

<script>

export default {
  name: 'SuggestArt',
  props: {
  	artObj: Object
  },
  data () {
  	return {
  		
  	}
  }
}
</script>

<style lang="less" scoped>
	.arg-list {
		width: 400px;
		height: 300px;
		.art-title,.article li{
			list-style: none;
			height: 31px;
			line-height: 31px;
			border-bottom: 1px solid #eee;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		    overflow: hidden;
		    font-size: 15px;
		    cursor: pointer;
		    a:hover {
		    	color: #f26868
		    }
		}
		.art-title {
			border-bottom: 1px solid #ccc;
			font-size: 16px;
		}
		.point-font {
			font-size: 20px
		}
	}
</style>
