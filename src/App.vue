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
  }
}
</script>

<style lang="scss">
// html,
// body {
//   margin: 0;
//   height: 100%;
// }
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   color: #2c3e50;
//   height: 100%;
// }
// .el-container,
// .el-menu {
//   height: 100%;
// }

// #nav {
//   padding: 30px;
//   text-align: center;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
