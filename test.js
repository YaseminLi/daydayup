// const floatObj = (function () {
//   /*
//    * 判断obj是否为一个整数 整数取整后还是等于自己。利用这个特性来判断是否是整数
//    */
//   function isInteger(obj) {
//     // 或者使用 Number.isInteger()
//     return Math.floor(obj) === obj;
//   }
//   /*
//    * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
//    * @param floatNum {number} 小数
//    * @return {object}
//    *   {times:100, num: 314}
//    */
//   function toInteger(floatNum) {
//     // 初始化数字与精度 times精度倍数  num转化后的整数
//     const ret = {
//       times: 1,
//       num: 0,
//     };
//     const isNegative = floatNum < 0; // 是否是小数
//     if (isInteger(floatNum)) { // 是否是整数
//       ret.num = floatNum;
//       return ret; // 是整数直接返回
//     }
//     const strfi = `${floatNum}`; // 转换为字符串
//     const dotPos = strfi.indexOf('.');
//     const len = strfi.substr(dotPos + 1).length; // 拿到小数点之后的位数
//     const times = Math.pow(10, len); // 精度倍数
//     /* 为什么加0.5?
//           前面讲过乘法也会出现精度问题
//           假设传入0.16344556此时倍数为100000000
//           Math.abs(0.16344556) * 100000000=0.16344556*10000000=1634455.5999999999
//           少了0.0000000001
//           加上0.5 0.16344556*10000000+0.5=1634456.0999999999 parseInt之后乘法的精度问题得以矫正
//       */
//     let intNum = parseInt(Math.abs(floatNum) * times + 0.5, 10);
//     debugger;
//     ret.times = times;
//     if (isNegative) {
//       intNum = -intNum;
//     }
//     ret.num = intNum;
//     return ret;
//   }

//   /*
//    * 核心方法，实现加减乘除运算，确保不丢失精度
//    * 思路：把小数放大为整数（乘），进行算术运算，再缩小为小数（除）
//    * @param a {number} 运算数1
//    * @param b {number} 运算数2
//    */
//   function operation(a, b, op) {
//     const o1 = toInteger(a);
//     const o2 = toInteger(b);
//     const n1 = o1.num; // 3.25+3.153
//     const n2 = o2.num;
//     const t1 = o1.times;
//     const t2 = o2.times;
//     const max = t1 > t2 ? t1 : t2;
//     let result = null;
//     switch (op) {
//       // 加减需要根据倍数关系来处理
//       case 'add':
//         if (t1 === t2) { // 两个小数倍数相同
//           result = n1 + n2;
//         } else if (t1 > t2) {
//           // o1 小数位 大于 o2
//           result = n1 + n2 * (t1 / t2);
//         } else { // o1小数位小于 o2
//           result = n1 * (t2 / t1) + n2;
//         }
//         return result / max;
//       case 'subtract':
//         if (t1 === t2) {
//           result = n1 - n2;
//         } else if (t1 > t2) {
//           result = n1 - n2 * (t1 / t2);
//         } else {
//           result = n1 * (t2 / t1) - n2;
//         }
//         return result / max;
//       case 'multiply':
//         // 325*3153/(100*1000) 扩大100倍 ==>缩小100倍
//         result = (n1 * n2) / (t1 * t2);
//         return result;
//       case 'divide':
//         // (325/3153)*(1000/100)  缩小100倍 ==>扩大100倍
//         result = (n1 / n2) * (t2 / t1);
//         return result;
//       default:
//         return 0;
//     }
//   }

//   // 加减乘除的四个接口
//   function add(a, b) {
//     return operation(a, b, 'add');
//   }

//   function subtract(a, b) {
//     return operation(a, b, 'subtract');
//   }

//   function multiply(a, b) {
//     return operation(a, b, 'multiply');
//   }

//   function divide(a, b) {
//     return operation(a, b, 'divide');
//   }
//   return {
//     add,
//     subtract,
//     multiply,
//     divide,
//   };
// }());

