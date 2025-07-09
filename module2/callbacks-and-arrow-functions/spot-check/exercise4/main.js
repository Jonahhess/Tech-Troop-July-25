const square = (number) => number ** 2;
console.log(square(4));

// currying ftw
const pow = (factor) => (number) => number ** factor;
const pow2 = pow(2);
console.log(pow2(4));
