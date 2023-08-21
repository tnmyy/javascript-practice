console.log(`Loops practice set`);

// 1. Print Numbers: Write a loop that prints numbers from 1 to 10.

let i = 0;

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

while (i <= 10) {
  console.log(i);
  i++;
}

// 2. Even Numbers: Write a loop that prints all even numbers between 1 and 20.

console.log(`Even Numbers from 1 to 20 are:`);
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

console.log(`Even Numbers from 1 to 20 are:`);
i = 0;
while (i <= 20) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

// 3. Sum of Numbers: Write a loop that calculates the sum of numbers from 1 to 100.

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`Sum of the numbers from 1 to 100: ${sum}`);

// 4. Factorial: Write a loop that calculates the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.

let n = 10;
let factorial = 1;

for (let i = 1; i < n; i++) {
  factorial *= i;
}
console.log(`Factorial of ${n} is ${factorial}`);

// 5. Countdown: Write a loop that counts down from 10 to 1 and prints the numbers. ([for loop])

console.log(`Reverse countdown form 10 to 1`);
let revCount = 10;

for (let i = revCount; i > 0; i--) {
  console.log(i);
}

// 6. Sum of Array: Write a loop that calculates the sum of all numbers in an array. ([for loop or for-of loop])

let numArr = [4, 8, 12, 16, 20];
console.log(`Sum of numbers ${numArr}`);
console.log(numArr);

let numbers = 0;
for (let num of numArr) {
  numbers += num;
}
console.log(numbers);

// 7. Number Pattern: Write a loop that prints the numbers in the pattern 1, 2, 3, 4, 3, 2, 1. ([for loop])

console.log(
  `Number in reverse order till 1 then again ascends till the number`
);
let num = 4;

for (let i = 1; i <= num; i++) {
  console.log(i);
}

for (let i = num - 1; i >= 1; i--) {
  console.log(i);
}

// 8. Factorial Calculation: Write a loop that calculates the factorial of a given number. ([for loop or while loop])

console.log(`Factorial`);
let factorialNum = 10;

let x = 1;
let factN = 1;

while (x <= 10) {
  console.log(x);
  factN *= x;
  x++;
}
console.log(factN);

// 9. Table of Squares: Write a loop that prints a table of squares from 1 to 10. ([for loop])

console.log(`Square`);

let squareNum = 10;

for (let i = 1; i <= squareNum; i++) {
  console.log(`The square of ${i} is ${i * i}`);
}

// 10. String Uppercase: Write a loop that converts all characters in a string to uppercase. ([for loop or for-of loop])

console.log(`Converting all the characters of a string to uppercase`);

let str = "tanmay";

for (let i = 0; i < str.length; i++) {
  console.log(str[i].toUpperCase());
}

// 11. Reverse a String: Write a loop that takes a string as input and prints it in reverse order.

console.log(`Reversing a string`);

str = "Tanmay";

for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
  // console.log(i);
}

// 12. Array Reversal: Write a loop that reverses the order of elements in an array. ([for loop or while loop])

console.log(`Reversing the order of elements of an array`);

let loopArr = ["JavaScript", "Python", "Java", "C++"];
console.log(loopArr);
console.log(loopArr.length);

for (let i = loopArr.length - 1; i >= 0; i--) {
  console.log(loopArr[i]);
}

// 13. Fibonacci Sequence: Write a loop that generates and prints the first 10 numbers in the Fibonacci sequence. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones.

console.log(`Fibonacci Sequence`);

let fibonacci = 15;
let num1 = 0;
let num2 = 1;

for (let i = 1; i <= fibonacci; i++) {
  const num3 = num1 + num2;
  num1 = num2;
  num2 = num3;
  console.log(num3);
}

// 14. Vowel Count: Write a loop that counts the number of vowels (a, e, i, o, u) in a given string. ([for-of loop])

console.log(`Vowel Counter`);

let vowelStr = "Tanmay Upreti";
let vowelCount = 0;

for (let character of vowelStr) {
  let char = character.toLowerCase();
  console.log(char);

  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    vowelCount++;
  }
}

console.log(`The total number of vowels in ${vowelStr} are ${vowelCount} `);

