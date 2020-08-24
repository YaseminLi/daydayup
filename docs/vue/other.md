## elementUI的多个表单一起验证利用promise.all
```js
// 组件more
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
     <el-form-item label="上架范围" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
</el-form>

// 引用组件more
 <more
      ref="more"
      :data="moreInfo"
      :disabled="disabled" />

// 提交验证
const p3=new Promise((resolve,reject)=>{
    this.$refs['more'].$refs['ruleForm'].validate(valid=>{
        if(valid) resolve()
    })
})

Promise.all([p1,p2,p3]).then(()=>{
   console.log('验证通过,提交表单') 
    
})
```
