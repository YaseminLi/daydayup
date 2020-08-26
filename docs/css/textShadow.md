:::demo
```html
<template>
  <div class="text">
    原样式：
    <div class="content">字体描边</div>
    <h2>text-shadow</h2>
    四个参数依次代表-水平方向偏移值-垂直方向偏移值-模糊半径-颜色,除了IE低版本基本都可<a
      href="https://www.caniuse.com/#search=text-shadow"
      >cuniuse</a
    ><br /><br />
    只添加一边阴影：text-shadow: 3px 0 0 palevioletred;
    <div class="content shadow-single">字体描边</div>
    添加四边阴影：text-shadow: 3px 0 0 palevioletred, 0 3px 0 palevioletred,
    -3px 0 0 palevioletred, 0 -3px 0 palevioletred;
    <strong>角的地方都是有空缺的……</strong>
    <div class="content shadow-around">字体描边</div>
    <h2>text-stroke</h2>
    -webkit-text-stroke参数为像素和颜色，-webkit-text-fill-color填充颜色,兼容性没有shadow好<a
      href="https://www.caniuse.com/#search=-webkit-text-stroke"
      >cuniuse</a
    ><br />
    -webkit-text-stroke: 4px black;-webkit-text-fill-color: white;
    边边角角没有缺口了，但是字体内部还是有些不美观
    <div class="content stroke">字体描边</div>
    <P>以上两种方案都不好看，所以要想字体描边好看，切图！！！！</P>
  </div>
</template>

<style lang="scss" scoped>
.content {
  margin: 10px;
  font-weight: 900;
  font-size: 58px;
}
.shadow-single {
  text-shadow: 3px 0 0 palevioletred;
}
.shadow-around {
  text-shadow: 3px 0 0 palevioletred, 0 3px 0 palevioletred,
    -3px 0 0 palevioletred, 0 -3px 0 palevioletred;
}
.stroke {
  -webkit-text-stroke: 4px black;
  -webkit-text-fill-color: white;
}
p {
  color: red;
  font-size: 24px;
}
</style>
```
:::
