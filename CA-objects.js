// Make a new spaceship object named fasterShip with the same color as spaceship but with a Fuel Type equal to 'Turbo Fuel'.

let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
  }

//   Create a variable crewCount and assign the spaceship‘s numCrew property to it.
// Again using the dot operator, create a variable planetArray and assign the spaceship‘s flightPath property to it.

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  var crewCount = spaceship.numCrew;
var planetArray = spaceship.flightPath;

// Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.
// Using bracket notation and the propName variable provided, console.log() the value of the 'Active Mission' property.

/* let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };*/
let propName =  'Active Mission';
var isActive = spaceship['Active Mission'];
console.log(spaceship[propName])

// Reassign the color property of the spaceship object to have a value of 'glorious gold'
// Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object.
// Use the delete operator to remove the 'Secret Mission' property from the spaceship object.

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  spaceship.color = 'glorious gold';
  spaceship.numEngines = 8;
  delete spaceship['Secret Mission'];


// create an alienShip object. It should contain a method .retreat() which will console.log() the retreatMessage.
// Add another method to your object literal. This method, .takeOff(), should console.log() the string 'Spim... Borp... Glix... Blastoff!'.
// Invoke your two methods: first .retreat() then .takeOff().

// let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
let alienShip = {
    retreat () {
     console.log(retreatMessage); 
    },
    takeOff () {
      console.log('Spim... Borp... Glix... Blastoff!')
    }
  }
  alienShip.retreat();
  alienShip.takeOff();


//   Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it.
//   Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent the spaceship‘s passengers as individual objects. Make at least one passenger object in the array that has at least one key-value pair on it.
// Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made).

let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  let capFave = spaceship.crew.captain['favorite foods'][0]
  spaceship.passengers = [{name: 'Donkey'}];
  let firstPassenger = spaceship.passengers[0];


//   Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.
// Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object’s disabled property to true.
// Call your two functions with the spaceship object in the code editor, then console.log() the spaceship object to confirm those properties were changed/added.

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  }
  let remotelyDisable = obj => {
    obj.disabled = true;
  }
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  console.log(spaceship);


//   Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew roles and names in the following format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.
// Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew names and degrees in the following format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let crewRole in spaceship.crew) {
  console.log(`${crewRole}: ${spaceship.crew[crewRole].name}`)
}
for (let memberName in spaceship.crew) {
  console.log(`${spaceship.crew[memberName].name}: ${spaceship.crew[memberName].degree}`)
}