::: demo
```html
<template>
  <span>
      <input 
      type="file" 
      accept="image/*" 
      id='uploadFile' 
      @change="readLocalFile()" 
      capture="camera"
      >
  </span>
</template>
<script>
export default {
  data() {
    return {
      // message: 'Hello Vue'
    }
  }
}
</script>
<style>

</style>
``` 
:::