class Diff {
  constructor(operation, location = 0, newValue = "") {
    this.operation = operation;
    this.location = location;
    this.newValue = newValue;
  }
}

class DiffMap extends Map {
  #version;
  #lastChange;
  constructor(...args) {
    super(...args);
    this.#lastChange = new Diff("init", 0);
    this.#version = 0;
  }

  getDiff() {
    return [this.#version, this.#lastChange];
  }

  getEntry(location) {
    let it = super.entries();
    for (let i = 1; i < location; i++) {
      it.next();
    }
    return it;
  }

  #update(diff) {
    this.#lastChange = diff;
    this.#version += 1;
  }

  clear() {
    if (super.size) {
      this.#update(new Diff("clear"));
      super.clear();
    }
  }

  #findIndex(key) {
    let it = super.entries();
    for (let i = 1; i <= super.size; i++) {
      if (it.next().value === key) {
        return i;
      }
    }
    return 0;
  }

  set(key, value) {
    if (!super.has(key)) {
      this.#update(new Diff("add", this.size + 1));
      return super.set(key, value);
    }
    this.#update(new Diff("update", this.#findIndex(key), value));
    return super.set(key, value);
  }

  delete(key) {
    if (!super.has(key)) {
      return false;
    }

    this.#update(new Diff("delete", this.#findIndex(key)));
    return super.delete(key);
  }
}

export default DiffMap;
