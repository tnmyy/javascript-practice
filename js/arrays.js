console.log(`Arrays in JS`);

// I.  Arrays in JS

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

// II. ARRAY METHODS

console.log(`ARRAY METHODS`);
arr = ["Banana", "Orange", "Apple", "Mango"];
console.log(arr);

// 1. length = return length

console.log(`Array.length`);
console.log(arr.length);

// 2. toString() = converts array to a string

console.log(`toString()`);
console.log(arr.toString());

// 3. join() = converts arr to str but with a separator

console.log(`join()`);
console.log(arr.join(" "));
console.log(arr.join(" + "));

// 4. pop() = removes last element form the arr and returns popped element

console.log(`pop()`);
console.log(arr.pop());
console.log(arr);

// 5. push() = add new element from last element form the arr and returns new arr length

console.log(`push()`);
console.log(arr.push("Guava"));
console.log(arr);

// 6. shift() = removes first arr element returns shifted element

console.log(`shift()`);
console.log(arr.shift());
console.log(arr);

// 7. unshift() = add new element from first & returns new arr length

console.log(`unshift()`);
console.log(arr.unshift("Grape"));
console.log(arr);

// 8. Changing elements

console.log(`Changing Elements`);
arr[1] = "Strawberry";
arr[2] = "Kiwi";
console.log(arr);

// Easy and secure way to append a new element from end
arr[arr.length] = "Papaya";
console.log(arr);

// 9. concat() = Creates new array by concatenating existing arrays

console.log(`concat()`);
let theBoyz = ["Naman", "Jay", "Vaibhav"];
console.log(theBoyz);
let theGirlz = ["Jiya", "Aayushi", "Anjali", "Sapna"];
console.log(theGirlz);
let theFrndz = theBoyz.concat(theGirlz);
console.log(theFrndz);

let gymBroz = ["Siddharth", "Nitin", "Yash Raj"];
console.log(gymBroz);
theFrndz = theGirlz.concat(theBoyz, gymBroz);
console.log(theFrndz);

theBoyz = theBoyz.concat("Ayush");
console.log(theBoyz);

// 10. splice(param1, param2) = adds new item to an array & returns array of deleted items
// param1 = where the element(s) should be placed
// param2 = how many element(s) should be removed (from start)

console.log(`splice() for adding elements`);
console.log(arr);
console.log(arr.splice(2, 0, "Lichi", "Dates")); // deleted elements
console.log(arr);
console.log(arr.splice(0, 3, "Pineapple", "Peach")); // deleted elements
console.log(arr);

// splice() = can be used to remove array elements without leaving holes

console.log(`splice() for removing elements`);
console.log(arr);
console.log(arr.splice(0, 2));
console.log(arr);

// 12. slice(param1, param2) = makes a new array from old one
// param1 = where to start
// param2 = where to end (param2 excluded)

console.log(`slice()`);
console.log(arr);
let newArr = arr.slice(0, 3);
console.log(newArr);

newArr = arr.slice(1);
console.log(newArr);

// III. ARRAY SORT

// 1. sort() = sorts the array alphabetically

console.log(`sort()`);
console.log(theFrndz);

console.log(theFrndz.sort());

// 2. reverse() = reverses the array elements

console.log(`reverse()`);
console.log(theFrndz.sort().reverse());

// Numerical Sorting

console.log(`Numerical Sorting`);
arr = [2, 3, 5, 6, 7, 9, 8, 4, 1, 0];

console.log(arr);
console.log(
  arr.sort(function (a, b) {
    return a - b;
  })
);
console.log(
  arr.sort(function (a, b) {
    return b - a;
  })
);

// Highest or Lowest Value

arr = [2, 3, 5, 6, 7, 9, 8, 4, 1, 0];

console.log(`Highest or Lowest Value`);

arr.sort(function (a, b) {
  return a - b;
});

console.log(arr[0]); // Lowest Value
console.log(arr[arr.length - 1]); // Highest Value

arr.sort(function (a, b) {
  return b - a;
});

console.log(arr[0]); // Highest Value
console.log(arr[arr.length - 1]); // Lowest Value

// 3. Min/Max in Arrays

arr = [2, 3, 5, 6, 7, 9, 8, 4, 1, 0];

console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));

// 4. Array Object Sorting

const cars = [
  { name: "Volvo", year: 2016 },
  { name: "Saab", year: 2001 },
  { name: "BMW", year: 2010 },
];

// Sorting via year

console.log(cars);
console.log(
  cars.sort(function (a, b) {
    return a.year - b.year;
    // return b.year - a.year;
  })
);

// Sorting via name

cars.sort(function (a, b) {
  let x = a.name.toLowerCase();
  let y = b.name.toLowerCase();

  if (x > y) {
    return -1;
  }
  if (y > x) {
    return -1;
  }

  return 0;
});
