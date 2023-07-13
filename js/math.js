console.log(`Maths in JS`);

// Math Constants
console.log(`Math Constants`);

console.log(Math.PI); // Returns PI
console.log(Math.SQRT1_2); // Returns square root of 1/2
console.log(Math.SQRT2); // Returns square root of 2

// Number to integers
console.log(`Number to integers`);

let x = 1.1;
let y = 6.9;

console.log(x);
console.log(y);

// Returns nearest integer
console.log(Math.round(x));
console.log(Math.round(y));

// Returns value to nearest integer
console.log(Math.ceil(x));
console.log(Math.ceil(y));

// Rounds down to nearest integer
console.log(Math.floor(x));
console.log(Math.floor(y));

// Returns integral part
console.log(Math.trunc(x));
console.log(Math.trunc(y));

// Returns negative, null or positive
Math.sign(x);
Math.sign(0);
Math.sign(-y);

// Some more Math methods
console.log(`Some more Math methods`);

x = 100;
y = 2;

// x to the power y
console.log(Math.pow(x, y));

// Square root of a number
console.log(Math.sqrt(x));
console.log(Math.sqrt(y));

// Absolute positive value
console.log(-x);
console.log(Math.abs(-x));
console.log(-y);
console.log(Math.abs(-y));

// Trigonometry in JS
console.log(`Trigonometry in JS`);

console.log(Math.sin((90 * Math.PI) / 180));
console.log(Math.cos((0 * Math.PI) / 180));

// Min Max in JS
console.log(`Min Max in JS`);

console.log(x);
console.log(Math.min(2, 3, 560, 5, 0, -152, 121, 4));
console.log(Math.max(2, 3, 560, 5, 0, -152, 121, 4));

//
// JavaScript Random
//

console.log(`JavaScript Random`);

// Always calculates less than 1
console.log(Math.random());

// Generates random integers b/w 0-9
console.log(Math.floor(Math.random() * 10));

// Generates random integers b/w 0-10
console.log(Math.floor(Math.random() * 10 + 1));

// Generates random integers b/w 1-10
console.log(Math.floor(Math.random() * 10) + 1);

// Proper Random Function
console.log(`Proper Random Function`);

// min included
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(random(1, 5));

// both included
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(random(1, 5));
