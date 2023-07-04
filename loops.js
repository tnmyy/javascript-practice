// Loops in JS

console.log(`Loops in JS`);

// For Loop

for (i = 0; i < 100; i++) {
  console.log(`Tanmay x${i}`);
}

// QQ: Table of 13

let table = 13;

for (let i = table; i < table * 10 + 1; i = i + table) {
  console.log(i);
}

// Odd-even Number

let num = 100;

for (i = 0; i < num; i++) {
  if (i % 2 == 0) {
    console.log(`Even Number: ${i}`);
  } else {
    console.log(`Odd Number: ${i}`);
  }
}

// While Loop

// QQ: Square and Cube Finder
let n = 0;
let n1 = 12;

while (n < n1) {
  console.log(`${n}*${n} = ${n * n}`);
  console.log(`${n}*${n}*${n} = ${n * n * n}`);
  n++;
}

// Do-while Loop
// Runs at least once

let x = 5;
do {
  console.log(x);
  x++;
} while (x < 5);

// For-in Loop

// With object
const students = {
  name: "Tanmay",
  class: "X 'A'",
  aim: "IIT",
  age: 15,
};
console.log(students);
console.log(students["name"]);
console.log(students.class);

for (let key in students) {
  // console.log(key); // Gives the key of the object
  console.log(`${key}: ${students[key]}`);
}

// With Arrays
// Gives index

const names = ["Tanmay", "Naman", "Vaibhav", "Sweta", "Riya"];
console.log(names);

for (let index in names) {
  // console.log(names[index]);
  let ind = Number.parseInt(index) + 1;
  console.log(`${ind}: ${names[index]}`);
}

// For-of Loop
// Gives index's value

for (let name of names) {
  console.log(name);
}
