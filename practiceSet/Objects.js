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

console.log(`4. Bank Account:`);

function createBankAccount(holderName_, accountNumber_, balance_) {
  this.accountNumber = accountNumber_;
  this.balance = balance_;
  this.holderName = holderName_;

  // Deposit Money
  this.deposit = function (amount) {
    amount = Number.parseInt(amount);
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ₹${amount}. New balance: ₹${this.balance}`);
    } else {
      console.log(`Invalid deposit amount. Please enter a valid amount.`);
    }
  };

  // Withdraw Amount
  this.withdraw = function (amount) {
    amount = Number.parseInt(amount);

    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn ₹${amount}. New balance ₹${this.balance}`);
    } else if (amount <= 0) {
      console.log(`Invalid withdrawal amount. Please enter a positive amount.`);
    } else {
      console.log(`Insufficient funds for withdrawal.`);
    }
  };

  // Check balance
  this.checkBalance = function () {
    console.log(
      `Account Holder: ${this.holderName}\nAccount Number: ${this.accountNumber}\nNet Balance: ₹${this.balance}`
    );
  };
}

const account1 = new createBankAccount("Tanmay", 987654321, 25052.36);
const account2 = new createBankAccount("Sarthak", 123456789, 12569.02);

account1.checkBalance();
account1.deposit(15000.25);
account1.withdraw(2056.89);
account1.checkBalance();

account2.checkBalance();
account2.deposit(20000.5);
account2.withdraw(3690.37);
account2.checkBalance();

// 5. Weather App:
// Build a simple weather application that uses objects to store weather information for different cities. Each city object should have properties like city name, temperature, and weather conditions (e.g., sunny, rainy). Allow users to search for weather data by city name.

console.log(`5. Weather App`);

const weather = [];

function addCityInfo(city_, temperature_, condition_) {
  const info = {
    cityName: city_,
    temperature: temperature_ + "°C",
    weatherCondition: condition_,
  };
  weather.push(info);
}

// Search

function searchCity(cityName) {
  cityName = cityName.toLowerCase();

  const foundCity = weather.find(
    (name) => name.cityName.toLowerCase() === cityName
  );

  if (foundCity) {
    console.log(
      `City: ${foundCity.cityName}\nTemperature: ${foundCity.temperature}\nWeather Condition: ${foundCity.weatherCondition}`
    );
  } else {
    console.log(`Currently data for '${cityName}' unavailable.`);
  }
}

addCityInfo("Pithoragarh", 26, "Sunny");
addCityInfo("New Delhi", 32, "Cloudy");
addCityInfo("Mumbai", 29, "Rainy");
console.log(weather);

searchCity("Pithoragarh");
searchCity("New Delhi");
searchCity("Mumbai");

// 6. To-Do List:
// Implement a to-do list application using objects to represent tasks with properties like task name, due date, and completion status. Create functions to add, edit, and mark tasks as completed.

console.log(`6. To-Do List`);

let todoList = [];

function createTask(taskName_, dueDate_ = new Date().toDateString()) {
  const task = {
    taskName: taskName_,
    dueDate: dueDate_,
    completionStatus: false,
  };

  todoList.push(task);
  console.log(`Added task: ${taskName_}`);
}

// Edit task by name
function editTask(taskName, newTaskName, newDueDate) {
  const task = todoList.find((task) => task.taskName === taskName);

  if (task) {
    task.taskName = newTaskName;
    task.dueDate = newDueDate;
    console.log(`Edited task: ${taskName}.`);
  } else {
    console.log(`Task with name '${taskName}' not found.`);
  }
}

// Mark task as completed by name
function markTaskAsCompleted(taskName) {
  const task = todoList.find((task) => task.taskName === taskName);

  if (task) {
    task.completionStatus = true;
    console.log(`Marked task '${taskName}' as completed.`);
  } else {
    console.log(`Task with name '${taskName}' not found.`);
  }
}

// Display To-do list
function displayTodoList() {
  console.log(`\n\nTo-do List:\n\n`);

  todoList.forEach((task) => {
    const status = task.completionStatus ? "Completed" : "Incomplete";
    console.log(
      `Task: ${task.taskName}\nDue Date: ${task.dueDate}\nStatus: ${status}\n`
    );
  });
}

createTask("English SQP", "Oct 08 2023");
createTask("Mathematics SQP", "10/10/2023");
displayTodoList();

createTask("Hindi SQP", "Oct 18 2023");
markTaskAsCompleted("Hindi SQP");
displayTodoList();

editTask("Hindi SQP", "Pre-boards", "5/12/23");
displayTodoList();

// 7. Car Rental System:
// Design a car rental system using objects to represent cars with properties like make, model, year, and rental price per day. Create methods to rent a car, return a car, and calculate the total rental cost.

console.log(`7. Car Rental System:`);

let carList = [];

function addCar(make_, model_, year_, rentalPrice_) {
  const car = {
    make: make_,
    model: model_,
    year: year_,
    rentalPrice: "₹" + rentalPrice_,
    rented: false,
    rentStartDate: null,
  };
  carList.push(car);
}

// Display available cars
function displayCar() {
  console.log(`\nCars' List: \n`);

  carList.forEach((car) => {
    console.log(
      `Company Name: ${car.make}\nModel name: ${car.model}\nModel Year: ${car.year}\nRental Price(per day): ${car.rentalPrice}\n`
    );
  });
}

