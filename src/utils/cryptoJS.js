import CryptoJS from 'crypto-js'

// var key = CryptoJS.enc.Utf8.parse('8NONwyJtHesysWpM')// 密钥
// var plaintText = '{"a":1}' // 需要传输的明文
// var encryptedData = CryptoJS.AES.encrypt(plaintText, key, {
//   mode: CryptoJS.mode.ECB, // 这里是选择的模式
//   padding: CryptoJS.pad.Pkcs7// 这里也是选择的一个模式
// })
// console.log('加密前：' + plaintText)
// console.log('加密后：' + encryptedData)

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
