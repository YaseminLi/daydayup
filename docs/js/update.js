/**es的一些新语法 */
[3,4,5].includes(4) //true
// console.log([3,4,5].includes(4)); //true
// console.log([3,4,NaN].includes(NaN))//true 
// console.log(2**3)//8

const obj={a:1,b:2,c:function() {
  console.log('obj.a',this.a)
}}
// console.log(Object.keys(obj));//[ 'a', 'b', 'c' ] 键集合
// console.log(Object.values(obj));//[ 1, 2, [Function: c] ] 值集合
const l=Object.entries(obj)
// console.log(l);//[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [Function: c] ] ]
// console.log(Object.fromEntries(l));//{ a: 1, b: 2, c: [Function: c] } 反转

const m=new Map(l) //obj trans to map
// console.log(m);

// console.log(Object.getOwnPropertyDescriptors(obj))//{a: { value: 1, writable: true, enumerable: true, configurable: true },b: { value: 2, writable: true, enumerable: true, configurable: true },
// console.log(Object.getOwnPropertyDescriptor(obj, "a"));//{ value: 1, writable: true, enumerable: true, configurable: true }

const p1 = {
  a: 'y',
  b: 'd',
  get name() {
     console.log(this);
  }
}

const p2 = Object.assign({}, p1);//不能拷贝this
p2.a = 'z';
// p2.name //y d
p1.a='aaa';
p2.name //y d

// console.log('abc'.padStart(5,'0'));//字符串补全
// console.log('abc'.padEnd(5,'0'));
// console.log(''.padEnd(5,'0'));

// console.log('\uDEAD');

const array = [1, [2, [3]]]
// console.log(array.flat());//[ 1, 2, [ 3 ] ]
// console.log(array.flat(1));//[ 1, 2, [ 3 ] ]
// console.log(array.flat(2));//[ 1, 2, 3 ]
// console.log(array.flat(3));//[ 1, 2, 3 ]
// console.log(array.flat(0));//[ 1, [ 2, [ 3 ] ] ]

const arr1=[1,2,3]
console.log(arr1.flatMap(x=>[x,x*3]));//[ 1, 3, 2, 6, 3, 9 ]

// console.log('  8989   '.trim());//'8989'
// console.log('  8989   '.trimStart());//'8989   '
// console.log('  8989   '.trimEnd());//'  8989'


const sym = Symbol('The description');
String(sym) // 'Symbol(The description)'
sym.description // 'The description'

class Mess {
  #name='tips'
  age='18'
  getName(){
    // console.log('this.#name',this.#name);
  }
}

const mess1=new Mess()
mess1.getName() //this.#name tips
// console.log(mess1.age);//18
// console.log(mess1.#name);//Private field '#name' must be declared in an enclosing class


const p11=new Promise((res,rej)=>setTimeout(res,1000))
const p22=new Promise((res,rej)=>setTimeout(rej,5000))
Promise.allSettled([p11,p22]).then(data=>console.log(data))//都执行完成，无论成功失败[{ status: 'fulfilled', value: undefined },{ status: 'rejected', reason: undefined }]


const bigNum = 100000000000000000000000000000n;
console.log(bigNum * 2n); // 200000000000000000000000000000n

const bigInt = BigInt(1);//只能存储大整数，小数不行
console.log(bigInt); // 1n;

const bigInt2 = BigInt('2222222222222222222');
console.log(bigInt2); // 2222222222222222222n;


console.log(0||'435');//'435'
console.log(undefined||'435');//'435'
console.log(''||'435');//'435'
console.log(null||'435');//'435'
console.log('-----------');
console.log(0 ?? '435');0
console.log(undefined ?? '435');//'435'
console.log('' ?? '435');''
console.log(null ?? '435');//'435'


// 参数默认值
function foo (enable = true) {
  console.log(enable); // false
}

foo(false);