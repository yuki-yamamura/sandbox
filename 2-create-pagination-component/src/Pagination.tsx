import { FC } from 'react';
import PaginationItem from 'PaginationItem';
import styles from 'Pagination.module.css';

const MAX_POSTS_COUNT_PER_PAGE = 10;
const DISPLAY_PAGE_COUNT = 5;

type Props = {
  currentPageIndex: number;
  totalPosts: number;
};

const Pagination: FC<Props> = ({ currentPageIndex, totalPosts }) => {
  const totalPages = Math.ceil(totalPosts / MAX_POSTS_COUNT_PER_PAGE);

  const startPageIndex = Math.max(
    1,
    currentPageIndex -
      (DISPLAY_PAGE_COUNT - 1) +
      Math.min(
        Math.floor(DISPLAY_PAGE_COUNT / 2),
        totalPages - currentPageIndex,
      ),
  );
  const displayPageIndexes = Array.from(
    new Array(totalPages),
    (_, i) => i + 1,
  ).splice(startPageIndex - 1, DISPLAY_PAGE_COUNT);

  return (
    <nav>
      <ul className={styles.navContainer}>
        <li key="previous-page">
          <PaginationItem
            href={`/posts/page/${currentPageIndex - 1}`}
            displayText="←"
            status={currentPageIndex === 1 ? 'disabled' : 'active'}
          />
        </li>
        {displayPageIndexes.map((pageIndex) => (
          <li key={`${pageIndex}`}>
            <PaginationItem
              href={`/posts/page/${pageIndex}`}
              displayText={pageIndex.toString()}
              status={pageIndex === currentPageIndex ? 'opened' : 'active'}
            />
          </li>
        ))}
        <li key="next-page">
          <PaginationItem
            href={`/posts/page/${currentPageIndex + 1}`}
            displayText="→"
            status={currentPageIndex === totalPages ? 'disabled' : 'active'}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
