<template>
	<el-row class="myworking-list">
		<div class="title">
			<span class="iconfont">&#xe60c;</span>
			作品
		</div>
		<div class="myworkings">
			<div class="working">
				<img class="showimg" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2900192657,1479507956&fm=58&bpow=511&bpoh=513">
				<p class="title">我最帅你最丑</p>
				<p class="desc">我最帅你最丑我最帅你最丑我最帅你最丑我最帅你最丑我最帅你最丑</p>
				<p class="time">2018-12-12</p>
			</div>
			<div class="working">
				<img class="showimg" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2900192657,1479507956&fm=58&bpow=511&bpoh=513">
				<p class="title">我最帅你最丑</p>
				<p class="desc">我最帅你最丑我最帅你最丑我最帅你最丑我最帅你最丑我最帅你最丑</p>
				<p class="time">2018-12-12</p>
			</div>
			<div class="working">
				<img class="showimg" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2900192657,1479507956&fm=58&bpow=511&bpoh=513">
				<p class="title">我最帅你最丑</p>
				<p class="desc">我最帅你最丑我最帅你最丑我最帅你最丑我最帅你最丑我最帅你最丑</p>
				<p class="time">2018-12-12</p>
			</div>
			<div class="working">
				<img class="showimg" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2900192657,1479507956&fm=58&bpow=511&bpoh=513">
				<p class="title">我最帅你最丑</p>
				<p class="desc">我最帅你最丑我最帅你最丑我最帅你最丑我最帅你最丑我最帅你最丑</p>
				<p class="time">2018-12-12</p>
			</div>
			<div class="working">
				<img class="showimg" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2900192657,1479507956&fm=58&bpow=511&bpoh=513">
				<p class="title">我最帅你最丑</p>
				<p class="desc">我最帅你最丑我最帅你最丑我最帅你最丑我最帅你最丑我最帅你最丑</p>
				<p class="time">2018-12-12</p>
			</div>
			<div class="working">
				<img class="showimg" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2900192657,1479507956&fm=58&bpow=511&bpoh=513">
				<p class="title">我最帅你最丑</p>
				<p class="desc">我最帅你最丑我最帅你最丑我最帅你最丑我最帅你最丑我最帅你最丑</p>
				<p class="time">2018-12-12</p>
			</div>
		</div>
	</el-row>
</template>

<script>
export default {
  name: 'MyWorkingList',
  props: {
  	
  }
}
</script>

<style lang="less" scoped>
	.myworking-list {
		margin-left: 10%;
		margin-top: 24px;
    	width: 775px;
    	border-right: 1px dashed #ccc;
    	padding-right: 36px;
    	.title {
    		font-size: 17px;
		    height: 20px;
		    line-height: 20px;
		    padding: 7px 0;
		    font-weight: 600;
    	}
    	.myworking {
    		overflow: hidden;
    	}
    	.working {
			width: 196px;
		    border: 1px solid #eee;
		    padding: 10px;
		    margin: 14px;
		    border-radius: 8px;
		    float: left;
    	}
    	.working img {
	    	width: 100%;
			height: 119px;
	    }
	    .desc {
	    	overflow: hidden;
		    text-overflow: ellipsis;
		    display: -webkit-box;
		    -webkit-line-clamp: 3;
		    -webkit-box-orient: vertical;
		    border-bottom: 1px solid #ccc;
		    padding-bottom: 7px;
	    }
	    .time {
	    	height: 12px;
		    line-height: 20px;
		    text-align: right;
		    padding: 5px;
	    }
	}
</style>
