/*
*   用户相关请求
*/

import request from '@/utils/reuqest'

// 导出longin登录请求 data= 参数
export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data // data = (data:data )
  })
}

/*
 * 发送验证码
 */
export const sendSms = mobile => {
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}
