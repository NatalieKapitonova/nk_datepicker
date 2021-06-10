import {useState, useEffect} from "../../../_snowpack/pkg/react.js";
export const getArrOfNumber = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }
  return arr;
};
export const getPadding = (daysToAdd) => {
  const arr = getArrOfNumber(daysToAdd).map((_) => 0);
  return arr;
};
export const splitDaysInWeekRows = (days, start = 0, step = 7, chunks = []) => {
  const chunk = days.slice(start, start + step);
  chunks.push(chunk);
  if (days.length > start + step) {
    chunks = splitDaysInWeekRows(days, start + step, step, chunks);
  }
  return chunks;
};
export const getDay = (d, day) => {
  if (day) {
    return day;
  }
  if (d) {
    return d.getDate();
  }
  return new Date().getDate();
};
export const getMonth = (d, month) => {
  if (month !== void 0) {
    return month;
  }
  if (d) {
    return d.getMonth();
  }
  return new Date().getMonth();
};
export const getYear = (d, year) => {
  if (year) {
    return year;
  }
  if (d) {
    return d.getFullYear();
  }
  return new Date().getFullYear();
};
const getWindowDimensions = () => {
  const mobileDisplayThreshold = 768;
  const {innerWidth: width, innerHeight: height} = window;
  const mobile = width < mobileDisplayThreshold;
  return {
    width,
    height,
    mobile
  };
};
export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
};
