// Declare a variable using const named hobbies and set it equal to an array with three strings inside of it.
// Use console.log() to print hobbies to the console.

const hobbies = ['', '', ''];
console.log(hobbies)


// Create a variable named listItem and set it equal to the first item in the famousSayings array using square bracket notation ([]).
// Now, console.log() the third element in the famousSayings array using bracket notation to access the element.
// Try to log the item at index [3] of famousSayings to the console. What is logged to the console?

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
var listItem = famousSayings[0]
console.log(listItem)
console.log(famousSayings[2]);
console.log(famousSayings[3]);


// Change the second element of the array groceryList to 'avocados'.

let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';


// Below the two existing arrays, re-assign the element in index 0 of condiments to 'Mayo'.
// Below your code from Step 1, reassign condiments to be a new array that contains a single string ['Mayo']
// Below your code from Step 2, re-assign the last item from the utensils array to 'Spoon'.

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);
utensils[3] = 'Spoon';
console.log(utensils);


// Find the length of the objectives array and log it to the console.

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);


// Add two elements to the chores array using .push().
// Use console.log to print your chores array to make sure your items were added.

const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('', '');
console.log(chores)


// Use the .pop() method to remove the last element from chores.
// In a line after you called chores.pop(), log chores to the console to make sure it worked.

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores)


// Use the .shift() method to remove the first item from the array groceryList.
// Log the new groceryList to the console.
// Under the code added in step 1, use the .unshift() method to add 'popcorn' to the beginning of your grocery list. After calling .unshift() on groceryList, log groceryList to the console.
// You’re in a hurry so you decide to ask a friend to help you with your grocery shopping. You want him to pick up the 'bananas', 'coffee beans', and 'brown rice'.
// Under the code you added for step 2, use .slice() to provide your friend with a list of these three things.
// Log this part of the list to the console. Unlike the two previous checkpoints, you should do both of these steps in one line.
// Let’s find the index of a particular element in groceryList using .indexOf().
// Call .indexOf() on groceryList to find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex.

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
// console.log(groceryList);
groceryList.unshift('popcorn');
// console.log(groceryList);
console.log(groceryList.slice(1, 4));
console.log(groceryList);
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);


// Underneath the function call, log concept to the console to check if this reassignment mutated the array.
// Under the console.log() statement, define another function named removeElement that takes a parameter of newArr. Inside the function body call .pop() on newArr.
// Call removeElement() with an argument of concept.
// After calling removeElement(concept), check the value of concept by logging it to console.

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);
function removeElement (newArr) {
  newArr.pop();
}
removeElement(concept);
console.log(concept);


// Create a variable numberClusters. Assign as its value an array with three array elements.

// The first array element should hold the elements 1 and 2 in that order.
// The second array element should hold the elements 3 and 4 in that order.
// The third array element should hold the elements 5 and 6 in that order.
// Now declare a variable named target using the const keyword and assign to access the element 6 inside numberClusters.

var numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];