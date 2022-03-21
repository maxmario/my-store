const username: string = 'mario';

const sum = (a: number, b: number) => {
  return a + b;
}

sum(1,2);

// Forma larga de crear una clase y su constructor
class Person {
  public age: number;
  public lastname: string;

  constructor(age: number, lastname: string) {
    this.age = age;
    this.lastname = lastname;
  }
}

// Forma corta de crear una clase y su constructor

class Person2 {
  constructor(public age: number, public lastname: string) {}
}

const nico: Person2 = new Person(32,'Mario');
nico.lastname;
