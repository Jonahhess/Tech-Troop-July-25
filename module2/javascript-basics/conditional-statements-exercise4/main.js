// Exercise 4
// Multiple Condition Validator.
// Create variables for username length, password length, and user age.
// Use logical operators (&&, ||, !) to check if a user can create an account:

// Username must be at least 5 characters
// Password must be at least 8 characters
// User must be 13 or older
// Display specific error messages for each failed condition
// or success message if all pass

let usernameLength = 2;
let passwordLength = 7;
let userAge = 5;

if (
  typeof usernameLength !== "number" ||
  usernameLength < 0 ||
  typeof passwordLength !== "number" ||
  passwordLength < 0 ||
  typeof userAge !== "number" ||
  userAge < 0
) {
  console.log("invalid input. Please try again");
  return;
}

if (usernameLength >= 5 && passwordLength >= 8 && userAge >= 13) {
  console.log("User can create account");
} else {
  let errorMessage = "The following errors have occurred:\n";
  if (usernameLength < 5) {
    errorMessage += `Error 01: Username is too short.\n 
    Recommended Fix: Add ${
      5 - usernameLength
    } characters to your username.\n\n`;
  }
  if (passwordLength < 8) {
    errorMessage += `Error 02: Password is too short.\n
    Recommended Fix: Add ${
      8 - passwordLength
    } characters to your password.\n\n`;
  }
  if (userAge < 13) {
    errorMessage += `Error 02: User is too young to create an account.\n
    Recommended Fix: Wait ${13 - userAge} years before applying again..\n`;
  }
  console.log(errorMessage);
}
