const getUserInfo = () =>
  new Promise((resolve, reject) => {
    let timeout = false;
    const timer = setTimeout(() => {
      timeout = true;
      console.log('timeout');
      resolve('timeout');
    }, 5000);
    if (!timeout) {
      clearTimeout(timer);
      resolve('success');
    }
  });

getUserInfo().then(res => {
  console.log('🚀 ~ file: test.js ~ line 14 ~ getUserInfo ~ res', res);
});
