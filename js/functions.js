console.log(`Functions in JS`);

function myFx() {
  console.log(`A JS Function`);
}
myFx();

// return stops a function

function sum(a, b, c) {
  let sum = a + b + c;
  sum = Number.parseFloat(sum).toFixed(3);
  console.log(`The sum of three numbers ${a}, ${b} and ${c} is: ${sum}`);
  return sum;
}

console.log(sum(2, 8.66e4 * 1.0256, 3));
