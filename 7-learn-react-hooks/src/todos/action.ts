import { Todo } from './Todo';

export const TodoActionType = {
  added: 'todo/added',
  removed: 'todo/removed',
  updated: 'todo/updated',
} as const;

export const add = (todo: Pick<Todo, 'title' | 'description'>) => ({
  type: TodoActionType.added,
  payload: { ...todo },
});
type AddTodo = ReturnType<typeof add>;

export const remove = (id: Pick<Todo, 'id'>) => ({
  type: TodoActionType.removed,
  payload: id,
});
type RemoveTodo = ReturnType<typeof remove>;

export const update = (todo: Todo) => ({
  type: TodoActionType.updated,
  payload: todo,
});
type UpdateTodo = ReturnType<typeof update>;

export type TodoAction = AddTodo | RemoveTodo | UpdateTodo;
