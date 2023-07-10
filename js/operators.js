// Operators in JS

console.log(`Operators in JS`);

// Arithmetic Operators

let x = 10,
  y = 3;

console.log(`${x} + ${y} = ${x + y}`);
console.log(`${x} - ${y} = ${x - y}`);
console.log(`${x} * ${y} = ${x * y}`);
console.log(`${x} / ${y} = ${x / y}`);
console.log(`${x} % ${y} = ${x % y}`);
console.log(`${x} ** ${y} = ${x ** y}`);

console.log(`Increment in ${x++} = ${x}`);
console.log(`Increment in ${x} = ${++x}`);

console.log(`Decrement in ${y--} = ${y}`);
console.log(`Decrement in ${y} = ${--y}`);

// Assignment Operators

let a = 5,
  b = 2;

console.log(`${a} + ${b} = ${(a = a + b)}`);
console.log(`${a} + ${b} = ${(a += b)}`);

y = 3;
// x += y ==> x = x + y
b = 10;
b = b + y;
console.log(`${b} += ${y} ==> ${b}`);

b = 10;
b += y;
console.log(`${b} += ${y} ==> ${b}`);

// x -= y ==> x = x - y
b = 10;
b = b - y;
console.log(`${b} -= ${y} ==> ${b}`);

b = 10;
b -= y;
console.log(`${b} -= ${y} ==> ${b}`);

// x *= y ==> x = x * y
b = 10;
b = b * y;
console.log(`${b} *= ${y} ==> ${b}`);

b = 10;
b *= y;
console.log(`${b} *= ${y} ==> ${b}`);

// x /= y ==> x = x / y
b = 10;
b = b / y;
console.log(`${b} /= ${y} ==> ${b}`);

b = 10;
b /= y;
console.log(`${b} /= ${y} ==> ${b}`);

// x %= y ==> x = x % y
b = 10;
b = b % y;
console.log(`${b} %= ${y} ==> ${b}`);

b = 10;
b %= y;
console.log(`${b} %= ${y} ==> ${b}`);

// x **= y ==> x = x ** y
b = 10;
b = b ** y;
console.log(`${b} **= ${y} ==> ${b}`);

b = 10;
b **= y;
console.log(`${b} **= ${y} ==> ${b}`);
