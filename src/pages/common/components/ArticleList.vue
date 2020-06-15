<template>
	<el-row class="article-list">
		<div class="title">
			<span class="iconfont">&#xe60c;</span>
			最新文章
		</div>
		<div class="article" v-for="(item,index) of articleList" :key="item.id">
			<div class="article-title">{{item.title}}</div>
			<div class="article-desc">发布时间&nbsp;:&nbsp;{{item.time}}分类&nbsp;:&nbsp;{{item.type}}</div>
			<div class="articel-info">{{item.desc}}</div>
			<div class="article-btn">查看全文</div>
		</div>
	</el-row>
</template>

<script>
export default {
  name: 'ArticleList',
  props: {
  	articleList: Array
  }
}
</script>

<style lang="less" scoped>
	.article-list {
		margin-left: 10%;
		margin-top: 24px;
    	width: 775px;
    	border-right: 1px dashed #ccc;
    	padding-right: 36px;
    	.title {
    		font-size: 17px;
		    height: 20px;
		    line-height: 20px;
		    border-bottom: 1px solid #ccc;
		    padding: 7px;
    	}
    	.article {
    		overflow: hidden;
		    border-bottom: 1px dashed #ccc;
		    padding-bottom: 10px;
			.article-title {
				height: 25px;
			    line-height: 25px;
			    font-weight: 600;
			    font-size: 20px;
			    padding: 10px;
			}
			.article-desc {
				font-size: 12px;
			    padding: 6px;
			    color: #ccc;
			}
			.articel-info {
				height: 25px;
			    line-height: 25px;
			    padding: 5px;
			}
			.article-btn {
				color: #fff;
			    background: #f26868;
			    float: right;
			    margin: 10px 43px 0 0;
			    width: 100px;
			    height: 28px;
			    text-align: center;
			    line-height: 28px;
			    border-radius: 8px;
			}
    	}
	}
</style>
