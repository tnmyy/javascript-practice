// Arrays in JS

console.log(`Arrays in JS`);

// Creating an Array

const subjects = [
  "Hindi",
  "English",
  "Mathematics",
  "Science",
  "Social Science",
  "Information Technology",
];
console.log(subjects);

const sub = [];
sub[0] = "Hindi";
sub[1] = "English";
sub[2] = "Mathematics";
sub[3] = "Science";
sub[4] = "Social Science";
sub[5] = "Information Technology";
console.log(sub);

console.log(`I like ${subjects[2]}`);

subjects[2] = "Physics";
console.log(`I like ${subjects[2]}`);

// Array and its Properties

console.log(`Array and its Properties`);

console.log(subjects.length);

// Accessing first element
console.log(sub[0]);

// Accessing last element
console.log(sub[sub.length - 1]);

// Looping array elements

console.log(`Looping Array Elements`);

for (let i = 0; i < sub.length; i++) {
  console.log(sub[i]);
}

// Adding elements to array

console.log(`Adding elements to array`);

console.log(sub);
sub.push("Psychology");
console.log(sub);

sub[sub.length] = "Commerce";
console.log(sub);

// HOLES IN ARRAY

console.log(`HOLES IN ARRAY`);

sub[20] = "000";
console.log(sub);

// Checking is it an array
console.log(`Checking is it an array`);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arr);

console.log(typeof arr); // Returns object
console.log(Array.isArray(arr));
