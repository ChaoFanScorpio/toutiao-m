/**
 * 请求模块
 */
import axios from 'axios'
// 万能验证码 246810

// 配置axios
const request = axios.create({
  // 请求基地址
  baseURL: 'http://api-toutiao-web.itheima.net'
})

// 请求拦截器

// 响应拦截器

// 导出reqeust
export default request
