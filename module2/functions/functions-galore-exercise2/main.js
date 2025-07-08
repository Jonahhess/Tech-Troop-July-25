const story =
  "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
let regex = new RegExp(`[${specialChars.join("")}]`, "g");

const wordCounts = story
  .replace(regex, " ")
  .toLowerCase()
  .split(" ")
  .reduce((obj, word) => {
    word in obj ? (obj[word] += 1) : (obj[word] = 1);
    return obj;
  }, {});

console.log(wordCounts);
