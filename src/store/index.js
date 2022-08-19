import { createStore } from 'vuex'
import { getItem, setItem } from '@/utils/storage'

const TOKEN_KEY = 'TOUTIAO_USER'

export default createStore({
  // 值变化自动更新
  state: {
    //  一个对象 存储当前登录用户信息 token等数据
    // user: null

    // user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
    user: getItem(TOKEN_KEY)
  },
  getters: {
    // window.localStorage.get

  },
  // 包含多个用与更新sate属性的函数对象
  mutations: {
    setUser (state, data) {
      state.user = data
      // 为了防止刷新丢失. 我们要把数据备份到本地存储
      // JSON.stringify(objc) 对象转json
      // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
      setItem(TOKEN_KEY, state.user)
    }

  },
  // 包含多个事件回调函数的对象
  actions: {
  },
  modules: {
  }
})
