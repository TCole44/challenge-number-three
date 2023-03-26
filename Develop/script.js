// Assignment Code
var charLength = 8;
var capLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specChars = ["~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","[","}","]",";",":",",","<",".",">","?",];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var chosenChars = [];

var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var completedPrompts = passwordPrompts();
  var passwordText = document.querySelector("#password");

  if (completedPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  } 
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < charLength; i++) {
    var randomChar = Math.floor(Math.random() * chosenChars.length);
    password = password + chosenChars[randomChar];
  }
  return password;
}

function passwordPrompts() {
  chosenChars = [];

  charLength = parseInt(prompt("How many Characters would you like to include? (Between 8 and 128 Characters!!!)"));
  
  if ((isNaN(charLength)) || charLength < 8 || charLength > 128) {
    alert("Input for password length MUST be between 8 and 128!!! Please try again.")
    return false;
  }

  if (confirm("Would you like to include lowercase letters?")) {
    chosenChars = chosenChars.concat(lowLetters);
  }

  if (confirm("Would you like to include uppercase letters?")) {
    chosenChars = chosenChars.concat(capLetters);
  }

  if (confirm("Would you like to include special characters?")) {
    chosenChars = chosenChars.concat(specChars);
  }

  if (confirm("Would you like to include numbers?")) {
    chosenChars = chosenChars.concat(numbers);
    
  return true
  }
}

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
