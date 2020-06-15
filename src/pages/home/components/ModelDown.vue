<template>
		<ul class="owner-item">
        <transition>
          <div class="owner-model" ref="model" style="top:-120px" >
            <p>{{item.title}}</p>
            <p>{{item.id}}</p>
          </div>
        </transition>
        <li @mouseover="modelMouseOver()" 
            @mouseout="modelMouseOut()">
            
            <img class="owner-img" :src="item.imgSrc">
        </li>
      
		</ul>
</template>

<script>

export default {
  name: 'ModelDown',
  props: {
  	item: Object,
    idx: Number
  },
  data () {
  	return {
  		downTimer: null,
  		upTimer: null,
  	}
  },
  methods: {
  	modelMouseOver () {
      console.log('down')
  		let model = this.$refs.model
  		var _this = this
  		_this.downTimer = setInterval(function() {
  			let top = model.style.top
  			if(parseInt(top.toString().replace('px','')) >= 0) {
  				model.style.top = 0
  				clearInterval(_this.downTimer);
  				return
  			}
  			top = parseInt(top.toString().replace('px','')) + 5
  			model.style.top = top+'px'
  		},10)
  		
  	},
  	modelMouseOut () {
      console.log('up')
  		let model = this.$refs.model;
		  var _this = this
  		_this.upTimer = setInterval(function() {
  			let top = model.style.top
  			if(parseInt(top.toString().replace('px','')) <= -120) {
  				model.style.top = -120
  				clearInterval(_this.upTimer);
  				return
  			}
  			top = parseInt(top.toString().replace('px','')) - 5
  			model.style.top = top+'px'
  		},10)
  	}
  }
}
</script>

<style lang="less" scoped>
	.owner-item {
		width: 188px;
		height: 120px;
		position: relative;
		margin: 0 20px;
		overflow: hidden;
    z-index: 99;
		.owner-model {
			width: 188px;
		    height: 120px;
		    position: absolute;
		    background: #ccc;
		    background-color: black;
		    opacity: 0.4;
		    cursor: pointer;
        z-index: 9;
		    p {
		    	color: #fff;
			    margin-top: 10px;
			    text-align: center;
			    line-height: 21px;
		    }
		}
		.owner-img {
			width: 188px;
			height: 120px;
      z-index: 9;
		}
	}
</style>
