const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

const capitalize = function (str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase(); // first letter, capitalized
  capitalizedStr += str.slice(1); // rest of the string
  return capitalizedStr;
};

const getAge = function (age) {
  if (age < 21) {
    return "an Underage";
  } else if (age > 55) {
    return "a 55+";
  }
  return `a ${age} year old`;
};

const getProfession = function (profession) {
  return profession
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
};

const getLocation = function (city, country) {
  return ` from ${capitalize(city)}, ${capitalize(country)}. `;
};

const getCatchphrase = function (catchphrase) {
  return ` loves to say "${
    catchphrase[0].toUpperCase() + catchphrase.slice(1)
  }"`;
};

const getSummary = function (person) {
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} `; //Yes - you can put a function call inside the tick quotes!
  summary += getProfession(person.profession);
  summary += getLocation(person.city, person.country);
  summary += capitalize(person.name);
  summary += getCatchphrase(person.catchphrase);
  return summary;
};

for (const person of people_info) {
  console.log(getSummary(person));
}
