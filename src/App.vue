<template>
  <div id="app">
    <el-container v-if="!showCss">
      <el-aside width="200px">
        <Sidebar />
      </el-aside>

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
import Sidebar from './components/common/Sidebar'
import AppMain from './components/common/AppMain'

export default {
  components: {
    Sidebar,
    AppMain
  },
  data () {
    return {
      showCss: false
    }
  },
  mounted () {
    if (this.$router.history.current.name) {
      this.showCss = true
    }
  },
  watch: {
    $route (to, from) {
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
    }
  }
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
</style>
