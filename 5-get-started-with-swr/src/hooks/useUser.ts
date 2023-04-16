import useSWR from 'swr';
import { getUserById } from '@/lib/users';
import { User } from '@/types/User';

const useUser = (userId: number) => {
  const {
    data: user,
    error,
    isLoading,
  } = useSWR<User, Error>(userId.toString(), getUserById);

  return { user, error, isLoading };
};

export default useUser;
