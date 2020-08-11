| 特性  | Cookie | localStorage  | sessionStorage  |
|-------|-------|-------|-------|
| 数据的生命期  | 一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效 | 除非被清除，否则永久保存    | 仅在当前会话下有效，关闭页面或浏览器后被清除 |
| 存放数据大小 | 4K左右 | 一般为5MB      | 一般为5MB   |
| 与服务器端通信| 每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题  | 仅在客户端（即浏览器）中保存，不参与和服务器的通信 | 仅在客户端（即浏览器）中保存，不参与和服务器的通信     |
| 易用性|需要自己封装，源生的Cookie接口不友好  | 源生接口可以接受，亦可再次封装来对Object和Array有更好的支持，ios satari的隐藏模式下localStorage.getItem会报错，可以用try-catch封装 | 源生接口可以接受，亦可再次封装来对Object和Array有更好的支持     |
| 场景| 储存登录信息 |     |