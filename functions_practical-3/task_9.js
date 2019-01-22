// Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "myemail...@bgit.rs"

function hideEmail(someEmail) {
  let temp = "...";
  let newEmail = "";
  let newEmail_1 = "";

  for (let i = 0; i < someEmail.length; i++) {
    if (i <= 6) {
      newEmail += someEmail[i];
    }
    if (someEmail[i] == "@") {
      for (let j = i; j < someEmail.length; j++) {
        newEmail_1 += someEmail[j];
      }
    }
  }

  return newEmail + "..." + newEmail_1;
}

console.log(hideEmail("myemailaddress@bgit.rs"));
