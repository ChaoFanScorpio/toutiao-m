<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- 路由出口 如果没有路由页面不会生效 -->
  <router-view />
  <h1>头条</h1>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less"></style>
