import { isToday, isBefore, startOfDay } from "date-fns";

export function isTodayOrBefore(date: string) {
  return isToday(date) || isBefore(date, startOfDay(new Date()));
}

export function generateDate(daysAhead: number, hour: number = 8) {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  d.setHours(hour, 0, 0, 0);
  return d.toISOString();
}
