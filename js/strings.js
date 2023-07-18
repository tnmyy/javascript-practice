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

// 13. padStart(length, iterable) = if length >4, puts iterable from start of the string
console.log(`padStart()`);

str = 1234567890;
str = str.toString();
console.log(str.slice(str.length - 3).padStart(str.length, "*"));

// 14. padEnd(length, iterable) = if length >4, puts iterable from end of the string
console.log(`padEnd()`);

str = 1234567890;
str = str.toString();
console.log(str.slice(0, str.length - 7).padEnd(str.length, "*"));

// 15. charAt() = gives character with a specific index
console.log(`charAt()`);

str = "String";
console.log(str.charAt(0));

// 16. charCodeAt() = gives unicode of character (0-65535)
console.log(`charCodeAt()`);

console.log(str.charCodeAt(3));

// 17. split(separator, limit) = string to array separating with matching separator
console.log(`split()`);

console.log(names);

let namesArr = names.split(" ");
console.log(namesArr);

namesArr = names.split("");
console.log(namesArr);

namesArr = names.split(", ", 2);
console.log(namesArr);

// STRING SEARCH METHODS

console.log(`STRING SEARCH METHODS`);

// 1. indexOf() = Returns index of first word of the given match starts form starts
// indexOf(match, start) ; start param = start searching from a specific index
// if not found, returns '-1'

console.log(`indexOf()`);

let frndz = "Tanmay, Vaibhav, Naman, Jay, 'Tanmay', 'Vaibhav', 'Naman', 'Jay'";
console.log(frndz);

console.log(frndz.indexOf("Naman"));
console.log(frndz.indexOf("Vaibhav"));
console.log(frndz.indexOf("Jay"));
console.log(frndz.indexOf("Tanmay"));
console.log(frndz.indexOf("III Person")); // returns -1

console.log(frndz.indexOf("Naman", 29));
console.log(frndz.indexOf("Vaibhav", 29));
console.log(frndz.indexOf("Jay", 29));
console.log(frndz.indexOf("Tanmay", 29));

// 2. lastIndexOf() = Returns index of first word of the given match and starts form last
// lastIndexOf(match, start) ; start param = start searching from a specific index

console.log(`lastIndexOf()`);

console.log(frndz);
console.log(frndz.lastIndexOf("Naman"));
console.log(frndz.lastIndexOf("Vaibhav"));
console.log(frndz.lastIndexOf("Jay"));
console.log(frndz.lastIndexOf("Tanmay"));

// 3. search() = Can search a string in a string but cannot take a second param

console.log(`search()`);

console.log(names);
console.log(frndz.search(/'Naman'/));
console.log(frndz.search(/'Vaibhav'/));
console.log(frndz.search(/'Jay'/));
console.log(frndz.search(/'Tanmay'/));
