"use client";

import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../logic/getTodos";

const Todos = () => {
  const { data: todos, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (isPending) {
    return <div>loading...</div>;
  }

  if (!todos) {
    return <div>something went wrong.</div>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default Todos;
