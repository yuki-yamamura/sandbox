"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { getTodos } from "../logic/getTodos";
import { postTodo } from "../logic/postTodo";
import { queryClient } from "@/lib/tanstack-query";
import { useState } from "react";
import { Todo } from "../types/Todo";

const Todos = () => {
  const [additionalTodos, setAdditionalTodos] = useState<Todo[]>([]);
  const { data: fetchedTodos, isPending } = useQuery({
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

  if (isPending) {
    return <div>loading...</div>;
  }

  if (!fetchedTodos) {
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

export default Todos;
