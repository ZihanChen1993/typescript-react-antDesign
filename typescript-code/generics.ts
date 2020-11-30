function echo<T>(arg: T): T {
  return arg;
}

const str: string = 'czh'
const result = echo<string>(str);

function swap<T, U>(tuple:[T, U]): [U , T] {
  return [tuple[1], tuple[0]];
}

const result1 = swap(['string', 123]);
console.log(result1); //[ 123, 'string' ]

// 约束泛型
function echoWithArray<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

const array = echoWithArray([1, 2, 3]);

// 只传入包含length属性的泛型

interface IWithLength {
  length: number;
}
// 泛型需要继承这个接口进行约束
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// 只要有length属性 都可以传入，
const array1 = echoWithLength([1, 2, 3]);
const obj = echoWithLength({length: 10});
const str1 = echoWithLength('czh');


// 泛型在其他方面的使用
// 类
class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T{
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(1);
// queue.push('str');
console.log(queue.pop().toFixed());
// console.log(queue.pop().toFixed()); //queue.pop(...).toFixed is not a function
const queue2 = new Queue<string>();
queue2.push('str');
console.log(queue2.pop().length);

// 接口
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = {key: 123, value: 'czh'};
let kp2: KeyPair<string, number> = {key: 'test', value: 222};

let arr: number[] = [1, 2, 3];
// Array interface的例子
let arrTwo: Array<number> = [1 ,2, 3, 4];


// 接口描述函数
interface IPlus<T> {
  (a: T, b: T): T;
}
function plus(a: number, b: number): number {
  return a + b;
}

function connect(a: string, b: string): string {
  return a + b;
}
const a: IPlus<number> = plus
const b: IPlus<string> = connect;

