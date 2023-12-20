import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Company } from './components/Company';
import { Tabs } from './components/Tabs';
import { TodoListView } from './components/Todos';
import { Company as CompanyObservable } from './store/Company';
import { TodoList } from './store/TodoList';
import './styles/main.css';

const todos = new TodoList();
const company = new CompanyObservable();

autorun(() => {
  console.log(
    `Tasks left: ${todos.unfinishedTodoCount}, Finished todos: ${todos.finishedTodoCount}`,
  );
});

const App = observer(() => {
  return (
    <Tabs
      tabs={[
        {
          id: 'todos',
          name: 'Todos',
          children: <TodoListView todoList={todos} />,
        },
        {
          id: 'company',
          name: 'Company',
          children: <Company company={company} />,
        },
      ]}
    />
  );
});

App.displayName = 'App';

export default App;
