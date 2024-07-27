import { Todo } from "../types/Todo";

export const postTodo = async (todo: Omit<Todo, "id">): Promise<Todo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      ...todo,
    }),
  });

  const newTodo = await res.json();
  console.log(newTodo);

  return res.json();
};
