import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Company } from './Company';
import { TodoList } from './TodoList';

const todos = new TodoList();
const company = new Company();

autorun(() => {
  console.log(
    `Tasks left: ${todos.unfinishedTodoCount}, Finished todos: ${todos.finishedTodoCount}`,
  );
});

const StoreContext = React.createContext({ todos, company });

export const StoreProvider = observer(function CountProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreContext.Provider value={{ todos, company }}>
      {children}
    </StoreContext.Provider>
  );
});

// eslint-disable-next-line react-refresh/only-export-components
export function useStore() {
  const context = React.useContext(StoreContext);

  return context;
}
