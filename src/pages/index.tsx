import SignUpForm from '@/components/SignUpForm';

import styles from './index.module.scss';

const Page = () => {
  const saveData = () => console.log('dummy function');

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Welcome to my page</h1>
      <p>Enter your credentials.</p>
      <SignUpForm saveData={saveData} />
    </main>
  );
};

export default Page;
