<template>
  <div class="container">
    实现左侧导航菜单栏。elementUI中的navMenu只是给出了导航栏组件的结构，没有相关路由配置和页面该如何显示。（此时非常想念AntDesignPro）
    <br />正好这个项目想组成这种导航形式，参考
    <a href="https://blog.csdn.net/lucynie/article/details/100172281">这个</a>,以下为过程：
    主要增加和改造三个部分：
    <ol>
      <li>增加layout组件，负责侧边栏和对应内容的布局管理</li>
      <li>增加sidebar侧边栏组件，编写具体的导航内容，包括文字、icon和对应的路由</li>
      <li>修改router的配置，加入二级、三级路由</li>
    </ol>
  </div>
</template>

<style scoped lang="scss">
</style>
