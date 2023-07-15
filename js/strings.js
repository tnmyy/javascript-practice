console.log(`Strings in JS`);

// Strings

let str = "This is a string\n this is also a string";

let x = "Str";
let y = new String("Str");
console.log(typeof x);
console.log(typeof y);
console.log(x == y);
console.log(x === y);

// String Methods

// 1. Length = Gives length (from 1)
let alphabets = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabets.length);

// Extracting String Parts

// 2. slice(start,end) [starts from 0]
let names = "Tanmay, Vaibhav, Naman, Jay";

console.log(names);

console.log(names.slice(8)); // Removes "Tanmay, "

console.log(names.slice(-3)); // Counts from end and remove "Tanmay, Vaibhav, Naman, "

console.log(names.slice(-10, -5)); // Removes "Tanmay, Vaibhav, " and ", Jay"

// 3. substring(start,end) [starts from 0]
// Similar as slice but values <0 are treated as 0

console.log(names);

console.log(names.substring(0, 6));
console.log(names.substring(8));
console.log(names.substring(-10)); // Values takes as 0 so whole str printed

// NOW *substr()* HAS BEEN REMOVED

// 4. substr(start,length) [starts from 0]
// Similar to slice but second parameter specifies the length of the extracted part

console.log(names.substr(2)); // Removes first two characters
console.log(names.substr(4, 6)); // Starts from 4 to 6 but starting from 4

// 5. replace = replaces string contents
