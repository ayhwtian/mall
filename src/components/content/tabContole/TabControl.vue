<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="item"
         class="tab-control-item"
         :class="{active:index === currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex:0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
};
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    line-height: 44px;
    background-color: #fff;
  }
  .tab-control-item {
    height: 44px;
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
    height: 44px;
    padding: 5px;
  }

</style>
