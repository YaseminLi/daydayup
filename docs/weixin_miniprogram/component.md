同template模板一样，将可以复用的组件的提取出来。
## template和components的区别

template主要是展示，方法则需要在调用的页面中定义。而component组件则有自己的业务逻辑，可以看做一个独立的page页面。简单来说，如果只是展示，使用template就足够了，如果涉及到的业务逻辑交互比较多，那就最好使用component组件了。

## 组件创建
右键可一次性创建组件需要的四个文件

<img src="/articles/weixin_miniprogram/component.png" width="300px" />	

##  组件编写

基本与页面的编写类似

- json文件
```js
	{
	  "component": true //开启组件模式
    }
```
- js文件
```js
	Component({
	  /**
	   * 组件的属性列表，从父级传递给组件的数据
	   */
	  properties: {
	    movie: Object
	  },
	 
	  /**
	   * 组件的初始数据，组件中自己使用的数据
	   */
	  data: {
	    isShow: false
	  },
	 
	  /**
	   * 组件的方法列表
	   */
	  methods: {
	    onImageLoad: function() {
	    }
	  }
	})
```

## 组件引用

- 引用组件页面的json文件

需要用哪些组件要配置在json中：“组件名（自定义）”：“组件路径”
```js
	{
	  "usingComponents": {
	    "v-movie-list-template": "/components/movie-list-template/index"
	  }
    }
```
- 然后在模版文件中使用，标签名为组件名
```js
<v-movie-list-template movies='{{inTheaters}}'/>
```	
- 引入其他样式

```@import "../../app.wxss";```


## slot插槽

在使用组件模版时，可以提供一个slot节点，承载引用组件时要插入的子节点。[官网](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html?search-key=slot)
	
如，短评和历史搜索中，都要用到tag组件，提供一个slot节点，在短评中使用时，插入后面的数字+759

<img src="/articles/weixin_miniprogram/slot.png" width="600px" />		
		
	
1. 将slot节点放在要插入的位置
```js
	<!-- 组件模板 -->
<view class="wrapper">
  <slot name="before"></slot>
  <view>这里是组件的内部细节</view>
  <slot name="after"></slot>
</view>
```
	
2. 启用插槽
```js
	// components/tag/index.js
	Component({
		options: {
		multipleSlots: true 
	},
```	
3. 引用组件的页面

slot='引用的插槽名'
```js
<!-- 引用组件的页面模板 -->
<view>
  <component-tag-name>
    <!-- 这部分内容将被放置在组件 <slot name="before"> 的位置上 -->
    <view slot="before">这里是插入到组件slot name="before"中的内容</view>
    <!-- 这部分内容将被放置在组件 <slot name="after"> 的位置上 -->
    <view slot="after">这里是插入到组件slot name="after"中的内容</view>
  </component-tag-name>
</view>
        }
```
		


## tips
- 最外层margin不要设置，降低组件复用率	
	

	

