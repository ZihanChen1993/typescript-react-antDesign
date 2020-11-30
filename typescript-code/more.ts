// 类型别名  type aliases
type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number {
  return x + y;
}
const sum2: PlusType = sum;

type NameResolver = () => string;
type NameOrRsolver = string | NameResolver;
function getName(n: NameOrRsolver ): string {
  if(typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

// 类型断言 type assertion
function getLength(input: string | number): number {
  // 第一种
  // const str = input as string
  // if(str.length) {
  //   return str.length;
  // } else {
  //   const number = input as Number;
  //   return number.toString().length;
  // }

  // 第二种方式
  // 断言只能在联合类型范围内
  if((<string>input).length) {
    return (<string>input).length;
  } else {
    return <number>input.toString().length;
  }
}
