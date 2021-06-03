export const getArrOfNumber = (n: number): number[] => {
  const arr: number[] = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }

  return arr;
};
export const getPadding = (daysToAdd: number): number[] => {
  const arr = getArrOfNumber(daysToAdd).map(_ => 0);

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
