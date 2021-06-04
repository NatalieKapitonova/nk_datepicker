import React, {useState} from "../../_snowpack/pkg/react.js";
import MonthCalendar from "./index.js";
import YearCalendar from "./year-view.js";
import styled from "../../_snowpack/pkg/styled-components.js";
export default (props) => {
  const {onSelectDate, onToggle} = props;
  const [isYearCalendar, setIsYearCalendar] = useState(false);
  const [date, setDate] = useState(props.date || new Date());
  if (isYearCalendar) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ToggleIcon, {
      onClick: () => {
        setIsYearCalendar(!isYearCalendar);
        onToggle(false);
      }
    }, "↙"), /* @__PURE__ */ React.createElement(YearCalendar, {
      date,
      onSelectDate: (d) => {
        setDate(d);
        onSelectDate(d);
      }
    }));
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ToggleIcon, {
    onClick: () => {
      setIsYearCalendar(!isYearCalendar);
      onToggle(true);
    }
  }, "↗"), /* @__PURE__ */ React.createElement(MonthCalendar, {
    date,
    onSelectDate: (d) => {
      setDate(d);
      onSelectDate(d);
    }
  }));
};
const ToggleIcon = styled.span`
  color: #aaa;
  float: right;
  margin-top: -15px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 1.5em;
  margin-top: -16px;
`;
