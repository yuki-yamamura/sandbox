import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export type ISODate = string;

export const isISODate = (param: unknown): param is ISODate => {
  const isoDate = param as ISODate;

  return dayjs(isoDate, 'YYYY-MM-DD', true).isValid();
};
