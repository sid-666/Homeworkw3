// Assignment Code
var generateBtn = document.querySelector("#generate")

var symbols ='#$%^&*()!@{}+=|\<>~`' 
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
var uppercaseLetters = lowercaseLetters.toUpperCase()
var numbers = '1234567890'

var passwordLength= "", containsNumbers = false, containsUppercase = false, containsSymbols = false

// Write password to the #password input
function writePassword() {
  passwordLength = prompt("How long do you want your password to be between 8 and 128?");
  containsNumbers = confirm("Do you want numbers in your password?");
  containsUppercase = confirm("Do you want Uppercase in your password?");
  containsSymbols = confirm("Do you want Symbols in your password?");
  var password = generatePassword() 
  console.log(password)
  document.querySelector("#password").value =  password;
}

function generatePassword(){
  var result = "";
  if(parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128){
    var charSet = lowercaseLetters;
    if(containsNumbers) charSet += numbers;
    if(containsUppercase) charSet += uppercaseLetters;
    if(containsSymbols) charSet += symbols

    for(var i = 0; i < passwordLength; i++ ) {
        var randomIndex = Math.floor(Math.random() * passwordLength)
        result += charSet[randomIndex]
    }

    return result;
  }
  return ""
  
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);