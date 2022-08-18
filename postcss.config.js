// 如果设计稿的尺寸不是 375，而是 750 或其他大小，可以将 rootValue 配置调整为:
module.exports = {
  // 配置要使用的
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0 作用把px转为rem
    'postcss-pxtorem': {
      // lib-flexibal的rem适配方案.把一行分为10份 每份是十分之一
      // 所以rootValue应该是设计稿的十分之一
      // 但是vant建议设置为37.5 因为vant是基于375适配的 所以必须设置37.5
      // rootvalue支持俩种类型: 1. 数字:固定的设置  2. 函数:动态处理返回
      rootValue ({ file }) {
        // 通过函数indexOf判断文件地址是否包含vant 如果不存在咋返回-1
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      /**********************************************************************/
      /** *********************** 行内样式不会改变 <a style="width:200px"> ********************************/
      /**********************************************************************/
      // 配置要转换的css属性 *代表所有
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
