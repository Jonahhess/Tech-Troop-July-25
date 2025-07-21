class Animal {
  constructor(name, numLegs, children = []) {
    this.name = name;
    this.numLegs = numLegs;
    this.children = children;
  }

  giveBirth(name) {
    console.log("Boom. Birthed " + name);
    this.children.push(name);
  }
}
