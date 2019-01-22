//12  Write a function to calculate how many years there are left until retirement based on the year of birth.
// Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.

function retirement(yearOfBirth, sex) {
  let currentYear = 2019;
  let currentAge = currentYear - yearOfBirth;

  let yearsForRetireMan = 65;
  let yearsForRetireWoman = 60;
  let yearsToRetire;
  if (sex == "male") {
    if (currentAge < 18) {
      yearsToRetire = "He is too young to work";
    } else if (currentAge > 65) {
      yearsToRetire = "he is allready retired";
    } else {
      yearsToRetire = yearsForRetireMan - currentAge;
    }
  } else {
    if (currentAge < 18) {
      yearsToRetire = "She is too young to work";
    } else if (currentAge > 60) {
      yearsToRetire = "She is allready retired";
    } else {
      yearsToRetire = yearsForRetireWoman - currentAge;
    }
  }

  return yearsToRetire;
}

console.log(retirement(1966, "female"));
