import { configure } from "mobx";
import { TodoListView } from "./components/Todos";
import { Todo } from "./store/Todo";
import { TodoList } from "./store/TodoList";

const store = new TodoList([
  new Todo("Get Coffee"),
  new Todo("Write simpler code"),
]);

configure({
  enforceActions: "always",
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
});

// reaction(
//   () => store.finishedTodoCount === 2,
//   () => {
//     console.log("You've finished two todos!");
//   }
// );

function App() {
  return <TodoListView todoList={store} />;
}

export default App;
