/**
 * Inits the date for the calendar with Date object or null
 * @param d
 */
export const getDate = (d?: string | Date | null): Date | null => {
  if (!d) {
    return null;
  }
  if (typeof d === "string") {
    return new Date(d);
  }

  return d;
};
