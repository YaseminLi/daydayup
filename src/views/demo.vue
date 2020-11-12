<template>
  <div class="props">
    <PropEvent @add="count+=$event" />
    <div>{{count}}</div>
    <input-item v-model="inputValue" />
    <sync :date.sync='date' />
  </div>
</template>

<script>
// @ is an alias to /src
import PropEvent from '@/components/PropEvent'
import InputItem from '@/components/InputItem'
import Sync from '@/components/Sync'

export default {
  name: 'Props',
  components: {
    PropEvent,
    InputItem,
    Sync
  },
  data () {
    return {
      count: 0,
      inputValue: '',
      date: '2020'
    }
  }
}
</script>
