import { FC } from 'react';
import { useTodos } from './context';

const Todos: FC = () => {
  const { todos, addTodo, removeTodo, updateTodo } = useTodos();

  return (
    <>
      <div>TODO LIST</div>
      <button
        type="button"
        className="rounded-md bg-slate-300 px-4 py-2 text-white"
        onClick={() => {
          addTodo('new task', '');
        }}
      >
        Add TODO
      </button>
      <ul>
        {todos
          .sort((a, b) => a.id - b.id)
          .map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between border border-slate-300 p-2"
            >
              <div className="flex gap-x-2">
                <input
                  type="checkbox"
                  name="completed"
                  onChange={(e) => {
                    const updatedTodo = {
                      ...todo,
                      isCompleted: e.target.checked,
                    };
                    updateTodo(updatedTodo);
                  }}
                />
                <div className="flex">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="task title"
                    value={todo.title}
                    onChange={(e) => {
                      const updatedTodo = {
                        ...todo,
                        title: e.target.value,
                      };
                      updateTodo(updatedTodo);
                    }}
                  />
                  <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="description"
                    value={todo.description}
                    onChange={(e) => {
                      const updatedTodo = {
                        ...todo,
                        description: e.target.value,
                      };
                      updateTodo(updatedTodo);
                    }}
                  />
                </div>
              </div>
              <button
                type="button"
                className="rounded-md bg-red-400 px-4 py-2 text-white"
                onClick={() => {
                  removeTodo(todo.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Todos;
