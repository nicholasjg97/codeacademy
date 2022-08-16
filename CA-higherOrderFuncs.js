// Using const, declare a shorter-named variable, isTwoPlusTwo that will be easier to work with. Assign checkThatTwoPlusTwoEqualsFourAMillionTimes as its value.
// Invoke your isTwoPlusTwo() function.
// Use isTwoPlusTwo to console.log() the name property of the function we assigned to isTwoPlusTwo.

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name);


// declare two variables: checkA and checkB:
// checkA stores the sum val plus 2.
// checkB stores the invocation of the func callback, with val as the argument.
// write a conditional statement that checks if the value of checkA is equal to the value checkB. If true, return the result of the callback function. If false, return the string 'inconsistent results'.
// Finally, using console.log(), log the invocation of checkConsistentOutput() with two arguments: the addTwo() function and any number.

const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    var checkA = val + 2;
    var checkB = func(val);
    if (checkA === checkB) {
      return func(val)
    } else {
      return 'inconsistent results';
    }
  }
  
  console.log(checkConsistentOutput(addTwo, 8));