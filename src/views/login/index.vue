<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 登录表单 -->
    <van-form ref="loginForm" @submit="onSubmit">
      <!-- 账号 -->
      <van-field
        v-model="loginModel.mobile"
        name="mobile"
        placeholder="用户名"
        maxlength="11"
        type="number"
        :rules="loginRules.mobelRules"
      >
        <template v-slot:left-icon>
          <i class="iconfont icon-shouji"></i>
        </template>
      </van-field>
      <!-- 验证码 -->
      <van-field
        v-model="loginModel.code"
        name="code"
        placeholder="请输入验证码"
        type="number"
        maxlenth="6"
        :rules="loginRules.codeRules"
      >
        <!-- <template #left-icon:icon-shouji></template> -->
        <template v-slot:left-icon>
          <i class="iconfont icon-yanzhengma"></i>
        </template>
        <!-- 插槽插入button -->
        <template #button>
          <van-count-down
            :time="codeTimes"
            format="ss 秒"
            @finish="isContDownShow = false"
            v-if="isContDownShow"
          />
          <van-button
            v-else
            class="send-sms-btn"
            native-type="button"
            round
            size="small"
            type="default"
            @click="sendCode"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <!-- 登录btn -->
      <div class="login-btn-box">
        <van-button class="login-btn" block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, sendSms } from '@/api/user'

export default {
  data () {
    return {
      loginModel: {
        mobile: '',
        code: ''
      },
      loginRules: {
        mobelRules: [{ required: true, message: '请输入手机号码' }, { pattern: /^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/, message: '请输入正确的手机号' }],
        codeRules: [{ required: true, message: '请输入验证码' }, { pattern: /\d{6}/, message: '验证码格式错误' }]
      },
      isContDownShow: false,
      codeTimes: 10 * 1000
    }
  },
  methods: {
    async onSubmit () {
      // 1. 获取表单数据
      const users = this.loginModel
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true, // 禁用北京点击
        duration: 0 // 持续时间 默认是2000 如果是0则持续
      })

      // 3. 请求登录
      try {
        const { data } = await login(users)
        this.$toast.success('登录成功')
        this.$store.commit('setUser', data.data)
        console.log('登录成功')
      } catch (error) {
        if (error.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
          console.log('手机号或验证码错误')
        } else {
          this.$toast.fail('登录失败,请稍后重试')
          console.log('登录失败,请稍后重试', error)
        }
      }
    },

    // 获取验证码
    async sendCode () {
      console.log('进来了吗')
      // 手动验证手机号.
      // 如果()传空,则全部验证

      try {
        await this.$refs.loginForm.validate('mobile')
        console.log('验证通过')
      } catch (error) {
        return console.log('验证失败', error)
      }

      // 显示倒计时
      this.isContDownShow = true

      this.$toast.loading({
        message: '发送中...',
        forbidClick: true,
        duration: 0
      })
      // 发送验证码
      try {
        const res = await sendSms(this.loginModel.mobile)
        console.log('发送成功', res)
        this.$toast.success('发送成功')
      } catch (error) {
        console.log('发送失败', error)
        this.isContDownShow = false
        if (error.response.status === 429) {
          this.$toast.error('发送频繁,请稍后重试')
        } else {
          this.$toast.error('发送失败,请稍后重试')
        }
      }
    }
  }
}

</script>

<style lang="less" scoped>
.login-container {
  .iconfont {
    font-size: 37px;
  }

  .van-field__button {
    display: flex;
    align-items: center;
  }
  .send-sms-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    font-size: 22px;
    background-color: #ededed;
    color: #666666;
  }
  .login-btn-box {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>
