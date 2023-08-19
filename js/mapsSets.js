console.log(`JS Maps and Sets`);

// JS Maps
// Good alternative of JS Objects

console.log(`JS Maps`);

const myMap = new Map();
console.log(myMap);

const key1 = "Key 1",
  key2 = 1,
  key3 = {},
  key4 = function () {};

// Setting map values
myMap.set(key1, "This is a string");
myMap.set(key2, "This is a number");
myMap.set(key3, "This is an empty object");
myMap.set(key4, "This is an empty function");
myMap.set(true, "This is a boolean");

console.log(myMap);

// Getting the values from a Map
let val1 = myMap.get(key1);
console.log(val1);

let val2 = myMap.get(key2);
console.log(val2);

let val3 = myMap.get(key3);
console.log(val3);

// Get the size of the Map
console.log(myMap.size);

// Deleting Map element
console.log(myMap);

myMap.delete(key1);
console.log(myMap);

// Checking if the Map contains a key
console.log(myMap);

console.log(myMap.has(key1));
console.log(myMap.has(key2));

// forEach() in Map
myMap.forEach((val, key) => {
  console.log(key, val);
});

// entries() = gives the key-value pair
console.log(myMap.entries());

// for/of Loop in Map
for (let entries of myMap.entries()) {
  console.log(entries);
}

// JS Sets
// Set stores unique values

const mySet = new Set();
console.log(mySet);

mySet.add("Tanmay");
mySet.add("TNMY");
console.log(mySet);
console.log(mySet.size);

mySet.add("Tanmay");
console.log(mySet);
console.log(mySet.size);

mySet.delete("Tanmay");
mySet.delete("TNMY");

mySet.add(69);
mySet.add(true);
mySet.add(false);
mySet.add({});
mySet.add([]);
mySet.add("Tanmay");
console.log(mySet);

// forEach() in Set
mySet.forEach((val) => {
  console.log(val);
});

// for/of Loop in Set
// Lists all items in Set
for (let x of mySet.values()) {
  console.log(x);
}

console.log(mySet.has(69));
console.log(mySet.values());
