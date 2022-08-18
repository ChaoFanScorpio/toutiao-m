const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  // 关闭eslint校验
  // lintOnSave: false
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://ttapi.research.itcast.cn/', // 后端接口
  //       changeOrigin: true, // 是否跨域
  //       pathRewrite: {
  //         '/api': ''
  //       }
  //     }
  //   }
  // }
})
