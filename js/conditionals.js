console.log(`Conditionals`);

// Ternary Operator
// variable = (condition) ? val1(if condition true) : val2(if condition false)
let age = 9;
let votable = age < 18 ? "NO" : "YES";
console.log(votable);

// isNaN = Checks whether is a numerical string or number

console.log(`isNaN`);

age = 21;

if (isNaN(age)) {
  console.log(`${age} is not a number`);
} else {
  votable = age >= 18 ? "Yes you can vote" : "No you can not vote";
  console.log(votable);
}

// The Optional Chaining Operator (?.)

// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

console.log(`?.`);

const car = { type: "Swift", model: "VXI", color: "Red" };
console.log(car?.name);
console.log(car?.type);

// JS Switch

let day;
let text;

console.log(`JS Switch`);

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;

  case 1:
    day = "Monday";
    break;

  case 2:
    day = "Tuesday";
    break;

  case 3:
    day = "Wednesday";
    break;

  case 4:
    day = "Thursday";
    break;

  case 5:
    day = "Friday";
    break;

  case 6:
    day = "Saturday";
    break;

  // If no code match
  default:
    day = "Enjoy WeekDays";
}

console.log(day);

// Common Code Blocks

switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Weekend Soon";
    break;
  case 0:
  case 6:
    text = "It's Weekend";
    break;
  default:
    text = "Weekend Gone";
}
console.log(text);
