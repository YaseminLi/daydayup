<template>
  <!-- <form method='get' action='https://www.baidu.com' onsubmit='submit'> -->
    <!-- method:提交表单的http方式 -->
    <!-- action:处理表单提交的url,默认为当前的域名+端口号 -->
  <div class='login'>
    <div class='item'>
      <!-- label标签：通过for属性与表单元素关联，for属性值需要和表单的ID一致，效果：点击label标签时，会触发关联表单元素的click事件 -->
      <label for='user'>账号：</label>
      <input placeholder='请输入' id="user" v-model='user'/>
    </div>
    <div class='item'>
      <label for='password'>密码：</label>
      <!-- type="password"密码显示为点，星号的话js处理 -->
      <input placeholder="请输入" id="password" type="password" v-model='password'/>
    </div>
    <div class='item'>
      <div class="remember-user" >
        <input type="checkbox" id="remember-user" v-model='isRememberUser' class='checkbox-cursor'/>
        <label  for='remember-user' class='checkboxCursor'>记住账号</label>
      </div>
       <div class="remember-password">
        <input type="checkbox" id="remember-password" v-model='isRememberPassword' class='checkbox-cursor'/>
        <label for='remember-password' class='checkboxCursor'>记住密码</label>
      </div>
    </div>
      <!-- form中type="submit"点击提交表单 -->
      <!-- <button type="submit">登录</button> -->
      <button @click='loginCheck'>登录</button>
  </div>
  <!-- </form> -->
</template>

<script>
// form表单编写 哪些值是携带的
// input框：点击label聚焦input,密码显示圆点，无聚焦外框
// checkbox:替换成图片？点击文字选中 鼠标换成手的样式
// 本地存储的密码加密 cryptoJS
import cryptoJS from '../utils/cryptoJS.js'
export default {
  name: 'Login',
  data () {
    return {
      user: '',
      password: '',
      isRememberUser: '',
      isRememberPassword: ''
    }
  },
  created () {
    // created生命周期里，data数据已经初始化，DOM还没有挂载
    this.getLoginInfo()
    // var key = CryptoJS.enc.Utf8.parse('8NONwyJtHesysWpM')// 密钥
  },
  methods: {
    getLoginInfo () {
      // 从本地读取账号密码等信息
      const loginInfo = JSON.parse(localStorage.getItem('login'))
      console.log('loginInfo', loginInfo)
      const { user, password, isRememberUser, isRememberPassword } = loginInfo
      this.user = user
      this.password = cryptoJS.Decrypt(password)
      this.isRememberUser = isRememberUser
      this.isRememberPassword = isRememberPassword
    },
    loginCheck () {
      if (!this.user || !this.password) {
        this.$message.error('请输入用户名、密码')
      } else {
        this.login()
      }
    },
    storageLoginInfo () {
      // 账号密码在本地的存储
      const login = {
        isRememberUser: this.isRememberUser,
        isRememberPassword: this.isRememberPassword,
        user: this.isRememberUser ? this.user : '',
        password: this.isRememberPassword ? cryptoJS.Encrypt(this.password) : ''
      }
      localStorage.setItem('login', JSON.stringify(login))
    },
    login () {
      // 登入

      // 发送登录请求，根据服务端返回的状态码判断是否登录成功
      // 成功
      // 1.在本地存储账号密码等信息
      console.log('password:', this.password)
      this.storageLoginInfo()
      // 2.路径跳转 this.$router.push()
    }
  },
  watch: {
    isRememberPassword () {
      // 记住密码时需要记住账号
      if (this.isRememberPassword) {
        this.isRememberUser = true
      }
    },
    // 不记住账号时，密码也不能记住
    isRememberUser () {
      if (!this.isRememberUser) {
        this.isRememberPassword = false
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.item{
  display:flex;
  margin:5px 0
}
.checkbox-cursor{
  cursor:pointer
}
</style>
