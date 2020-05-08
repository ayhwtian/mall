<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="activeStyle"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default {
		name: "TabBarItem",
		props: {
			path: String,
			activeColor: {
				type: String,
				default: 'red' //赋值默认红色
			}
		},
		computed: {
			isActive() {
				//当前路由是否处于活跃，如果找不到的话是-1，所以！==-1表示这个路由是活跃的
				return this.$route.path.indexOf(this.path) !== -1
				// return this.$route.path == this.path
			},
			activeStyle() {
				//首先判断路由是不是活跃，如果是活跃的则给他赋值颜色，如果不是就是空
				return this.isActive ? {color: this.activeColor} : {}
			},
		},
		methods: {
			itemClick() {
				//catch是解决多次点击同一导航报错
				this.$router.push(this.path).catch(e =>{console.log("重复点击了同一导航")});
			  // console.log(this.$route.path);
				// console.log(this.isActive);
			}
		}
	}
</script>

<style>
	.tab-bar-item {
		flex: 1;
		text-align: center;
		height: 3.0625rem;
		font-size: 0.875rem;
	}

	.tab-bar-item img {
		height: 1.5rem;
		width: 1.5rem;
		margin-top: 0.25rem;
		margin-bottom: 0.0625rem;
		vertical-align: middle;
	}
</style>
