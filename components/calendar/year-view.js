import React, {useState} from "../../_snowpack/pkg/react.js";
import Calendar from "./components/body.js";
import Header from "./components/header.js";
import * as C from "./utils/constants.js";
import * as U from "./utils/index.js";
import OK from "./components/ok-button.js";
import Row from "../grid/row.js";
import Column from "../grid/column.js";
export default (props) => {
  const {onSelectDate} = props;
  const [date, setDate] = useState(props.date || new Date());
  const [day, setDay] = useState(date.getDate());
  const year = date.getFullYear();
  const handleDayChange = (d, m) => {
    setDay(d);
    setDate(new Date(year, m, d));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Row, null, C.months.map((m, i) => {
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
    return /* @__PURE__ */ React.createElement(Column, null, /* @__PURE__ */ React.createElement(Header, {
      color: "",
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
      shrinked: true
    }));
  }), /* @__PURE__ */ React.createElement(OK, {
    onClick: () => onSelectDate(date)
  })));
};
