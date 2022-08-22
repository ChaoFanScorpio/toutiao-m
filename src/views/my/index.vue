<template>
  <div class="my-container">
    <!-- 已登录 -->
    <div v-if="user" class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image
            class="headerImg"
            :src="userinfo.photo"
            round
            fit="cover"
          />
          <span> {{ userinfo.name }}</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <span>{{ userinfo.art_count }}</span
          ><span class="title">头条</span>
        </div>
        <div class="data-item">
          <span>{{ userinfo.follow_count }}</span
          ><span class="title">关注</span>
        </div>
        <div class="data-item">
          <span>{{ userinfo.fans_count }}</span
          ><span class="title">粉丝</span>
        </div>
        <div class="data-item">
          <span>{{ userinfo.like_count }}</span
          ><span class="title">获赞</span>
        </div>
      </div>
    </div>
    <!-- 未登录 -->
    <div v-else class="header not-login">
      <div class="login-btn" @click="$router.push('/login')">
        <img src="~@/assets/mobile.png" />
        <span>登录 / 注册</span>
      </div>
    </div>
  </div>

  <van-grid class="grid-nav mb-9" :column-num="2" clickable>
    <van-grid-item class="grid-item">
      <template v-slot:icon>
        <i class="iconfont icon-shoucang"></i>
      </template>
      <template v-slot:text>
        <span>收藏</span>
      </template>
    </van-grid-item>

    <van-grid-item class="grid-item">
      <template v-slot:icon>
        <i class="iconfont icon-lishi"></i>
      </template>
      <template v-slot:text>
        <span>历史</span>
      </template>
    </van-grid-item>
  </van-grid>

  <van-cell title="消息通知" is-link />
  <van-cell class="mb-9" title="小智同学" is-link />
  <van-cell
    v-if="user"
    class="logout-cell"
    title="退出登录"
    @click="onLogout"
  />
</template>
<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等） 例如：import 《组件名称》 from '《组件路径》';
import { } from 'vue'
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'
export default ({
  name: 'myindex',
  components: {},
  computed: {
    ...mapState(['user'])
  },
  data () {
    return {
      userinfo: {}
    }
  },
  methods: {
    onLogout () {
      this.$dialog.confirm({
        title: '确定退出',
        message: ''
      }).then(() => {
        console.log('退出邓丽了')
        this.$store.commit('user', null)
      }).catch(() => {
        // on cancel
      })
    },
    async requestUserInfo () {
      try {
        const { data } = await getUserInfo()
        this.userinfo = data.data
        console.log(this.userinfo)
      } catch (error) {
        this.$toast.fail('获取数据失败,请稍后重试')
      }
    }
  },
  created () {
    if (this.user) {
      this.requestUserInfo()
    }
  }
})
</script>

<style lang='less' scoped>
//@import url(); 引入公共css类

.my-container {
  .header {
    height: 361px;
    background: url("~@/assets/banner.png");
    background-size: cover;
  }

  .not-login {
    display: flex;
    justify-content: center; // 水平居中
    align-items: center; // 垂直居中

    .login-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column; // 纵向分布

      img {
        height: 132px;
      }

      span {
        font-size: 28px;
        color: white;
        margin-top: 15px;
      }
    }
  }

  .user-info {
    .base-info {
      height: 231px;
      padding: 76px 32px 23px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;

      .left {
        display: flex;
        align-items: center;
        .headerImg {
          width: 132px;
          height: 132px;
          margin-right: 23px;
          border: 4px white solid;
        }

        span {
          font-size: 30px;
          color: white;
        }
      }
    }

    .data-stats {
      display: flex;

      .data-item {
        height: 130px;
        flex: 1;
        font-size: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        .title {
          font-size: 23px;
          margin-top: 10px;
        }
      }
    }
  }
}

.grid-nav {
  .grid-item {
    height: 141px;
    i {
      font-size: 45px;
    }

    .icon-shoucang {
      color: #eb5253;
    }

    .icon-lishi {
      color: #ff9d1d;
    }

    span {
      font-size: 28px;
    }
  }
}

.mb-9 {
  margin-bottom: 9px;
}

.logout-cell {
  text-align: center;
  color: #eb5253;
}
</style>
