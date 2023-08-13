console.log(`JS Date Objects!`);

let d = new Date();
console.log(d);

d = new Date("2023-08-12");
console.log(d);

// new Date(year,month,day,hours,minutes,seconds,ms)
d = new Date(2023, 8, 12, 16, 9, 30, 10);
console.log(d);

// Dec = 11 and Jan = 0
// Last date = 31 (If in month)
// May 35 == June 3

console.log(`May 35 = June 03`);
d = new Date(2023, 4, 35);
console.log(d);

console.log(`Date Starts from *01 Jan, 1970*`);
// 1 Jan, 1970 + 100000000000ms
d = new Date(100000000000);
console.log(d);

// 1 Jan, 1970 - 100000000000ms
d = new Date(-100000000000);
console.log(d);

// 1 Jan, 1970 + 24 hr
d = new Date(24 * 60 * 60 * 1000);
console.log(d);

// Dates to string

console.log(`Date to string`);
d = new Date().toString();
console.log(d);

// JS Date Formats

console.log(`JS Date Formats`);

d = new Date("2023-8-12");
console.log(d);

d = new Date("Aug 12, 2023");
console.log(d);

// Parsing Dates
d = Date.parse("August 13, 2023");
console.log(d);

// Converting it to Date Object
let msec = Date.parse("August 13, 2023");
d = new Date(msec);
console.log(d);
