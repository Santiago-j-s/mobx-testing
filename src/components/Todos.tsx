import { observer } from 'mobx-react-lite';
import { Button } from '../atoms/Button';
import { Todo } from '../store/Todo';
import { TodoList } from '../store/TodoList';

interface TodoListViewProps {
  todoList: TodoList;
}

const TasksLeft = observer<TodoListViewProps>(({ todoList }) => (
  <div>Tasks left: {todoList.unfinishedTodoCount}</div>
));

TasksLeft.displayName = 'TasksLeft';

const RefreshButton = observer<TodoListViewProps>(({ todoList }) => {
  const handleClick = async () => {
    await todoList.refresh();
  };

  return (
    <Button disabled={todoList.loading} onClick={handleClick}>
      {todoList.loading ? 'Loading' : 'Refresh'}
    </Button>
  );
});

RefreshButton.displayName = 'RefreshButton';

const LoadDataButton = observer<TodoListViewProps>(({ todoList }) => {
  const handleClick = () => {
    todoList.loadData();
  };

  return (
    <Button disabled={todoList.loading} onClick={handleClick} className="mx-5">
      {todoList.loading ? 'Loading' : 'Load Data'}
    </Button>
  );
});

LoadDataButton.displayName = 'LoadDataButton';

export const TodoListView = observer<TodoListViewProps>(({ todoList }) => (
  <div>
    <ul>
      {todoList.todos.map((todo) => (
        <TodoView todo={todo} key={todo.id} />
      ))}
    </ul>
    <TasksLeft todoList={todoList} />
    <RefreshButton todoList={todoList} />
    <LoadDataButton todoList={todoList} />
  </div>
));

TodoListView.displayName = 'TodoListView';

interface TodoViewProps {
  todo: Todo;
}

export const TodoView = observer<TodoViewProps>(({ todo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onChange={() => todo.toggle()}
    />
    {todo.title}
  </li>
));

TodoView.displayName = 'TodoView';