// 15. String Concatenation: Write a loop that takes an array of strings and concatenates them to form a single string. ([for loop or for-of loop])

console.log(`String concatenation`);

let arrStr = ["I", " ", "am", " ", "Tanmay", " ", "Upreti"];
console.log(arrStr);

let newArrStr = "";

for (let str of arrStr) {
  newArrStr += str;
}

console.log(newArrStr);

// 16. Count Characters: Write a loop that counts the number of occurrences of a specific character in a given string.

console.log(`Specific character counter`);

let newCharStr = "Tanmay Upreti".toLowerCase();

let newCharLetter = "t";
let newCharCount = 0;

for (let i = 0; i < newCharStr.length; i++) {
  if (newCharStr[i] == newCharLetter) {
    newCharCount++;
  }
}

console.log(`${newCharLetter} occurs in ${newCharStr} ${newCharCount} times.`);

// 17. Array Sum: Write a loop that calculates the sum of all numbers in an array.

console.log(`Sum of numbers in an Array`);

let arrNum = [63, 59, 58, 2, 36, 5, 0, 5, 7, 2, 8, 52];
let arrNumSum = 0;

for (let i = 0; i < arrNum.length; i++) {
  arrNumSum += arrNum[i];
}

console.log(`The sum of ${arrNum} is ${arrNumSum}`);

// 18. Array Average: Write a loop that calculates the average of numbers in an array.

console.log(`Average of numbers in an array`);

let arrNumAvg = 0;

for (let i = 0; i < arrNum.length; i++) {
  arrNumAvg = (arrNumSum / arrNum.length).toFixed(3);
}

console.log(`The average of ${arrNum} is ${arrNumAvg}`);

// 19. Find Prime Numbers: Write a loop that finds and prints all prime numbers between 1 and 50.

console.log(`Prime numbers`);

let startWithNum = 2;
let endWithNum = 1000;

console.log(`Prime Numbers b/w ${startWithNum} and ${endWithNum} are:`);
for (let num = startWithNum; num <= endWithNum; num++) {
  let isPrime = true;

  for (let i = startWithNum; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}

// 20. Character Frequency: Write a loop that counts the frequency of each character in a given string and prints the result. ([for-of loop])

console.log(`Character Frequency`);

let frequencyStr = "Tanmay Upreti";
let lowerFrequencyStr = frequencyStr.toLowerCase();
console.log(lowerFrequencyStr);

let charFrequency = {};

for (const char of lowerFrequencyStr) {
  if (charFrequency[char]) {
    charFrequency[char]++;
  } else {
    charFrequency[char] = 1;
  }
}

for (const char in charFrequency) {
  console.log(`${char}: ${charFrequency[char]}`);
}

// Factorial Sum: Write a loop that calculates the sum of factorials from 1 to a given number n. For example, if n is 5, the sum would be 1! + 2! + 3! + 4! + 5!.

// FizzBuzz with a Twist: Write a loop that prints numbers from 1 to a given number. For multiples of three, print "Fizz". For multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz". However, for numbers containing the digit 3, print "Fizz" instead of the number, and for numbers containing the digit 5, print "Buzz" instead of the number.

// Pythagorean Triplets: Write a loop that finds and prints all Pythagorean triplets (a, b, c) where a, b, and c are positive integers and a^2 + b^2 = c^2, with each number in the triplet not exceeding a given limit.

// Prime Factors: Write a loop that finds and prints the prime factors of a given number. For example, if the input is 12, the prime factors are 2 and 3.

// Reverse Number: Write a loop that takes a number as input and returns the reverse of that number. For example, if the input is 12345, the output should be 54321.

// Pascal's Triangle: Write a loop that prints the first n rows of Pascal's Triangle. Pascal's Triangle is a triangular array of binomial coefficients, where each number is the sum of the two directly above it.

// Sum of Digits: Write a loop that calculates the sum of the digits of a given number. For example, if the input is 123, the sum would be 1 + 2 + 3 = 6.

// Mirror Image: Write a loop that prints a mirror image of a given string. For example, if the input is "Hello", the output should be "HelloolleH".

// Geometric Progression: Write a loop that prints the first n terms of a geometric progression with a given initial value and common ratio.
