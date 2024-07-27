"use client";

import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { getTodos } from "../logic/getTodos";
import { postTodo } from "../logic/postTodo";
import { queryClient } from "@/lib/tanstack-query";
import { Suspense, useState } from "react";
import { Todo } from "../types/Todo";

const Todos = () => {
  const [additionalTodos, setAdditionalTodos] = useState<Todo[]>([]);
  const { data: fetchedTodos, isError } = useSuspenseQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  const { mutate: mutateTodos } = useMutation({
    mutationFn: postTodo,
    onSuccess: (todo) => {
      setAdditionalTodos([todo, ...additionalTodos]);

      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const todos = fetchedTodos?.concat(additionalTodos);

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
      <button
        type="button"
        onClick={() =>
          mutateTodos({
            userId: 1,
            title: "foo",
            completed: false,
          })
        }
      >
        Create new todo
      </button>
    </div>
  );
};

const TodoWithSuspense = () => (
  <Suspense fallback={<div>loading todos...</div>}>
    <Todos />
  </Suspense>
);

export default TodoWithSuspense;
