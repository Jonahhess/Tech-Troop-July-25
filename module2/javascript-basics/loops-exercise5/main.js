const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};

// const titles = Object.keys(dictionary).map(
//   (key) => `Words that begin with ${key}:\n`
// );

// const words = Object.values(dictionary).map((values) =>
//   values.reduce((str, cur) => str + `\t${cur}\n`, "")
// );

// for (let i = 0; i < titles.length; i++) {
//   console.log(titles[i], words[i]);
// }

// using loops:
const entries = Object.entries(dictionary);
for (const [key, values] of entries) {
  console.log(`Words that begin with ${key}`);
  for (const value of values) {
    console.log(`\t${value}`);
  }
}
