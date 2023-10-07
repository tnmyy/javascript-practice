// 1. Phone Directory:
// Create a phone directory using a Map where names are keys and phone numbers are values. Implement functions to add contacts, remove contacts, and look up phone numbers by name.

const phoneDirectory = new Map();

// Function to add contact
function addContact(name, contact) {
  if (!phoneDirectory.has(name)) {
    phoneDirectory.set(name, phoneDirectory);
    console.log(`Added contact: Name: ${name} and Phone: ${contact}.`);
  } else {
    console.log(`Contact with name '${name}' already exists.`);
  }
}

// Function to remove contact
function removeContact(name) {
  if (phoneDirectory.has(name)) {
    const removeContact = phoneDirectory.get(name);
    phoneDirectory.delete(name);
    console.log(`Removed Contact: ${name}, Phone: ${removeContact}`);
  } else {
    console.log(`Contact with name '${name}' not found.`);
  }
}

// Function to look up phone numbers by name
function findNumber(name) {
  if (phoneDirectory.has(name)) {
    const phoneNumber = phoneDirectory.get(name);
    console.log(`Name: ${name}, Phone: ${phoneNumber}`);
  } else {
    console.log(`Contact with name '${name}' not found.`);
  }
}

addContact("Tanmay", 1234567890);
addContact("Vaibhav", 9874653210);

removeContact("Tanmay");
addContact("Tanmay", 1234567890);

findNumber("Vaibhav");

// 2. Inventory Management:
// Build an inventory management system using a Map to track products by their unique IDs. Implement functions to add products, update quantities, and retrieve product information.

console.log(`1. Inventory Management`);

let inventory = new Map();

// To add product
function addProduct(id, name, price, quantity) {
  if (!inventory.has(id)) {
    const product = {
      name: name,
      price: price,
      quantity: quantity,
    };
    inventory.set(id, product);

    console.log(
      `Added product: ID: ${id}, Name: ${name}, Price: ₹${price}, Quantity: ${quantity}`
    );
  } else {
    console.log(`Product with ID '${id}' already exists`);
  }
}

// To update quantity
function updateQuantity(id, newQuantity) {
  if (inventory.has(id)) {
    const product = inventory.get(id);
    product.quantity = newQuantity;
    console.log(`Updated quantity of product (ID: ${id} to ${newQuantity})`);
  } else {
    console.log(`Product with ID '${id}' already exists`);
  }
}

// To retrieve information
function getInfo(id) {
  if (inventory.has(id)) {
    const product = inventory.get(id);
    console.log(
      `Product's information:\nID: ${id}\nName: ${product.name}\nPrice: ₹${
        product.price
      }\nQuantity: ${product.quantity}\nTotal amount: ₹${
        product.price * product.quantity
      }\n`
    );
  }
}

addProduct(9580, "Tripod", 650, 5);
addProduct(6891, "Barbell", 1500, 12);
addProduct(5826, "Dumbbell", 2600, 80);

getInfo(9580);
getInfo(6891);
getInfo(5826);

updateQuantity(9580, 86);
getInfo(9580);

// 3. User Authentication:
// Develop a user authentication system using a Set to store usernames. Implement functions to add new users, check if a username already exists, and manage user access.

console.log(`3. User Authentication`);

const users = new Set();

function addUser(username) {
  if (!users.has(username)) {
    users.add(username);
    console.log(`Added username: '${username}'.`);
  } else {
    console.log(`The username: '${username}' already exists.`);
  }
}

function checkUsername(username) {
  if (users.has(username)) {
    console.log(`Username: '${username}' exists.`);
  } else {
    console.log(`Username: '${username}' not found.`);
  }
}

function deleteUsername(username) {
  if (users.has(username)) {
    users.delete(username);
    console.log(`Username: '${username}' deleted.`);
  } else {
    console.log(`Username: '${username}' not found.`);
  }
}

addUser("tanmay");
addUser("tnmy");
addUser("tanmay");

deleteUsername("tnmy");
addUser("tnmy");
checkUsername("tnmy");

// 4. Polling System:
// Create a polling system using a Map to store poll questions as keys and Set objects for each question to store voter IDs. Implement functions to add new poll questions, record votes, and calculate poll results.

console.log(`4. Polling System`);

const pollingSystem = new Map();

function addPollQuestion(question) {
  if (!pollingSystem.has(question)) {
    pollingSystem.set(question, new Set());
    console.log(`Added new poll question: ${question}`);
  } else {
    console.log(`Poll question '${question}' already exists.`);
  }
}

function recordVote(question, voterID) {
  if (pollingSystem.has(question)) {
    const voterSet = pollingSystem.get(question);

    if (!voterSet.has(voterID)) {
      voterSet.add(voterID);

      console.log(
        `Recorded vote for question '${question}' by voter ID ${voterID}`
      );
    } else {
      console.log(
        `Voter ID ${voterID} has already voted for question '${question}'.`
      );
    }
  } else {
    console.log(`Poll question '${question}' not found.`);
  }
}

function calculatePollResults(question) {
  if (pollingSystem.has(question)) {
    const voterSet = pollingSystem.get(question);
    const totalVotes = voterSet.size;
    console.log(
      `Poll Results for question '${question}':\nTotal Votes: ${totalVotes}\nVoter IDs who voted: ${[
        ...voterSet,
      ].join(", ")}`
    );
  } else {
    console.log(`Poll question '${question}' not found.`);
  }
}

addPollQuestion("Favorite Color?");
addPollQuestion("Best Programming Language?");

recordVote("Favorite Color?", 123);
recordVote("Favorite Color?", 456);
recordVote("Best Programming Language?", 123);
recordVote("Best Programming Language?", 789);
recordVote("Best Programming Language?", 123);

