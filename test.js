
  // Function to prompt user for password options
  function getPasswordOptions() {
    Present a series of prompts for password criteria
  Length of password
  At least 8 characters but no more than 128.
  Character types
  Lowercase
  Uppercase
  Numeric
  Special characters ($@%&*, etc)

  we prompt for each of the criteria asking for user input. (prompt return value they typed)
  if they input an invalid number for length, or typeof input is not a number, keep prompting them for the length (can use a while loop)
  use confirm to get if they want lowercase, uppercase, special chars (confirms return boolean)
  store the value of that input inside an object
  add the values of each user response to an object
  passwordCriteria = {
    length: 9 // whatever length the user answered for the prompt
    lowercase: true //
    // same properties and values for all the other criteria
  }
    return object containing the password criteria that the user chose based on the prompts
  }


  // Function for getting a random element from an array
  function getRandom(arr) {
    // get a random number in the range of the arr length to serve as the index of arr
    // return arr[random number] (array at the index of the random number we generated)
  }

  
  // Function to generate password with user input
  function generatePassword() {
  var randomPassword = []
    // initialize array for storing all potential chars that can be in password
    var potentialChars = []
    var requiredChars = []
    // get the password criteria that were returned from the getPasswordOptions()
    // if user chose lowercase, concatenate the lowercase chars array onto potential chars array, pick a random char from the lowercase array and push it to the required characters array
    
    // if user chose uppercase, concatenate the uppercase chars array onto potential chars array, pick a random char from the uppercase array and push it to the required characters array
    // if user chose numeric, concatenate the numeric chars array onto potential chars array, pick a random char from the numeric array and push it to the required characters array
    // if user chose special chars, concatenate the special chars array onto potential chars array
  // at this point, potential chars is a large array of all potential chars that can go into users password
  // at this point, requiredChars will be an array with one of each character type that the user chose
  requiredChars = ['c', 'S', 3]
  // for each num in users password length choice
  // for (let i = 0; i < passwordLength; i++){
    // add random chars from potential chars arr onto out random password string
  // }
  // for however many chars are in requiredChars array, replace char at that index in our random password with the required character
  // join random password array into a string using the .join() method.
    // return our random password
  }
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
  }
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword); (edited) 