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
