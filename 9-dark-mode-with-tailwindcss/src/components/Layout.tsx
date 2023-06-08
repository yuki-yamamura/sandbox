import { useTheme } from '@/contexts/ThemeContext';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col items-center bg-base text-main ${theme}`}>
      {children}
    </div>
  );
};

export default Layout;
