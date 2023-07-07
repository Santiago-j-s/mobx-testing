import { action, computed, makeObservable, observable } from "mobx";

export class Todo {
  id = Math.random();
  title = "";
  finished = false;

  constructor(title: string) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action,
      titleUppercased: computed,
    });

    this.title = title;
  }

  get titleUppercased() {
    return this.title.toUpperCase();
  }

  toggle() {
    this.finished = !this.finished;
  }
}
