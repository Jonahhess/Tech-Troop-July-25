const mathOperations = function () {
  const add = function (x, y) {
    return x + y;
  };

  const subtract = function (x, y) {
    return x - y;
  };

  const multiply = function (x, y) {
    return x * y;
  };

  const divide = function (x, y) {
    return x / y;
  };

  const PI = 3.14159;

  return {
    add,
    sub: subtract,
    mult: multiply,
    div: divide,
    PI,
  };
};

const math = mathOperations();
console.log(math.add(13, 29));
console.log(math.mult(1.75, 24));
console.log(math.mult(7, math.div(36, 6)));

function circumference(pi, r) {
  return pi * r * r;
}

console.log(circumference(math.PI, 4));
