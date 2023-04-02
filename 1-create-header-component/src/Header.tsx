import { FC } from 'react';
import useScrollDirection from './useScrollDirection';
import styles from './Header.module.css';

const Header: FC = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`${styles.header} ${
        scrollDirection === 'down' ? styles.hidden : ''
      }`}
    >
      <div className={`${styles.container}`}>
        <div className={styles['text-color']}>Home</div>
        <nav className={`${styles.nav}`}>
          <div className={styles['text-color']}>Blog</div>
          <div className={styles['text-color']}>About</div>
          <div className={styles['text-color']}>Contacts</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
