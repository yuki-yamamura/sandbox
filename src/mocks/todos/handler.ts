import { http, HttpResponse } from "msw";
import { fakeTodos } from "./fakeData";

export const todosHandler = http.get(
  "https://jsonplaceholder.typicode.com/todos",
  () => {
    return HttpResponse.json(fakeTodos);
  }
);
