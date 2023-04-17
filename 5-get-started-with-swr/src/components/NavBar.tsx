import { FC } from 'react';
import Avatar from './Avatar';

type Props = { userId: number };

const NavBar: FC<Props> = ({ userId }) => (
  <div className="border-b-2 border-slate-100">
    <div className="mx-auto flex max-w-3xl flex-row-reverse ">
      <Avatar userId={userId} />
    </div>
  </div>
);

export default NavBar;
