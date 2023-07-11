console.log(`Practice set of Functions`);

// 1. Leap year checker

console.log(`Leap year checker`);

function leapYr(year) {
  if (year % 4 == 0) {
    console.log(`Yes! ${year} is a leap year`);
  } else {
    console.log(`No! ${year} is not a leap year`);
  }
}

leapYr(2008);

// 2. String Repeater

console.log(`String repeater for desired number of times`);

function strRep(str, num) {
  let repeatedStr = "";

  for (let i = 0; i < num; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
}

console.log(strRep("T", 5));

// 3. Temperature Converter

console.log(`Temperature Converter`);

function temperatureConverter(temp) {
  let cel =
    `${temp}°F is: ` +
    Number.parseFloat(((temp - 32) * 5) / 9).toFixed(2) +
    "°C";
  return cel;
}

console.log(temperatureConverter(32));

// 4. Even or Odd Checker

function evenOdd(num) {
  num = Number.parseFloat(num);
  if (num % 2 === 0) {
    console.log(`Yes! ${num} is a even number`);
  } else {
    console.log(`No! ${num} is not a even number`);
  }
}

evenOdd(121);

// 5. Multiple checker

console.log(`Multiple Checker`);
function multipleChecker(multiple, num) {
  if (multiple % num === 0) {
    console.log(`Yes! ${multiple} is a multiple of ${num}`);
  } else {
    console.log(`No! ${multiple} is a no multiple of ${num}`);
  }
}

multipleChecker(14, 3);
multipleChecker(16258356, 18);

// 6. Vowel Counter

console.log(`Vowel Counter`);

function countVowel(str) {
  str = str.toLowerCase();

  const vowels = ["a", "e", "i", "o", "u"];

  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    // Check if the character is a vowel
    if (vowels.includes(str[i])) {
      vowelCount++;
    }
  }
  console.log(`The number of vowels in ${str} is ${vowelCount}`);
}

countVowel("Tanmay Upreti");

// 7. FizzBuzz: Write a function that prints the numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz" instead of the number. For numbers that are multiples of both 3 and 5, print "FizzBuzz".

console.log(`FizzBuzz`);

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log(`FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`Fizz`);
    } else if (i % 5 === 0) {
      console.log(`Buzz`);
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

// 8. Factorial Calculation:

console.log(`Factorial Calculation`);

function factorial(num) {
  let factorial = 1;

  for (i = 1; i <= num; i++) {
    factorial *= i;
  }
  console.log(`The factorial of ${num} is ${factorial}`);
}

factorial(100);

// 9. Perfect Square Checker

function perfectSquare(num) {
  num = Number.parseFloat(num);
  console.log(num);

  if (num < 0) {
    console.log(`Enter a valid number`);
    return false;
  }

  const sqrt = Math.sqrt(num);
  console.log(sqrt);

  if (Number.isInteger(sqrt)) {
    console.log(`Yes ${num} is a perfect square. It is the square of ${sqrt}`);
  } else {
    console.log(`${num} is not a perfect square`);
  }
}

perfectSquare(64);
perfectSquare(12345654321);

// More questions will be practiced after understanding array and string functions and operations
