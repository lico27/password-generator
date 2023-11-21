// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

let passwordChoices = {

}

let lengthChoice = prompt("How long do you want your password to be? (From 8-128 characters)");

if (lengthChoice > 128) {
  alert("Password too long (must be less than 128) - click Generate Password again");
} else if (lengthChoice < 8) {
  alert("Password too long (must be less than 128) - click Generate Password again");
} else {

}

let upperChoice = confirm("Click OK if you want to include uppercase characters");
let lowerChoice = confirm("Click OK if you want to include lowercase characters");
let numericChoice = confirm("Click OK if you want to include numeric characters");
let specialChoice = confirm("And lastly, click OK if you want to include special characters")


// console.log(lengthChoice);
// console.log(upperChoice);
// console.log(lowerChoice);
// console.log(numericChoice);
// console.log(specialChoice);


}

// getPasswordOptions();

// // Function for getting a random element from an array
// function getRandom(arr) {

// }

// // Function to generate password with user input
// function generatePassword() {
//   getPasswordOptions();

// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);