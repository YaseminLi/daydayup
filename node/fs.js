const fs = require('fs');

try {
  //   fs.open('/Users/user/Downloads/test.xlsx', (err, fd) => {
  //     console.log('🚀 ~ file: fs.js ~ line 5 ~ fs.open ~ err', err, fd);
  //   });

  //   const stats = fs.statSync('/Users/user/Downloads/test.xlsx');
  //   console.log(
  //     '🚀 ~ file: fs.js ~ line 8 ~ stats',
  //     stats,
  //     stats.isFile(),
  //     stats.isDirectory(),
  //     stats.isSymbolicLink()
  //   );

  //   fs.readFile('/Users/user/Downloads/test.xlsx', (error, data) => {
  //     if (error) {
  //       console.log('error', error);
  //       return;
  //     }
  //     console.log('data', data);
  //   });

  // 写入文件内容
  const content = '此为fs写入的内容';
  try {
    fs.writeFileSync('/Users/user/Downloads/test.xlsx', content);
    console.log('fs写入成功');
  } catch (err) {
    console.log('fs写入失败：', err);
  }
} catch (error) {
  console.log('fs error');
}
