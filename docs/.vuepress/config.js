module.exports = {
    base: '/',
    title: 'DayDayUp',
    description: 'Yasemin\'s learning ',
    head: [
        // ico 配置
        ['link', { rel: 'icon', href: '/icon.ico' }]
    ],
    plugins: ['demo-container'],
    themeConfig: {
        search: true,//关闭搜索框
        searchMaxSuggestions: 10,
        lastUpdated: '上次更新时间',
        // GitHub仓库
        repo: 'https://github.com/YaseminLi',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            // { text: '项目作品', link: '/project/music.md' },
            { text: 'js', link: '/js/作用域和闭包.md' },
            { text: 'html', link: '/html/模板.md' },
            { text: "css", link: '/css/其他.html' },
            { text: "bom", link: '/bom/history.html' },
            { text: '示例', link: '/action/uploadFile.html' },
            { text: "vue", link: '/vue/init.md' },
            // { text: "react", link: '/css/其他.html' },
            // { text: "webpack", link: '/css/其他.html' },
            { text: "nodeJS", link: '/nodeJS/gulp.html' },
            { text: '算法与数据结构', link: '/algorithm/heap.html' },
            // { text: '面试题', link: '/interview/css相关.html' },
            { text: '小程序', link: '/weixin_miniprogram/指南.html' },
            { text: '其它', link: '/other/git.html' },
        ],
        sidebar: {
            '/vue/': [
                ['init', 'vue项目初始化'],
                ['update', '升级到vue-cli3'],
                ['elementUI', 'elementUI使用'],
                ['markdown', 'vue项目中显示markdown文件'],
                ['key', 'key的作用'],
                ['修饰符', '修饰符'],
                ['组件之间的通信', '组件之间的通信'],
            ],
            '/action/': [
                ['uploadFile', '上传图片'],
                ['clock', '倒计时'],
                ['login', '登录'],
                ['encrypt', '加密解密'],
                ['initPage', '初始化页面后'],
                ['timing', '给页面添加计时器'],
            ],
            '/other/': [
                ['git', 'git'],
                ['cornerstone', 'svn-cornerstone'],
                ['vscode', 'vscode必备'],
                ['身份验证', '身份验证'],
                ['唯一标识', '唯一标识'],
                ['standard', '标准'],
                ['character', '字符编码'],
            ],
            '/vue/': [
                ['init', '项目初始化'],
                ['update', '老项目升级'],
            ],
            '/algorithm/': [
                ['heap', '堆'],
                ['binary-search', '二分查找法'],
                ['source', '资源'],
            ],
            '/js/': [
                ['string', 'string'],
                ['变量类型的分类及检测', '变量类型的分类及检测'],
                ['数据类型的转换', '数据类型的转换'],
                ['作用域和闭包', '作用域和闭包'],
                ['this的使用场景', 'this的使用场景'],
                ['构造函数、原型', '构造函数、原型'],
                ['防抖和节流', '防抖和节流'],
                ['IIFE', 'IIFE'],
                ['cookie storage', 'cookie storage'],
                ['Ajax', 'Ajax'],
                ['calculate', '计算']
            ],
            '/html/': [
                ['模板', 'html模板'],
                ['标签', 'html标签'],
                ['svg', 'svg']
            ],
            '/bom/': [
                ['history', 'history'],
            ],
            '/css/': [
                ['元素类型', '元素类型'],
                ['css sprite', 'css sprite'],
                ['position', 'position'],
                ['图标库', '图标库'],
                ['其他', '其他'],
                ['样式选择器及优先级', '样式选择器及优先级'],
                ['一些样式', '一些样式'],
                ['textShadow','文字阴影'],
                ['layout','布局']
            ],
            '/nodeJS/': [
                ['gulp', '本地构建-gulp']
            ],
            '/interview/': [
                ['html相关', 'html相关'],
                ['css相关', 'css相关'],
                ['js相关', 'js相关'],
                ['vue', 'vue'],
                ['react', 'react'],
                ['本地构建', '本地构建'],
                ['其它', '其它']
            ],
            '/weixin_miniprogram/': [
                ['指南', '指南'],
                ['wxs', 'wxs'],
                ['template', 'template'],
                ['component', 'component'],
                ['获取用户信息', '获取用户信息'],
                ['页面间数据传递', '页面间数据传递'],
                ['云开发', '云开发'],
                ['交互相关', '交互相关'],
                ['样式相关', '样式相关'],
                ['其他', '其他'],
                ['reset', '样式初始化']
            ],
            '/project/': [
                ['music', '音乐WebApp'],
                ['ele', '饿了么商家页面'],
                ['news', '新闻头条平台'],
                {
                    title: '微信小程序-豆瓣电影',
                    children: [
                        ['/project/weixin-douban/项目介绍', '项目介绍'],
                        ['/project/weixin-douban/欢迎页', '欢迎页'],
                        ['/project/weixin-douban/新闻列表页', '新闻列表页'],
                        ['/project/weixin-douban/新闻详情页', '新闻详情页']
                    ]

                },
                {
                    title: '小程序-期刊',
                    children: [
                        ['/project/weixin-jiudao/项目介绍', '项目介绍']
                    ]
                },
                ['to-do', 'Todo待办事项'],
                ['tinyHeart', '爱心鱼小游戏'],
                ['blog', '博客搭建'],
            ],
        }
    }
}