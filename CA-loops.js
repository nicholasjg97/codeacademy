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

'Jason'];
var tinasFollowers = ['Maria', 'Jim', 'Joe'];
var mutualFollowers = []
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let i = 0; i < tinasFollowers.length; i++) {
    if (bobsFollowers[i] === tinasFollowers) {
      mutualFollowers.push(tinasFollowers[i]);
    }
  }
}