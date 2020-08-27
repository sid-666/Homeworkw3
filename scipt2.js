// Assignment Code
var generateBtn = document.querySelector("#generate")
// Defined charcter variables that will be used in developing the random passwords
var symbols ='#$%^&*()!@{}+=|\<>~`' 
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
var uppercaseLetters = lowercaseLetters.toUpperCase()
var numbers = '1234567890'

var passwordLength= "", containsNumbers = false, containsUppercase = false, containsSymbols = false

// Write password to the #password input
function writePassword() {
  passwordLength = prompt("How long do you want your password to be between 8 and 128?"); // prompts that will pop up when button clicked (EventListener)
  containsNumbers = confirm("Do you want numbers in your password?");
  containsUppercase = confirm("Do you want Uppercase in your password?");
  containsSymbols = confirm("Do you want Symbols in your password?");
  var password = generatePassword() 
  console.log(password)
  document.querySelector("#password").value =  password;
}

function generatePassword(){
  var result = "";
  if(parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128){ // Everything below will only occur if the password length is defined properly
    var charSet = lowercaseLetters; //lowercaseLetters is set as a default characteristic in password
    if(containsNumbers) charSet += numbers;// if prompt is true then numbers string will concat with charSet which is the base
    if(containsUppercase) charSet += uppercaseLetters;// if prompt is true then uppercaseLetters string will concat with charSet which is the base
    if(containsSymbols) charSet += symbols;// if prompt is true then symbols string will concat with charSet which is the base

    for(var i = 0; i < passwordLength; i++ ) {
        var randomIndex = Math.floor(Math.random() * charSet.length)
        result += charSet[randomIndex]
    } // Loop to get random chracters from variable charSet

    return result;
  }
  return ""
  
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);