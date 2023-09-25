// 1. Student Records:
// Create an object to represent a student with properties like name, age, and grade. Then, create an array of student objects and perform operations like adding a new student, updating their grade, or finding the average age of all students.

console.log(`1. Student Records`);

const student = {
  name: ["Tanmay", "Vaibhav", "Naman", "Jay"],
  rollNo: [39, 40, 20, 14],
};
console.log(student);

// New Student:

function newStu(_name, _rollNo) {
  student.name.push(_name);
  student.rollNo.push(_rollNo);
}

newStu("Jiya", 15);
console.log(student);

// 2. Product Catalog:
// Imagine you're building an online store. Create objects to represent products with properties like name, price, and description. Create an array of products and write functions to filter products based on price range or search for products by name.

// 3. Address Book:
// Build an address book using objects to represent contacts with properties like name, phone number, and email. Implement functions to add, delete, and search for contacts in the address book.

// 4. Bank Account:
// Create objects to represent bank accounts with properties like account number, balance, and account holder's name. Write methods to deposit, withdraw, and check the balance.

// 5. Weather App:
// Build a simple weather application that uses objects to store weather information for different cities. Each city object should have properties like city name, temperature, and weather conditions (e.g., sunny, rainy). Allow users to search for weather data by city name.

// 6. To-Do List:
// Implement a to-do list application using objects to represent tasks with properties like task name, due date, and completion status. Create functions to add, edit, and mark tasks as completed.

// 7. Car Rental System:
// Design a car rental system using objects to represent cars with properties like make, model, year, and rental price per day. Create methods to rent a car, return a car, and calculate the total rental cost.

// 8. Social Media Profiles:
// Create objects to represent user profiles on a social media platform with properties like username, followers, and posts. Implement functions to follow/un-follow users and display a user's feed based on their posts.

// 9. Library Catalog:
// Build a library catalog system with objects representing books, including properties like title, author, and ISBN. Implement functions to search for books by title, author, or ISBN.

// 10. Employee Management:
// Develop an employee management system using objects to represent employees with properties like name, position, and salary. Create functions to add employees, update their information, and calculate the total payroll.
