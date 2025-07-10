class UniqueArray {
  #items = [];
  #map = {};

  add(item) {
    item in this.#map
      ? this.#items.length
      : (this.#map[item] = this.#items.push(item));
  }

  showAll() {
    console.log(this.#items);
  }

  exists(item) {
    return item in this.#map;
  }

  get(index) {
    return index <= this.#items.length ? this.#items[index] : undefined;
  }
}

// driver code
const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.exists("toy"); //returns true
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");
console.log(uniqueStuff.get(2)); //prints "hydrogen"
