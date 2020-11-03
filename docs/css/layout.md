## 一行中按钮、小图标分散排列

三个按钮排列，其中两个靠右并有间距,一般使用 flex 布局

- before:将靠右的两个元素再用 div 包裹起来————dom 结构复杂，样式多
- now:不再用 div 包裹，中间元素使用 margin-left:auto 就会无间距靠近第三个元素，margin-right 可再添加右间距
:::demo

```html
<template>
  <div class="button-layout" style="display:flex;justify-content:space-between">
    <button>left</button>
    <button style="margin-left:auto;margin-right:20px">middle</button>
    <button>right</button>
  </div>
</template>
```
:::

## 左侧文字内容宽度同图像宽度

:::demo

```html
<template>
  <div class="container">
    <div class="left">
      <img src="https://cn.vuejs.org/images/logo.png"/>
      <span>
        左侧文字内容左侧文字内容左侧文字内容左侧文字内容左侧文字内容左侧文字内容
      </span>
    </div>
    <div class="right">
      右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容右侧文字内容
    </div>
  </div>
</template>
<style>
  .container{
    display:flex
  }
  .left{
    width:200px
  }
  .right{
    flex:1
  }
</style>
```

:::
