console.log(`Functions in JS`);

function toCelsius(fahrenheit) {
  let x = (5 / 9) * (fahrenheit - 32);
  x = x.toFixed(2);
  let y = `${fahrenheit}°F is ${x}°C`;
  return y;
}

console.log(toCelsius(90));

// 1. Function definition
console.log(`1. Function definition`);

// anonymous functions are called by variable name
console.log(`anonymous functions are called by variable name`);
let fnc = function (a, b) {
  let x = `(${a})² + (${b})² + 2x${a}x${b}`;
  let y = a * a + b * b + 2 * a * b;
  let z = `(${a}+${b})² = ${x} = ${y}`;
  return z;
};

console.log(fnc(15, 1980));

// self-invoking functions
console.log(`self-invoking functions`);
(function () {
  console.log(`Hey! I will be invoked by my own.`);
})();

// arguments.length
console.log(`arguments.length`);

function myFnc(a, b) {
  return arguments.length;
}

console.log(myFnc("Tanmay", "Upreti"));

// toString()
console.log(`toString()`);

function myFnc1(a, b) {
  return a * b;
}

console.log(myFnc1(2, 4).toString());

// arrow functions
const arrFnc = (a, b) => {
  return a + b + a + b;
};

console.log(arrFnc(4, 5));
