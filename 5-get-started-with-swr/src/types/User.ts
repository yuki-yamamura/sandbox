export type User = {
  id: number;
  name: string;
};

export const isUser = (param: unknown): param is User => {
  const user = param as User;

  return typeof user?.id === 'number' && typeof user?.name === 'string';
};
