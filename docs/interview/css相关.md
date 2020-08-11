>参考：
> - [前端面试集锦](https://fe.padding.me/#/questions/1)
	
1. Q: CSS 属性是否区分大小写？
```
 ul {
     MaRGin: 10px;
 }
 ```
  A: 不区分。 HTML，CSS都对大小写不敏感，但为了更好的可读性和团队协作一般都小写，而在XHTML 中元素名称和属性是必须小写的。

2. Q: 行内(inline)元素 设置margin-top和margin-bottom 是否起作用？

	A: 不一定，行内可替换元素margin-top和margin-bottom是有用的,，像input，img，其它是没有效果的
	
3. Q: 对内联元素(inline)设置padding-top和padding-bottom是否会增加它的高度？（原题是Does setting padding-top and padding-bottom on an inline element add to its dimensions?）

	A: 元素本身包括padding的高度会增加，但不一定会撑开父元素
	对于行内非替换元素，父元素高度通过line-height设置，padding不会撑开父元素。
	对于替换元素，会撑开父元素。
	
4. Q: 设置p的font-size:10rem，当用户重置或拖曳浏览器窗口时，文本大小是否会也随着变化？

    A: 不会。
    rem是以html根元素中font-size的大小为基准的相对度量单位，文本的大小不会随着窗口的大小改变而改变。
	
5. Q: 伪类选择器:checked将作用与input类型为radio或者checkbox,不会作用于option。

	A: 不对。伪类选择器checked的定义:```The :checked CSS pseudo-class selector represents any radio (<input type="radio">), checkbox (<input type="checkbox">) or option (<option>in a <select>) ```

6. Q:translate()方法能移动一个元素在z轴上的位置？

   A: 不能。translate()方法只能改变x轴，y轴上的位移。:translate3D()可以
	
7. Q: 在HTML文本中，伪类:root总是指向html元素？

	A: 不是。MDN中描述:root 这个 CSS 伪类匹配文档树的根元素。对于 HTML 来说，:root 表示 ```<html> ```元素，除了优先级更高之外，与 html 选择器相同。
	
8. Q: 如下代码中文本“Sausage”的颜色是?
```html
	<ul class="shopping-list" id="awesome">
    <li><span>Milk</span></li>
    <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
</ul>
```
```css
#awesome .favorite:not(#awesome) .highlight {
    color: red;
}
#awesome .highlight:nth-of-type(1):nth-last-of-type(1) {
    color: blue;
}
```
A: blue。
	
9. Q:#example位置如何变化：
```<p id="example">Hello</p>```
```#example {margin-bottom: -5px;margin-left: -5px;}```

	A: 向上向左移动5px。
	
10. mypic.jpg 会被浏览器加载吗？
```html
<div id="test1">
    <span id="test2"></span>
</div>
```
```css
#test2 {
    background-image: url('mypic.jpg');
    display: none;
}
```
A: 会被加载。**元素的样式设置成display: none，背景和标签上的图片都会被加载，但不会渲染**
```html
	<div class="img-container" style="display:none"></div> //加载
	<img src="2.png" style="display:none">  //加载
```

```css
	.img-container {
	        background-image: url('1.png');
	    }
```

11. mypic.jpg 会被浏览器加载吗？
```html
<div id="test1">
    <span id="test2"></span>
</div>
```
```css
#test1 {
    display: none;
}
#test2 {
    background-image: url('mypic.jpg');
    visibility: hidden;
}
```
A: 不会被加载。父元素的样式设置成display: none，背景上图片不会被加载，标签上的图片会加载
	
12. display:none 和visibilty:hidden的区别

	display:none和visibility:hidden都是把网页上某个元素隐藏起来的功能，但两者有所区别，

	display属性设定为“none”的元素将不产生任何的框（Box），也就是说，元素对布局没有影响，浏览器将不显示该元素，包括其后代元素。更不会占位。

	而如果设定“visibility : hidden”则会生成元素框，只是元素“不可视”，而其他非视觉的属性都将生效，例如widht、padding等，在页面中所占的空间没有变
	
13. Q: screen关键词是指设备物理屏幕的大小还是指浏览器的视窗？

	```@media only screen and (max-width: 1024px) {margin: 0;}```
	
	A: 浏览器视窗

14. Q：描述下 “reset” CSS 文件的作用和使用它的好处。
- 作用以及好处：因为各个浏览器默认对CSS的渲染有差异，"reset" CSS 通过重新定义标签样式，对浏览器进行默认样式“清零”重置，样式保持一致。
- 不足:
	1. css文件大小增加；
	2. 许多样式本身就需要重置，多此一举；
	3. 增加浏览器对CSS 的渲染。
可以阅读以下文章增强了解：
		• CSS reset的重新审视 – 避免样式重置
常见标签的默认属性值及相互作用——关于CSS reset的思考
	
15. 你对flex的理解？✨

	web应用有不同设备尺寸和分辨率，这时需要响应式界面设计来满足复杂的布局需求，Flex弹性盒模型的优势在于开发人员只是声明布局应该具有的行为，而不需要给出具体的实现方式，浏览器负责完成实际布局，当布局涉及到不定宽度，分布对齐的场景时，就要优先考虑弹性盒布局
	
16. em\px\rem区别？
- px：绝对单位，页面按精确像素展示。
- em：相对单位，基准点为父节点字体的大小，如果自身定义了font-size按自身来计算（浏览器默认字体是16px），整个页面内1em不是一个固定的值。
- rem：相对单位，可理解为”root em”, 相对根节点html的字体大小来计算，CSS3新加属性，chrome/firefox/IE9+支持
	
17. 有哪些方式（CSS）可以隐藏页面元素？
- opacity:0：本质上是将元素的透明度将为0，就看起来隐藏了，但是依然占据空间且可以交互
- visibility:hidden: 与上一个方法类似的效果，占据空间，但是不可以交互了
- overflow:hidden: 这个只隐藏元素溢出的部分，但是占据空间且不可交互
- display:none: 这个是彻底隐藏了元素，元素从文档流中消失，既不占据空间也不交互，也不影响布局
- z-index:-9999: 原理是将层级放到底部，这样就被覆盖了，看起来隐藏了
- transform: scale(0,0): 平面变换，将元素缩放为0，但是依然占据空间，但不可交互

18. CSS选择器的优先级是怎样的？✨

CSS选择器的优先级是：内联 > ID选择器 > 类选择器 > 标签选择器

到具体的计算层面，优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：
- A 的值等于 1 的前提是存在内联样式, 否则 A = 0;
- B 的值等于 ID选择器 出现的次数;
- C 的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数;
- D 的值等于 标签选择器 和 伪元素 出现的总次数 
	
19. link和@import的区别？
- link属于XHTML标签，而@import是CSS提供的。
- 页面被加载时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载。
- link方式的样式权重高于@import的权重。
	
20. 块级元素水平居中的方法？

margin:0 auto方法
```css
.center{
      height: 200px;
      width:200px;
      margin:0 auto;
      border:1px solid red;
  }
```
```html
  <div class="center">水平居中</div>
```
flex布局，目前主流方法
```css
	.center{
      display:flex;
      justify-content:center;
  }
  ```
  ```html
  <div class="center">
      <div class="flex-div">1</div>
      <div class="flex-div">2</div>
  </div>
  ```
table方法
```css
	  .center{
      display:table;
      margin:0 auto;
      border:1px solid red;
  }
```
```html
  <div class="center">水平居中</div>
```
拓展阅读: [16种方法实现水平居中垂直居中](https://louiszhai.github.io/2016/03/12/css-center/)
	
21. CSS有几种定位方式？

static\relative\absolute\fixed\sticky
	
22. 如何理解z-index？✨

CSS 中的z-index属性控制重叠元素的垂直叠加顺序，默认元素的z-index为0，我们可以修改z-index来控制元素的图层位置，而且z-index只能影响position属性值不是static的元素。
	
