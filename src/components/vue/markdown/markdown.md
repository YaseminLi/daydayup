### vue中显示markdown文件

1. 安装依赖
  npm i html-loader markdown-loader --save-dev 

2. 配置webpack（vue.config.js)
```js
    module.exports = {
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
        }
  }
```

3. 在vue文件中读取
```js
  <template>
      <div v-html="md"></div>
  </template>

  import md from './markdown.md'
  console.log(md) // 是DOM结构

  export default {
    data () {
      return {
        md
      }
    }
  }

  <style lang="less" scoped>
  // 这里可以约束解析出来后的 markdown 标签样式，如设置 h3{...}
  </style>
```