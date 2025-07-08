const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let i = 0; i < names.length; i++) {
  person = { name: names[i], age: ages[i] };
  people.push(person);
}

console.log(people);
