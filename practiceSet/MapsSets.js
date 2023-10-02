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

// 3. User Authentication:
// Develop a user authentication system using a Set to store usernames. Implement functions to add new users, check if a username already exists, and manage user access.

// 4. Polling System:
// Create a polling system using a Map to store poll questions as keys and Set objects for each question to store voter IDs. Implement functions to add new poll questions, record votes, and calculate poll results.

// 5. Shopping Cart:
// Build a shopping cart system using a Map to store items as keys and their quantities as values. Implement functions to add items, update quantities, and calculate the total cost of items in the cart.

// 6. Language Learning App:
// Develop a language learning app that uses a Set to store a user's known vocabulary. Implement functions to add new words, remove words, and test the user's vocabulary.

// 7. Event RSVP System:
// Create an event RSVP system using a Set to store the names of attendees. Implement functions to add attendees, check if someone is attending, and manage event registrations.

// 8. Restaurant Reservation System:
// Build a reservation system for a restaurant using a Map to store reservation times as keys and Set objects to store the names of customers for each time slot. Implement functions to make reservations, check availability, and cancel reservations.

// 9. Library Due Dates:
// Develop a library system using a Map to associate books with their due dates. Implement functions to check out books, set due dates, and track overdue books.

// 10. Social Network Friends:
// Create a social network system using a Map to store users as keys and Sets to store their friends' usernames. Implement functions to add friends, remove friends, and display a user's friend list.
