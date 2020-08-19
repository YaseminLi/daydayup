### 别名配置

根目录新建 vue.config.js 文件

```js
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('views', resolve('src/views'))
      .set('assets', resolve('src/assets'))
  }
}
```

### 生产环境去除console.log
npm install terser-webpack-plugin --save-dev
- UglifyJsPlugin与es6不兼容
- vue.config.js中添加配置：
```js
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  configureWebpack: {
    // 注释console
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              // warnings: false,
              drop_console: false, // 注释console
              drop_debugger: false,
              pure_funcs: ['console.log'] // 移除console
            }
          }
        })
      ]
    }
  }
}
```

### 测试环境下npm run dev自动打开项目
```js
module.exports = {
  devServer: {
      open: true
  },
}
```
