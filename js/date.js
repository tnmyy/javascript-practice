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

// JS Date Get Methods

console.log(`JS Date Get Methods`);

d = new Date();

console.log(d.getFullYear());

console.log(d.getMonth());
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(months[d.getMonth()]);

console.log(d.getDate());

console.log(d.getHours());

console.log(d.getMinutes());

console.log(d.getSeconds());

console.log(d.getMilliseconds());

console.log(d.getTime()); // ms since 1 Jan, 1970

console.log(d.getDay());
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(days[d.getDay()]);

console.log(Date.now()); // ms since 1 Jan, 1970

// Year since 1 Jan 1970
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);
console.log(years);
