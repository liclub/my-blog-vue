<template>
	<el-row class="tag-list">
		<el-row class="tag-title">
			<span class="iconfont">&#xe60c;</span>
			 热门标签
		</el-row>
		<ul class="tag-ul">
			<li class="tag-li" 
				@mouseover="changebg(index,1)"
				@mouseout="changebg(index,0)"
				v-for="(item,index) of tagList" 
				:key="item.id"
				:ref="index">
				{{item.name}}
			</li>
		</ul>
	</el-row>
</template>

<script>
export default {
  name: 'TasgList',
  props: {
  	tagList: Array
  },
  methods: {
  	changebg (index,type) {
  		let ref = this.$refs[index][0];
  		if (type == "1") {
  			ref.style.background="#f26868"
  		}else{
  			ref.style.background=""
  		}
  		
  	}
  }
}
</script>

<style lang="less" scoped>
	.tag-list {
		.tag-title {
			border-bottom: 1px solid #ccc;
			font-size: 16px;
			height: 30px;
		}
		.tag-ul {
			list-style: none;
			display: flex;
			flex-direction: row;
		    flex-wrap: wrap;
		    justify-content: left;
		    width: 400px;
		    .tag-li {
		    	border: 1px solid #ccc;
			    padding: 6px;
			    border-radius: 5px;
			    color: black;
			    margin: 12px;
			    font-size: 16px;
			    cursor: pointer;
		    }
		}
	}
</style>
