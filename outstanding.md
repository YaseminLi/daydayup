Jwt json web tokens
http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html
https://ninghao.net/blog/2834

一般认证流程是：
客户通过用户名密码向服务端发起请求后，服务端存储一个 session 的同时会返回给客户端存储在 cookie 中，后续请求都会携带 cookie，服务端根据 cookie 进行验证。
单机 ok，如果是服务器集群，需要 session 共享时，操作性就会很复杂

JWT 认证
服务器生成的 JWT 只存储在客户端，header+payload+signature 三部分组成

Vue init
开发环境的 localhost 起来后，自动打开项目
根目录中增加 vue.config.js 文件
module.exports = {
devServer: {
port: 8000,
open: true,
}
}

导航菜单

h5 内嵌页面需要考虑哪些

login 页面尽量完整的

别名的配置


this.$router.options.routes获取路由

图 一些顶点的集合，顶点同过一系列的边连接
无向图
G=<V,E> v为顶点集，E为边集
V(G2)={v1，v2，v3，v4}
E(G2)={(vl，v2)，(v1，v3)，(v1，v4)，(v2，v3)，(v2，v4)，(v3，v4)}

图的表示 https://www.jianshu.com/p/bce71b2bdbc8
1. 邻接列表 每一个顶点会存储一个从它这里开始的边的列表 稀疏图适用
2. 邻接矩阵 添加顶点的成本比较昂贵，按照行列创建新的矩阵，已有的数据复制到新的中
操作	邻接列表	邻接矩阵
存储空间	O(V + E)	O(V^2)
添加顶点	O(1)	O(V^2)
添加边	O(1)	O(1)
检查相邻性	O(V)	O(1)

https://visualgo.net/zh  数据结构和算法的可视化

分类：
开发工具
typescript