console.log(`Objects in JS`);

let obj = {
  name: "Tanmay",
  class: "X A",
};
console.log(obj);
console.log(typeof obj);
console.log(obj.class);
console.log(obj.name);
console.log(obj["class"]);
console.log(obj["name"]);

obj = {};
console.log(obj);

obj.name = "Tanmay";
obj.class = "X A";
console.log(obj);

// 1. Object Properties

console.log(`1. Object Properties`);

obj.age = 15;
console.log(obj);

// for...in Loop
for (let x in obj) {
  console.log(`${x.toUpperCase()} = ${obj[x]}`);
}

obj.nationality = "Indian";

// delete
console.log(`delete`);

console.log(obj);

delete obj.nationality;
console.log(obj);

// Nested object

console.log(`Nested Object`);
console.log(obj);

obj = {
  name: "Tanmay",
  class: "X A",
  age: 15,
  hobbies: {
    hobby1: "Coding",
    hobby2: "Calisthenics",
  },
};

console.log(obj);
console.log(obj.hobbies.hobby1);
console.log(obj["hobbies"]["hobby2"]);

// Nested arrays and objects

console.log(`Nested arrays and objects`);

obj = {
  name: "Tanmay",
  class: "X A",
  age: 15,
  hobbies: [
    { name: "Coding", routine: ["HTML", "CSS", "JS"] },
    { name: "Calisthenics", routine: ["Push", "Pull", "Leg", "Core"] },
  ],
};

console.log(obj);

for (let i in obj.hobbies) {
  //   console.log(obj.hobbies[i]);
  console.log(obj.hobbies[i].name);

  for (let j in obj.hobbies[i].routine) {
    console.log(obj.hobbies[i].routine[j]);
  }
}

// 2. Objects Methods

console.log(`2. Objects Methods`);

obj = {
  firstName: "tanmay",
  lastName: "upreti",
};

obj.name = function () {
  return this.firstName.toUpperCase() + " " + this.lastName.toUpperCase();
};

console.log(obj.name());

// 3. Object Display

console.log(`3. Object Display`);

obj = {
  name: "Tanmay",
  age: 15,
  city: "Pithoragarh",
};

console.log(obj.name + ", " + obj.age + ", " + obj.city);

let txt = "";

for (let x in obj) {
  txt += obj[x] + " ";
}
console.log(txt);

// Object.values()
// Obj >>> Arr
console.log(`Object.values()`);
console.log(Object.values(obj));

// JSON.stringify()
// Obj >>>> Str
console.log(`JSON.stringify()`);
console.log(JSON.stringify(obj));

// Stringify Arrays
let arr = ["Tanmay", 15, "Pithoragarh"];
console.log(JSON.stringify(arr));

// 4. Object Accessors
// getter & setter = access to property and f(x) = access to method

console.log(`4. Object Accessors`);

// Getter
// to manipulate the value of a property before using obj
console.log(`Getter`);
obj = {
  firstName: "Tanmay",
  lastName: "Upreti",
  language: "hin",

  get lang() {
    return this.language.toUpperCase();
  },
};

console.log(obj);
console.log(obj.lang);
console.log(obj);

// Setter
// to manipulate the value of a property while setting the val
console.log(`Setter`);
obj = {
  firstName: "Tanmay",
  lastName: "Upreti",
  language: "",

  set setLang(lang) {
    this.language = lang.toUpperCase();
  },
};
obj.setLang = "hin";

console.log(obj);
console.log(obj.language);
console.log(obj);

// 5. Object Constructors

console.log(`5. Object Constructors`);

function person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

let mySelf = new person("Tanmay", "Upreti", 15);
console.log(mySelf);

mySelf.nationality = "Indian";
console.log(mySelf);

mySelf.name = function () {
  return this.firstName + " " + this.lastName;
};
console.log(mySelf.name());

function person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.newName = (name) => {
    this.firstName = name;
  };
  this.name = function () {
    return this.firstName + " " + this.lastName;
  };
}

console.log(mySelf.name());
mySelf.newName("TNMY");
console.log(mySelf.name());

// 6. Object Prototypes

console.log(`6. Object Prototypes`);

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

Person.prototype.nationality = "Indian";

Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};

mySelf = new Person("Tanmay", "Upreti", 15);
console.log(mySelf);
console.log(mySelf.name());
console.log(mySelf.nationality);

// 7. Object Iterables

console.log(`7. Object Iterables`);

for (let x of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
  console.log(x);
}

let x = ["Tanmay", "Vaibhav", "Naman", "Jay"];
let y = x[Symbol.iterator]();

y.next();
console.log(y.next());
console.log(y.next().value);
console.log(y.next().done);
console.log(y.next().done);
console.log(y.next()); // done: true b/c there is no such value in the arr

x = [100, 200, 300, 400, 500, 600, 700, 800, 900];
y = x[Symbol.iterator]();
let result = y.next();

while (!result.done) {
  console.log(result.value);
  result = y.next();
}

x = "Tanmay Upreti";

for (let char of x) {
  console.log(char);
}

function numIterator(arr) {
  let n = 0;

  return {
    next() {
      if (n < arr.length) {
        return { value: arr[n++], done: false };
      } else {
        return { done: true };
      }
    },
  };
}

x = [100, 200, 300];
num = numIterator(x);
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());

// x = {
//   firstName: "Tanmay",
//   lastName: "Upreti",
//   age: 15,
//   nationality: "Indian",
// };
// y = x[Symbol.iterator]();
// console.log(y.next());
