// Write a function to input temperature in Centigrade and convert to Fahrenheit.

function formCentigradeToFahrenheit(degreesinCelsius) {
  let degresInFahrenheit = 0;
  degresInFahrenheit = (degreesinCelsius * 9) / 5 + 32;
  return degresInFahrenheit;
}
console.log(formCentigradeToFahrenheit(36));
