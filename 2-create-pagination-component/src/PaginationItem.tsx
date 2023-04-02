import { FC } from 'react';
import styles from 'PaginationItem.module.css';

type Props = {
  href: string;
  displayText: string;
  status: 'active' | 'disabled' | 'opened';
};

const PaginationItem: FC<Props> = ({ href, displayText, status }) => {
  const isDisabled = status === 'disabled' || status === 'opened';
  const isOpened = status === 'opened';

  return (
    <a
      href={href}
      className={`${styles.item} ${isDisabled ? styles.disabled : ''} ${
        isOpened ? styles.opened : ''
      }`}
    >
      {displayText}
    </a>
  );
};
export default PaginationItem;
