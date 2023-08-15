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

const car = { type: "Fiat", model: "500", color: "white" };
console.log(car?.name);
