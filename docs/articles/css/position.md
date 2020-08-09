[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)
## Static

文档流中的正常布局

## Relative

先在未添加定位时的位置，不改变页面布局的条件下调整元素位置，原位置留下空白，不脱离文档流
	
## Absolute
不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，脱离文档流可以设置外边距，且不会与其他边距合并
如果只设置left 或right , 他会在有定位的父级内，在正常文档流位置的基础左右移动。
如果只设置top 或botttom,则在正常文档流决定的位置上下移动。
	
## Fixed
不预留空间，相对于屏幕视图的位置viewport，在屏幕滚动时位置不变
当祖先的transform属性为none时，视口改为祖先
	
## Sticky
相对和固定定位的结合，元素在跨越特定阈值前为相对定位，之后为固定定位，
须指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同
       
	
