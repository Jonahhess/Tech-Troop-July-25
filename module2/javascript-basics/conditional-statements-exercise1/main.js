// Basic Age Check.
// //Create variables for a person's age
// // and use an if statement to check if they're old enough to vote (18 or older).
// Display an appropriate message.

let age = 20;
// Your conditional code here
const VOTING_AGE = 18;

if (typeof age !== "number" || age < 0) {
  console.log("this is not a valid age! Nice try");
  return;
}

if (age > VOTING_AGE) {
  console.log("You can vote!");
} else {
  console.log(`I'm sorry. Try again in ${VOTING_AGE - age} years`);
}
