// Create a Family function with two variables inside its scope:
// A members array which starts empty
// A birth function
// The birth function should take one parameter, name, and push it to members, then log the updated array
// The Family function should return the birth function, but not the members array
// Call the Family function, store it in a giveBirth variable, then call giveBirth a few times.

// Mazel tov!

// classic way
function family() {
  const members = [];
  function birth(name) {
    members.push(name);
    console.log(name);
  }

  return birth;
}

// functional way
const family2 = (arr) => (name) => {
  arr.push(name);
  console.log(name);
};

const giveBirth2 = family2([]);
giveBirth2("john");
giveBirth2("wendy");
giveBirth2("peter pan");
giveBirth2("captain hook");

console.log();

const giveBirth = family();
giveBirth("adam");
giveBirth("eve");
giveBirth("shem");
giveBirth("cham");
giveBirth("adam");
giveBirth("yefet");
