console.log(`Errors in JS`);

// 1. JS Errors

console.log(`1. JS Errors`);

console.log(`try...catch`);
try {
  console.log(x);
} catch (err) {
  console.log(`Please check: ` + err);
}

console.log(`try...catch...finally`);

try {
  console.log(x);
} catch (err) {
  console.log(`Please check: ` + err);
} finally {
  console.log(`This will run every time`);
}
let x;
try {
  console.log(x);
} catch (err) {
  console.log(`Please check: ` + err);
} finally {
  console.log(`This will run every time`);
}

console.log(`throw`);
// custom error

x = 10;
try {
  if (x <= 10) throw "Small";
  if (x >= 10) throw "Large";
  if (x == 10) throw "Perfect";
} catch (err) {
  console.log(err);
}

// 2. JS Debugging

console.log(`2. JS Debugging`);

let y = 15 * 8;

debugger;
// Opens Console Debugging window
console.log(y);
