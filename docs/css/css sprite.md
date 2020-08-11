> 学习于[CSS Sprite雪碧图应用](https://www.imooc.com/video/1317)
## 是什么

许多小图标合并在一起的图片，通过设置background-image、background-position和来选定图片的相应区域进行显示background-size

## 使用场景

- 静态图片，不随用户信息的变化而变化
- 小图片，3kb-5kb
- 加载量比较大

## 好处

减少http请求数，加速内容显示

## 不足
CSS Sprite维护成本较高，如果页面背景有少许改动，一般就要改这张合并的图片

## 使用

```css
i {
	background: url(demo.png); //图片资源
	background-size: 24px 597px; //设置整个雪碧图的宽高
	background-position:0 -44px; //在x轴，y轴上的偏移，左上角为(0,0),偏移都为负
}
```		    


```css
    ul {
        margin: 0;
        padding: 0;
        width: 280px;
        display: flex;
        flex-wrap: wrap;
        border-top: 1px solid #dedede;
        border-left: 1px solid #dedede;
    }
 
    li {
        list-style-type: none; //去掉原点
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70px;
        box-sizing: border-box;
        height: 64px;
        border: 1px solid #dedede;
        border-left-color: transparent;
        border-top-color: transparent;
    }
 
    li i {
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-top: 11px;
        background: url(demo.png);
        background-size: 24px 597px
    }
 
    li span {
        line-height: 24px;
        font-size: 12px;
    }
 
    .cat-1 i {
        background-position: 0px 0px
    }
 
    .cat-2 i {
        background-position: 0px -44px
    }
 ……
    }
```
```html
<body>
    <ul>
        <li class="cat-1">
            <i></i>
            <span>充话费</span>
        </li>
        <li class="cat-2">
            <i></i>
            <span>旅行</span>
        </li>
       ……
    </ul>
</body>
```

<img src='/articles/css/9.png'>
<img src='/articles/css/10.png'>