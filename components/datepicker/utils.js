export const formatDate = (d, pattern) => {
  if (!d) {
    return null;
  }
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  switch (pattern) {
    case "DD.MM.YYYY":
      return [getPadding(day), getPadding(month), year].join(".");
    case "DD/MM/YYYY":
      return [getPadding(day), getPadding(month), year].join("/");
    case "DD-MM-YYYY":
      return [getPadding(day), getPadding(month), year].join("-");
    case "MM.DD.YYYY":
      return [getPadding(month), getPadding(day), year].join(".");
    case "MM/DD/YYYY":
      return [getPadding(month), getPadding(day), year].join("/");
    case "MM-DD-YYYY":
      return [getPadding(month), getPadding(day), year].join("-");
    case "YYYY.MM.DD":
      return [year, getPadding(month), getPadding(day)].join(".");
    case "YYYY/MM/DD":
      return [year, getPadding(month), getPadding(day)].join("/");
    case "YYYY-MM-DD":
      return [year, getPadding(month), getPadding(day)].join("-");
    default:
      return [getPadding(day), getPadding(month), year].join(".");
  }
};
export const getPadding = (n) => {
  if (n < 10) {
    return `0${n}`;
  }
  return n;
};
export const dateToIso = (d) => {
  return new Date(formatDate(d, "YYYY-MM-DD")).toISOString();
};
