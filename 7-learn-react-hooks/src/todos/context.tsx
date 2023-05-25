import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { Todo } from './Todo';
import { initialState, reducer } from './reducer';
import { TodoAction, add, remove, update } from './action';

type ContextType = {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
};
const TodosContext = createContext<ContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const TodosProvider = ({ children }: Props) => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ todos, dispatch }), [todos]);

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export const useTodos = () => {
  const contextValue = useContext(TodosContext);

  if (contextValue === null) {
    throw new Error('useTodos must be used within TodosProvider');
  }

  const { todos, dispatch } = contextValue;

  const addTodo = (...params: Parameters<typeof add>) =>
    dispatch(add(...params));
  const removeTodo = (...params: Parameters<typeof remove>) =>
    dispatch(remove(...params));
  const updateTodo = (...params: Parameters<typeof update>) =>
    dispatch(update(...params));

  return { todos, addTodo, removeTodo, updateTodo };
};
