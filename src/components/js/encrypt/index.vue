<template>
    <div v-html="md"></div>
</template>

<script>
import md from './index.md'

export default {
  data () {
    return {
      md
    }
  }
}
</script>
