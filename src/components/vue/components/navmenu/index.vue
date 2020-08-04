<template>
    <div v-html="md"></div>
</template>

<script>
import md from './markdown.md'
console.log(md) // 是DOM结构

export default {
  data () {
    return {
      md
    }
  }
}
</script>
