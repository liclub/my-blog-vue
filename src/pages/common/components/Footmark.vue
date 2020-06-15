<template>
	<el-row class="footmark">
		<el-col :span="4">
			<ul class="years-ul">
				<li>2017</li>
				<li>2016</li>
				<li>2015</li>
			</ul>
		</el-col>
		<el-col :span="16" class="details">
			<ul>
				<li>
					<div class="years">2017</div>
					<div class="detail">
						<div class="detail-time left">2017.04.23</div>
						<div class="detail-content left year-detail">博客评论逐渐放弃第三方评论插件</div>
					</div>
					<div class="detail">
						<div class="detail-time left">2017.04.23</div>
						<div class="detail-content left year-detail">博客评论逐渐放弃第三方评论插件</div>
					</div>
					<div class="detail">
						<div class="detail-time left">2017.04.23</div>
						<div class="detail-content left year-detail">博客评论逐渐放弃第三方评论插件</div>
					</div>
					<div class="detail">
						<div class="detail-time left">2017.04.23</div>
						<div class="detail-content left year-detail">博客评论逐渐放弃第三方评论插件</div>
					</div>
				</li>
				<li>
					<div class="years">2016</div>
					<div class="detail">
						<div class="detail-time left">2017.04.23</div>
						<div class="detail-content left year-detail">博客评论逐渐放弃第三方评论插件</div>
					</div>
					<div class="detail">
						<div class="detail-time left">2017.04.23</div>
						<div class="detail-content left year-detail">博客评论逐渐放弃第三方评论插件</div>
					</div>
				</li>
				<li>
					<div class="years">2015</div>
					<div class="detail">
						<div class="detail-time left">2017.04.23</div>
						<div class="detail-content left year-detail">博客评论逐渐放弃第三方评论插件</div>
					</div>
					<div class="detail">
						<div class="detail-time left">2017.04.23</div>
						<div class="detail-content left year-detail">博客评论逐渐放弃第三方评论插件</div>
					</div>
				</li>
			</ul>
		</el-col>
	</el-row>
</template>

<script>

export default {
  name: 'Footmark'
}
</script>

<style lang="less" scoped>
	.footmark {
	    overflow: hidden;
	    width: 1600px;
	    padding: 2% 10%;
	    background: #f0f0f0;
	}
	ul {
		list-style: none;
	}
	.details {
		margin-left: 100px;
	}
	.years-ul {
		padding-left: 150px;
	}
	.years-ul li {
		width: 60px;
	    height: 35px;
	    line-height: 35px;
	    text-align: center;
	    /*background: rgb(242, 104, 104);*/
	    margin: 10px;
	    cursor: pointer;
	    border: 1px solid #ccc;
	    /*color: #fff;*/
	}
	.years {
		font-style: italic;
	    font-family: Georgia;
	    color: #f26868;
	    font-size: 24px;
	    margin-left: 100px;
	    padding-left: 32px;
	    position: relative;
	    height: 40px;
    	line-height: 40px;
	}
	.years::before {
		content: '';
		height: 12px;
		width: 12px;
		position: absolute;
		top: 15px;
		left: -14px;
		background: rgb(242, 104, 104);
		border-radius: 100%;
		margin-left: 20px;
		z-index: 2;
	}
	.years::after {
		content: '';
		height: 50px;
		width: 3px;
		position: absolute;
		background: #ddd;
		left: 10px;
		z-index: 1
	}
	.detail {
		overflow: hidden;
		height: 50px;
    	line-height: 50px;
	}
	.left {
		float: left;
	}
	.detail-time {
		padding-right: 20px;
		position: relative;
		font-size: 16px;
	}
	.detail-content {
		background: #fff;
	    width: 571px;
	    height: 42px;
	    line-height: 42px;
	    margin-left: 27px;
		padding-left: 20px;
		font-size: 17px;	
	}
	.detail-time::after {
		content: '';
		height: 8px;
		width: 8px;
		position: absolute;
		top: 20px;
		right: -13px;
		background: rgb(242, 104, 104);
		border-radius: 100%;
		z-index: 2
	}
	.year-detail {
		position: relative;
	}
	.year-detail::before {
		content: '';
		height: 50px;
		width: 3px;
		position: absolute;
		background: #ddd;
		left: -20px;
		z-index: 1
	}
	.year-detail::after {
		content: '';
	    left: -8px;
	    top: 15px;
	    width: 0;
	    height: 0;
	    border-width: 8px 8px 8px 0;
	    border-style: solid;
	    border-color: transparent #fff transparent transparent;
	    position: absolute;
	}
</style>
