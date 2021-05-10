<template>
  <button @click="$emit('add',1)">点击</button>
</template>

<script>
export default {
    created(){
    console.log('child create');
  },
    beforeDestroy(){
    console.log('child beforeDestroy');
  },
  destroyed(){
    console.log('child destroyed');
  }

};
</script>

<style>
</style>
