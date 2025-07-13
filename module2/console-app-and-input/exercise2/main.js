const promptSync = require("prompt-sync");

const qa = [
  ["Stop! What is your name? ", "It is Arthur, King of the Britains"],
  ["What is your quest? ", "To seek the Holy Grail"],
  [
    "What is the airspeed velocity of an unladen swallow? ",
    "What do you mean? An African or European swallow?",
  ],
];

let score = 0;
const prompt = promptSync();
for (const question of qa) {
  const response = prompt(question[0]);
  score += response === question[1];
}

console.log(`Final Score: ${score}/3 correct!`);
