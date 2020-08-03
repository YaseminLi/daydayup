<template>
  <div class="hello">
    <div v-for="(fruit, index) in fruits" v-show="fruit.count > 5" :key="index">
      <div translate=no>{{ fruit.name }}</div>
    </div>
    <div contenteditable="true" dir="rtl" title="title"> jsopieugo[iwh</div>
    <template v-if="show">
      <div autocapitalize='on'>show is true</div>
      <input autocapitalize='on' />
    </template>
    <button   style="margin-top:500px" @click="show = !show">clivkkk</button>
    <a>#######</a>
    <a href="#">#######</a>
    <a href="javascript:void(0)">javascript:void(0)</a>
    <button accesskey="/" @click="accesskeyClick()">accesskey</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      show: true,
      fruits: [
        {
          name: 'apple',
          count: 6
        },
        {
          name: 'pear',
          count: 4
        },
        {
          name: 'peach',
          count: 9
        }
      ]
    }
  },
  props: {
    msg: String
  },
  methods: {
    accesskeyClick () {
      console.log('accesskey')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
