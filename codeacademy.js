let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// 1. Use the += mathematical assignment operator to increase the value stored in levelUp by 5.
// 2. Use the -= mathematical assignment operator to decrease the value stored in powerLevel by 100.
// 3. Use the *= mathematical assignment operator to multiply the value stored in multiplyMe by 11.
// 4. Use the /= mathematical assignment operator to divide the value stored in quarterMe by 4.

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

let gainedDollar = 3;
let lostDollar = 50;

// 1. Using the increment operator, increase the value of gainedDollar.
// 2. Using the decrement operator, decrease the value of lostDollar.

gainedDollar++;
lostDollar--;

// Create a variable named favoriteAnimal and set it equal to your favorite animal.
// Use console.log() to print 'My favorite animal: ANIMAL' to the console. Use string concatenation so that ANIMAL is replaced with the value in your favoriteAnimal variable.

var favoriteAnimal = "dog";
console.log('My favorite animal:' + favoriteAnimal);

// Create a variable called myName and assign it your name.
// Create a variable called myCity and assign it your favorite city’s name.
// Use a single template literal to interpolate your variables into the sentence below. Use console.log() to print your sentence to the console in the following format:

// My name is NAME. My favorite city is CITY.

var myName = "Nico";
var myCity = 'Houston';
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

// Use console.log() to print the typeof newVariable.
// Great, now let’s check what happens if we reassign the variable. Below the console.log() statement, reassign newVariable to 1.
// Since you assigned this new value to newVariable, it has a new type! On the line below your reassignment, use console.log() to print typeof newVariable again.

let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);