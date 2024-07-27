import type { HttpHandler } from "msw";
import { todosHandler } from "./todos/handler";

export const handlers: HttpHandler[] = [todosHandler];
