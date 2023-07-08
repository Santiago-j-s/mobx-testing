import { makeAutoObservable } from 'mobx';

export class Todo {
  id = Math.random();
  title = '';
  finished = false;

  constructor(title: string) {
    makeAutoObservable(this);

    this.title = title;
  }

  get titleUppercased() {
    return this.title.toUpperCase();
  }

  toggle() {
    this.finished = !this.finished;
  }
}
