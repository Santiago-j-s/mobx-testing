import { TodoListView } from './components/Todos';
import { Todo } from './store/Todo';
import { TodoList } from './store/TodoList';

const todos = new TodoList([
  new Todo('Get Coffee'),
  new Todo('Write simpler code'),
]);

// reaction(
//   () => store.finishedTodoCount === 2,
//   () => {
//     console.log("You've finished two todos!");
//   }
// );

function App() {
  return <TodoListView todoList={todos} />;
}

export default App;
