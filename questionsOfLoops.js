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

// 5. Reverse a String: Write a loop that takes a string as input and prints it in reverse order.

// 6. Count Characters: Write a loop that counts the number of occurrences of a specific character in a given string.

// 7. Fibonacci Sequence: Write a loop that generates and prints the first 10 numbers in the Fibonacci sequence. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones.

// 8. Find Prime Numbers: Write a loop that finds and prints all prime numbers between 1 and 50.

// 9. Array Sum: Write a loop that calculates the sum of all numbers in an array.

// 10. Array Average: Write a loop that calculates the average of numbers in an array.

// 11. Countdown: Write a loop that counts down from 10 to 1 and prints the numbers. ([for loop])

// 12. String Concatenation: Write a loop that takes an array of strings and concatenates them to form a single string. ([for loop or for-of loop])

// 13. Sum of Array: Write a loop that calculates the sum of all numbers in an array. ([for loop or for-of loop])

// 14. Character Frequency: Write a loop that counts the frequency of each character in a given string and prints the result. ([for-of loop])

// 15. Array Reversal: Write a loop that reverses the order of elements in an array. ([for loop or while loop])

// 16. Number Pattern: Write a loop that prints the numbers in the pattern 1, 2, 3, 4, 3, 2, 1. ([for loop])

// 17. Factorial Calculation: Write a loop that calculates the factorial of a given number. ([for loop or while loop])

// 18. String Uppercase: Write a loop that converts all characters in a string to uppercase. ([for loop or for-of loop])

// 19. Table of Squares: Write a loop that prints a table of squares from 1 to 10. ([for loop])

// 20. Vowel Count: Write a loop that counts the number of vowels (a, e, i, o, u) in a given string. ([for-of loop])
