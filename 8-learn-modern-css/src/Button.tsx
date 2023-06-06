import React from 'react';
import styles from './Button.module.css';

type Props = {
  theme: 'white' | 'dark';
};

function Button({ theme }: Props) {
  return (
    <button
      aria-pressed
      data-theme={theme}
      className={`${styles.button}`}
      type="button"
    >
      {theme}
    </button>
  );
}

export default Button;
