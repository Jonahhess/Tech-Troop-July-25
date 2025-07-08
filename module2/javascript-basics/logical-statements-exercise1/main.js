// determine if the following are truthy or falsey

//  (5 > 2) && false
// !("knife" === "sword")
// (1 < 2) || (-1 > -1) || !false
// ""
// (31 % 5) == "1"
// !!true
// "5th Avenue" != "5th Avenue"
// 52 !== "52"
// (undefined || null)

const f1 = 5 > 2 && false;
const t1 = !("knife" === "sword");
const t2 = 1 < 2 || -1 > -1 || !false;
const f2 = "";
const t3 = 31 % 5 == "1";
const t4 = !!true;
const f3 = "5th Avenue" != "5th Avenue";
const t5 = 52 !== "52";
const f4 = undefined || null;

console.log(`these are false: ${!(f1 || f2 || f3 || f4)}`);
console.log(`these are true: ${!!(t1 && t2 && t3 && t4 && t5)}`);
