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


### 测试环境下npm run dev自动打开项目
```js
module.exports = {
  devServer: {
      open: true
  },
}
```
