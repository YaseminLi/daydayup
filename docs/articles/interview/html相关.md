> 整理于
> - [前端面试集锦](https://fe.padding.me/#/questions/5)
> - [前端面试与进阶指南](https://www.cxymsg.com/guide/cssBasic.html#%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B9%E5%BC%8F%EF%BC%88css%EF%BC%89%E5%8F%AF%E4%BB%A5%E9%9A%90%E8%97%8F%E9%A1%B5%E9%9D%A2%E5%85%83%E7%B4%A0%EF%BC%9F)
1. Q: 当下列的HTML代码加载时会触发新的HTTP请求吗？
```html
	<div style="display: none;">
        <img src="mypic.jpg" alt="My photo">
    </div>
```
A: 会
	
2. Q: 当下列的HTML代码加载时会触发新的HTTP请求吗？
 `<img src="mypic.jpg" style="visibility: hidden" alt="My picture">`

A: 会（只是隐藏）
	
3. Q:HTML5 支持块级超链接吗？例如：
```html
	 <article>
     <a href="#">
         <h1>Hello</h1>
         <p>I am some text</p>
     </a>
 </article>
 ```
A: 支持。HTML5中`<a> `元素表现为一个超链接，支持任何行内元素和块级元素。
	
4. Q: 下列代码中scope 属性是做什么的？
```html
 <article>
     <h1>Hello World</h1>
     <style scoped>
         p {
             color: red;
         }
     </style>
     <p>This is my text</p>//红色
 </article>

<article>
     <h1>This is awesome</h1>
     <p>I am some other text</p> //非红色
 </article>
```
A: scoped 属性是一个布尔属性。如果使用该属性，则样式仅仅应用到 style 元素的父元素及其子元素。只在fieFox浏览器有效,vue中的scoped表示只在当前组件样式有效
	
5. Q: 如果你有一个搜索结果页面，你想高亮搜索的关键词。什么HTML 标签可以使用?
A:`<mark>` 标签表现高亮文本。
```html
<p>hello</p>
<mark>wordl</mark>
```
6. Q: 在一个结构良好的web网页里，多个h1标签会不利于SEO吗？
	A: 不影响。

> According to Matt Cutts (lead of Google's webspam team and the de facto expert on these things), using multiple ```<h1> ```tags is fine, as long as you're not abusing it (like sticking your whole page in an``` <h1>``` and using CSS to style it back to normal size). That would likely have no effect, and might trigger a penalty, as it looks spammy.
> If you have multiple headings and it would be natural to use multiple ```<h1>```'s, then go for it.
> 摘自：http://www.quora.com/Does-using-multiple-h1-tags-on-a-page-affect-search-engine-rankings


7. Q: 哪种情况下应该使用small标签？当你想在h1 标题后创建副标题？还是当在footer里面增加版权信息？
	A: small标签一般使用场景是在版权信息和法律文本、注释里使用，或者其它需要字号变小的情况（只有全局属性），但不可以用来创建副标题。
	
8. Q: 下列HTML代码是否正确？
```html
	 <figure>
     <img src="myimage.jpg" alt="My image">
     <figcaption>
         <p>This is my self portrait.</p>
     </figcaption>
 </figure>
 ```
A: 正确.```<figure>```可附标题内容元素 标签规定独立的流内容（经常是在主文中引用的图片，插图，表格，代码段等等）。```figure``` 元素的内容应该与主内容相关，但如果被删除，则不应对文档流产生影响。使用```<figcaption>```元素为figure添加标题（caption）。
	
	
9. Q: ```<bdo>``` 标签是否可以改变文本方向？
A: 可以。```<bdo>```标签覆盖默认的文本方向。
	<bdo dir="rtl">Here is some text</bdo> //会从右向左输出
	
10. Q: ```<keygen>``` 是正确的HTML5标签吗？

	A: 是。```<keygen>``` 标签规定用于表单的密钥对生成器字段。当提交表单时，私钥存储在本地，公钥发送到服务器。是HTML5 标签。

11. Q: doctype（文档类型）的作用是什么？

	 在HTML中 doctype 有两个主要目的。一是防止浏览器在渲染文档时，切换到我们称为“怪异模式(兼容模式)”的渲染模式。 二是确保浏览器按照最佳的相关规范进行渲染，而不是使用一个不符合规范的渲染模式。
	
12. 这三种模式的区别是什么？
- 浏览器有三种方式解析HTML文档。
		○ 非怪异（标准）模式
		○ 怪异模式
		○ 部分怪异（近乎标准）模式
- 标准模式(standards mode)：页面按照 HTML 与 CSS 的定义渲染
- 怪异模式(quirks mode)模式： 会模拟更旧的浏览器的行为
- 近乎标准(almost standards)模式： 会实施了一种表单元格尺寸的怪异行为（与IE7之前的单元格布局方式一致），除此之外符合标准定义

	[阅读:模式？标准！](http://padding.me/blog/2014/07/04/mode-or-standard/)的内容。
	
13. HTML、XHTML、XML有什么区别

- HTML(超文本标记语言): 在html4.0之前HTML先有实现再有标准，导致HTML非常混乱和松散
- XML(可扩展标记语言): 主要用于存储数据和结构，可扩展，大家熟悉的JSON也是相似的作用，但是更加轻量高效，所以XML现在市场越来越小了
- XHTML(可扩展超文本标记语言): 基于上面两者而来，W3C为了解决HTML混乱问题而生，并基于此诞生了HTML5，开头加入```<!DOCTYPE html>```的做法因此而来，如果不加就是兼容混乱的HTML，加了就是标准模式。
		
14.  使用 XHTML 的局限有哪些？如果页面使用 'application/xhtml+xml' 会有什么问题吗？

xhtml 语法要求严格，必须有head、body 每个dom 必须要闭合。空标签也必须闭合。例如```<img />, <br/>, <input />```等。另外要在属性值上使用双引号。一旦遇到错误，立刻停止解析，并显示错误信息。 如果页面使用'application/xhtml+xml',一些老的浏览器会不兼容
	
15. data-属性的作用是什么？

data-为前端开发者提供自定义的属性，这些属性集可以通过对象的dataset属性获取，不支持该属性的浏览器可以通过getAttribute方法获取,如div.getAttribute('author')属性名不用加data:

```<div data-author="david" data-time="2011-06-20" data-comment-num="10">...</div>```

```div.dataset.commentNum; // 10```

需要注意的是，data-之后的以连字符分割的多个单词组成的属性，获取的时候使用驼峰风格。并不是所有的浏览器都支持.dataset属性，测试的浏览器中只有Chrome 和Opera 支持
	
16. 你对HTML语义化的理解？✨

	语义化是指使用恰当语义的html标签，让页面具有良好的结构与含义，比如```<p>```标签就代表段落，```<article>```代表正文内容等等。
	语义化的好处主要有两点：
- 开发者友好：使用语义类标签增强了可读性，开发者也能够清晰地看出网页的结构，也更为便于团队的开发和维护
- 机器友好：带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，语义类还可以支持读屏软件，根据文章可以自动生成目录
		
17. HTML5与HTML4的不同之处
- 文件类型声明（<!DOCTYPE>）仅有一型：```<!DOCTYPE HTML>```。
- 新的元素：section, video, progress, nav, meter, time, aside, canvas, command, datalist, details, embed, figcaption, figure, footer, header, hgroup, keygen, mark, output, rp, rt, ruby, source, summary, wbr。
- input元素的新类型：date, email, url等等。
- 新的属性：ping（用于a与area）, charset（用于meta）, async（用于script）。
- 全域属性（所有HTML元素共有的属性）：id, tabindex, repeat。
- 新的全域属性：contenteditable, contextmenu, draggable, dropzone, hidden, spellcheck。
- 移除元素：acronym, applet, basefont, big, center, dir, font, frame, frameset, isindex, noframes, strike, tt
		
18. 有哪些常用的meta标签？

	meta标签由name和content两个属性来定义，来描述一个HTML网页文档的元信息，例如作者、日期和时间、网页描述、关键词、页面刷新等，除了一些http标准规定了一些name作为大家使用的共识，开发者也可以自定义name。

- charset，用于描述HTML文档的编码形式

	 ```<meta charset="UTF-8" >```
- http-equiv，顾名思义，相当于http的文件头作用,比如下面的代码就可以设置http的缓存过期日期

	```＜meta http-equiv="expires" content="Wed, 20 Jun 2019 22:33:00 GMT"＞```
- viewport，移动前端最熟悉不过，Web开发人员可以控制视口的大小和比例

	```<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">```
	
19. src和href的区别？

- src是指向外部资源的位置，指向的内容会嵌入到文档中当前标签所在的位置，在请求src资源时会将其指向的资源下载并应用到文档内，如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，所以一般js脚本会放在底部而不是头部。
- href是指向网络资源所在位置（的超链接），用来建立和当前元素或文档之间的连接，当浏览器识别到它他指向的文件时，就会并行下载资源，不会停止对当前文档的处理。
		
20. 知道img的srcset的作用是什么？（追问）[mdn](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img)

	可以设计响应式图片，根据屏幕条件选取图片的能力

	srcset 定义了我们允许浏览器选择的图像集，以及每个图像的大小。

	sizes 定义了一组媒体条件（例如屏幕宽度）并且指明当某些媒体条件为真时，什么样的图片尺寸是最佳选择。

	所以，有了这些属性，浏览器会：
	- 查看设备宽度
	- 检查 sizes 列表中哪个媒体条件是第一个为真
	- 查看给予该媒体查询的槽大小
	- 加载 srcset 列表中引用的最接近所选的槽大小的图像
    ```html
		<img srcset="elva-fairy-320w.jpg 320w,
		             elva-fairy-480w.jpg 480w,
		             elva-fairy-800w.jpg 800w"
		     sizes="(max-width: 320px) 280px,
		            (max-width: 480px) 440px,
		            800px"
		     src="elva-fairy-800w.jpg"
		     alt="Elva dressed as a fairy" />
	```	
21. 还有哪一个标签能起到跟srcset相似作用？（追问）[mdn](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/picture)

	```<picture>```元素通过包含零或多个 ```<source>``` 元素和一个 ```<img>```元素来为不同的显示/设备场景提供图像版本。浏览器会选择最匹配的子``` <source>``` 元素，如果没有匹配的，就选择 ```<img>``` 元素的 src 属性中的URL。然后，所选图像呈现在```<img>```元素占据的空间中
		picture同样可以通过不同设备来匹配不同的图像资源
```html
<picture>
    <source srcset="/media/examples/surfer-240-200.jpg"
            media="(min-width: 800px)">
    <img src="/media/examples/painted-hand-298-332.jpg" />
</picture>
```	
22. script标签中defer和async的区别？✨

- defer：浏览器指示脚本在文档被解析后执行，script被异步加载后并不会立刻执行，而是等待文档被解析完毕后执行。
- async：同样是异步加载脚本，区别是脚本加载完毕后立即执行，这导致async属性下的脚本是乱序的，对于script有先后依赖关系的情况，并不适用。 
<img src='/articles/html/1.png'/>		
		蓝色线代表网络读取，红色线代表执行时间，这俩都是针对脚本的；绿色线代表 HTML 解析
	
23. 有几种前端储存的方式？✨

	cookies、localstorage、sessionstorage
	
24. 这些方式的区别是什么？（追问）✨
- 容量
- ajax请求是否携带
- api的易用性
			
25. 在Paragraph 1加载后main2.css才会被加载编译吗？
```html
	<head>
    <link href="main1.css" rel="stylesheet">
</head>
<body>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <link href="main2.css" rel="stylesheet">
</body>
```
yes!
	
26. 如果网页内容需要支持多语言，你会怎么做？在设计和开发多语言网站时，有哪些问题你必须要考虑？

编码使用UTF-8，空间域名需要支持多浏览地址,准备多套模板。 在设计和开发多语言网站时，需要考虑
- 应用字符集的选择
- 语言书写习惯&导航结构
- 数据库驱动型网站
- css 盒子会因为内容尺寸不一样出现不对齐偏移

27. 请描述一下 GET 和 POST 的区别?
- 对于get 来说，是向服务器端请求数据，其请求在url 中可见，其长度有限制（2048字符）个体方法是安全幂等，这里的安全是指用于获取信息而非修改信息，幂等是指每次请求得到的结果都一样。
- 对于post 来说，是向服务器端提交数据，每次刷新或者后退都会重新提交，post 请求的数据封装在http 请求的首部里。

