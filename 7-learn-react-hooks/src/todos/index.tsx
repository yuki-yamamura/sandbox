import { FC } from 'react';
import { useTodos } from './context';
import { add, remove, update } from './action';
import { Todo } from './Todo';

const Todos: FC = () => {
  const { todos, dispatch } = useTodos();
  const addTodo = (
    todo: Parameters<typeof add>[0] = {
      title: '',
      description: '',
    },
  ) => {
    dispatch(add(todo));
  };
  const removeTodo = (id: Parameters<typeof remove>[0]) => dispatch(remove(id));
  const updateTodo = (todo: Parameters<typeof update>[0]) =>
    dispatch(update(todo));

  return (
    <>
      <div>TODO LIST</div>
      <button
        type="button"
        className="rounded-md bg-slate-300 px-4 py-2 text-white"
        onClick={() => {
          addTodo();
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
                    const updatedTodo: Todo = {
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
                    onChange={(e) => {
                      const updatedTodo: Todo = {
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
                    onChange={(e) => {
                      const updatedTodo: Todo = {
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
                  const { id } = todo;
                  removeTodo({ id });
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
