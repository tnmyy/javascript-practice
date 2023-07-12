console.log(`Numbers in JS`);

// Number methods

let x = 10;
console.log(Number.isInteger(x));
x = 10.01;
console.log(Number.isInteger(x));
x = 10;
console.log(Number.isSafeInteger(x));
x = 1000000000000000;
console.log(Number.isSafeInteger(x));
x = 10000000000000000;
console.log(Number.isSafeInteger(x));

// To string

console.log(10);
console.log(typeof 10);
console.log((10).toString());
console.log(typeof (10).toString());

// To exponent

let expo = 123456000000;

console.log(expo);
console.log(expo.toExponential());
console.log(expo.toExponential(2));
console.log(expo.toExponential(4));
console.log(expo.toExponential());
console.log(typeof expo.toExponential());

// To fixed Decimal Places

let decimal = 1.123456789;

console.log(decimal);
console.log(decimal.toFixed(2));
console.log(decimal.toFixed(4));
console.log(decimal.toFixed(6));
console.log(decimal.toFixed(8));

// To precision

let per = 1.2345;

console.log(per.toPrecision());
console.log(per.toPrecision(1));
console.log(per.toPrecision(2));
console.log(per.toPrecision(3));
console.log(per.toPrecision(4));
console.log(per.toPrecision(5));

// Value of

let num = 120;
console.log(num.valueOf());

// Variables to Numbers

// Number method

let n = "2023";
console.log(n);
console.log(typeof n);

n = Number(n);
console.log(n);
console.log(typeof n);

// parseInt method

n = "20 23";
console.log(n);
console.log(typeof n);

n = parseInt(n);

console.log(n);
console.log(typeof n);

// parseFloat method

n = "20.23";
console.log(n);
console.log(typeof n);

n = parseFloat(n);

console.log(n);
console.log(typeof n);

// Some Properties of Number

// Number.EPSILON is difference between the smallest floating point number greater than 1 and 1.
let numPro = Number.EPSILON;
console.log(numPro);

// Number.MAX_VALUE = Maximum possible number in JS
numPro = Number.MAX_VALUE;
console.log(numPro);

// Number.MIN_VALUE = Minimum possible number in JS
numPro = Number.MIN_VALUE;
console.log(numPro);

// Number.MAX_VALUE = Maximum possible integer in JS
numPro = Number.MAX_SAFE_INTEGER;
console.log(numPro);

// Number.MIN_VALUE = Minimum possible integer in JS
numPro = Number.MIN_SAFE_INTEGER;
console.log(numPro);
