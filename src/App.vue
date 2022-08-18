<template>
  <!-- 路由出口 如果没有路由页面不会生效 -->
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.box {
  background-color: skyblue;
  width: 375px;
  height: 100px;
}
</style>
