import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { getTodos } from "./getTodos";
import { Todo } from "../types/Todo";

export const useTodos = (): UseSuspenseQueryResult<Todo[], Error> => {
  return useSuspenseQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};
