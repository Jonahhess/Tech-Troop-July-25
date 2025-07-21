class Animal {
  constructor(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
  }
}

const dog = new Animal("snoop", 4);
console.log(dog.name);
