// 1. Student Records:
// Create an object to represent a student with properties like name, age, and grade. Then, create an array of student objects and perform operations like adding a new student, updating their grade, or finding the average age of all students.

console.log(`1. Student Records`);

let students = [];

function addStudent(name_, rollNo_, marks_ = null) {
  const student = {
    name: name_,
    rollNo: rollNo_,
    marks: marks_,
  };

  students.push(student);
}

function updateStudent(name, newMarks) {
  const studentIndex = students.findIndex((student) => student.name === name);

  if (studentIndex !== -1) {
    students[studentIndex].marks = newMarks;
  } else {
    console.log(`Student with name ${name} not found`);
  }
}

addStudent("Tanmay", 39);
addStudent("Vaibhav", 40);
addStudent("Naman", 20);
addStudent("Jay", 14);

console.log(students);

// 2. Product Catalog:
// Imagine you're building an online store. Create objects to represent products with properties like name, price, and description. Create an array of products and write functions to filter products based on price range or search for products by name.

console.log(`2. Product Catalog`);

const products = [
  {
    name: "Fan",
    price: 150,
    description: "Gives air out",
  },
  {
    name: "Bat",
    price: 250,
    description: "Strikes the balls hard",
  },
  {
    name: "Net",
    price: 690,
    description: "Catches chicks precisely",
  },
];

console.log(products);

// To filter out products by price

function filterProductsByPrice(min, max) {
  let output = products.filter(
    (product) => product.price >= min && product.price <= max
  );
  output.forEach((Product) => {
    console.log(
      `List of products of price between ₹${min} - ₹${max}:\nName: ${Product.name}, Price: ₹${Product.price}`
    );
  });
}

filterProductsByPrice(100, 200);

// To search products by name

function searchProductsByName(term) {
  term = term.toLowerCase();

  let output = products.filter((product) =>
    product.name.toLowerCase().includes(term)
  );

  output.forEach((product) => {
    console.log(
      `Matching search results for '${term}':\nName: ${product.name}, Price: ₹${product.price}`
    );
  });
}
searchProductsByName("b");

// 3. Address Book:
// Build an address book using objects to represent contacts with properties like name, phone number, and email. Implement functions to add, delete, and search for contacts in the address book.

console.log(`3. Address Book`);

let addressBook = [];

function addContact(name_, contact_, email_) {
  const contact = {
    name: name_,
    contact: contact_,
    email: email_,
  };

  addressBook.push(contact);
  console.log(`Added ${name_} to the address book.`);
}
// Delete contact by name

function deleteContact(contactName) {
  const index = addressBook.findIndex(
    (contact) => contact.name === contactName
  );

  if (index !== -1) {
    const deletedContact = addressBook.splice(index, 1);
    console.log(`Deleted ${deletedContact[0].name} from the address book.`);
  } else {
    console.log(`Contact with name '${name}' not found.`);
  }
}

// Search contact by name

function searchContact(contactName) {
  const foundContacts = addressBook.filter((contact) =>
    contact.name.toLowerCase().includes(contactName.toLowerCase())
  );

  if (foundContacts.length > 0) {
    console.log(`Found Contacts:`);

    foundContacts.forEach((contact) => {
      console.log(
        `Name: ${contact.name}, Phone: ${contact.contact}, Email: ${contact.email}`
      );
    });
  } else {
    console.log(`No contacts found with name '${contactName}'`);
  }
}

addContact("Mummy", "123-456-7890", "xyz@gmail.com");
addContact("Papa", "123-456-7890", "abc@gmail.com");
addContact("Dadi", "123-456-7890", "pqr@gmail.com");
console.log(addressBook);

deleteContact("Mummy");
console.log(addressBook);

searchContact("d");

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
