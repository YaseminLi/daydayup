::: demo
使用原生input，```<input type="file"/>```部分属性含义：
- accept:接受哪些文件类型
- @change:触发上传事件，可以在其中进行文件资源处理
- capture="camera" 移动端调用摄像头

获取上传的文件资源：
- input自带change事件  ```@change="upload" upload(e){e.target.file}```
- 点击其他元素来上传文件 ```this.$refs.uploadFile.files[0]```


```html
<template>
  <div>
    <div style="margin-bottom:20px;">
      <h4>原生input</h4>
      <input
        type="file"
        multiple
        ref="uploadFile"
      />
      <a @click="uploadByClick">点击上传</a>
    </div>
    <div style="margin-bottom:20px;">
      <h4>自定义样式</h4>
      <div>控件自带通过css修改兼容性不好,可以用其他元素覆盖</div>
      <div class="uploadMask">
        <input
          type="file"
          multiple
          class="uploadInput"
          @change="upload"
        />
        点击上传
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    uploadByClick () {
      console.log('uploadByClick', this.$refs.uploadFile.files)
      const formData = new FormData()
      formData.append('file', this.$refs.uploadFile.files[0])
      formData.append('fileName', this.$refs.uploadFile.files[0].name)
      // formData.append('fileName', 'test')//不会覆盖
      // formData.set('fileName', 'set')//会使formData只存在一个fileName
      // for (const p of formData) {
      //   console.log(p)
      // }
      // 发送数据data=formData
    },
    upload (e) {
      console.log('upload', e.target.files[0])
    }
  }
}
</script>

<style lang="scss" scoped>
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
  background: #409eff;
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


``` 
:::