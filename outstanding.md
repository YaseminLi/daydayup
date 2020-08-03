计算的一些写法：
+a 把字符串 a 转换成数字
a|0 取 a 的整数部分

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
