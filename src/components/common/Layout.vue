<template>
  <el-container>
    <el-aside width="200px">
      <Sidebar />
      </el-aside>

    <el-main>
      <template>
      <AppMain />
      </template>
    </el-main>
  </el-container>
</template>

<script>
import Sidebar from './Sidebar'
import AppMain from './AppMain'
export default {
  components: {
    Sidebar,
    AppMain
  }
}
</script>
<style lang='scss' scoped>
// #sidebar{
//   width:200px
// }
</style>
