# VuePress+Github Pages搭建博客

## 01-构建项目目录

1. 将 VuePress 作为一个本地依赖安装
```npm install -D vuepress```

2. 项目初始化```npm init```

3. 在 package.json 里的 scripts 中添加如下代码，不需要修改其它代码
```
{
    "scripts": {
        "docs:dev": "vuepress dev docs",
        "docs:build": "vuepress build docs"
    }
```

4. 在项目根目录下，新建 docs 文件夹```mkdir docs```

5. 新建一个 markdown 文件/docs/README.md

   文件中写入：hello

6. 输入命令启动项目，在浏览器中访问 http://localhost:8080/ 即可预览效果```npm run docs:dev```

  ![效果图](/pro/blog/1.png)

## 02-基本配置
现在我们已经构建出了最基本的项目结构，并且可以在浏览器中预览到 docs 目录下的 README.md 文件的效果，该文件即是我们网站的首页.

然而如果没有任何配置，用户将无法在网站上自由导航。因此，为了更好地自定义我们的网站，我们接着在 docs 目录下新建 .vuepress 文件夹，执行命令如下：```mkdir docs\.vuepress```

接着在 .vuepress 文件夹下新建 config.js 文件,这里的 config.js 便是一个 Vuepress 网站必要的配置文件，在其中添加如下代码：
```javascript
module.exports = {
    base: '/', //站点的基础路径
    title: 'Yasemin\'s blog', //网站的标题
    description: '',//网站的描述
    head: [
        // ico 配置
        ['link', { rel: 'icon', href: '/icon.ico' }]
    ],
}
```
## 03-首页
- 可以使用默认布局，将我们最初创建的 /docs/README.md 修改一下：
```javascript
// 是否使用默认主题页
home: true 
// 主页图片 存放目录/docs/.vuepress/public/heroImage.png
heroImage: /heroImage.png
heroText: ……
// tagline: 博客示例
actionText: 关于主人 →
// actionLink: /
features:
- title: 标题一
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: 标题二
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 标题三
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
```
- 也可以自定义首页或者其他页面，可以在页面的md文件中添加页面Vue文件。Vue文件放置在docs/.vuepress/components目录中。
```
如首页组件为Cv
README.md文件中这样编辑：
```js
---
---
<cv />
```
```
## 04-导航栏
导航栏页面标题、搜索框、 导航栏链接、多语言切换、仓库链接，取决于在 .vupress/config.js 文件中的配置：
```javascript
themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean 上次更新时间
        // GitHub仓库
        repo: 'https://github.com/YaseminLi/YaseminLi.github.io.git',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        // 右边导航条
          nav: [
            { text: 'Home', link: '/' },
            { text: 'Content', link: '/blog/blog.md' }
        ],
        //  左侧侧边栏
        sidebar: [
            ['/', '首页'],
            ['/blog/blog.md', '博客搭建过程']
          ]
    }
```
接着，在 docs 目录下新建 blog 文件夹，在 blog 目录下创建 /blog/blog.md 作为我们第一篇博客的内容：
```
# 我的第一篇博客
My First Blog
```
我们再在项目根目录，即 blog-demo 下，输入命令 npm run docs:dev ，浏览器中访问 http://localhost:8080/blog-demo/ 查看页面效果，点击页面右上角的FirstBlog 可以看到我们第一篇博客：
![效果图](/pro/blog/2.png)

## 05-挂载到github
在github中新建仓库：USERNAME.github.io （USERNAME必须是你 Github 的账号名称）

在项目根目录下创建 deploy.sh 文件，内容如下：
```javascript
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:USERNAME/USERNAME.github.io.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages
```
设置package.json
```
{
    "scripts": {
        "deploy": "bash deploy.sh"
      }
}
```

运行 ```npm run deploy``` 即可自动构建部署到github上

## 05-个性化
- 修改默认hover颜色
/docs/.vuepress/styles/palette.styl
```css
$accentColor =#db639b
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
```

- 修改页面其它样式
/docs/.vuepress/styles/index.styl
可以在浏览器中查看想修改的html页面的标签，如将页面右边padding加宽
```css
.theme-default-content:not(.custom) {
  padding 2rem 8rem
}
```

- 关闭搜索框
```js
module.exports = {
  themeConfig: {
    search: false,
    searchMaxSuggestions: 10
  }
}
```

## 添加图片
> 参考:
>1. [VuePress官网](https://vuepress.vuejs.org/zh/)
>2. [https://www.jianshu.com/p/6e8c608f24c8](https://www.jianshu.com/p/6e8c608f24c8)
>3. [https://blog.csdn.net/yinqian999/article/details/90694736](https://blog.csdn.net/yinqian999/article/details/90694736)
>4. [https://www.jiangshuaijie.com/](https://www.jiangshuaijie.com/)

