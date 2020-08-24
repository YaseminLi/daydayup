## vue-cli3生产环境去除console实践

参考：[https://juejin.im/post/6844903793637720072#heading-2](https://juejin.im/post/6844903793637720072#heading-2)

在开发环境时会加入很多console.log来调试，而到了打包生产环境的代码时，希望去除console，但又不可能手动一个个删除吧……

去查了下，有以下几种方法：(实践时版本为```"@vue/cli-service": "~4.5.0"```)

### UglifyJsPlugin-不可用
1. 使用
- 安装npm install uglifyjs-webpack-plugin --save-dev
- vue.config.js
```js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports={
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true // 生产环境自动删除console
            },
            warnings: false
          },
          sourceMap: false,
          parallel: true// 使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        })
      )
    }
  }
}
```
2. 结果----error
error:Unexpected token: punc «(»

原因：ugifyjs是用来压缩js文件，但是它无法解析ES6……

### TerserPlugin-npm-可用但不推荐
1. 使用
- npm install terser-webpack-plugin --save-dev
- vue.config.js中添加配置：
```js
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  configureWebpack: {
    // 注释console
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              warnings: false,
              drop_console: true, // 注释console，默认为false,传入true后丢弃对console.的调用，则打包文件中也不会出现console
              drop_debugger: true,
              pure_funcs: ['console.log'] // 移除console,pure_funcs是告诉webpack这些函数是没有副作用的，可以移除。对于console.log来说，与drop_console的效果一样，二选一即可
            }
          }
        })
      ]
    }
  }
}
```
2. 结果----成功,在打包出的文件中搜索不到console.log

但是，当查看项目生产环境的webpack配置信息```npx vue-cli-service inspect --mode production >> webpack.config.production.js```，可以发现:竟然可以在文件中查到两个terserOptions!!!第一个配置信息很全，第二个里面就是我们在vue.config.js中的配置

- 第一个，compress里面有一长串配置，就是没有vue.config.js里添加的
```js
 terserOptions: {
            compress: {
              ……
              unused: true,
              ……
            },
            mangle: {
              safari10: true
            }
          }
```

- 第二个,同vue.config.js里添加的
```js
terserOptions: {
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log'] 
            }
          }
```

应该是vue-cli中已经使用了terser然后我们又配置了一个，所以才会出现俩，在`node_modules/@vue/cli-service/lib/config/base.js`文件中可以找到terser的配置。那是否可以直接在默认配置上添加呢？

官方文档：[vuecli4中去除console.log](https://cli.vuejs.org/migrating-from-v3/)

### vuecli3自带terser配置，添加options即可---推荐
vue.config.js
```js
module.exports = {
  chainWebpack: (config) => {
    // 不需要判断是否是生产环境，webpack会处理
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  }
}
```
成功，此时再查看webpack的项目配置文件中，terser也只有vuecli与我们添加的合并后的一个了！

