import { User } from '@prisma/client';

const user: User = {
  id: 1,
  name: 'Bob',
  email: 'hogehoge',
};

import styles from './index.module.scss';

const Page = () => (
  <h1 className={styles.heading} data-cy="heading">
    Hello, World!
  </h1>
);

export default Page;
