import { useForm } from 'react-hook-form';

import type { SubmitHandler } from 'react-hook-form';

import styles from './index.module.scss';

type Inputs = {
  email: string;
  password: string;
};

type Props = {
  saveData: (data: Inputs) => void;
};

const SignUpForm = ({ saveData }: Props) => {
  const onSubmit: SubmitHandler<Inputs> = (data) => saveData(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)} className={styles.module}>
      <label htmlFor="email" className={styles.label}>
        Email
      </label>
      <input
        id="email"
        type="email"
        placeholder="mail@example.com"
        className={styles.textbox}
        aria-invalid={errors.email ? true : false}
        {...register('email', { required: true })}
      />
      {errors.email && (
        <div role="alert" className={styles.alert}>
          Email is required.
        </div>
      )}
      <label htmlFor="password" className={styles.label}>
        Password
      </label>
      <input
        id="password"
        type="password"
        className={styles.textbox}
        aria-invalid={errors.password ? true : false}
        {...register('password', { required: true, minLength: 8 })}
      />
      {errors.password?.type === 'required' && (
        <div role="alert" className={styles.alert}>
          Password is required.
        </div>
      )}
      {errors.password?.type === 'minLength' && (
        <div role="alert" className={styles.alert}>
          Password must be at least 8 characters.
        </div>
      )}
      <input type="submit" value="Submit" className={styles.button} />
    </form>
  );
};

export default SignUpForm;
