import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';
import { TodoListView } from './components/Todos';
import { TodoList } from './store/TodoList';
import './styles/main.css';

const todos = new TodoList();

autorun(() => {
  console.log(
    `Tasks left: ${todos.unfinishedTodoCount}, Finished todos: ${todos.finishedTodoCount}`,
  );
});

const App = observer(() => {
  return <TodoListView todoList={todos} />;
});

App.displayName = 'App';

export default App;
