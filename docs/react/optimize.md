## 按需引入

### 第三方工具库
 使用第三方工具库时，不做特殊处理时，资源会和其他node_modules装进vendors,导致在首页加载时请求资源太大。使用按需引入后，只有在调用相关方法时，才会加载该资源。

 如xlsx的使用:
 ```js
 //@/utils/excelHelpers

 import * as XLSX from 'xlsx/xlsx.mini.js';

 /** 下载EXCEl */
 export const downloadExcel = (data, fileName: string) => {
  const ws = XLSX.utils.aoa_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws);
  XLSX.writeFile(wb, `${fileName}.xlsx`);
};
```
- 常规使用
```js
// @/components/excel.tsx
import {downloadExcel} from '@/utils/excelHelpers'
const Excel=()=>{
    const download=()=>{
        downloadExcel(data,'file')
    }
    return(
        <div onclick={download}>下载excel</div>
    )
}
 ```

- 按需引入

```js
// @/components/excel.tsx
const Excel=()=>{
    const download=()=>{
        import('@/utils/excelHelpers'),then(downloadExcel=>{
            downloadExcel(data,'file')
        })
    }
    return(
        <div onclick={download}>下载excel</div>
    )
}
```


## 交互

- [dynamicImport](https://umijs.org/zh-CN/config#dynamicimport)
开启dynamicImport后，不同路由组件会打包出不同的js文件。切换路由后，在加载页面资源时，显示loading
```js
// config.js
  dynamicImport: {
    loading: '@/components/loading',
  },
```