import { reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { TodoListView } from './components/Todos';
import { Todo } from './store/Todo';
import { TodoList } from './store/TodoList';

const todos = new TodoList([
  new Todo('Get Coffee'),
  new Todo('Write simpler code'),
]);

reaction(
  () => todos.finishedTodoCount === 2,
  () => {
    console.log("You've finished two todos!");
  },
);

const App = observer(() => {
  return <TodoListView todoList={todos} />;
});

App.displayName = 'App';

export default App;
