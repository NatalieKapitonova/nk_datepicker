export const getDate = (d) => {
  if (!d) {
    return null;
  }
  if (typeof d === "string") {
    return new Date(d);
  }
  return d;
};
