// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(length, characters) {
  // randomly select from list of allowable characters up to a limit.
  // get length from user input between (and including) 8 and 128, defaulting to 8
  length = length || 8;

  // get selections from lowercase, uppercase, numeric, and/or special characters, defaulting to all types
  characters = characters || { lower: true, upper: true, numbers: true, special: true };
  
  // password output string to be returned
  let output = ""

  // concatenate the string of optional characters from user input
  let options = "";
  if (characters.lower) {
    options += lower;
  }
  if (characters.upper) {
    options += upper;
  }
  if (characters.numbers) {
    options += numbers;
  }
  if (characters.special) {
    options += special;
  }

  // build up the password based on the user's selected length
  for (var i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * options.length);

    output += options[randomIndex];
  }
  
  // TODO: recurse until this meets all of the user's character selections

  return output;
}

// TODO: Validate options selected on page (and style appropriately if not)

// TODO: Validate password meets options

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// TODO: Add validation event listener to form