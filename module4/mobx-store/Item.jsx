import { makeAutoObservable } from "mobx";

export class Item {
  name;
  completed;

  constructor(name) {
    this.name = name;
    this.completed = false;

    makeAutoObservable(this);
  }
}
