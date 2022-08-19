<template>
  <div class="layout-container">
    <!-- 路由出口 -->
    <router-view />
    <!-- tabbar -->
    <!-- route 开启路由 模式 to="/"开启路由v-model会失效 -->
    <van-tabbar route>
      <van-tabbar-item to="/home">
        <template v-slot:icon>
          <i class="iconfont icon-shouye"></i>
        </template>
        <span class="text">首 页</span>
      </van-tabbar-item>

      <van-tabbar-item to="/qa">
        <template v-slot:icon>
          <i class="iconfont icon-wenda"></i>
        </template>
        <span class="text">问 答</span>
      </van-tabbar-item>

      <van-tabbar-item to="/video">
        <template v-slot:icon>
          <i class="iconfont icon-shipin"></i>
        </template>
        <span class="text">视 频</span>
      </van-tabbar-item>

      <van-tabbar-item to="/my">
        <template v-slot:icon>
          <i class="iconfont icon-wode"></i>
        </template>
        <span class="text">我 的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { } from 'vue'
export default ({
  name: 'LayoutIndex',
  components: {},
  computed: {},
  data () {
    return {
      active: false
    }
  }
})
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.layout-container {
  .van-tabbar {
    .iconfont {
      font-size: 40px;
    }
    span.text {
      font-size: 2 0px;
    }
  }
}
</style>
