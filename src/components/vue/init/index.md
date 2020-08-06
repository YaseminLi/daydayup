vue init

router 不存在的路由通过*重定向到某个页面
{
path: '*',
redirect: '/login' // 当路由未匹配时重定向，可作初始化显示页面设置
},
