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

    // Get password length and validate
    let lengthChoice = prompt("How long do you want your password to be? (From 8-128 characters)");
    while (lengthChoice > 128 || lengthChoice < 8 || isNaN(lengthChoice)) {
      lengthChoice = prompt("Invalid choice. Please choose a number from 8-128 characters");
    }

    // Get character choices
    let upperChoice = confirm("Click OK if you want to include uppercase characters");
    let lowerChoice = confirm("Click OK if you want to include lowercase characters");
    let numericChoice = confirm("Click OK if you want to include numeric characters");
    let specialChoice = confirm("And lastly, click OK if you want to include special characters")

    // Store character choices
    let userChoices = {
      length: lengthChoice,
      uppercase: upperChoice,
      lowercase: lowerChoice,
      numeric: numericChoice,
      special: specialChoice,
    }

    return userChoices;
  
  }

// let userChoices = getPasswordOptions();
// console.log(userChoices); 






  // Function for getting a random element from an array
  function getRandom(arr) {
    let arrIndex = Math.floor(Math.random() * arr.length);
    console.log(arrIndex);
    return arr[arrIndex];
  }
  
let specialIndex = getRandom(specialCharacters);
console.log(specialIndex);

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
  
// }

  // Function to generate password with user input
  function generatePassword() {
  
  }
  
//   // Get references to the #generate element
//   var generateBtn = document.querySelector('#generate');
  
//   // Write password to the #password input
//   function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector('#password');
  
//     passwordText.value = password;
//   }
  
//   // Add event listener to generate button
//   generateBtn.addEventListener('click', writePassword);