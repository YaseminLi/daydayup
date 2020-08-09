module.exports = {
    base: '/',
    title: '……的blog',
    description: 'Yasemin\'s blog ',
    head: [
        // ico 配置
        ['link', { rel: 'icon', href: '/icon.ico' }]
    ],
    themeConfig: {
        search:false,//关闭搜索框
        searchMaxSuggestions: 10,
        lastUpdated: '上次更新时间',
        // GitHub仓库
        repo: 'https://github.com/YaseminLi/daydayup.git',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: '项目作品', link: '/project/music.md' },
            {
                text: '学习笔记',
                items: [
                { text: 'js', link: '/articles/js/作用域和闭包.html' },
                  { text: 'html', link: '/articles/html/模板.html' },
                  { text: 'css', link: '/articles/css/' },
                  { text: 'nodeJS', link: '/articles/nodeJS/gulp.html' },
                  { text: '算法与数据结构', link: '/articles/algorithm/heap.html' },
                  { text: '面试题', link: '/articles/interview/css相关.html' },
                  { text: '小程序', link: '/articles/weixin_miniprogram/指南.html' }
                ]
              }
            
        ],
        sidebar: {
            '/articles/algorithm/': [
                 ['heap','堆'],
                 ['binary-search','二分查找法'],
            ],
            '/articles/js/': [
                ['变量类型的分类及检测','变量类型的分类及检测'],
                ['数据类型的转换','数据类型的转换'],
                ['作用域和闭包','作用域和闭包'],
                ['this的使用场景','this的使用场景'],
                ['构造函数、原型','构造函数、原型'],
                ['防抖和节流','防抖和节流'],
                ['IIFE','IIFE'],
                ['cookie storage','cookie storage'],
                ['Ajax','Ajax']
            ],
            '/articles/html/': [
                ['模板','html模板'],
                ['标签','html标签'],
                ['svg','svg']
            ],
            '/articles/css/': [
                ['元素类型','元素类型'],
                ['css sprite','css sprite'],
                ['position','position'],
                ['图标库','图标库'],
                ['其他','其他'],
                ['样式选择器及优先级','样式选择器及优先级'],
                ['一些样式','一些样式'],
            ],
            '/articles/nodeJS/': [
                ['gulp','本地构建-gulp']
            ],
            '/articles/interview/': [
                ['html相关','html相关'],
                ['css相关','css相关'],
                ['js相关','js相关'],
                ['vue','vue'],
                ['react','react'],
                ['本地构建','本地构建'],
                ['其它','其它']
            ],
            '/articles/weixin_miniprogram/': [
                ['指南','指南'],
                ['wxs','wxs'],
                ['template','template'],
                ['component','component'],
                ['获取用户信息','获取用户信息'],
                ['页面间数据传递','页面间数据传递'],
                ['云开发','云开发'],
                ['交互相关','交互相关'],
                ['样式相关','样式相关'],
                ['其他','其他']
            ],
            '/project/': [
                ['music','音乐WebApp'],
                ['ele','饿了么商家页面'],
                ['news','新闻头条平台'],
                {
                    title:'微信小程序-豆瓣电影',
                    children:[
                        ['/project/weixin-douban/项目介绍','项目介绍'],
                        ['/project/weixin-douban/欢迎页','欢迎页'],
                        ['/project/weixin-douban/新闻列表页','新闻列表页'],
                        ['/project/weixin-douban/新闻详情页','新闻详情页']
                    ]

                },
                {
                    title:'小程序-期刊',
                    children:[
                        ['/project/weixin-jiudao/项目介绍','项目介绍']
                    ]
                },
                ['to-do','Todo待办事项'],
                ['tinyHeart','爱心鱼小游戏'],
                ['blog','博客搭建'],
            ],
        }
    }
}