// Create a StringFormatter module. It should have two functions:

// capitalizeFirst - receives a string and returns the string with the first letter uppercased, and the next ones lowercased
// toSkewerCase - receives a string and replaces any spaces with a dash

const StringFormatter = function () {
  const capitalizeFirst = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  };
  const toSkewerCase = (string) => {
    return string.slice().replace(/W/g, "-");
  };

  return { capitalizeFirst, toSkewerCase };
};

const formatter = StringFormatter();
console.log(formatter.capitalizeFirst("dorothy")); //should return Dorothy
console.log(formatter.toSkewerCase("blue box")); //should return blue-box
