const person = {
  username: "Felicia",
  introduce: function () {
    console.log("Hi, I'm Felicia");
  },
};

person.introduce(); //prints "Hi, I'm Felicia"

person.introduce = function () {
  console.log(`Hi, I'm ${this.username}`);
};

person.introduce();
