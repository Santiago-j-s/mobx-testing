import { action, computed, makeObservable, observable } from 'mobx';

export class Todo {
  id = Math.random();
  title = '';
  finished = false;

  constructor(title: string) {
    makeObservable(this, {
      id: observable,
      title: observable,
      finished: observable,
      titleUppercased: computed,
      toggle: action,
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
