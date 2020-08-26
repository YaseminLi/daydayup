:::demo
```html
<template>
        <h1>{{time}}</h1>
</template>
<script>
export default {
  data () {
    return {
      time: '',
      sh: 0
    }
  },
  mounted () {
    this.FreshTime()
    this.sh = setInterval(this.FreshTime, 1000)
  },
  methods: {
    FreshTime () {
      var endtime = new Date('2021/8/10,14:51:12')// 结束时间
      var nowtime = new Date()// 当前时间
      var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000)
      const d = parseInt(lefttime / 3600 / 24)
      const h = parseInt(lefttime / (60 * 60)) % 24
      const m = parseInt(lefttime / (60)) % 60
      const s = parseInt(lefttime % 60)

      this.time = d + '天' + h + '小时' + m + '分' + s + '秒'

      if (lefttime < 0) {
        this.time = '团购已结束'
        clearInterval(this.sh)
      }
    }
  }

}
</script>
```
:::

