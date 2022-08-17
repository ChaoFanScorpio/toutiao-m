<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- 路由出口 如果没有路由页面不会生效 -->
  <router-view />
  <h1>头条</h1>
  <i class="iconfont icon-gengduo"></i>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>

  <div class="box"></div>
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
