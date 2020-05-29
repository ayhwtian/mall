<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper  :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feaure-view />
    <tab-control :titles="['流行','新款','精选']"
                 class="tab-control"
                 @tabClick="tabClick"/>
    <goods-list :goods="showGoods"/>

    <div>
      <ul>
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li>列表4</li>
        <li>列表5</li>
        <li>列表6</li>
        <li>列表7</li>
        <li>列表8</li>
        <li>列表9</li>
        <li>列表10</li>
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li>列表4</li>
        <li>列表5</li>
        <li>列表6</li>
        <li>列表7</li>
        <li>列表8</li>
        <li>列表9</li>
        <li>列表10</li>
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li>列表4</li>
        <li>列表5</li>
        <li>列表6</li>
        <li>列表7</li>
        <li>列表8</li>
        <li>列表9</li>
        <li>列表10</li>
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li>列表4</li>
        <li>列表5</li>
        <li>列表6</li>
        <li>列表7</li>
        <li>列表8</li>
        <li>列表9</li>
        <li>列表10</li>
      </ul>
    </div>
  </div>
</template>

<script>



  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeaureView from "@/views/home/childComps/FeaureView";

  import NavBar from "components/common/navbar/NavBar"
  import TabControl from 'components/content/tabContole/TabControl.vue'
  import GoodsListItem from 'components/content/goodslist/GoodsList'

  import {getHomeMutidata, getHomeGoods} from "@/network/home";
  import GoodsList from "@/components/content/goods/GoodsList";


  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeaureView,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banners: [],
        recommends:[],
        goods: {
          'pop': {page:0, list: []},
          'new': {page:0, list: []},
          'sell': {page:0, list: []},
        },
        currentType: 'pop'
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeMutidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods:{
      /**
       * 事件监听相关方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },

      /**
       * 网络请求相关的方法
       */
      getHomeMutidata() {
        //1.请求多个数据
        getHomeMutidata().then(res => {
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        //2.请求商品
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }
    }

  }
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
  }
  .tab-control {
    position: sticky;
    top: 0px;
    z-index: 9;
  }
</style>
