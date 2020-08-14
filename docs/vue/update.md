## vue2.0升级到vuecli3

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
<mark>全局变量名称只能以VUE_APP_开头!!!!坑死我了……</mark>
@vue/cli-service/lib/util/resolveClientEnv.js 是对以VUE_APP_开头的变量名的过滤

    在项目中可以通过process.env.VUE_APP_API_ROOT来获取地址