//  declare a const variable, named city set equal to 'New York City'.
// Below the city variable, write a function named logCitySkyline.
// Inside of the function body of logCitySkyline(), write another variable using let named skyscraper and set it equal to 'Empire State Building'.
// Inside the function, include a return statement like this:

// return 'The stars over the ' + skyscraper + ' in ' + city;

// Beneath the logCitySkyline() function, use console.log() to log the value of logCitySkyline() to the console.

const city = 'New York City';
function logCitySkyline () {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline(city));



// write three global variables:
// Name the first variable satellite and set it equal to 'The Moon'.
// Name the second variable galaxy and set it equal to 'The Milky Way'.
// Name the third variable stars and set it equal to 'North Star'.
// Below the variables created in the previous step, write a function named callMyNightSky. Inside the function, include a return statement like this:

// return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;

// Beneath the callMyNightSky() function, use console.log() to log the value of callMyNightSky() to the console.

var satellite = 'The Moon';
var galaxy = 'The Milky Way';
var stars = 'North Star';
function callMyNightSky () {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky())

// define a function logVisibleLightWaves(). Within the logVisibleLightWaves() function, using const, create a variable lightWaves and set it equal to 'Moonlight'.
// add a console.log() statement that will log the value of the lightWaves variable when the function runs.
// Call the logVisibleLightWaves() function from outside the function.
// Beneath the function call, log the value of lightWaves to the console from outside the function.

function logVisibleLightWaves() {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
  }
  logVisibleLightWaves();
  console.log(lightWaves);


//   Inside the callMyNightSky() function, on the very first line of the function body, assign the variable stars to 'Sirius' as such:
// stars = 'Sirius';
// Outside the function, under the current console.log() statement, add another console.log() statement to log stars to the console.

  const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars)


// Inside the function body of logVisibleLightWaves(), beneath the region variable and before the provided console.log() statement, create an if statement that checks if the region is the 'The Arctic'.
// Inside the if block, define a new let variable lightWaves and set it equal to 'Northern Lights'.
// Beneath the variable in the if block, use console.log() to log the value of the block variable inside the if block.

const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    }
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();