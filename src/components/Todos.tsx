import { observer } from "mobx-react-lite";
import { Todo } from "../store/Todo";
import { TodoList } from "../store/TodoList";

interface TodoListViewProps {
  todoList: TodoList;
}

const TasksLeft = observer<TodoListViewProps>(({ todoList }) => (
  <div>Tasks left: {todoList.unfinishedTodoCount}</div>
));

TasksLeft.displayName = "TasksLeft";

export const TodoListView = observer<TodoListViewProps>(({ todoList }) => (
  <div>
    <ul>
      {todoList.todos.map((todo) => (
        <TodoView todo={todo} key={todo.id} />
      ))}
    </ul>
    <TasksLeft todoList={todoList} />
  </div>
));

TodoListView.displayName = "TodoListView";

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

TodoView.displayName = "TodoView";
