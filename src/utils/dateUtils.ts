import { isToday, isBefore, startOfDay } from "date-fns";

export function isTodayOrBefore(date: string) {
  return isToday(date) || isBefore(date, startOfDay(new Date()));
}
