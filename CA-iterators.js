// Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango.

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(fruit => console.log('I want to eat a ' + fruit));


// Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.
// Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(letter => letter[0]);

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(number => number / 100);


// Call the .filter() method on randomNumbers to return values that are less than 250. Save them to a new array called smallNumbers, declared with const.
// Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. Save the returned array to a const variable named longFavoriteWords.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(num => num < 250);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(word => word.length > 7);


// Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.
// Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
})
const startsWithS = animals.findIndex(letter => {
  return letter[0] === 's';
})


// To start, declare a new variable named newSum using the const keyword. Assign to newSum the value of calling .reduce() on newNumbers. You don’t need to provide any arguments to .reduce() yet.
// Provide .reduce with an argument of a callback function. The callback function has two parameters. The first parameter is accumulator and the second parameter is currentValue.
// To check the value being used as we iterate through the array, add three statements to the function body of the callback:

// console.log('The value of accumulator: ', accumulator);
// console.log('The value of currentValue: ', currentValue);
// a return statement that adds accumulator to currentValue.
// Log the value of newSum to the console to see the return value of calling .reduce() on newNumbers.
// Add a second argument of 10 to .reduce().

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator + currentValue;
console.log(newSum);
}, 10)


// The first thing we want to do is check if there are words that are fewer than 6 characters long. There is something missing in the words.some() method call. Fix this method so that true is printed to the console.
// Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.
// Complete the code between the parentheses to check if every element has more than 5 characters.

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => {
  return word.length < 6;
}));

const interestingWords = words.filter(word => word.length > 5);

console.log(interestingWords.every((word) => {
  return word.length > 5} ));


// Replace the word method in the first method call with a method that will do something to each of the values in the array and return undefined.
// In the second method call, replace the word method with a method that will return a new array with only those elements longer than 7 characters.
// In the third method call, replace the word method with a method that accepts an array containing multiple values and returns a single value.
// In the fourth method call, replace the word method with a method that will return a new array of numbers returned from the function.
// In the fifth method call, replace the word method with a method that will return a boolean value.

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

cities.forEach(city => console.log('Have you visited ' + city + '?'));

const longCities = cities.filter(city => city.length > 7);

const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

const smallerNums = nums.map(num => num - 5);

nums.every(num => num < 0);