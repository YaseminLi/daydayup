:::demo
```html
<template>
  <div>
    <h3>图片加载失败占位处理</h3>
    <img
      src="break.png"
      alt="这是图片标题"
      @error="e => e.target.classList.add('error')"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 300px;
  height: 300px;
}
img.error {
  display: inline-block;
  position: relative;
  color: transparent;// 隐藏原有的alt文字
}
img.error::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f5f5f5 url('../assets/images/break.svg') no-repeat center / 50%
    50%;
}
img.error::after {
  content: attr(alt);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #ececec;
  line-height: 2;
  text-align: center;
  color: #333;
}
</style>
```
:::