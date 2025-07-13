const readline = require("node:readline");

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask a question and handle the response
rl.question("What is your name? ", (fname) => {
  rl.question("What is your email address? ", (email) => {
    rl.question("How old are you? ", (age) => {
      rl.question("What is your favorite color? ", (favColor) => {
        console.log(
          `Name: ${fname}\nEmail: ${email}\nAge: ${age}\nFavorite Color: ${favColor}`
        );
        rl.close();
      });
    });
  });
});
