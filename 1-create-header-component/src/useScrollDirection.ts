import { useEffect, useState } from 'react';

type ScrollDirection = 'down' | 'up';

const useScrollDirection = (): null | ScrollDirection => {
  const [scrollDirection, setScrollDirection] =
    useState<null | ScrollDirection>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(lastScrollY < currentScrollY ? 'down' : 'up');

      // update up-to-date scrollY for next scroll event
      lastScrollY = currentScrollY;
    };

    document.addEventListener('scroll', updateScrollDirection);

    return () => document.removeEventListener('scroll', updateScrollDirection);
  });

  return scrollDirection;
};

export default useScrollDirection;
