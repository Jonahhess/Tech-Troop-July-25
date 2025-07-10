class UniqueArray {
  #items = new Set();

  #deepEquality(a, b) {
    if (typeof a !== typeof b) {
      return false;
    }
    if (typeof a !== "object") {
      return a === b;
    }

    const aEntries = Object.entries(a);
    const bEntries = Object.entries(b);
    if (aEntries.length !== bEntries.length) {
      return false;
    }

    for (const [bKey, bValue] of bEntries) {
      if (!(bKey in a)) {
        return false;
      }

      const aValue = a[bKey];

      if (typeof aValue === "object" && !deepEquality(aValue, bValue)) {
        return false;
      }

      if (typeof aValue !== "object" && aValue !== bValue) {
        return false;
      }
    }
    return true;
  }

  add(item) {
    this.exists(item) ? this.#items.length : this.#items.add(item);
  }

  showAll() {
    console.log(this.#items);
  }

  exists(item) {
    for (const i of this.#items) {
      if (this.#deepEquality(i, item)) {
        return true;
      }
      return false;
    }
  }

  get(index) {
    return index <= this.#items.size ? this.#items[index] : undefined;
  }
}

// driver code
const uniqueStuff = new UniqueArray();
uniqueStuff.add({ name: "steve", age: 13, address: { city: "la" } });
uniqueStuff.add({ name: "john" });
uniqueStuff.showAll();
uniqueStuff.add({ name: "steve" });
uniqueStuff.add({ name: "steve", age: 13, address: { city: "la" } });
uniqueStuff.exists({ name: "john" });
