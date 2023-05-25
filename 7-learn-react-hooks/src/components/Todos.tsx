import { useState, useEffect, useCallback } from 'react';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TodoStatus = 'completed' | 'notCompleted';

const Todos = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [todoStatus, setTodoStatus] = useState<TodoStatus>();

  const fetchTodos = useCallback(async () => {
    const url =
      todoStatus === undefined
        ? 'https://jsonplaceholder.typicode.com/todos'
        : `https://jsonplaceholder.typicode.com/todos/?completed=${(
            todoStatus === 'completed'
          ).toString()}`;
    const response = await fetch(url);

    setTodos((await response.json()) as Todo[]);
  }, [todoStatus]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTodoStatus(e.target.value as TodoStatus);
    void fetchTodos();
  };

  useEffect(() => {
    void fetchTodos();
  }, [fetchTodos]);

  return (
    <div>
      <label htmlFor="todo-select">
        Choose todo status:{' '}
        <select
          name="todo-status"
          onChange={handleChange}
          className="bg-zinc-200"
        >
          <option value="undefined">All</option>
          <option value="completed">Completed</option>
          <option value="notCompleted">Not Completed</option>
        </select>
      </label>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            {`${todo.id}: "${todo.title}" is assigned to user ${todo.userId}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
