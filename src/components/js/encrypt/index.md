# 前端数据的加密方法
- 登录页面有这样一个需求：需要勾选是否在本地存储账号密码并进行存储，后面进入登录页面时可以自动填充存储的账号密码
- 目前的方法是：将账号密码存储进localstorage中，进登录页面时从local中读取就好。
- 但是将账号密码直接明文存储进localStorage好像很蠢，然后就去搜了前端数据加密的方法，基本上是将需要加密的数据通过转译变成非明文状态，不知道这样做有没有坑……

## 使用crypt加密库 
### 使用crypt库
以vue项目为例，实现将明文的加密与解密
1. 安装npm包
npm i crypto-js -D

2. 编写加密解密方法
例utils文件夹中新建encrypt.js文件
```js
import CryptoJS from 'crypto-js'

const key = CryptoJS.enc.Utf8.parse('1234123412ABCDEF') // 十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412') // 十六位十六进制数作为密钥偏移量

// 解密方法
function Decrypt (word) {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  const decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}

// 加密方法
function Encrypt (word) {
  const srcs = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.ciphertext.toString().toUpperCase()
}

export default {
  Decrypt, // 解密
  Encrypt // 加密
}

```

3. 使用加密解密方法
```js
// 引入方法
import cryptoJS from '../utils/cryptoJS.js'
// 加密调用
cryptoJS.Encrypt(password) 
// 解密调用
cryptoJS.Decrypt(password)
```

### 不能使用npm包时，引入外部cryptojs文件
```js
// 这个链接验证过可以使用，但不是官网找到的不知道靠不靠谱
<script src="http://react.file.alimmdn.com/aes.js" type="text/javascript" charset="utf-8"></script>
<script>
// 具体使用同vue中一样
CryptoJS.AES…… 
</script>
```
