<template>
  <button @click="click">点击更新时间{{date}}</button>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      default: '',
    },
  },
  methods: {
    click() {
      this.$emit('update:date', String(new Date()));
    },
  },
};
</script>

<style>
</style>
