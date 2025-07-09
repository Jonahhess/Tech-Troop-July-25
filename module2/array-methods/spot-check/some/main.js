let movies = [
  { title: "Dareangel", studio: "Marvel", year: 2023 },
  { title: "Batterfly", studio: "Fox", year: 2021 },
  { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
  { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
];

const someMessage = movies.some((m) => m.studio === "Marvel")
  ? "Let's go watch some movies"
  : "Let's stay home";
const allMessage = movies.every((m) => m.year > 2020)
  ? "Futuristic stuff"
  : "Yawn";

console.log(someMessage);
console.log(allMessage);
