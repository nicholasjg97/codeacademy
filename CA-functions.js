// Using a function declaration, create a function called getReminder(),
// log the following reminder to the console: 'Water the plants.'
// Using a function declaration, create a function called greetInSpanish(), console.log() the following Spanish phrase to the console: 'Buenas Tardes.'

function getReminder() {
    console.log('Water the plants.')
  };
  function greetInSpanish () {
    console.log('Buenas Tardes.')
  }

//   Define a function called sayThanks() as a function declaration.
// In the function body of sayThanks(), add code such that the function writes the following thank you message to the console when called: 'Thank you for your purchase! We appreciate your business.'
// Call sayThanks() to view the thank you message in the console.

// function sayThanks () {
//     console.log('Thank you for your purchase! We appreciate your business.')
//   }
//   sayThanks();
//   sayThanks();
//   sayThanks();

//   Add a parameter called name to the function declaration for sayThanks(). Using name and string concatenation, change the thank you message into the following:
// 'Thank you for your purchase '+ name + '! We appreciate your business.'
// Call sayThanks() and pass 'Cole' as an argument to send Cole a personalized thank you message.

function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
  }
  sayThanks('Cole')

//   Change the parameters of makeShoppingList() into default parameters :

// Assign ‘milk’ as the default value of item1.
// Assign ‘bread’ as the default value of item2.
// Assign ‘eggs’ as the default value of item3.

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

//   Declare a function monitorCount() that has two parameters. The first parameter is rows and the second parameter is columns.
// Let’s compute the number of monitors by multiplying rows and columns and then returning the value.
// Declare a variable named numOfMonitors using the const keyword and assign numOfMonitors the value of invoking monitorCount() with the arguments 5 and 4

function monitorCount(rows, columns) {
    return rows * columns;
  }
  const numOfMonitors = monitorCount(5, 4);
  console.log(numOfMonitors)