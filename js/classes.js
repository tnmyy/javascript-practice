console.log(`Classes in JS`);

// 1. JS Classes

console.log(`1. JS Classes`);

class Student {
  constructor(name, standard) {
    this.name = name;
    this.class = standard;
  }
}

let tnmy = new Student("Tanmay", 10);
console.log(tnmy);

class Student1 {
  constructor(name, standard, year) {
    this.name = name;
    this.class = standard;
    this.year = year;
  }

  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

tnmy = new Student1("Tanmay", "10", 15);
console.log(tnmy);
console.log(tnmy.age());

class Student2 {
  constructor(name, standard, year) {
    this.name = name;
    this.class = standard;
    this.year = year;
  }

  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

tnmy = new Student2("Tanmay", "10", 15);
console.log(tnmy);
console.log(tnmy.age(year));

// 2. Class Inheritance

console.log(`2. Class Inheritance`);

class Car {
  constructor(brand) {
    this.carName = brand;
  }

  present() {
    return `I have a ${this.carName}`;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand); // Refers to the parent class
    this.model = mod;
  }
  output() {
    return this.present() + " " + this.model;
  }
}

let myCar = new Model("Mercedes", "Benz");
console.log(myCar.output());

// Getters and Setters
console.log(`Getters and Setters`);

class car {
  constructor(brand) {
    this._carName = brand;
  }

  get carName() {
    return this._carName;
  }

  set carName(x) {
    this._carName = x;
  }
}

myCar = new car("Nisaan");
console.log(myCar);
console.log(myCar.carName);

myCar.carName = "Mahindra";
console.log(myCar.carName);
