<template>
  <div id="app">
    <Layout />
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Login</router-link> | -->
    <!-- <router-link to="/about">About</router-link>|
      <router-link to="/text">Text</router-link>|
      <router-link to="/menu">Menu</router-link>
    </div>
    <router-view /> -->
  </div>
</template>
<script>
import Layout from './components/common/Layout.vue'
export default {
  components: {
    Layout
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
