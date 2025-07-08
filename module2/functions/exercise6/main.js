const isArmstrongNumber = function (number) {
  return (
    number ===
    String(number)
      .split("")
      .map((digit) => parseInt(digit))
      .reduce((res, digit) => res + digit ** String(number).length)
  );
};

for (let i = 100; i < 1000; i++) {
  if (isArmstrongNumber(i)) {
    console.log(i);
  }
}
