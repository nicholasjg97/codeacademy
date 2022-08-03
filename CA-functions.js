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