// async 函数为异步，不会阻碍后面代码执行,返回promise
// async function timeout() {
//   console.log('run timeout')
//   return 'hello world'
// }
// timeout().then((res) => {
//   console.log('res', res)
// })
// console.log('run finish')
// run timeout
// run finish
// res hello world

// await
// await表达式会暂停整个async函数的执行进程并出让其控制权，只有当其等待的基于promise的异步操作被兑现或被拒绝之后才会恢复进程
// 可以将promise的链式调用，转化成同步代码的写法

// demo:
// 1.输入手机号，查询所在地
// 2.根据所在地查询优惠信息

const fetchLocation = () =>
  new Promise(resolve => {
    resolve({
      code: 2000,
      data: 'shanghai',
    });
  });

const fetchDiscount = location =>
  new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve({
        code: 2000,
        data: `${location} is 50% discount`,
      });
    } else {
      reject(new Error('fetchDiscount is Error'));
    }
  });

// 链式调用
const getTelDiscount = () => {
  let discount = '';
  fetchLocation().then(res => {
    const { data, code } = res;
    if (code === 2000) {
      fetchDiscount(data).then(resp => {
        const { data, code } = resp;
        if (code === 2000) {
          discount = data;
          console.log(discount);
        }
      });
    }
  });
};

// getTelDiscount()

// async await
const getTelDiscountAsync = async () => {
  let discount = '';
  const locationData = await fetchLocation();
  if (locationData.code === 2000) {
    const discountData = await fetchDiscount(locationData.data);
    console.log(
      '🚀 ~ file: async.js ~ line 61 ~ getTelDiscountAsync ~ discountData',
      discountData
    );
    const { data, code } = discountData;
    if (code === 2000) {
      discount = data;
      console.log(discount);
    }
  }
};

getTelDiscountAsync();
