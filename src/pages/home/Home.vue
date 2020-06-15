<template>
	<el-row class="home">
		<common-header :mennuId="menuId" @menuIdChange="handleMenuChange"></common-header>
    <template v-if="menuId=='0'">
      <pic-swiper :picList="picList" :artObj="sugArt"></pic-swiper>
      <owner-zp :ownerList="ownerList"></owner-zp>
    </template>
    <el-row class="row-ar" v-if="menuId=='0' || menuId=='1' || menuId=='3' || menuId=='4'">
      <el-col :span="16">
         <article-list :articleList="articleList" v-if="menuId=='0' || menuId=='1'"></article-list>
         <pages v-if="menuId=='1'"></pages>
         <MyWorkingList v-if="menuId=='3'"></MyWorkingList>
         <AbouteMe  v-if="menuId=='4'"></AbouteMe>
      </el-col>
      <el-col :span="4" class="row-col">
       <template v-if="menuId=='1' || menuId=='3' || menuId=='4'">
        <search-input></search-input>
        <modul-type></modul-type>  
       </template>
       <template v-if="menuId=='0' || menuId=='1' || menuId=='2' || menuId=='3'">
        <suggest-art :artObj="sugArt"></suggest-art>
        <tag-list :tagList="tagList"></tag-list>
        <care-about-me></care-about-me>
       </template>
      </el-col>
    </el-row>
    <Footmark v-if="menuId=='2'"></Footmark>
    <common-footer></common-footer>
	</el-row>
</template>

<script>
import axios from 'axios'
import CommonHeader from '@/pages/common/components/Header'
import PicSwiper from '@/pages/home/components/PicSwiper'
import OwnerZp from '@/pages/home/components/OwnerZp'
import ArticleList from '@/pages/common/components/ArticleList'
import SuggestArt from '@/pages/home/components/SuggestArt'
import TagList from '@/pages/home/components/TagList'
import CareAboutMe from '@/pages/common/components/CareAboutMe'
import CommonFooter from '@/pages/common/components/Footer'
import Pages from '@/pages/common/components/Pages'
import SearchInput from '@/pages/common/components/SearchInput'
import ModulType from '@/pages/common/components/ModulType'
import Footmark from '@/pages/common/components/Footmark'
import MyWorkingList from '@/pages/common/components/MyWorking'
import AbouteMe from '@/pages/common/components/AbouteMe'

export default {
  name: 'Home',
  data () {
  	return {
  		menuId: '0',
      articleList: [],
      tagList: [],
      ownerList: [],
      picList: [],
      sugArt: {}
  	}
  },
  components: {
  	CommonHeader,
  	PicSwiper,
  	OwnerZp,
    ArticleList,
    SuggestArt,
    TagList,
    CareAboutMe,
    CommonFooter,
    Pages,
    SearchInput,
    ModulType,
    Footmark,
    MyWorkingList,
    AbouteMe
  },
  mounted () {
     this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/static/home.json')
        .then(this.getHomeInfoSucc)
    },
  	handleMenuChange (idx) {
  		this.menuId = idx.toString()
  	},
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.articleList = data.articleList
        this.tagList = data.tagList
        this.ownerList = data.ownerList
        this.picList = data.picList
        this.sugArt = data.sugArt
      }
    }
  }
}
</script>

<style lang="less" scoped>
	.home {
		.row-ar {
      margin-left: 3%;
    }
    .row-col {
      margin-left: -7%;
      margin-top: 21px;
    }
	}
</style>
