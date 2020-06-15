<template>
	<el-row class="header-com">
			<el-row class="log-pic">
				<el-col class="home-log" :span="12"> 
					<img class="log-1" src="@/assets/img/logo.png" />
				</el-col>
				<el-col class="home-log1" :span="12">
					<img class="log-2" src="@/assets/img/pic-02.png" />
				</el-col>
			</el-row>
			<el-row :class="headDeal">
				<el-row class="header">
						<el-col v-for="(item,index) of menuList"
								:key="item.id"
								@mouseover.native="handleMenu(index,0)" 
								@mouseout.native="handleMenu(index,1)"
								@click.native="handleMenu(index,2)"
								:ref="index"
								:style="{background:item.bg}"
								:span="2">
								{{item.title}}
					</el-col>
				</el-row>
			</el-row>
	</el-row>
</template>

<script>
// {
// id: '0007',
// title: '留言',
// menuId: '5',
// bg:''
// }	
export default {
  name: 'Header',
  data () {
  	return {
  		menuClass: 'menu-col',
  		menuList: [{
  			id: '0001',
  			title: '首页',
  			menuId: '0',
  			bg: 'rgb(242, 104, 104)'
  		},{
  			id: '0002',
  			title: '学无止境',
  			menuId: '1',
  			bg:''
  		},{
  			id: '0004',
  			title: '足迹',
  			menuId: '2',
  			bg:''
  		},{
  			id: '0005',
  			title: '作品',
  			menuId: '3',
  			bg:''
  		},{
  			id: '0006',
  			title: '关于我们',
  			menuId: '4',
  			bg:''
  		}],
  		headDeal: 'header-com-child',
  		checkMenuId: this.mennuId,
  		checkIdx: '0'
  	}
  },
  props : {
  	mennuId: String
  },
  mounted () {
  	var _this = this
  	window.addEventListener('scroll', function () {
  		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      	if (scrollTop >=150) {
        	_this.headDeal = 'header-com-child scrollDeal'
      	}else {
      		_this.headDeal = 'header-com-child'
      	}
    })
  },
  destroyed () {
    window.removeEventListener('scroll');
  },
  methods: {
  	handleMenu (idx,type) {
  		if(idx == this.checkMenuId) return
  		const ref = this.$refs[idx];
  		if (type == "0") {//over
  			this.menuList[idx].bg = 'rgb(242, 104, 104)'
  		}else if (type == "1") {//out
  			this.menuList[idx].bg = ''
  		}else if (type == "2") {//click
  			this.menuList[idx].bg = 'rgb(242, 104, 104)'
  			this.menuList[this.checkIdx].bg = ''
  			this.checkIdx = idx;
  			this.checkMenuId = idx;
			this.$emit('menuIdChange',idx)
  		}
  	}
  }
}
</script>

<style lang="less" scoped>
	.header-com {
		width: 100%;
		background: url('../../../assets/img/pic-01.png') no-repeat;
		background-position: 70% 0;
		background-size: 20% 80%;
		.log-pic{
			padding: 0 10%;
			height: 150px;
		}
		.home-log, .home-log1{
			height: 100%;
			overflow: hidden
		}
		.log-1 {
			height: 74%;
			padding: 1%;
			float: left;
			margin-left: 20%
		}
		.log-2 {
			height: 70%;
			padding: 1%;
			float: left;
		}
		.header-com-child {
			width: 100%;
			background: #565757;
			.header {
				overflow: hidden;
				height: 40px;
				width: 1600px;
				line-height: 40px;
				background: #565757;
				color:#fff;
				padding: 0 10%;
				.el-col {
					text-align: center;
					cursor: pointer;
					width: 120px;
					margin: 0 10px;
				}
				.menu-col {
					background: rgb(242, 104, 104);
				}
			}
		}
		.scrollDeal {
			position: fixed;
		    top: 0;
		    z-index: 99999;
		}
	}
</style>
