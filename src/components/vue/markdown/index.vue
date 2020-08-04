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

<style lang="less" scoped>
// 这里可以约束解析出来后的 markdown 标签样式，如设置 h3{...}
</style>
