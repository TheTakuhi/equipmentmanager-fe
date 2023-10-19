import { DateTime } from "luxon";

export const parseDateTimeFromString = (date: string) => {
  return DateTime.fromSQL(date);
};

export const parseDateTimeFromArray = (date: number[]) => {
  return DateTime.fromObject({ year: date[0], month: date[1], day: date[2] });
};
