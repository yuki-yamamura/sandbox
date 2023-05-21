import React, {
  FC,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import { Todo } from './Todo';
import reducer from './reducer';
import { TodoAction } from './action';

type ContextType = {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
};
const TodosContext = createContext<ContextType | null>(null);

export const useTodos = () => {
  const contextValue = useContext(TodosContext);

  if (contextValue === null) {
    throw new Error('useTodos must be used within TodosProvider');
  }

  return contextValue;
};

type Props = {
  children: React.ReactNode;
};

export const TodosProvider: FC<Props> = ({ children }) => {
  const initialTodos: Todo[] = [
    {
      id: 1,
      title: 'a',
      description: 'lorem',
      isCompleted: false,
    },
  ];
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const value = useMemo(() => ({ todos, dispatch }), [todos]);

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
