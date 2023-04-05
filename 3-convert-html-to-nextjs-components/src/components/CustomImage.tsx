import Image from 'next/image';
import { FC } from 'react';
import { isInternalPath } from '@/common/utils';

type Props = {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
};

const CustomImage: FC<Props> = ({ src, alt = '', height, width }) => {
  return isInternalPath(src) ? (
    <Image src={src} alt={alt} height={height} width={width} />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  );
};

export default CustomImage;
