const { override, addWebpackAlias } = require('customize-cra')

const path = require('path')
// const closedMap = config => {
//   // 修改掉webpack里面devtool的配置
//   config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false
//   return config
// }
// module.exports = override(
//   addBabelPlugin([pluginProposalDecorators, { legacy: true, loose: true }]),
//   addBabelPlugin([pluginProposalClassProperties, { legacy: true, loose: true }]),
//   addWebpackAlias({
//     '@': path.resolve(__dirname, 'src')
//   })
// )
module.exports = {
  webpack: override(
    // closedMap,
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src')
    })
  )
}
