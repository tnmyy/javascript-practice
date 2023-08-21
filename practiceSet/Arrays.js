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

console.log(`4. Filtering out names starting with specific letter`);

let classArr = [
  "Aayushi",
  "Aditi",
  "Aditya",
  "Sapna",
  "Sameer",
  "Shubham",
  "Siddharth",
  "Naman",
  "Nikhil",
  "Nitin",
  "Jay",
  "Jiya",
  "Jatin",
];

console.log(classArr);
classArr.sort();
console.log(classArr);

function sortNames(Arr, Letter) {
  const sortedNames = Arr.filter((arr) => {
    return arr.charAt(0).toLowerCase() === Letter.toLowerCase();
  });

  return sortedNames;
}
console.log(sortNames(classArr, "A"));

// 5. Write a function to remove all duplicate elements from an array and return a new array with unique elements. (Use the filter and indexOf methods)
// Use the filter method to filter out the duplicate elements based on their index.

console.log(`5. Removing duplicate array elements`);

let arr5 = ["a", "b", "c", "a", "b", "c", "a", "b", "c"];
console.log(arr5);

function removeDuplicate(Arr) {
  return Arr.filter((val, ind) => {
    return Arr.indexOf(val) === ind;
  });
}
console.log(removeDuplicate(arr5));

// 6. Given an array of objects with 'name' and 'age' properties, write a function to find the oldest person's age. (Use the reduce method)
// Use the reduce method to find the object with the highest 'age' property.

console.log(`6. Sorting an object array on the basis of the property value`);

let arr6 = [
  { name: "Tanmay", age: 15 },
  { name: "Ms. Suman Chand", age: 28 },
  { name: "Mr. Pushkar Singh Kholiya", age: 33 },
];

console.table(arr6);

function sortAge(Arr) {
  let oldest = Arr.sort((a1, a2) => {
    return a2.age - a1.age;
  });

  return oldest[0];
}

// sortAge(arr6);
console.log(sortAge(arr6));

// 7. Write a function to sort an array of numbers in ascending order. (Use the sort method)
// Use the sort method and a custom compare function for numbers.

console.log(`7. Sorting numbers in ascending order`);

let arr7 = [0, 23, 65, 89, 75, 20, 23, 47, 15, 7, 89, 693, 12, 3, 1];
console.log(arr7);

arr7.sort((a, b) => {
  return a - b;
});
console.log(arr7);

// 8. Given an array of numbers, write a function to find the maximum and minimum numbers in the array and return them as an object. (Use the reduce method)
// Use the reduce method to track both the maximum and minimum numbers.

console.log(`8. Finding max and min numbers in an array`);

let arr8 = [15, 23, 69, 58, 69, 584, 75, 203, 369, 845, 203, 6987, 236];
console.log(arr8);

function minMax(Arr) {
  let minMax = Arr.sort((a, b) => {
    return b - a;
  });

  minMax = [minMax[0], minMax[minMax.length - 1]];
  return minMax;
}

console.log(minMax(arr8));

// 9. Write a function to count the occurrences of each element in an array and return the result as an object. (Use the reduce method)
// Use the reduce method to count occurrences by creating a key-value object.

console.log(`9. Counting the occurrence of each array element`);

let arr9 = [
  1, 1, 2, 3, 5, 6, 8, 9, 7, 1, 1, 2, 3, 5, 4, 6, 6, 9, 7, 2, 3, 4, 5, 2, 1, 0,
  0, 2, 4, 5, 0, 2, 3, 6, 8, 4, 1,
];

function occurrence(Arr) {
  let occur = Arr.reduce((val, ind) => {
    if (val[ind]) {
      val[ind] += 1;
    } else {
      val[ind] = 1;
    }
    return val;
  }, {});
  return occur;
}

console.log(occurrence(arr9));
