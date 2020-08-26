// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSet = {
 letters:'abcdefghijklmnopqrstuvwxyz'.split(''),
 UpperCase: letters.UpperCase(),
 Lower: letters.toLowerCase(),
 symbols: '#$%^&*()!@{}+=|\<>~`'.split(''),
 numbers: [0,1,2,3,4,5,6,7,8,9],
}

// Write password to the #password input
function writePassword() {
  var LengthQ = prompt("How long do you want your password to be between 8 and 128?");
  alert(LengthQ);
  var numberQ = confirm("Do you want numbers in your password?");
  alert(numberQ);
  var UpperQ = confirm("Do you want Uppercase in your password?");
  alert(UpperQ);
  var LowerQ = confirm("Do you want Lowercase in your password?");
  alert(LowerQ);
  var symbolQ = confirm("Do you want Symbols in your password?");
  alert(symbolQ);
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword(){
  var result = " ";
  
  if(LengthQ < 8 || Length > 128){
   alert("invalid length input");
    return null;
  }else{
    console.log(LengthQ);
    return LengthQ;
  }
  if(numberQ==true){
    result+= result.concat(charSet.numbers);
    console.log(result)
  }  
  if(UpperQ==true){
    result+= result.concat(charSet.UpperCase);
    console.log(result)
  }
  
  if(LowerQ==true){
    result+= result.concat(charSet.Lower);
    console.log(result)
  }
 
  if(symbolQ==true){
    result+= result.concat(charSet.symbols);
    console.log(result)
  }
  let password = '';
  var len = result.length
  for(var i=0; i=LengthQ;i++){
    password+=result[Math.floor(Math.random()*len)];
  }
  return password;
  
  
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
