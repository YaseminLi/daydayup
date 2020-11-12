<template>
  <div>
    <div style="margin-bottom:20px;">
      <h4>原生input</h4>
      <input
        type="file"
        multiple
        ref="uploadFile"
      />
      <button @click="upload">上传</button>
    </div>
    <div style="margin-bottom:20px;">
      <h4>自定义样式</h4>
      <p>控件自带通过css修改兼容性不好,可以用目标元素覆盖</p>
      <div class="uploadMask">
        <input
          type="file"
          multiple
          ref="uploadFile"
          class="uploadInput"
        />
        点击上传
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    upload () {
      console.log('上传', this.$refs.uploadFile.files)
      const formData = new FormData()
      formData.append('file', this.$refs.uploadFile.files[0])
      formData.append('fileName', this.$refs.uploadFile.files[0].name)
      console.log('formData:', formData)
    }
  }
}
</script>

<style lang='scss' scoped>
input {
  border: 1px solid;
  padding: 10px;
  cursor: pointer;
}

button {
  margin-left: 20px;
  cursor: pointer;
}
// 修改文件名颜色
input[type='file']:optional {
  color: red;
}

.uploadMask {
  width: 70px;
  height: 25px;
  background: #409Eff;
  color: white;
  text-align: center;
  line-height: 25px;
  font-size: 14px;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  input {
    opacity: 0;
    position: absolute;
    top: 0;
  }
}
</style>
