<template>
  <div class="Login">
    <header>
    <hgroup>
        <h1> Recall Fan Page </h1>
        <h2> Only for people who want the memory of a lifetime. </h2>
    </hgroup>
</header>
<form action="" method="get">
    <label for="username">姓名:</label>
    <!-- <input id="username" name="username" type="text" placeholder="4-10个英文字母" pattern="[A-Za-z]{4,10}" required="required" autofocus /> -->
    <input type="text" pattern="^\s{1}$" oninvalid="setCustomValidity('请输入1位数字')"/>
    <input type="email"  oninvalid="setCustomValidity('请输入有效邮箱格式')"/>
    <button type="submit">提交</button>
</form>
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>This is an image of something interesting</p>
    <figure>
    <img src="../assets/logo.png" alt="About image" />
    <figcaption>
        <p>This is an image of something interesting. </p>
    </figcaption>
</figure>
<input type="email" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Login',
  components: {
    HelloWorld
  }
}
</script>
