// Assignment code here
//prompt for password length
var plength =prompt("What length would you like your password to be? Please pick from 8-128.")

if (plength < 8 || > 128) {
  alert("Length must be 8-128 characters!")
}
if (plength >=8 && plength <=128) {
  var cuppercase = confirm("Would you like to use upper case letters?")
  var clowercase = confirm("Would you like to use lower case letters?")
  var cnumbers = confirm("Would you like to use numbers?")
  var csymbols = confirm("Would you like to use special characters?")
}

if (cuppercase != true && clowercase != true && cnumbers != true && csymbols != true){
  alert("You must select at least one character type!")
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
