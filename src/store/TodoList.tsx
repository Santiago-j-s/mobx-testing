import { action, computed, makeObservable, observable } from "mobx";
import { Todo } from "./Todo";

export class TodoList {
  todos: Todo[] = [];

  constructor(todos: Todo[]) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
      finishedTodoCount: computed,
      toggle: action,
    });

    this.todos = todos;
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
