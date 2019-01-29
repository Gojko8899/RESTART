// The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters).
// Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// Starvation: less than 15
// Anorexic: less than 17.5
// Underweight: less than 18.5
// Ideal: greater than or equal to 18.5 but less than 25
// Overweight: greater than or equal to 25 but less than 30
// Obese: greater than or equal to 30 but less than 40
// Morbidly obese: greater than or equal to 40

function bodyMassIndex(weigth, height) {
  let bmi;
  let newBmi;

  bmi = weigth / (height * height).toFixed(2);
  newBmi = bmi.toFixed(1);
  console.log(newBmi);

  if (bmi < 15) {
    console.log(newBmi + " :" + "You are starving");
  } else if (newBmi > 15 && newBmi <= 17.5) {
    console.log(newBmi + " :" + "You are anorecsic");
  } else if (newBmi > 17.5 && newBmi < 18.5) {
    console.log(newBmi + " :" + "You are underweight");
  } else if (newBmi >= 18.5 && newBmi < 25) {
    console.log(newBmi + " :" + "You are perfect");
  } else if (newBmi >= 25 && newBmi < 30) {
    console.log(newBmi + " :" + "You are overweight");
  } else if (newBmi >= 30 && newBmi < 40) {
    console.log(newBmi + " :" + "You are too fat");
  } else {
    console.log(newBmi + " :" + "Tenk");
  }
}
console.log(bodyMassIndex(84, 1.85));
