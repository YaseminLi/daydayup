一个组件多次使用到时，可以提取出模板，仅做展示，方法在调用的页面中定义

如：星星和评分只有显示的功能，可以做成模板
<img src="/articles/weixin_miniprogram/template.png" width="600px" />	
	

## 模版创建
只有wxml和wxss文件这两个，业务逻辑放在引用它的组件或者页面中
	
## 组件编写
- wxml

一个模板文件中可以有多个template，用name命名区分
```js
<template name='starsTemplate'>
	  <view class='stars-container'>
	    <block wx:for='{{stars}}'  wx:item='item' wx:key='{{index}}'>
	      <image src="{{item==1?'/images/icon/star.png':'/images/icon/none-star.png'}}" />
	    </block>
	    <text class='stars-score'>{{score}}</text>
	  </view>
	</template>
```	

- wxss

模板自己的样式文件，自定义
	
## 引用
可以在页面、自定义组件、模版中引用

- 引用模版
```js
	<import src='../../pages/movies/stars/stars-template.wxml' />//引入模板文件
	  <view class='movie-container' >
	    <image class='movie-img' src='{{movie.coverageUrl}}' bindload='onImageLoad'></image>
	    <text class='movie-title'>{{movie.title}}</text>
		//模板引用  is为要使用的模板名字，对应模板文件中的name属性 data为传入模板中的数据
	    <template is='starsTemplate' data='{{stars:movie.stars,score:movie.score}}'/>
      </view>
```

- 引用模版的样式
```js
@import '../../pages/movies/stars/stars-template.wxss';
```
	
## tips
最外层margin不要设置，降低组件复用率
