<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import {getHomeMutidata} from "@/network/home";
  import {Swiper,SwiperItem} from "components/common/swiper"

  export default {
    name: 'Home',
    components: {
      NavBar,
      Swiper,
      SwiperItem
    },
    data() {
      return {
        banner: [],
        recommend:[]
      }
    },
    created() {
      //1.请求多个数据
      getHomeMutidata()
        .then( res => {
          console.log(res);
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list
        })
    }
  }
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>
