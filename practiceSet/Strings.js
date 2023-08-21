console.log(`JS Strings practice set`);

// Reverse a String: Write a function that takes a string as input and returns its reverse. For example, if the input is "hello", the function should return "olleh".

console.log(`1. String reverse`);

function revStr(str) {
  str = str.toString();
  console.log(`The reverse of ${str} is:`);

  for (char in str) {
    strInd = char;
  }

  for (let i = Number.parseInt(char); i >= 0; i--) {
    console.log(str[i]);
  }
}

revStr(`Tanmay`);

// Palindrome Check: Create a function that takes a string as input and checks if it is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. The function should return true if the input is a palindrome and false otherwise.

console.log(`2. Palindrome Checker`);

function palindrome(str) {
  str = str.toString().toLowerCase();

  let inputStr = "";
  let strInd = 0;
  for (char in str) {
    inputStr += str[char];
    strInd = char;
  }

  let newStr = "";
  for (let i = Number.parseInt(strInd); i >= 0; i--) {
    newStr += str[i];
    console.log(i);
  }

  if (inputStr === newStr) {
    console.log(`Yes, ${str} is a palindrome`);
  } else {
    console.log(`No, ${str} is not a palindrome`);
  }
}

palindrome(`CiVic`);

// Title Case a Sentence: Write a function that takes a sentence as input and converts it into title case. Title case means that the first letter of each word is capitalized, and the rest of the letters are in lowercase.

console.log(`3. Title Case`);

function titleCase(str) {
  str = str.split(" ");
  let x;
  for (char in str) {
    x = str[char][0].toUpperCase();
    console.log(x);
  }
  str = str.join(" ");
  console.log(str);
}

titleCase("Tanmay is my Name");

// Longest Word: Write a function that takes a sentence as input and returns the longest word in the sentence. If there are multiple words with the same length, return the first one.

console.log(`4. Longest word in a sentence checker`);

function longestWordChecker(sentence) {
  const words = sentence.split(" ");

  let longestWord = "";
  let longestWordLength = 0;

  for (const word of words) {
    // console.log(words[word]);
    const wordLength = word.length;
    // console.log(wordLength);

    if (wordLength > longestWordLength) {
      longestWord = word;
      longestWordLength = wordLength;
    }
  }

  sentence = sentence
    .slice(0, sentence.length - sentence.length + 10)
    .padEnd(sentence.length - sentence.length + 13, ".");

  let output = `The longest word in '${sentence}' is "${longestWord}" of length ${longestWordLength}`;
  return output;
}

let sent =
  "Write a function that takes a sentence as input and returns the longest word in the sentence. If there are multiple words with the same length, return the first one.";
console.log(longestWordChecker(sent));

// Count Vowels: Create a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.

console.log(`5. Vowel counter`);

function vowelCounter(str) {
  let word = str.toString().toLowerCase();
  let vowelCount = 0;

  for (const char of word) {
    if ("aeiou".includes(char)) {
      vowelCount++;
    }
  }
  console.log(`Total number of vowels in ${str} is ${vowelCount}`);
}
vowelCounter("Tanmay");

// Character Frequency: Write a function that takes a string as input and returns an object with the frequency of each character in the string. The keys of the object should be the characters, and the values should be the number of times they appear in the string.

// Remove Duplicates: Create a function that takes a string as input and returns a new string with duplicate characters removed. The order of the characters should be preserved.

// Caesar Cipher: Implement a function that takes a string and a shift value as inputs and returns a new string where each character is shifted by the given value. For example, with a shift of 3, 'A' would become 'D', 'B' would become 'E', 'Z' would become 'C', and so on.

// String Compression: Write a function that takes a string as input and returns a compressed version of the string. The compression should count the consecutive occurrences of each character and represent them as the character followed by the count. If the compressed string is not smaller than the original, return the original string.

// Anagram Check: Create a function that takes two strings as input and checks if they are anagrams of each other. Anagrams are words or phrases formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
