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

console.log(`slice()`);
console.log(names);

console.log(names.slice(8)); // Removes "Tanmay, "

console.log(names.slice(-3)); // Counts from end and remove "Tanmay, Vaibhav, Naman, "

console.log(names.slice(-10, -5)); // Removes "Tanmay, Vaibhav, " and ", Jay"

// 3. substring(start,end) [starts from 0]
// Similar as slice but values <0 are treated as 0

console.log(`substring()`);
console.log(names);

console.log(names.substring(0, 6));
console.log(names.substring(8));
console.log(names.substring(-10)); // Values takes as 0 so whole str printed

// NOW *substr()* HAS BEEN REMOVED

// 4. substr(start,length) [starts from 0]
// Similar to slice but second parameter specifies the length of the extracted part
console.log(`substr()`);

console.log(names.substr(2)); // Removes first two characters
console.log(names.substr(4, 6)); // Starts from 4 to 6 but starting from 4

// 5. replace() = replaces string contents [It's case sensitive]

console.log(`replace()`);
console.log(names);

// replace(word to be replaced, new word)
let newNames = names.replace("Tanmay", "TNMY");
console.log(newNames);

newNames = names.replace("TANMAY", "TNMY");
console.log(newNames); // No Chance

// /i flag (insensitive) ignores upper/lower cases (written without quotes)
newNames = names.replace(/TaNmAy/i, "TNMY");
console.log(newNames);

// /g flag (global) replaces all math cases

names = "Tanmay, Vaibhav, Tanmay, Naman, Tanmay, Jay";
newNames = names.replace(/tanmaY/gi, "TNMY");
console.log(newNames);

// 6. replaceAll() = Replaces all occurrences

console.log(`replaceAll()`);

newNames = names.replaceAll("Tanmay", "TNMY");
console.log(newNames);

newNames = names.replaceAll(/Tanmay/gi, "TNMY");
console.log(newNames);

// 7. toUpperCase()
names = "Tanmay, Vaibhav, Naman, Jay";

console.log(`toUpperCase()`);

console.log(names);
console.log(names.toUpperCase());

// 8. toLowerCase()
console.log(`toLowerCase()`);
console.log(names.toLowerCase());

// 9. concat() = str.concat(to concat with, str2)

newNames = "Jiya, Anjali, Harshita, Sapna";
let tenth = names.concat(", ", newNames);
console.log(tenth);

// 10. trim() = removes white space from both start and end

let trim = "            Hey!            ";
console.log(trim.trim());
// 11. trimStart() = removes white space from start
console.log(trim.trimStart());

// 12. trimEnd() = removes white space from end
console.log(trim.trimEnd());
