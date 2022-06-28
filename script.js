// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specCharacters = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","|","|","]","[","{","}","?","/",".",">",",","<","'",";",":","~","`"];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  


  passwordText.value = password;

}
function generatePassword() {
  var tempPass = ""
  var lengthOfPassword = prompt("How many character would you like in the password?");
  if (lengthOfPassword <8) {
    alert("Password length must be at least 8 characters.");
    return null;
  }
if (lengthOfPassword > 128) {
  alert("Password length must not contain more than 128 characters.");
  return null;
}
 var upperCaseQuestion = confirm("Would you like any uppercase characters in your password?");
 var lowerCaseQuestion = confirm("Would you like any lowercase charcters in your password?");
var numbersQuestion = confirm("Would you like any numbers in your password?");
var specCharactersQuestion = confirm("Would you like any special characters in your password?");

if (upperCaseQuestion == true){
tempPass += upperCase  [Math.floor(Math.random() * upperCase.length)]
}
if (lowerCaseQuestion == true){
  tempPass += lowerCase  [Math.floor(Math.random() * lowerCase.length)]
}
if (numbersQuestion == true){
  tempPass += numbers  [Math.floor(Math.random() * numbers.length)]
}
if (specCharactersQuestion == true){
  tempPass += specCharacters  [Math.floor(Math.random() * specCharacters.length)]
}
for (i=0; i<= lengthOfPassword; i++)if (upperCaseQuestion == true){
 tempPass += upperCase  [Math.floor(Math.random() * upperCase.length)]
 }
 if (lowerCaseQuestion == true){
   tempPass += lowerCase  [Math.floor(Math.random() * lowerCase.length)]
 }
 if (numbersQuestion == true){
   tempPass += numbers  [Math.floor(Math.random() * numbers.length)]
 }
 if (specCharactersQuestion == true){
   tempPass += specCharacters  [Math.floor(Math.random() * specCharacters.length)]
 };
return password = (tempPass)
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
