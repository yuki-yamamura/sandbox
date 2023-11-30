import { schemaForType } from '@/validation';
import { User } from '@prisma/client';
import { z } from 'zod';

import styles from './index.module.scss';

const user: User = {
  id: 1,
  name: 'Bob',
};

const User = z.object({
  id: z.number(),
  name: z.string(),
});

User.parse(user);

const userSchema = schemaForType<User>()(
  z.object({
    id: z.number(),
    // name: z.string(),
  }),
);
console.log(userSchema);

const Page = () => (
  <h1 className={styles.heading} data-cy="heading">
    Hello, World!
  </h1>
);

export default Page;
