console.log(`JS Async`);

// 1. JS Callbacks

console.log(`1. JS Callbacks`);

function display(some) {
  console.log(some);
}
function calc(n1, n2, cb) {
  let sum = n1 + n2;
  cb(sum);
}

// display = a cb fnx, passes to calc() as an arg
calc(2, 3, display);

let myNum = [1, 3, -40, -5, 234, -43124, -Infinity, 33];
console.log(myNum);

let positiveNum = removeNegative(myNum, (x) => x >= 0);

console.log(positiveNum);

function removeNegative(num, cb) {
  const myArr = [];

  for (const x of num) {
    if (cb(x)) {
      myArr.push(x);
    }
  }
  return myArr;
}
