console.log(`Practice Set of Arrays`);

// 1. Given an array of numbers, write a function to find the sum of all elements in the array. (Use the reduce method)
// To find the sum of elements, initialize an accumulator variable to 0 and use the reduce method to add each element to the accumulator.

console.log(`1. Sum of all numbers in array`);

let arr1 = [1, 20, 35, 52, 21, 236, 58, 96, 84, 159, 368, 237];

function arrSum(Arr) {
  return Arr.reduce((n1, n2) => {
    return n1 + n2;
  });
}

console.log(arrSum(arr1));

// 2. Given an array of strings, write a function to concatenate all the elements into a single string, separated by a specified delimiter. (Use the join method)
// Use the join method and pass the delimiter as an argument.

console.log(`2. Concatenating Strings of an Array`);

let arr2 = ["Tanmay", "Upreti", "TNMY", "Upreti"];

function joinStrArr(Arr, delimiter) {
  return Arr.join(`${delimiter}`);
}

console.log(joinStrArr(arr2, " ... "));

// 3. Write a function to reverse the order of elements in an array without modifying the original array. (Use the reverse method)
// Use the slice method to create a copy of the array and then use the reverse method.

let arr3 = ["Tanmay", "Vaibhav", "Naman", "Jay"];
console.log(arr3);

function reverseArr(Arr) {
  let newArr = Arr.splice(0);
  newArr.reverse();
  return newArr;
}

console.log(reverseArr(arr3));

// 4. Given an array of names, write a function to create a new array containing only the names starting with a specific letter. (Use the filter method)
// Use the filter method and a callback function to check if each name starts with the specified letter.

// 5. Write a function to remove all duplicate elements from an array and return a new array with unique elements. (Use the filter and indexOf methods)
// Use the filter method to filter out the duplicate elements based on their index.

// 6. Given an array of objects with 'name' and 'age' properties, write a function to find the oldest person's age. (Use the reduce method)
// Use the reduce method to find the object with the highest 'age' property.

// 7. Write a function to sort an array of numbers in ascending order. (Use the sort method)
// Use the sort method and a custom compare function for numbers.

// 8. Given an array of numbers, write a function to find the maximum and minimum numbers in the array and return them as an object. (Use the reduce method)
// Use the reduce method to track both the maximum and minimum numbers.

// 9. Write a function to count the occurrences of each element in an array and return the result as an object. (Use the reduce method)
// Use the reduce method to count occurrences by creating a key-value object.

// 10. Given an array of strings, write a function to find the longest string in the array. (Use the reduce method)
// Use the reduce method to find the string with the maximum length.
