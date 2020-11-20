function add(x: number, y: number): number {
  return x + y;
}
let result = add(2, 3); // number

// 可选参数
function sum(x: number, y: number, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z;
  } else {
    return x + y;
  }
}
let result1 = sum(1, 2);
let result2 = sum(1, 2, 3);

// 函数表达式
// sum2 未指定类型，但是可以通过类型推断得到类型
const sum2 = function (x: number, y: number, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z;
  } else {
    return x + y;
  }
}

// 对函数类型进行定义
const sum3 : (x: number, y: number, z?: number) => number = sum2;
 
