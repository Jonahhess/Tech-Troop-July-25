let a = 3;
let c = 0;
let b = a;
b = a;
c = a;
b = c;
a = b;

console.log(`a=${a} b=${b} c=${c} and they all equal 3`);

// a = 3, b = 3, c = 3
