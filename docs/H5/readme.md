移动端 H5 出现的问题

### ios 的橡皮筋效果

ios 上的网页，上下滑动时会在页面的上下出现空白，上方空白处会显示此网页由 xxxx 提供

方案：

适用于页面上没有需要滚动的元素

```js
  document.body.addEventListener(
    'touchmove',
    (e) => {
        e.preventDefault(); // 阻止默认的处理方式(阻止下拉滑动的效果)
      }
    },
    { passive: false },
  ); // passive 参数不能省略，用来兼容ios和android
```
