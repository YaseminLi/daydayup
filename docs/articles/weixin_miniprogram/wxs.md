wxml中调用，作为过滤器，可以复用

示例：
```js
// /pages/tools.wxs
var foo = "'hello world' from tools.wxs";
var bar = function (d) {
  return d;
}
module.exports = {
  FOO: foo,
  bar: bar,
};
module.exports.msg = "some msg";
```

```html
<!-- page/index/index.wxml -->
<wxs src="./../tools.wxs" module="tools" />
<view>{{tools.msg}}</view>
<view>{{tools.bar(tools.FOO)}}</view>
```
