import React, {useState, useEffect} from "../../../_snowpack/pkg/react.js";
import Header from "../components/header.js";
import Body from "../components/body.js";
import * as U from "../utils/index.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
const colorDefault = "#ef476f";
export default (props) => {
  console.log(props);
  const color = props.color;
  const {onSelectDate} = props;
  const [date, setDate] = useState(props.date || new Date());
  const [day, setDay] = useState(U.getDay(props.date, props.day));
  const [month, setMonth] = useState(U.getMonth(props.date, props.month));
  const [year, setYear] = useState(U.getYear(props.date, props.year));
  const [weekStart, setWeekStart] = useState(new Date(year, month, 1).getDay());
  useEffect(() => {
    if (props.date !== date && props.date !== null) {
      setDate(props.date);
      const d = U.getDay(props.date);
      const m = U.getMonth(props.date);
      const y = props.date.getFullYear();
      setDay(d);
      setMonth(m);
      setYear(y);
      setWeekStart(new Date(y, m, 1).getDay());
    }
  }, [props.date]);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = U.getArrOfNumber(daysInMonth);
  const daysWithFrontPadding = [...U.getPadding(weekStart - 1), ...days];
  const rows = U.splitDaysInWeekRows(daysWithFrontPadding);
  const handleDayChange = (i) => {
    setDay(i);
    const d = new Date(year, month, i);
    setDate(d);
    onSelectDate(d);
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
    color: color || colorDefault,
    showYear: true,
    enableControls: true
  }), /* @__PURE__ */ React.createElement(Body, {
    rows,
    daySelected: getSelectedDay(),
    onDayChange: handleDayChange,
    color: color || colorDefault
  })));
};
const Table = styled.table`
  border: none;
  width: 100%;
`;
