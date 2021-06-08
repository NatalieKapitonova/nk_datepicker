export const getArrOfNumber = (n: number): number[] => {
  const arr: number[] = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }

  return arr;
};
export const getPadding = (daysToAdd: number): number[] => {
  const arr = getArrOfNumber(daysToAdd).map((_) => 0);

  return arr;
};

export const splitDaysInWeekRows = (
  days: number[],
  start = 0,
  step = 7,
  chunks: any[][] = []
): any[][] => {
  const chunk = days.slice(start, start + step);
  chunks.push(chunk);

  if (days.length > start + step) {
    chunks = splitDaysInWeekRows(days, start + step, step, chunks);
  }

  return chunks;
};

export const getDay = (d: Date | null, day?: number): number => {
  if (day) {
    return day;
  }
  if (d) {
    return d.getDate();
  }

  return new Date().getDate();
};

export const getMonth = (d: Date | null, month?: number): number => {
  if (month !== undefined) {
    return month;
  }
  if (d) {
    return d.getMonth();
  }
  return new Date().getMonth();
};

export const getYear = (d: Date | null, year?: number) => {
  if (year) {
    return year;
  }
  if (d) {
    return d.getFullYear();
  }
  return new Date().getFullYear();
};
