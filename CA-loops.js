// Create the variable vacationSpots, and assign its value to an array of three strings naming places you’d like to visit.
// Next, console.log() each item in vacationSpots. Since we don’t know loops yet, we have to console.log() each element in the array separately.

// Write your code below
var vacationSpots = ['Houston', 'New York', 'Miami;']
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);


// Create a program that loops from 5 to 10 and logs each number to the console.

for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
  }


  Make a for loop that loops backwards printing 3 to 0 to the console. Use the >= comparison operator in your stopping condition and the -- operator in your iteration statement.

  for (let counter = 3; counter >= 0; counter--) {
    console.log(counter)
  }


//   Write a for loop that iterates through our vacationSpots array using i as the iterator variable.
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}


// Imagine you’re a big-wig programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program. You’ll need two arrays of “friends” from two mock users so that you can extract the names of the followers who exist in both lists. Make a variable called bobsFollowers and set it equal to an array with four strings representing the names of Bob’s friends.
// Make a variable called tinasFollowers and set it equal to an array with three strings representing the names of Tina’s friends. Make exactly two of these the same as two of the friends in the bobsFollowers array.
// Create a third variable named mutualFollowers and set it to an empty array.
// Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.

var bobsFollowers = ['Joe', 'Jim', 'Johnny', 'Jason'];
var tinasFollowers = ['Maria', 'Jim', 'Joe'];
var mutualFollowers = []
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let i = 0; i < tinasFollowers.length; i++) {
    if (bobsFollowers[i] === tinasFollowers) {
      mutualFollowers.push(tinasFollowers[i]);
    }
  }
}


// Below the cards array, declare a variable, currentCard, with the let keyword but don’t assign it a value.
// Create a while loop with a condition that checks if the currentCard does not have that value 'spade'.
// Inside the block of your while loop, add the following line of code:
// currentCard = cards[Math.floor(Math.random() * 4)];
// Let’s add a console.log() statement to our while block. Inside the block, after you assign currentCard a new value, log currentCard to the console.

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}


// Create the variable cupsOfSugarNeeded, and assign it a number value of your choosing.
// The cups of sugar must be added to the batter one at a time. Declare the variable cupsAdded and assign it the value 0.
// Create a do...while loop which increments cupsAdded by one while cupsAdded is less than cupsOfSugarNeeded.

var cupsOfSugarNeeded = 7;
var cupsAdded = 0;
do {
  console.log(cupsAdded);
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);


// Log each element from rapperArray in a for loop with the iterator variable i.
// After the for loop, log the string "And if you don't know, now you know." to the console.
// Add a break inside your loop’s block that breaks out of the loop if the element at the current index in the rapperArray is 'Notorious B.I.G.'.

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.') {
    break;
  }
}
console.log("And if you don't know, now you know.");