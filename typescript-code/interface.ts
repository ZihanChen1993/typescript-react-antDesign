interface Person {
  // 只读属性
  readonly id: number;
  name: string;
  age: number;
  // 可选属性
  gender?: string;
}

let czh: Person = {
  id: 123,
  name: 'czh',
  age: 26,
}

// czh.id = 111 报错，无法修改
