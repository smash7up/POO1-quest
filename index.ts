class Person {
  name: string;
  age: number;

  constructor (name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  tellMyName(): string {
    return this.name;
  }

  tellMyAge(): number {
    return this.age;
  }

  result(): void {
    console.log(`I am ${this.name} and I am ${this.age} years old`);
  }

}

const person1 = new Person('John', 40);
const person2 = new Person('Mary', 35);

person1.result();
person2.result();

