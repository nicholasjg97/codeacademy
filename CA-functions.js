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

//   Below monitorCount Create a function declaration named costOfMonitors that has two parameters, the first parameter is rows and the second parameter is columns.
// Add a return statement that returns the value of calling monitorCount(rows, columns) multiplied by 200.
// Declare a variable named totalCost using the const keyword. Assign to totalCost the value of calling costOfMonitors() with the arguments 5 and 4 respectively.

function costOfMonitors (rows, columns) {
    return monitorCount(rows, columns) * 200;
  }
  const totalCost = costOfMonitors(5, 4);
  console.log(totalCost)


//   Create a variable named plantNeedsWater using the const variable keyword.
// Assign an anonymous function that takes in a parameter of day to plantNeedsWater.
// In the function body add an if conditional that checks day === 'Wednesday'. If the conditional is truthy, inside the if code block, use the return keyword to return true.
// Add an else statement after the if statement. Inside the else statement use the return keyword to return false.
// Call the plantNeedsWater() and pass in 'Tuesday' as an argument.

const plantNeedsWater = function (day) {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  }
  
  plantNeedsWater('Tuesday')
  console.log(plantNeedsWater('Tuesday')
  )

//   Change plantNeedsWater() to use arrow function syntax.

// const plantNeedsWater = (day) => {
//     if (day === 'Wednesday') {
//       return true;
//     } else {
//       return false;
//     }
//   };
  