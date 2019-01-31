// Write a function that returns a function that calculates a decimal value of the given octal number.
// Input: 034
// Output: 28

var getOctalToDecimalConverter = function() {
  function isOctalNumber(number) {
    return number[0] === "0";
  }

  function convert(number) {
    var decimal = 0;

    for (var i = number.length - 1; i >= 1; i--) {
      decimal += 8 ** (number.length - 1 - i) * parseInt(number[i]);
    }

    return decimal;
  }

  return function(value) {
    if (!isOctalNumber(value)) {
      return 0;
    }

    return convert(value);
  };
};

var octalToDecimalConverter = getOctalToDecimalConverter();
var decimalValue = octalToDecimalConverter("034");

console.log("\nDecimal value: ", decimalValue);
