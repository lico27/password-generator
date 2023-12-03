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
    let pwLengthChoice = prompt("How long do you want your password to be? (From 8-128 characters)");
    while (pwLengthChoice > 128 || pwLengthChoice < 8 || isNaN(pwLengthChoice)) {
      pwLengthChoice = prompt("Invalid choice. Please choose a number from 8-128 characters");
    }

    // Get character choices
    let upperChoice = confirm("Click OK if you want to include uppercase characters");
    let lowerChoice = confirm("Click OK if you want to include lowercase characters");
    let numericChoice = confirm("Click OK if you want to include numeric characters");
    let specialChoice = confirm("And lastly, click OK if you want to include special characters")

    // Store character choices
    let userChoices = [
    parseInt(pwLengthChoice),
      upperChoice,
      lowerChoice,
      numericChoice,
      specialChoice,
    ]

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
  


// let specialIndex = getRandom(specialCharacters);
// console.log(specialIndex);




  // Function to generate password with user input
  function generatePassword() {
    let characterOptions = [];
    let requiredCharacters =[];
     
    if (userChoices[1] === true) {
      characterOptions = characterOptions.concat(upperCasedCharacters);
    }
    if (userChoices[2] === true) {
      characterOptions = characterOptions.concat(lowerCasedCharacters);
    }
    if (userChoices[3] === true) {
      characterOptions = characterOptions.concat(numericCharacters);
    }
    if (userChoices[4] === true) {
      characterOptions = characterOptions.concat(specialCharacters); 
    }
    console.log(characterOptions);
  }
  
generatePassword();

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