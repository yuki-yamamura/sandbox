import type { HttpHandler } from "msw";
import { todosHandler } from "./todos";

export const handlers: HttpHandler[] = [todosHandler];
