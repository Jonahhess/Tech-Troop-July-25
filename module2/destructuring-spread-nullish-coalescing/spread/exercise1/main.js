// let meatArr = ["beef", "chicken", "rabbit"];
// let vegetableArr = ["carrots", "potatoes", "lettuce"];

let meatArr = ["beef", "chicken"];
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"];

meatArr = [...meatArr, vegetableArr[0]];
[, ...vegetableArr] = vegetableArr;

console.log(meatArr);
console.log(vegetableArr);
