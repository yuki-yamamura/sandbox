import Image from 'next/image';
import { FC } from 'react';
import useUser from '@/hooks/useUser';

type Props = { userId: number };

const Avatar: FC<Props> = ({ userId }) => {
  const { user, isLoading } = useUser(userId);
  const text = user === undefined ? '' : user.name;

  if (isLoading) {
    return <Image src="/loading.svg" height={48} width={48} alt="loading" />;
  }

  return (
    <button type="button" aria-label={text} className="user relative">
      <Image src="/user.svg" height={48} width={48} alt="user" />
    </button>
  );
};

export default Avatar;
