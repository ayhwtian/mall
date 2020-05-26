<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper  :banners="banners"></home-swiper>
    <recomment-view :recommends="recommends"></recomment-view>
    <feaure-view />
    <tab-control/>
  </div>
</template>

<script>



  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeaureView from "@/views/home/childComps/FeaureView";

  import NavBar from "components/common/navbar/NavBar"
  import FeaureView from './childComps/FeaureView.vue'
  import TabControl from 'components/content/tabContole/TabControl.vue'

  import {getHomeMutidata} from "@/network/home";
  

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView, FeaureView, TabControl
    },
    data() {
      return {
        banners: [],
        recommends:[]
      }
    },
    created() {
      //1.请求多个数据
      getHomeMutidata()
        .then( res => {
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list
        })
    },
    
    
  }
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>
