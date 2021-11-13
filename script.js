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
  
  // ask for length
  var length;
  do {
    let answer = window.prompt("Choose a length for your password (between 8 and 128 characters long)");
    // it's possible the user cancels out of the prompt--we should let them.
    if (answer === null) {
      break;
    }
    length = parseInt(answer);
  } while (!length || length < 8 || length > 128)
  
  if (!length) {
    return;
  }

  // ask for each character type (must include at least one)
  var characters = {};

  do {
    characters.lower = window.confirm("Include lowercase letters?");
    characters.upper = window.confirm("Include uppercase letters?");
    characters.numbers = window.confirm("Include numbers?");
    characters.special = window.confirm("Include special characters?");
    
    if (!characters.lower && !characters.upper && !characters.numbers && !characters.special) {
      alert("You must select one character type (lowercase, uppercase, numbers, or specials)");
    }

  } while (!characters.lower && !characters.upper && !characters.numbers && !characters.special)
  
  var password = generatePassword(length, characters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// TODO: Add validation event listener to form

// TODO: Click textarea id password to copy contents to clipboard