<template>
  <div id="app" @mousemove="mousemove">
    <!-- <el-container v-if="!showCss"> -->
    <el-container>
      <!-- <el-aside width="200px">
        <Sidebar />
      </el-aside> -->

      <el-main>
        <template>
          <AppMain />
        </template>
      </el-main>
    </el-container>
    <!-- <router-view ></router-view> -->
  </div>
</template>

<script>
import Sidebar from './components/common/Sidebar.vue'
import AppMain from './components/common/AppMain.vue'

export default {
  components: {
    Sidebar,
    AppMain,
  },
  data() {
    return {
      showCss: false,
      timing: 0, // 鼠标未移动的计时
      idelTime: 30 * 60, // 设置超时时间30min
    }
  },
  created() {
    this.timeIdler()
  },
  mounted() {
    if (this.$router.history.current.name) {
      this.showCss = true
    }
  },
  watch: {
    $route(to, from) {
      if (to.name !== from.name) {
        // 若跳转页面，将页面的滚动置0
        const el = document.querySelector('.el-main')
        const left = el.scrollLeft
        const top = el.scrollTop
        if (left || top) {
          el.scrollTop = 0
          el.scrollLeft = 0
        }
      }
    },
  },
  methods: {
    // 鼠标移动，计时器清0
    mousemove() {
      this.timing = 0
    },
    timeIdler() {
      // 每隔一秒，计时器加一；当计时器时间大于超时时间时，跳转到登陆页
      setInterval(() => {
        this.timing += 1
        if (this.timing >= this.idelTime) {
          // 这里可以做登录信息的清空，如存储在localstorage中的登录信息
          this.timing = 0
          this.$router.push('login')
        }
      }, 1000)
    },
  },
}
</script>

<style lang="scss">
.el-main {
  width: calc(100% - 200px);
  height: 100vh;

  section {
    min-width: 1000px;
    min-height: 1000px;
  }
}

.el-aside {
  background-color: rgb(48, 65, 86);
}
</style>
