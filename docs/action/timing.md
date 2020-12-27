### 给页面添加计时器
当用户长时间未操作页面，甚至没有在页面上移动鼠标，需要恢复未登录状态且页面跳转到登陆页。

添加一个计时器，设定超时时间；每1秒计时器加1，当鼠标移动时，计时器清空。

```
<template>
  <div id="app" @mousemove="mousemove">
    <router-view ></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timing: 0, // 鼠标未移动的计时
      idelTime: 30 * 60 // 设置超时时间30min
    }
  },
  created () {
    this.timeIdler()
  },
  methods: {
    // 鼠标移动，计时器清0
    mousemove () {
      this.timing = 0
    },
    timeIdler () {
      // 每隔一秒，计时器加一；当计时器时间大于超时时间时，跳转到登陆页
      setInterval(() => {
        this.timing += 1
        if (this.timing >= this.idelTime) {
          // 这里可以做登录信息的清空，如存储在localstorage中的登录信息
          this.timing = 0
          this.$router.push('login')
        }
      }, 1000)
    }
  }
}
</script>
```