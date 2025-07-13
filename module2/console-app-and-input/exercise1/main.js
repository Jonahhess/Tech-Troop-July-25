// simple calculator from input
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => (!!b ? a / b : 0);

const ops = new Map([
  ["+", add],
  ["-", sub],
  ["*", mult],
  ["/", div],
]);

const [, , input1, input2, input3] = process.argv;

const num1 = Number.parseInt(input1);
let op = input2;
const num2 = Number.parseInt(input3);

if (op === "main.js") {
  op = "*";
}

// invalid input
if (Number.isNaN(num1) || Number.isNaN(num2) || !ops.has(op)) {
  throw "invalid input";
}

// divide by zero
if (input2 === "/" && num2 === 0) {
  throw "divide by zero error";
}

console.log(ops.get(op)(num1, num2));
