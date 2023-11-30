import { schemaForType } from '@/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import type { Prisma } from '@prisma/client';
import type { SubmitHandler } from 'react-hook-form';

const userSchema = schemaForType<Prisma.UserCreateInput>()(
  z.object({
    name: z.string().min(1),
  }),
);

type UserSchema = z.infer<typeof userSchema>;

const UserForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<UserSchema> = (data) => console.log(data);

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input type="text" {...register('name')} />
      </label>
      {errors.name && <div role="alert">{errors.name.message}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
