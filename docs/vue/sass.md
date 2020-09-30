在vue项目中，引入sass文件作为全局样式

### 方法一：main.js中引入文件
```import '@assets/css/reset.scss'```

会在html中的head中单独插入一个style标签

### 方法二：在vue.config.js中配置

```js
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/reset.scss";`,
      },
    },
  },

项目中使用：
<style lang="scss">
#app {
  color: $theme-color;

}
</style>

```