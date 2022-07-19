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

// The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.
// The value saved to kelvin will stay constant. Choose the variable type with this in mind.
// Write a comment above that explains this line of code.
// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
// Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.
// Write a comment above that explains this line of code.
// Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.

// Fahrenheit = Celsius * (9/5) + 32

// In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.
// Write a comment above that explains this line of code.
// When you convert from Celsius to Fahrenheit, you often get a decimal number.
// Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.
// Write a comment above that explains this line of code.
// Use console.log and string interpolation to log the temperature in fahrenheit to the console as follows:
// The temperature is TEMPERATURE degrees Fahrenheit.
// Use string interpolation to replace TEMPERATURE with the value saved to fahrenheit.
// By using variables, your program should work for any Kelvin temperature — just change the value of kelvin and run the program again.
// What’s 0 Kelvin in Fahrenheit?
// If you’d like extra practice, try this:

// Convert celsius to the Newton scale using the equation below
// Newton = Celsius * (33/100)

// Round down the Newton temperature using the .floor() method
// Use console.log and string interpolation to log the temperature in newton to the console

// const kelvin = 300;
// kelvin variable willl stay constant
// const celsius = kelvin - 273;
// celcius is 273 less than kelvin
// let fahrenheit = celsius * (9/5) + 32;
// stores fahrenheit from celcius
// fahrenheit = Math.floor(fahrenheit);
// rounds the decimal point
// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
// let newton = celsius * (33 / 100);
// newton = Math.floor(newton);
// console.log(`The temperature is ${newton} degrees Newton.`)

/* 
    Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

    Here’s how you convert your age from “human years” to “dog years”:

    The first two years of a dog’s life count as 10.5 dog years each.
    Each year following equates to 4 dog years.
*/

var myAge = 25;
// My age as of today
let earlyYears = 2;
// first 2 years of dog
earlyYears = 2 * 10.5;
// first two years of dogs life
let laterYears = myAge - 2;
// taking two years from age for early years
laterYears = laterYears * 4;