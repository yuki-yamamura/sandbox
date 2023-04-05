import Link from 'next/link';
import { FC } from 'react';
import { isInternalPath } from '@/common/utils';

type Props = {
  href: string;
  children: string;
};

const CustomLink: FC<Props> = ({ href, children }) => {
  return isInternalPath(href) ? (
    <Link href={href}>{children}</Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default CustomLink;
