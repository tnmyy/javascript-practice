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

// 2. Function Parameters
console.log(`2. Function Parameters`);

fnc = function (x, y) {
  if (y === undefined) {
    y = 2;
  }
  return x + y;
};

console.log(fnc(2, undefined));

// if value not passed, then-
console.log(`if value not passed, then`);

fnc = function (x, y = 10) {
  return x + y;
};
console.log(fnc(3));

// rest param
console.log(`Rest Parameter`);

fnc = function (...x) {
  let sum = 0;

  for (let args of x) sum += args;
  return sum;
};

console.log(fnc(9, 2, 3, 3, 4, 4));

// Arguments Object
console.log(`Arguments Object`);

x = sumAll(2, 3345, 234, 243124, 345.5521, 341.5788, 2336.598);
console.log(x);

function sumAll() {
  let sum = 0;

  for (let arg of arguments) {
    sum += arg;
  }

  return sum;
}

x = findMax(2, 3345, 234, 243124, 345.5521, 341.5788, 2336.598);
console.log(x);

function findMax() {
  let max = -Infinity;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }

  return max;
}
