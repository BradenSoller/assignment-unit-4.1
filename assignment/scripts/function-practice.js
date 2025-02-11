console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name){
  return `Hello ${name}!`
}
// Remember to call the function to test
console.log(helloName('braden'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {


  return firstNumber + secondNumber;
  
}

console.log(addNumbers(3,4));
// 4. Function to multiply three numbers & return the result
function multiplyThree(firstnumber, secondnumber, thirdnumber) {
return firstnumber * secondnumber * thirdnumber;
}
console.log(multiplyThree(3,6,9));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
} else (number < 0) 
  return false; 
  
}

// Call the function to test each outcome (true & false) 
console.log(isPositive(-3));
console.log(isPositive(-5));

// Write a separate console.log statement for each outcome
console.log('if number is positive it will remain',isPositive(4));
console.log('if number is negative it will remain ',isPositive(-3));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let array = [7,6,8,9,10];

function getLast(array) {
    if (array.length === 0){
      return undefined;
    }   else {
          return array[array.length-1]; 
        }
}
  

console.log(getLast(array));
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

let value = 9;

function find(array, value){
  for (i = 0; i < array.length; i++)
      if (array[i] === value ) {
          return true;
   
      }
          return false; 
}

console.log(find(array, 9));


  
  
  
  
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function find(value, array) {
  for (let i = 0; i < array.length; i++)
  if (array[i] === value){
    return true;
  } {
    return false;
  }
  
  }
  
  console.log(find(array, value));
// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;

  for (i=0; i < array.length; i++ )
      if (array[i] > 0){
        sum+=array[i]
      }
         return sum;
  }


  // TODO: loop to add items

  // TODO: return the sum

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.


let myarray = [5,8,2,9,4,0,-3];
let empty=  [];


function allPositive(myarray){
  let positivearray = [];
  for (let positive of myarray)
  if(positive > 0){
  positivearray.push(positive)
  }
  return positivearray;
}
let positivenumbers =  allPositive(myarray)
console.log(positivenumbers);
 


function allNegative(myarray){
  let negativearray = [];
  for (let negative of myarray)
  if(negative < 0){
    negativearray.push(negative);
  }
return negativearray; 
}
let negativenumbers = allNegative(myarray)
console.log(negativenumbers);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
