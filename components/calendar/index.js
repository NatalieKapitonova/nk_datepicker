import React, {useState} from "../../_snowpack/pkg/react.js";
import Header from "./components/header.js";
import Body from "./components/body.js";
import * as U from "./utils/index.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import OK from "./components/ok-button.js";
const colorDefault = "#ef476f";
const getDay = (d, day) => {
  if (day) {
    return day;
  }
  if (d) {
    return d.getDate();
  }
  return new Date().getDate();
};
const getMonth = (d, month) => {
  if (month !== void 0) {
    return month;
  }
  if (d) {
    return d.getMonth();
  }
  return new Date().getMonth();
};
const getYear = (d, year) => {
  if (year) {
    return year;
  }
  if (d) {
    return d.getFullYear();
  }
  return new Date().getFullYear();
};
export default (props) => {
  const color = props.color || colorDefault;
  const {onSelectDate} = props;
  const [date, setDate] = useState(props.date);
  const [day, setDay] = useState(getDay(props.date, props.day));
  const [month, setMonth] = useState(getMonth(props.date, props.month));
  const [year, setYear] = useState(getYear(props.date, props.year));
  const [weekStart, setWeekStart] = useState(new Date(year, month, 1).getDay());
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = U.getArrOfNumber(daysInMonth);
  const daysWithFrontPadding = [...U.getPadding(weekStart - 1), ...days];
  const rows = U.splitDaysInWeekRows(daysWithFrontPadding);
  const handleDayChange = (i) => {
    setDay(i);
    setDate(new Date(year, month, i));
  };
  const handleMonthChange = (i) => {
    const m = i < 0 ? 11 : i > 11 ? 0 : i;
    const y = i < 0 ? year - 1 : i > 11 ? year + 1 : year;
    setMonth(m);
    setYear(y);
    setWeekStart(new Date(y, m, 1).getDay());
  };
  const handleYearChange = (i) => {
    setYear(i);
    setWeekStart(new Date(i, month, 1).getDay());
  };
  const getSelectedDay = () => {
    if (month === date.getMonth() && year === date.getFullYear()) {
      return day;
    }
    return null;
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Table, {
    cellPadding: 0,
    cellSpacing: 0
  }, /* @__PURE__ */ React.createElement(Header, {
    year,
    month,
    onMonthChange: handleMonthChange,
    onYearChange: handleYearChange,
    color,
    showYear: true,
    enableControls: true
  }), /* @__PURE__ */ React.createElement(Body, {
    rows,
    daySelected: getSelectedDay(),
    onDayChange: handleDayChange
  }), /* @__PURE__ */ React.createElement(OK, {
    onClick: () => onSelectDate(date),
    color
  })));
};
const Table = styled.table`
  border: none;
`;
