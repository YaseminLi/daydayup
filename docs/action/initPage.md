## 滚动条复原
在页面A浏览时，水平和垂直方向拖动了一定距离。在跳转到页面B后，若不做处理，B页面会保持A的滚动距离。

解决办法：
路由切换后，将srollTop,scrollLeft置0

如在vue项目中：src/app.vue:
```js
watch: {
    $route (to, from) {
      if (to.name !== from.name) {
        // 若跳转页面，将页面的滚动置0
        const el = document.querySelector('.el-main')
        const left = el.scrollLeft
        const top = el.scrollTop
        if (left || top) {
          el.scrollTop = 0
          el.scrollLeft = 0
        }
      }
    }
  }
```