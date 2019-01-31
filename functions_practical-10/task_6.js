// Write a function that checks if a given string is valid password.
// The password is valid if it is at least 6 characters long and contains at least one digit.
// The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!

// let successCallback = function() {
//   return "Password is good";
// };

// let errorCallback = function() {
//   return "The password is not good";
// };
// let checkPasword = function(password, success, error) {
//   let result;
//   if (password.length < 6) {
//     result = error();
//   } else {
//     for (let i = 0; i < password.length; i++) {
//       if (isFinite(password[i]) == true) {
//         result = success();
//         break;
//       }
//       result = error();
//     }
//   }
//   return result;
// };
// console.log(checkPasword("pokemonGo7", successCallback, errorCallback));

let checkPasword = function(password, success, error) {
  function isPasswordValid(password) {
    if (password.length < 6) {
      return false;
    }
    for (let checkletter in password) {
      if (IsNumber(password[checkletter])) {
        return true;
      }
    }
    return false;
  }
  function IsNumber(n) {
    return isFinite(n);
  }
  return isPasswordValid(password) ? success() : error();
};

let onSuccess = function() {
  return "the password is good";
};
let onError = function() {
  return "password is not good";
};
console.log(checkPasword("laos56k", onSuccess, onError));
