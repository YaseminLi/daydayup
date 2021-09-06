- [sheetjs REACT demo](https://github.com/SheetJS/sheetjs/blob/master/demos/react/sheetjs.js )
- [read file](https://ourcodeworld.com/articles/read/191/how-to-read-a-computer-file-using-javascript-in-the-browser)


react demo
```js
/** 生成下载excel所需数据 */
const generateExcelData = (sourceData) => {
  const excelData = [];
  const headers = [
    'FIRST NAME',
    'LAST NAME',
  ];
  excelData.push(headers);
  sourceData.forEach((item) => {
    // 从原始数据中取所需值
    const {
      firstName,
      lastName,
    } = item;
    // 按照headers顺序组合
    excelData.push([
      firstName,
      lastName,
    ]);
  });
  return excelData;
};

/** 解析上传excel数据 */
const resloveExcelData = (excelData: any[]) => {
  const result: any[] = [];
  excelData.forEach((item) => {
    const target= {
      firstName: item['FIRST NAME'],// FIRST NAME 为excel Headers
      lastName: item['LAST NAME'],
    };
    result.push(target);
  });
  return result;
};

/** 下载EXCEl */
export const downloadExcel = (sourceData: SourceItem[], fileName: string) => {
  /* convert state to workbook */
  const ws = XLSX.utils.aoa_to_sheet(generateExcelData(sourceData));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws);
  /* generate XLSX file and send to client */
  XLSX.writeFile(wb, `${fileName}.xlsx`);
};

/** 
 * <input type="file" accept={['xlsx', 'xls'].map((x) => `.${x}`).join(',')} onChange={handleChange}/>
 * const handleChange = (e: any) => {
    const { files } = e.target;
    if (files && files[0]) {
      uploadExcel(files[0]).then((res) => {});
    }
  };
 * 上传EXCEl */
export const uploadExcel = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target?.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws); // 以第一行header作为key，跳过空行,不包括headers

      /* 解析成功 */
      resolve({
        success: true,
        data: resloveExcelData(data),
      });
    };
    // eslint-disable-next-line prefer-promise-reject-errors
    reader.onerror = () => reject({ success: false });
    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  });
};
```