## vue2.0 升级到 vuecli3

### 全局环境变量配置

项目根目录中添加以下文件：

- .env.production 生产环境配置

```js
NODE_ENV=production
VUE_APP_API_ROOT=https://i2test3.want-want.com
```

- .env.developent 开发环境配置

```js
NODE_ENV=development
VUE_APP_API_ROOT=https://i2test3.want-want.com
```

<mark>全局变量名称只能以 VUE*APP*开头!!!!坑死我了……</mark>
@vue/cli-service/lib/util/resolveClientEnv.js 是对以 VUE*APP*开头的变量名的过滤

    在项目中可以通过process.env.VUE_APP_API_ROOT来获取地址

### vux 的适配

vux 不支持 vuecli3.0，所以对 vux 要进行适配处理
vue 的降级和 i18nd 的使用

vux升级vuecli3
https://juejin.im/post/6844904101222809613#heading-8

Nom
npm i vux@^2.8.1 vux-loader@^1.1.31  vue-loader@^14.0.0 -D

 vue-loader@14.2.2 -D  ## 解决vux对 vue-cli 3.x的兼容性问题

Autoprefix 不用加 vuecli已带

