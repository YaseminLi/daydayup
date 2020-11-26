const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    port: 8080,
    open: true
  },
  lintOnSave: true,
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .end()
    config.resolve.alias
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@assets', resolve('src/assets'))
    // 若需要配置多个别名，后续紧跟着设置set即可
    // config.resolve.alias.set('@scss', resolve('src/static/scss')).set('@',resolve('src'))
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/css/common.scss";'
      }
    }
  }
}
