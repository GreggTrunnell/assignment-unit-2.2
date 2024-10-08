// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct.
// Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// DESCRIBE the code as it would be run, then let us know what the OUTCOME of the
// console.log statement will be.


// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. If it is,
// 'yes' will be console.logged.
// OUTCOME:
// 'yes' is what is logged.

// CODE:
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// 1.
// DESCRIPTION
// We make a variable called name and set it to 'Dane' as a string.
// We check if name is equal to Mary and is a string. If so 'Hi, Mary' will be console.logged.
// If name is not equal to Mary 'How do you do?' will be console.logged.
//
//
//
//
// OUTCOME:
// 'How do you do?' will be logged.

// CODE:
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 2.
// DESCRIPTION:
// We make a variable called secret with no value. We make another variable called code and assign 123 as a number.
// If code is equal to 123, and code times 2 is less then 250 secret will log 'super' to the console. 
// If code is greater then 250 'duper' will be assigned to the secret and 'duper' will be console logged.
// OUTCOME:
// 'super' will be logged to the console.

// CODE:
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 3.
// DESCRIPTION
// We have a variable isStudent and assigned boolean true. A variable named age with number value 34,
// and a variable zip with number value 55407. If the value of isStudent is true and zip is greater then 80000. 
// 'You're a student on the West Coast will be logged.  If isStudent is false or age is less then 30. 'What are your
// hobbies?' will be logged. If isStudent is true and zip is less then 80000. 'Welcome to Prime!' will be logged.  
// 'How about the weather?' will only run if you change the data type of isStudent.
//OUTCOME:'Welcome to Prime!' will be logged to the console.
//

// CODE:
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

// CODE:
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 4. 
// DESCRIPTION:
// We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

FIX-Both colorOne and colorTwo need to be redefined to get the desired outcome.
CODE:
if (mix === true) {
colorOne = 'purple';
colorTwo = 'purple';
}

if (mix === true) {
  colorOne = 'purple';
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 5.
// DESCRIPTION:
// We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

FIX-We need to check if both conditions are true with "&&". Not either/or "||".
CODE: (temp > 39 && time >=4)

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}

*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 6.
// DESCRIPTION:
// We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

FIX-I found two ways to get desired outcome. One way is to swap the strings. Another way is to change the comparison operator.
CODE: if(minAge > age)

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}

*/
