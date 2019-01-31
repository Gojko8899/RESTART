// Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// 	Output: pera.peric@gmail.com

let createEmail = (function(name, surname) {
  let emailAttachment = "@gmail.com";
  let outputEmail = "";
  outputEmail =
    name.toLocaleLowerCase() +
    "." +
    surname.toLocaleLowerCase() +
    emailAttachment;
  return outputEmail;
})("Gojko", "Vilic");

console.log(createEmail);
