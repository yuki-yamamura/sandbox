import { Todo } from './Todo';

const ActionType = {
  added: 'todo/added',
  removed: 'todo/removed',
  updated: 'todo/updated',
} as const;

export const add = (title: string, description: string) => ({
  type: ActionType.added,
  payload: { title, description },
});

export const remove = (id: number) => ({
  type: ActionType.removed,
  payload: { id },
});

export const update = (todo: Todo) => ({
  type: ActionType.updated,
  payload: todo,
});
export type TodoAction = ReturnType<typeof add | typeof remove | typeof update>;
