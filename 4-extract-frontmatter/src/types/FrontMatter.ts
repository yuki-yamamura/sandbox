import { ISODate, isISODate } from '@/types/ISODate';

export type FrontMatter = {
  title: string;
  description: string;
  tags: string[];
  date: ISODate;
  draft: boolean;
  lastMod?: ISODate;
  expiryDate?: ISODate;
};

export const isFrontMatter = (param: unknown): param is FrontMatter => {
  const frontMatter = param as FrontMatter;
  return (
    typeof frontMatter?.title === 'string' &&
    typeof frontMatter?.description === 'string' &&
    frontMatter?.tags?.every((tag) => typeof tag === 'string') &&
    isISODate(frontMatter?.date) &&
    typeof frontMatter?.draft === 'boolean' &&
    (isISODate(frontMatter?.lastMod) ||
      typeof frontMatter?.lastMod === 'undefined') &&
    (isISODate(frontMatter?.expiryDate) ||
      typeof frontMatter?.expiryDate === 'undefined')
  );
};