// Rent a car
function rentCar(make, model) {
  const car = carList.find((car) => car.make === make && car.model === model);

  if (car && !car.rented) {
    car.rented = true;
    car.rentStartDate = new Date();
    console.log(`Rented car: ${car.year} ${car.make} ${car.model}`);
  } else if (!car) {
    console.log(`Car '${make}' not found in the garage.`);
  } else {
    console.log(`Car '${make} ${model}' is already rented.`);
  }
}

// Return a rented car
function returnCar(make, model) {
  const car = carList.find((car) => car.make === make && car.model === model);

  if (car && car.rented) {
    const rentEndDate = new Date();
    const rentalDays =
      Math.ceil(rentEndDate - car.rentStartDate) / (1000 * 60 * 60 * 24);
    const totalRent = rentalDays * car.rentalPrice;

    car.rented = false;
    car.rentStartDate = null;

    console.log(`Return car: ${car.make} ${car.model}`);
    console.log(`Rental duration: ${car.rentalDays} days.`);
    console.log(`Total rental cost: ₹${totalRent}`);
  } else if (!car) {
    console.log(`Car '${make} ${model}' not found in inventory.`);
  } else {
    console.log(`Car '${make} ${model}' is not currently rented.`);
  }
}

addCar("Maruti Suzuki", "Alto K10", 2022, 2500);
addCar("Mercedes", "Benz", 2023, 54200);
displayCar();

rentCar("Mercedes", "Benz");
rentCar("Mercedes", "Benz");

returnCar("Mercedes", "Benz");
returnCar("Mercedes", "Benz");

// 8. Social Media Profiles:
// Create objects to represent user profiles on a social media platform with properties like username, followers, and posts. Implement functions to follow/un-follow users.

console.log(`8. Social Media Profiles`);

let users = [];

function createUser(username_, followers_, posts_) {
  const user = {
    username: username_,
    followers: followers_,
    posts: posts_,
  };
  users.push(user);
}

// Display users
function displayUsers() {
  console.log(`Users:\n`);
  users.forEach((user) => {
    console.log(
      `Username: ${user.username}\nFollowers: ${user.followers}\nPosts: ${user.posts}\n`
    );
  });
}

// Follow Function
function followUser(userName) {
  const follow = users.find((user) => user.username === userName);

  if (follow) {
    let followers = follow.followers;
    follow.followers++;
    console.log(
      `A follower added. Current Followers: ${follow.followers} from the previous ${followers}`
    );
  } else {
    console.log(`User with '${userName}' not found.`);
  }
}

// Un-Follow Function
function unFollowUser(userName) {
  const follow = users.find((user) => user.username === userName);

  if (follow) {
    let followers = follow.followers;
    follow.followers--;
    console.log(
      `A follower removed. Current Followers: ${follow.followers} from the previous ${followers}`
    );
  } else {
    console.log(`User with '${userName}' not found.`);
  }
}

createUser("upretitanmay", 1090343, 12);
createUser("bhattG", 98076, 22);
createUser("joshivaibhav", 1090236, 32);
// displayUsers();

followUser("bhattG");
followUser("bhattG");
followUser("bhattG");

unFollowUser("bhattG");
unFollowUser("bhattG");
unFollowUser("bhattG");

// 9. Library Catalog:
// Build a library catalog system with objects representing books, including properties like title, author, and ISBN. Implement functions to search for books by title, author, or ISBN.

console.log(`9. Library Catalog:`);

let library = [];

function addBook(title_, author_, isbn_) {
  const book = {
    title: title_,
    author: author_,
    isbn: isbn_,
  };
  library.push(book);
}

// Show available books
function displayBooks() {
  console.log(`Books:\n`);
  library.forEach((book) => {
    console.log(
      `Title: ${book.title}\nAuthor: ${book.author}\nISBN: ${book.isbn}\n`
    );
  });
}

// Search by title
function searchTitle(Title) {
  const book = library.find((book) =>
    book.title.toLowerCase().includes(Title.toLowerCase())
  );

  if (book) {
    console.log(
      `\nTitle: ${book.title}\nAuthor: ${book.author}\nISBN: ${book.isbn}`
    );
  } else {
    console.log(`Book with title '${Title}' not found.`);
  }
}

// Search by author
function searchAuthor(Author) {
  const book = library.find((book) =>
    book.author.toLowerCase().includes(Author.toLowerCase())
  );

  if (book) {
    console.log(
      `\nTitle: ${book.title}\nAuthor: ${book.author}\nISBN: ${book.isbn}`
    );
  } else {
    console.log(`Book with author '${Author}' not found.`);
  }
}

// Search by ISBN
function searchISBN(ISBN) {
  const book = library.find((book) => book.isbn === ISBN);

  if (book) {
    console.log(
      `\nTitle: ${book.title}\nAuthor: ${book.author}\nISBN: ${book.isbn}`
    );
  } else {
    console.log(`Book with ISBN '${ISBN}' not found.`);
  }
}

addBook("Footprints without feet", "H.G. Wells", 12345678910);
addBook("A letter to God", "G.L. Fluentes", 98745632102);
addBook("Do bailo ki katha", "Premchand", 2358741698503);
displayBooks();
searchTitle("A letter to God");
searchISBN(2358741698503);
searchAuthor("H.G. Wells");

// 10. Employee Management:
// Develop an employee management system using objects to represent employees with properties like name, position, and salary. Create functions to add employees, update their information, and calculate the total payroll.
