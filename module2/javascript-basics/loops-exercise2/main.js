const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 19];
const people = [];

for (let i = 0; i < names.length; i++) {
  person = { name: names[i], age: ages[i] };
  people.push(person);
}

console.log(people);

for (const person of people) {
  console.log(
    `${person.name} is ${person.age} ${person.age === 1 ? "year" : "years"} old`
  );
}
