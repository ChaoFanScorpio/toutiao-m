/**
 * 请求模块
 */
import axios from 'axios'
import store from '@/store'
// 万能验证码 246810

// 配置axios
const request = axios.create({
  // 请求基地址
  baseURL: 'http://api-toutiao-web.itheima.net'
})

// 请求拦截器
request.interceptors.request.use(config => {
  // 请求会经过这里
  // if (config.url !== '')
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
  }
  console.log(config)
  return config
}, function (error) {
  // 如果请求出错(还没发出去)会进入这里
  return Promise.reject(error)
})

// 响应拦截器

// 导出reqeust
export default request
