import { Todo } from "../types/Todo";

const delay = (ms: number) => (result: unknown) => {
  return new Promise((resolve) => setTimeout(() => resolve(result), ms));
};

export const getTodos = (): Promise<Todo[]> => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then(delay(2000))
    .then((result) => result as Todo[]);
};
