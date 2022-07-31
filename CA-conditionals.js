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

// Let’s create an if...else statement that checks if mood is 'sleepy' and tirednessLevel is greater than 8.
// If both conditions evaluate to true, then console.log() the string 'time to sleep'. Otherwise, we should console.log() 'not bed time yet'.

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet')
}

// Change the value of wordCount so that it is truthy. This value should still be a number.
// Change the value of favoritePhrase so that it is still a string but falsy.

let wordCount = 5;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Assign to writingUtensil the value of tool and if tool is falsy, assign a default value of 'pen'.

let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';
// What if we reassign the value of tool to 'marker'. Let’s see what happens to the value of writingUtensil.

console.log(`The ${writingUtensil} is mightier than the sword.`);


// Refactor, or edit, the first if...else block to use a ternary operator.
// Refactor the second if...else block to use a ternary operator.
// Refactor the second if...else block to use a ternary operator.

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') 
: console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') 
: console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!')
: console.log("I don't love that!");

// Let’s add an else if statement that checks if season is equal to 'winter'.
// Add another else if statement that checks if season is equal to 'fall'
// Add a final else if statement that checks if season is equal to 'summer'

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

// Let’s write a switch statement to decide what medal to award an athlete.
// The first case checks for the value 'first place'. The second case checks for the value 'second place'. The third case checks for the value 'third place'.
// Now, add a default statement at the end of the switch that uses console.log() to print 'No medal awarded.'.

let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
  console.log('You get the gold medal!');
  break;
  case 'second place':
  console.log('You get the silver medal!');
  break;
  case 'third place':
  console.log('You get the bronze medal!');
  break;
  default:
  console.log('No medal awarded.');
  break;
}



// In this project we will build a Magic Eight Ball using control flow in JavaScript.
// The user will be able to input a question, then our program will output a random fortune.

let userName = 'Nico';
if (userName) {
  console.log(`Hello, ${userName}!`);
} else {
  console.log('Hello!');
}
const userQuestion = 'Will I become rich?';
console.log(`${userName} asked, ${userQuestion}`);
var randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  break;
  case 6:
  eightBall = 'Outlook not so good';
  break;
  default:
  eightBall = 'Signs point to yes';
  break;
}
console.log(eightBall);