calculatePollResults("Favorite Color?");
calculatePollResults("Best Programming Language?");
calculatePollResults("Favorite Sport?");

// 5. Shopping Cart:
// Build a shopping cart system using a Map to store items as keys and their quantities as values. Implement functions to add items, update quantities.

console.log(`5. Shopping Cart`);

const cart = new Map();

function addItems(item, quantity) {
  if (!cart.has(item)) {
    cart.set(item, quantity);
    console.log(`Added ${quantity} articles of '${item}' to the cart`);
  } else {
    console.log(`'${item}' is already in the cart`);
  }
}

function updateItemQuantity(item, newQuantity) {
  if (cart.has(item)) {
    let oldQuantity = cart.quantity;
    cart.quantity = newQuantity;
    console.log(
      `Update quantity of '${item}' form ${oldQuantity} to ${newQuantity}`
    );
  } else {
    console.log(`'${item}' not found in the cart.`);
  }
}

function showCart() {
  cart.forEach((val, key) => {
    console.log(`Item: ${key}, Quantity: ${val}`);
  });
}

addItems("Banana", 24);
addItems("Chocolate", 20);
showCart();

updateItemQuantity("Banana", 48);
showCart();

// 6. Event RSVP System:
// Create an event RSVP system using a Set to store the names of attendees. Implement functions to add attendees, check if someone is attending, and manage event registrations.

console.log(`6. Event RSVP System`);

const rsvp = new Set();

function addAttendee(name) {
  if (!rsvp.has(name)) {
    rsvp.add(name);
    console.log(`Added '${name}' to event`);
  } else {
    console.log(`'${name}' is already in the event`);
  }
}

function checkAttendee(name) {
  if (rsvp.has(name)) {
    console.log(`Yes, '${name}' is attending`);
  } else {
    console.log(`No, '${name}' is not attending`);
  }
}

function manageEventRegistration(name) {
  if (rsvp.has(name)) {
    rsvp.delete(name);
    console.log(`Removed '${name}' from the event`);
  } else {
    console.log(`'${name}' not found in the event`);
  }
}

addAttendee("Tanmay");
addAttendee("Naman");
addAttendee("Vaibhav");
addAttendee("Jay");

checkAttendee("Tanmay");
checkAttendee("Siddharth");

manageEventRegistration("Naman");
manageEventRegistration("Jay");

// 7. Restaurant Reservation System:
// Build a reservation system for a restaurant using a Map to store reservation times as keys and Set objects to store the names of customers for each time slot. Implement functions to make reservations, check availability, and cancel reservations.

console.log(`7. Restaurant Reservation System`);

const reservationSystem = new Map();

function makeReservation(time, customerName) {
  if (!reservationSystem.has(time)) {
    reservationSystem.set(time, new Set());
  }

  const timeSlot = reservationSystem.get(time);

  if (!timeSlot.has(customerName)) {
    timeSlot.add(customerName);

    console.log(`Reservation made for ${customerName} at ${time}`);
  } else {
    console.log(`${customerName} already has a reservation at ${time}`);
  }
}

makeReservation("1:00 PM", "Tanmay");
makeReservation("1:00 PM", "Kritika");
makeReservation("11:00 AM", "Jay");
makeReservation("11:00 AM", "Vaibhav");
makeReservation("10:00 AM", "Naman");

function checkAvailability(time) {
  if (reservationSystem.has(time)) {
    const timeSlot = reservationSystem.get(time);
    const availableSlots = 10 - timeSlot.size;
    console.log(`Available slots at ${time}: ${availableSlots} out of 10`);
  } else {
    console.log(`No reservations at ${time}.`);
  }
}

checkAvailability("1:00 PM");
checkAvailability("11:00 AM");
checkAvailability("10:00 AM");

function cancelReservation(time, customerName) {
  if (reservationSystem.has(time)) {
    const timeSlot = reservationSystem.get(time);

    if (timeSlot.has(customerName)) {
      timeSlot.delete(customerName);
      console.log(
        `Reservation for ${customerName} at ${time} has been canceled.`
      );
    } else {
      console.log(`${customerName} does not have a reservation at ${time}.`);
    }
  } else {
    console.log(`No reservations at ${time}.`);
  }
}

cancelReservation("11:00 AM", "Tanmay");
cancelReservation("11:00 AM", "Vaibhav");

// 8. Library Due Dates:
// Develop a library system using a Map to associate books with their due dates. Implement functions to check out books, set due dates, and track overdue books.

console.log(`8. Library Due Dates`);

const library = new Map();

function issueBook(book, dueDate) {
  if (!library.has(book)) {
    library.set(book, dueDate);
    console.log(`Issued Book: '${book}', Due Date: '${dueDate}'`);
  } else {
    console.log(`'${book}' had already issued`);
  }
}

function setDueDate(book, newDueDate) {
  if (library.has(book)) {
    library.set(book, newDueDate);
    console.log(
      `Updated due date for book: ${book}, New Due Date: ${newDueDate}`
    );
  } else {
    console.log(`Book '${book}' not found.`);
  }
}

function trackOverDueBook(currentDate) {
  console.log(`Overdue Books:`);

  for (const [book, dueDate] of library.entries()) {
    if (currentDate > dueDate) {
      console.log(`- ${bookTitle} (Due Date: ${dueDate})`);
    }
  }
}

const currentDate = new Date();

issueBook(
  "Mathematics X",
  new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + 14
  )
);
issueBook(
  "HC Verma I",
  new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + 14
  )
);

setDueDate(
  "HC Verma I",
  new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + 15
  )
);

trackOverDueBook(currentDate);
