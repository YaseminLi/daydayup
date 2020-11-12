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

### 测试环境下 npm run dev 自动打开项目

```js
module.exports = {
  devServer: {
    open: true,
    port:8000
  }
}
```

### 关闭生产环境的 sourcemap

```js
module.exports = {
  productionSourceMap: false
}
```

### 去除生产环境 console

```js
module.exports = {
  chainWebpack: config => {
    // 去除生产环境的console
    config.optimization.minimizer('terser').tap(args => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  }
}
```
