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
