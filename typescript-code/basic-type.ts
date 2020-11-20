let isDone: boolean = false;

let age: number = 20;
let binaryNumber: number = 0b111;
let firstName: string = 'czh';
let messag: string = `Hello, ${firstName}, age is ${age}`;

let u: undefined = undefined;
let n: null = null;

// undefined 和null是子类型
let num1: number = undefined;
let num2: number = null;

// any 允许为任意类型
let notSure: any = 4;
notSure = 'maybe a string';
notSure = true;

notSure.myName
notSure.getName();

// 联合类型
let numberOrString : number | string = 'czh';
numberOrString = 123;
// numberOrString = false 报错

// 数组
let arrayOfNumber: number[] = [2, 3, 1, 6, 4];
arrayOfNumber.push(5);
// arrayOfNumber.push('czh'); 报错

// 类数组
function test() {
  console.log(arguments); //IArguments
}

// 元组
// 可以放不同类型数据，明确的定义顺序
let user: [string, number] = ['czh', 123];
// user = ['molly', '123']; 报错
// user = ['molly', 2, true]; 报错





