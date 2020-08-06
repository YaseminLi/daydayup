<template>
<el-menu :show-timeout="200" :default-active="$route.path"
            mode="vertical" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF" router>
             <template v-for="item in routes" >
                 <!-- 一级菜单 -->
                <el-menu-item v-if="!item.leaf && !item.leafThree" :index="item.path" :key="item.path">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
                <!-- 二级菜单 -->
                <el-submenu :index="item.path" v-if="item.leaf" :key="item.path">
                    <template slot="title">
                        <i :class="item.meta.icon"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item v-for="child in item.children" :index="child.path"  :key="child.path">
                        <i :class="child.meta.icon"></i>
                        <span>{{child.name}}</span>
                    </el-menu-item>
                </el-submenu>
                <!-- 三级菜单 -->
                <el-submenu :index="item.path" v-if="item.leafThree" :key="item.path">
                    <template slot="title">
                        <i :class="item.meta.icon"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <template v-for="child in item.children" >
                      <el-submenu  v-if="child.leaf" :key="child.path" :index="child.path">
                          <template slot="title">
                              <i :class="child.meta.icon"></i>
                              <span>{{child.name}}</span>
                          </template>
                          <el-menu-item v-for="childThree in child.children" :index="childThree.path" :key="childThree.path">
                              <i :class="childThree.meta.icon"></i>
                              <span>{{childThree.name}}</span>
                          </el-menu-item>
                      </el-submenu>
                      <el-menu-item v-else :index="child.path"  :key="child.path">
                        <i :class="child.meta.icon"></i>
                        <span>{{child.name}}</span>
                    </el-menu-item>
                    </template>
                </el-submenu>
             </template>
       </el-menu>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    routes () {
      console.log('sidebar')
      return this.$router.options.routes.filter(item => !item.hidden)
    }
  }
}
</script>

<style lang='scss' scoped>
.el-submenu .el-menu-item{
  min-width:100%
}
</style>
