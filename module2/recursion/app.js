/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function (num) {
  if (num < 2) {
    return 1;
  }
  return num * findFactorial(num - 1);
};

//Exercise 2
const reverseString = function (string) {
  if (!string.length) {
    return "";
  }
  return string.slice(-1) + reverseString(string.slice(0, -1));
};

//Exercise 3
const swap = function (arr1, arr2) {
  if (!arr1.length) {
    return;
  }
  arr2.push(arr1.pop());
  return swap(arr1, arr2);
};

console.log(findFactorial(8));
console.log(reverseString("hello world!"));

const arr1 = [1, 2, 3];
const arr2 = [];
swap(arr1, arr2);
console.log(arr1); //[]
console.log(arr2); //[1, 2, 3]

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap };
