// Grade Classification.
// Create a variable for a test score (0-100)
// and use if-else if-else statements to
// assign and display a letter grade:

// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: Below 60

let grade = 100;
if (typeof grade !== "number" || grade > 100 || grade < 0) {
  console.log("not a real grade");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else {
  console.log("F");
}
