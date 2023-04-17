import { FC } from 'react';
import { NetworkError } from '@/common/errors';
import useUser from '@/hooks/useUser';

type Props = { userId: number };

const Content: FC<Props> = ({ userId }) => {
  const { user, error, isLoading } = useUser(userId);

  // if promise is rejected in fetcher function, "error" will be Error object.
  if (error) {
    console.error(error.message);
  }
  // and also we can handle custom Error object.
  if (error instanceof NetworkError) {
    console.error({ error });
  }

  return (
    <div className="flex justify-center text-2xl">
      {error ? (
        <div>{error.message}</div>
      ) : isLoading || user === undefined ? (
        <div>Loading...</div>
      ) : (
        <h1>Welcome, back {user.name}</h1>
      )}
    </div>
  );
};

export default Content;
