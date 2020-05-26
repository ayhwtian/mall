<template>
  <div class="tab-control">
    <div v-for="item in titles" :key="item">
      <span>{{item}}</span>
    </div>
    <div>
      <span>哈哈哈哈测试git</span>
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
  }
};
</script>

<style>
</style>
