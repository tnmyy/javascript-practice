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

// Object Properties

console.log(`Object Properties`);

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

// Objects Methods

console.log(`Objects Methods`);

obj = {
  firstName: "tanmay",
  lastName: "upreti",
};

obj.name = function () {
  return this.firstName.toUpperCase() + " " + this.lastName.toUpperCase();
};

console.log(obj.name());

// Object Display

console.log(`Object Display`);

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
