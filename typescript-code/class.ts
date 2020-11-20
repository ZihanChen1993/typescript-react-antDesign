class Animal {
  name: string;
  static category: string[] = ['mammal', 'bird'];
  
  constructor(name: string) {
    this.name = name;
  }

  static isAnimal(a) {
    return a instanceof Animal;
  }

  run() {
    return `${this.name} is running!`
  }
}

const snake = new Animal('Snake');
console.log(snake.run());

// 继承
class Dog extends Animal {
  bark() {
    return `${this.name} is barking!`
  }
}

const lily = new Dog('lily');
console.log(lily.bark());

// 重写
class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
  run() {
    return `Meow, ` + super.run();
  }
}

const louis = new Cat('Louis');
console.log(louis.run());

// 静态属性
console.log(Animal.category) //[ 'mammal', 'bird' ]

// 静态方法
console.log(Animal.isAnimal(louis));// true



// interface 和 class
// interface 抽取了共同的特性
interface Radio {
  switchRadio(): void;
}

interface Battery {
  checkBatteryStatus();
}

class Car implements Radio{
  switchRadio() {

  }
}

class CellPone implements Radio, Battery{
  checkBatteryStatus() {
    
  }
  
  switchRadio() {

  }
}
