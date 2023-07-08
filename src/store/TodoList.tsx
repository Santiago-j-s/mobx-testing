import { action, makeAutoObservable } from 'mobx';
import { Todo } from './Todo';

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class TodoList {
  loading = false;
  error: false | string = false;
  todos: Todo[] = [];

  constructor(todos?: Todo[]) {
    makeAutoObservable(this);

    this.todos = todos ?? [];
  }

  add(titles: string | string[]): void {
    if (typeof titles === 'string') {
      this.todos.push(new Todo(titles));
      return;
    }

    titles.forEach((title) => this.todos.push(new Todo(title)));
  }

  async loadData() {
    this.loading = true;

    try {
      await sleep(1000).then(
        action('loadData', () => {
          this.todos = [];
          this.add(['Get Coffee', 'Play Game', 'Read Book']);
        }),
      );
    } catch (error) {
      this.error = 'Error loading todos';
    }

    this.loading = false;
  }

  async refresh() {
    this.loading = true;

    try {
      await sleep(1000).then(
        action('refresh', () => {
          this.todos.forEach((todo) => {
            todo.finished = false;
          });
        }),
      );
    } catch (error) {
      this.error = 'Error refreshing todos';
    }

    this.loading = false;
  }

  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }

  get finishedTodoCount() {
    return this.todos.filter((todo) => todo.finished).length;
  }

  toggle(index: number) {
    this.todos[index].toggle();
  }
}
