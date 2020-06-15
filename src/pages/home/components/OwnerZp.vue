<template>
	<el-row class="ownerZp">
		<div class="owner-title">个人作品</div>
		<div class="owner-div" >
			  <model-down v-for="(item,index) of ownerList" 
			 			  :key="item.id"  
			 			  :item="item" 
			 			  :idx="index">
			  </model-down>
		</div>
		
	</el-row>
</template>

<script>
import ModelDown from './ModelDown.vue'
export default {
  name: 'OwnerZp',
  components: {
  	ModelDown
  },
  props: {
    ownerList: Array
  },
  data () {
  	return {
  		
  	}
  }
}
</script>

<style lang="less" scoped>
	.ownerZp {
		padding: 0 10%;
		.owner-title {
			width: 85px;
		    height: 27px;
		    text-align: center;
		    line-height: 27px;
		    background: rgb(242, 104, 104);
		    color: #fff;
		    font-size: 15px;
		}
	}
	.owner-div {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		width: 1253px;
		height: 140px;
		border: 1px solid #ccc;
		overflow: hidden;
		padding-top: 21px;
	}
</style>