// // console.log(floatObj.add(19.9, 2.1222));
// // console.log(floatObj.add(19.9, 2.12222222));
// // console.log(floatObj.add(0.1, 0.2));
// // console.log(floatObj.add(1.33, 3.666666666));
// // console.log(floatObj.multiply(1306377.64, 100));
// // console.log(floatObj.add(1306377.64 * 100, 1));
// console.log(floatObj.add(2.22, 0.1));
// console.log(floatObj.add(19.9, 2.122222222222222));

function accAdd(arg1, arg2) {
  let r1; let r2;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  const c = Math.abs(r1 - r2);
  const m = Math.pow(10, Math.max(r1, r2));
  if (c > 0) {
    const cm = Math.pow(10, c);
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace('.', ''));
      arg2 = Number(arg2.toString().replace('.', '')) * cm;
    } else {
      arg1 = Number(arg1.toString().replace('.', '')) * cm;
      arg2 = Number(arg2.toString().replace('.', ''));
    }
  } else {
    arg1 = Number(arg1.toString().replace('.', ''));
    arg2 = Number(arg2.toString().replace('.', ''));
  }
  console.log(arg1);
  console.log(arg2);
  console.log(arg1 + arg2);
  return (arg1 + arg2) / m;
}
// console.log(accAdd(19.9, 2.12222222));
// console.log(accAdd(0.16344556, 3.153));
// console.log(accAdd(19.9, 2.122222222222222));

// const commaFormat = (value, decimalDigits, addZero) => {
//   if (value) {
//     value = value.toString().replace(/,/g, '');
//     value = Number(value);
//   }
//   let newVal = Math.round(Math.round(value * Math.pow(10, (decimalDigits || 0) + 1)) / 10) / Math.pow(10, (decimalDigits || 0));

//   if (addZero === true && value !== 0) {
//     newVal = newVal.toFixed(decimalDigits);
//   }

//   return newVal.toString().replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, (all, pre, digits) => pre + digits.replace(/\d{3}/g, ',$&'));
// };

// // console.log(commaFormat('0.30', 2, true));
// // console.log(commaFormat('0.335', 2, true));

// function formatFloatS(f, digit) {
//   // Math.pow(指数，幂指数)
//   const m = Math.pow(10, digit);
//   // Math.round（） 四舍五入
//   return Math.round(f * m, 10) / m;
// }
// console.log(formatFloatS(0.335, 2));
// console.log(formatFloatS(19.9, 2));
// console.log(formatFloatS(0.069, 1));
// console.log(formatFloatS(1.333335, 5));

const sum = (...number) => {
  const args = number;
  const { length } = args;
  let d = 0; // 参数中最多小数位数
  let result = 0; // 和
  for (let i = 0; i < length; i += 1) {
    const str = `${args[i]}`;
    if (str.indexOf('.') !== -1) {
      const temp = str.split('.')[1].length;
      d = d < temp ? temp : d;
    }
  }
  const m = 10 ** d;
  Object.keys(args).forEach((key) => {
    if (args[key]) {
      result += args[key] * m;
    }
  });
  return Math.round(result, 10) / m;
};

// console.log(sum(0.1, 0.2));
// console.log(sum(19.9, 2.1222));
// console.log(sum(19.9, 2.12222222));
// console.log(sum(1.33, 3.666666666));
// console.log(sum(2.22, 0.1));
console.log(sum(19.9, 2.12222222));
// console.log(sum(19.9, 123.44));

const sumErr = (...number) => {
  const args = number;
  const { length } = args;
  let d = 0; // 参数中最多小数位数
  let result = 0; // 和
  for (let i = 0; i < length; i += 1) {
    const str = `${args[i]}`;
    if (str.indexOf('.') !== -1) {
      const temp = str.split('.')[1].length;
      d = d < temp ? temp : d;
    }
  }
  const m = 10 ** d;
  Object.keys(args).forEach((key) => {
    if (args[key]) {
      result += args[key] * m;
    }
  });
  return Math.round(result, 10) / m;
};

// console.log(sum(0.1, 0.2));
// console.log(sum(19.9, 2.1222));
// console.log(sum(19.9, 2.12222222));
// console.log(sum(1.33, 3.666666666));
// console.log(sum(2.22, 0.1));
console.log(sumErr(19.9, 2.12222222));
