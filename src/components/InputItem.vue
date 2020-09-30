<template>
  <input
    type="checkbox"
    @change="$emit('change', $event.target.checked)"
  >
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
}
</script>

<style>
</style>
