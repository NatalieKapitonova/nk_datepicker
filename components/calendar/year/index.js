import React, {useState} from "../../../_snowpack/pkg/react.js";
import Calendar from "../components/body.js";
import Header from "../components/header.js";
import * as C from "../utils/constants.js";
import * as U from "../utils/index.js";
import Row from "../../grid/row.js";
import Column from "../../grid/column.js";
const colorDefault = "#ef476f";
export default (props) => {
  const {onSelectDate, color} = props;
  const [date, setDate] = useState(props.date || new Date());
  const [day, setDay] = useState(date.getDate());
  const [year, setYear] = useState(date.getFullYear());
  const handleDayChange = (d, m) => {
    setDay(d);
    const newD = new Date(year, m, d);
    setDate(newD);
    onSelectDate(newD);
  };
  const handleYearChange = (y) => {
    setYear(y);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Column, {
    size: 4
  }, /* @__PURE__ */ React.createElement("div", {
    style: {cursor: "pointer", textAlign: "center", color: "gray"},
    onClick: () => handleYearChange(year - 1)
  }, year - 1)), /* @__PURE__ */ React.createElement(Column, {
    size: 4
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      color: color || colorDefault,
      fontSize: "1.4em",
      textAlign: "center",
      marginBottom: 10
    }
  }, year)), /* @__PURE__ */ React.createElement(Column, {
    size: 4
  }, /* @__PURE__ */ React.createElement("div", {
    style: {cursor: "pointer", textAlign: "center", color: "gray"},
    onClick: () => handleYearChange(year + 1)
  }, year + 1))), /* @__PURE__ */ React.createElement("hr", {
    style: {
      backgroundColor: "#dee2e6",
      border: "none",
      marginRight: 20,
      height: "1px"
    }
  }), /* @__PURE__ */ React.createElement(Row, null, C.months.map((m, i) => {
    const weekStart = new Date(year, i, 1).getDay();
    const daysInMonth = new Date(year, i + 1, 0).getDate();
    const days = U.getArrOfNumber(daysInMonth);
    const daysWithFrontPadding = [
      ...U.getPadding(weekStart - 1),
      ...days
    ];
    const rows = U.splitDaysInWeekRows(daysWithFrontPadding);
    const getSelectedDay = () => {
      if (i === date.getMonth()) {
        return day;
      }
      return null;
    };
    return /* @__PURE__ */ React.createElement(Column, {
      size: 3
    }, /* @__PURE__ */ React.createElement(Header, {
      color: color || colorDefault,
      year,
      month: i,
      showYear: false,
      enableControls: false,
      onMonthChange: () => {
      },
      onYearChange: () => {
      }
    }), /* @__PURE__ */ React.createElement(Calendar, {
      rows,
      daySelected: getSelectedDay(),
      onDayChange: (d) => handleDayChange(d, i),
      color: color || colorDefault,
      shrinked: true
    }));
  })));
};
