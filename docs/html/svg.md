 

```js
<svg width="200" height="200" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle class="one circle" r="40" cx="50" cy="50" fill="transparent" />
        <circle class="two circle" r="40" cx="50" cy="50" fill="transparent" stroke-dasharray="314"
            stroke-dashoffset="157" />
</svg>
```


```css
<style >
    .circle {
        stroke-width: 6px;
        transform-origin: center;
    }
    .one {
        stroke: red
    }
    .two {
        transform: rotate(-90deg);
        stroke: black
    }
</style>
```

## 属性
- viewport(width height 表示SVG可见区域)
    1. 数字 100即100px    
	2. 百分比 相对于父元素
- viewBox[扩展](https://www.zhangxinxu.com/wordpress/2014/08/svg-viewport-viewbox-preserveaspectratio/)

	```viewBox="x, y, width, height"  // x:左上角横坐标，y:左上角纵坐标，width:宽度，height:高度```
    
	如viewBox="50 50 200 200"，表示将svg的区域划分成200*200的方格，展示出的区域为从（50，50）点开始
- storke-width 线条宽度