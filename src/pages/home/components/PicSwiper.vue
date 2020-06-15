<template>
	<el-row class="pic-swiper">
		<el-row class="pic-swiper-child">
			<el-col :span="16">
				<el-col class="pic-fade" :span="16">
					<transition-group>
						<img v-for="(item,index) of picList" 
						 :src="item.imgSrc"
						 :key="item.id"
						 v-show="index==swiperId"
						 >
					</transition-group>
				</el-col>
				<el-col class="pic-fade-idx" :span="4">
					<img v-for="(item,index) of picList" 
						 :src="item.imgSrc"
						 :key="item.id"
						 :class="getColor(index)"
						 @click="handlePicRight(index)"
						 >
				</el-col>
			</el-col>
			<el-col :span="4">
				<suggest-art :artObj="artObj"></suggest-art>
			</el-col>
			
		</el-row>
		
	</el-row>

</template>

<script>
import SuggestArt from '@/pages/home/components/SuggestArt'
export default {
  name: 'PicSwiper',
  components: {
  	SuggestArt
  },
  props: {
  	picList: Array,
  	artObj: Object
  },
  data () {
  	return {
  		timer: null,
  		swiperId: 0
  	}
  },
  mounted () {
  	this.picSwiperInit()
  },
  methods: {
  	picSwiperInit () {
  		if(this.timer) {
  			clearInterval(this.timer);
  			this.timer = null
  		}
  		this.timer = setInterval(()=>{
       		if(this.swiperId >= 3) {
       			this.swiperId = 0;
       			return
       		}
       		this.swiperId++;
    	},5000)
  	},
  	getColor (index) {
  		return index==this.swiperId ? 'newBorder' : ''
  	},
  	handlePicRight (idx) {
  		clearInterval(this.timer);
  		this.swiperId = idx;
  		this.picSwiperInit()
  	}
  },
  computed: {
  	// newBorder (index) {
  	// 	return index==swiperId ? 'border-color:rgb(86, 87, 87)' : 'border-color:#ccc'
  	// }
  }
}
</script>

<style lang="less" scoped>
	.pic-swiper {
		padding: 0 10%;
		margin: 10px 0;
		.pic-swiper-child {
			width: 1268px;
		}
		.pic-fade {
			height: 295px;
			width: 575px;
			position: relative;
			img{
				width: 100%;
				height: 100%;
				position: absolute;
			    left: 0;
			    top: 0;
			    right: 0;
			}
		}
		.pic-fade-idx {
			height: 294px;
			width: 150px;
			margin-left: 10px;
			img{
				width: 122px;
				height: 62px;
				border: 5px solid #ccc;
			}
			.newBorder {
				border: 5px solid rgb(86, 87, 87);
			}
		}
	}
	.v-enter-active, .v-leave-active {
	  transition: opacity 1s;
	}
	.v-enter, .v-leave-to{
	  opacity: 0;
	}
</style>
