function transformArray(array, transformation) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray[i] = transformation(array[i]);
  }

  return newArray;
}

function square(n) {
  return n * n;
}

function double(n) {
  return 2 * n;
}

function addOne(n) {
  return n + 1;
}

var a = [1, 2, 3, 4, 5];
var result;

result = transformArray(a, square);
console.log(result);

result = transformArray(a, double);
console.log(result);

result = transformArray(a, addOne);
console.log(result);

result = transformArray([3, 4, 5], function(n) {
  return n + 1;
});
console.log(result);

var global = 123;

var resetGlobal = function() {
  global = arguments[0] || -1;
};

resetGlobal(10);
console.log(global);

resetGlobal(0);
console.log(global);
