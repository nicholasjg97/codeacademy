// Using the let keyword, declare a variable named sale. Assign the value true to it.
// Now create an if statement. Provide the if statement a condition of sale.
// Inside the code block of the if statement, console.log() the string 'Time to buy!'.
// Below the sale variable declaration, but before the if statement, reassign sale to false. Run your code and observe what happens, we’ll be changing this behavior in the next exercise.

let sale = true;
sale = false;
if (sale) {
  console.log('Time to buy!')
}

// Add an else statement to the existing if statement. Inside the code block of the else statement, console.log() the string 'Time to wait for a sale.'

if (sale) {
    console.log('Time to buy!');
  } else {
    console.log('Time to wait for a sale.');
  }

// Using let, create a variable named hungerLevel and set it equal to 7.
// Write an if...else statement using a comparison operator. The condition should check if hungerLevel is greater than 7. If so, the conditional statement should log, 'Time to eat!'. Otherwise, it should log 'We can eat later!'.

let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log('Time to eat!')
} else {
  console.log('We can eat later!');
}