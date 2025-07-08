const story =
  "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];

//let regex = new RegExp(`[${specialChars.join("")}]`, "g");
// const wordCounts = story
//   .replace(regex, " ")
//   .toLowerCase()
//   .split(" ")
//   .reduce((obj, word) => {
//     word in obj ? (obj[word] += 1) : (obj[word] = 1);
//     return obj;
//   }, {});

// according to guidelines
const cleanText = function (sentence) {
  for (const char of specialChars) {
    sentence = sentence.split(char).join(" ");
  }

  return sentence.toLowerCase();
};

const addToCounter = function (counter, word) {
  if (word in counter) {
    counter[word] += 1;
  } else {
    counter[word] = 1;
  }
  return counter;
};

const countWords = function (sentence) {
  const counter = {};
  const cleanedSentence = cleanText(sentence);
  for (const word of cleanedSentence.split(" ")) {
    addToCounter(counter, word);
  }
  return counter;
};

console.log(countWords(story));
