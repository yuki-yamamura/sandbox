import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import type { NextPage } from 'next';

const About: NextPage = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <main className="flex flex-col items-center">
      <h1 className="my-10">ABOUT</h1>
      <div className="flex gap-x-2">
        <label htmlFor="dark-mode-checkbox">Dark Mode:</label>
        <input
          type="checkbox"
          id="dark-mode-checkbox"
          checked={theme === 'dark'}
          onChange={() => toggleTheme()}
        />
      </div>
      <Link
        href="/"
        className="hover:text-accent hover:underline focus:text-accent focus:underline"
      >
        ← Go back home page
      </Link>
    </main>
  );
};

export default About;
