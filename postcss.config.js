// 如果设计稿的尺寸不是 375，而是 750 或其他大小，可以将 rootValue 配置调整为:
module.exports = {
  // 配置要使用的
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}

// module.exports = {
//   // 配置要使用的postcss插件
//   plugins: {
//     // autoprefixer   browers: 兼容环境信息
//     // 配置使用 postcs-pxtorem插件
//     'postcss-pxtorem': {
//       rootValue: 37.5,
//       propList: ['*']
//     }
//   }
// }
