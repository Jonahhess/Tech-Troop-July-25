// Leap Year Calculator.
// Create a variable for a year and
// determine if it's a leap year using conditional statements.
// A year is a leap year if:

// 1. It's divisible by 4 AND
// 2. If it's divisible by 100, then it must also be divisible by 400

let year = 2024;
// Your conditional code here
// Examples: 2024 = leap, 1900 = not leap, 2000 = leap, 2023 = not leap

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

const years = [2024, 1900, 2000, 2023];

for (const year of years) {
  console.log(isLeapYear(year));
}
