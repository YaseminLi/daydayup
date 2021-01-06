const as = async () => { const data = await ajax(); }
async function () {
    for (const fn of actions) {
        await fn();
    }
}
async function() {
    for await (const fn of actions) {
        fn();
    }
}

动态引入import 及require和import对比使用

const a = 123;
export { a };

import('./a.js').then(data => {
    console.log(data.a); // 123;
})

console.log(0||'435');
console.log(undefined||'435');
console.log(''||'435');
console.log(null||'435');
console.log('-----------');
console.log(0 ?? '435');
console.log(undefined ?? '435');
console.log('' ?? '435');
console.log(null ?? '435');


数字存储
数据库是100.00的string
我需要100sting number


h5 内嵌页面需要考虑哪些

侧边导航菜单

编译型语言：执行前需要一个编译过程，把源代码编译成机器语言。只需要编译一次，运行时直接使用编译结果

解释型语言：不需要事先编译，运行时直接将源码解释成机器码并立即执行

表单页面：在用户填写表单提交后，数据库希望存储此次提交更新了哪些字段的中文名称

css样式架构

加密
紧急上版？

leetcode 48.旋转图像
