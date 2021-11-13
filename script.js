// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(length, characters) {
  // randomly select from list of allowable characters up to a limit.
  
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

// TODO: Validate password meets options

// Prompt user for inputs, then call the generate function and write password to the #password text area
function writePassword() {
  
  // ask for length
  var length;
  do {
    length = parseInt(window.prompt("Choose a length for your password\n(Any number between 8 and 128)", "8"), 10);
  } while (!length || length < 8 || length > 128)

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