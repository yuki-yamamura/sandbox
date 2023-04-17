import { NetworkError } from '@/common/errors';
import { User, isUser } from '@/types/User';

export const getUserById = async (userId: number): Promise<User> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const user: unknown = await res.json();

  if (!res.ok) {
    const error = new NetworkError(
      res.status,
      JSON.stringify(await res.json()),
      'An error occurred while fetching the data.',
    );
    throw error;
  }
  if (!isUser(user)) {
    throw new TypeError('Invalid data found.');
  }

  return user;
};
