const obj1 = { name: "Jill", age: 21, city: "Tel Aviv" };
const obj2 = { name: "Robert", age: 21, city: "Jerusalem" };

let sentence = ``;
if (obj1.age === obj2.age) {
  sentence = `${obj1.name} wanted to date ${obj2.name}`;
  if (obj1.city !== obj2.city) {
    sentence += `, but couldn't`;
  }
}

console.log(sentence);
