<template>
  <!-- <form method='get' action='https://www.baidu.com' onsubmit='submit'> -->
  <!-- method:提交表单的http方式 -->
  <!-- action:处理表单提交的url,默认为当前的域名+端口号 -->
  <div class="login">
    <div class="item">
      <!-- label标签：通过for属性与表单元素关联，for属性值需要和表单的ID一致，效果：点击label标签时，会触发关联表单元素的click事件 -->
      <label for="user">账号：</label>
      <input placeholder="请输入" id="user" v-model="user" />
    </div>
    <div class="item">
      <label for="password">密码：</label>
      <!-- type="password"密码显示为点，星号的话js处理 -->
      <input
        placeholder="请输入"
        id="password"
        type="password"
        v-model="password"
      />
    </div>
    <div class="item">
      <div
        class="remember"
        :class="isRememberUser ? 'is-remember' : 'not-remember'"
      >
        <label for="remember-user" class="checkboxCursor">
          <input
            type="checkbox"
            id="remember-user"
            v-model="isRememberUser"
            class="checkbox-cursor"
          />
          记住账号</label
        >
      </div>
      <div
        class="remember"
        :class="isRememberPassword ? 'is-remember' : 'not-remember'"
      >
        <label for="remember-password" class="checkboxCursor">
          <input
            type="checkbox"
            id="remember-password"
            v-model="isRememberPassword"
            class="checkbox-cursor"
          />
          记住密码</label
        >
      </div>
    </div>
    <!-- form中type="submit"点击提交表单 -->
    <!-- <button type="submit">登录</button> -->
    <button @click.once="loginCheck">登录</button>
    <div v-for="item in list" :key="item" ref="listItem">{{ item }}</div>
  </div>
  <!-- </form> -->
</template>

<script>
// form表单编写 哪些值是携带的
// input框：点击label聚焦input,密码显示圆点，无聚焦外框
// checkbox:替换成图片 点击文字选中 鼠标换成手的样式
// 本地存储的密码加密 cryptoJS
import CryptoJS from 'crypto-js';

const key = CryptoJS.enc.Utf8.parse('1234123412ABCDEF'); // 十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412'); // 十六位十六进制数作为密钥偏移量

// 解密方法
function Decrypt(word) {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

// 加密方法
function Encrypt(word) {
  const srcs = CryptoJS.enc.Utf8.parse(word);
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.ciphertext.toString().toUpperCase();
}

export default {
  name: 'Login',
  data() {
    return {
      user: '',
      password: '',
      isRememberUser: '',
      isRememberPassword: '',
      list: [1, 2, 3, 4],
    };
  },
  created() {
    console.log('login created');
    this.getLoginInfo();
  },
  methods: {
    getLoginInfo() {
      // 从本地读取账号密码等信息,key尽量唯一避免重复
      const loginInfo = JSON.parse(localStorage.getItem('login-daydayup'));
      // console.log('loginInfo', loginInfo)
      if (loginInfo) {
        const {
          user, password, isRememberUser, isRememberPassword,
        } = loginInfo;
        this.user = user;
        this.password = Decrypt(password);
        this.isRememberUser = isRememberUser;
        this.isRememberPassword = isRememberPassword;
      }
    },
    loginCheck() {
      if (!this.user || !this.password) {
        this.$message.error('请输入用户名、密码');
      } else {
        this.login();
      }
    },
    storageLoginInfo() {
      // 账号密码在本地的存储
      const login = {
        isRememberUser: this.isRememberUser,
        isRememberPassword: this.isRememberPassword,
        user: this.isRememberUser ? this.user : '',
        password: this.isRememberPassword ? Encrypt(this.password) : '',
      };
      localStorage.setItem('login-daydayup', JSON.stringify(login));
    },
    login() {
      // 登入

      // 发送登录请求，根据服务端返回的状态码判断是否登录成功
      // 成功
      // 1.在本地存储账号密码等信息
      console.log('password:', this.password);
      this.storageLoginInfo();
      // 2.路径跳转 this.$router.push()
    },
  },
  watch: {
    isRememberPassword() {
      // 记住密码时需要记住账号
      if (this.isRememberPassword) {
        this.isRememberUser = true;
      }
    },
    // 不记住账号时，密码也不能记住
    isRememberUser() {
      if (!this.isRememberUser) {
        this.isRememberPassword = false;
      }
    },
  },
  mounted() {
    console.log('login mounted');
  },
  destroyed() {
    console.log('login destoryed');
  },
  activated() {
    console.log('login actived');
  },
  deactivated() {
    console.log('login deactivated');
  },
};
</script>
<style lang="scss" scoped>
.login {
  font-size: 16px;
}
.item {
  display: flex;
  margin: 5px 0;
}
.remember input {
  opacity: 0;
}
.checkboxCursor {
  cursor: pointer;
}
.is-remember {
  background: url('../assets/images/checkbox_checked.png') no-repeat 0 50%;
}
.not-remember {
  background: url('../assets/images/checkbox_normal.png') no-repeat 0 50%;
}
</style>
