const employers = [
  { name: "Checkpoint", positions: 0 },
  { name: "Microsoft", positions: 3 },
  { name: "Tesla", positions: 1 },
  { name: "Apple", positions: 1 },
];

const people = [
  {
    name: "John",
    hasJob: false,
    age: 13,
  },
  {
    name: "Steve",
    hasJob: true,
    age: 26,
  },
  {
    name: "Michael",
    hasJob: false,
    age: 19,
  },
  {
    name: "Wendy",
    hasJob: false,
    age: 21,
  },
  {
    name: "Peter",
    hasJob: true,
    age: 13,
  },
  {
    name: "Smee",
    hasJob: false,
    age: 45,
  },
  {
    name: "Hook",
    hasJob: false,
    age: 36,
  },
];

const employ = (person, employer) => {
  if (employer?.positions <= 0) {
    return 1;
  }

  person.hasJob = true;
  employer.positions -= 1;

  return employer.positions <= 0;
};

const match = (people, employees) => {
  let eIndex = 0;
  for (const person of people) {
    if (eIndex >= employees.length) {
      return;
    }
    eIndex += employ(person, employees[eIndex]);
  }
  return;
};

const determineEmployment = function (people, employers) {
  const candidates = people.filter((p) => p.age >= 18 && p.hasJob === false);
  const employersWithOpenings = employers.filter((e) => e.positions > 0);
  match(candidates, employersWithOpenings);
};

determineEmployment(people, employers);
