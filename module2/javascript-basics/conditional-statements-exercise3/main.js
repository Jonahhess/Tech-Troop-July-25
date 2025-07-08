// Weather Decision Making.
// Create variables for temperature (in Celsius)
// and weather condition (sunny, rainy, cloudy).
// Use nested conditionals to decide what activity to recommend:

// If sunny and temp > 24°C: "Go to the beach"
// If sunny and temp 15-24°C: "Go for a walk"
// If sunny and temp < 15°C: "Stay inside and read"
// If rainy: "Watch a movie indoors"
// If cloudy and temp > 21°C: "Go hiking"
// If cloudy and temp <= 21°C: "Visit a museum"

let temperature = 20;
let weather = "sunny";
// Your conditional code here
const WEATHER_OPTIONS = ["sunny", "rainy", "cloudy"];

if (typeof temperature !== "number") {
  console.log("invalid temperature");
} else if (!WEATHER_OPTIONS.includes(weather)) {
  console.log("invalid weather");
} else if (weather === "rainy") {
  console.log("Watch a movie indoors");
} else if (weather === "cloudy") {
  if (temperature > 21) {
    console.log("Go hiking");
  } else {
    console.log("Visit a museum");
  }
} else if (temperature > 24) {
  console.log("Go to the beach");
} else if (temperature >= 15) {
  console.log("Go for a walk");
} else {
  console.log("Stay inside and read");
}
