const person = {
  name: "Julius",
  speak: function () {
    console.log("Et tu, Brutus?");
  },
};

person.speak();

person.speak = function (food) {
  console.log(`I like ${food}`);
};

person.speak("Cheese Toast");
