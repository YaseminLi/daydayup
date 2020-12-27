// const obj = { a: '1', b: '2' };
// console.log(Object.keys(obj));

const obj1 = null;
const obj2 = { a: '1' };
const obj3 = { b: '2', c: '3', a: '4' };
const obj = { ...obj1, ...obj2, ...obj3 };
console.log(obj);
