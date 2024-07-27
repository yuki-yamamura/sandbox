"use client";

import { Suspense } from "react";
import { useTodos } from "../logic/useTodos";

const Todos = () => {
  const { data: todos, isError } = useTodos();

  if (isError) {
    return <div>something went wrong.</div>;
  }

  return (
    <div>
      <ul>
        {todos?.map((todo, index) => (
          <li key={index}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

const TodoWithSuspense = () => (
  <Suspense fallback={<div>loading todos...</div>}>
    <Todos />
  </Suspense>
);

export default TodoWithSuspense;
