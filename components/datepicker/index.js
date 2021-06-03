import React, {useState} from "../../_snowpack/pkg/react.js";
import Toggle from "../calendar/toggle.js";
import Input from "../input/index.js";
import Popover from "../popover/index.js";
const formatDate = (d, pattern) => {
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  switch (pattern) {
    case "DD.MM.YYYY":
      return [getPadding(day), getPadding(month), year].join(".");
    case "DD/MM/YYYY":
      return [getPadding(day), getPadding(month), year].join("/");
    default:
      return [getPadding(day), getPadding(month), year].join(".");
  }
};
const getPadding = (n) => {
  if (n < 10) {
    return `0${n}`;
  }
  return n;
};
export default (props) => {
  const {onChange} = props;
  const [date, setDate] = useState(props.date || new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [isYearCalendar, setIsYearCalendar] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Input, {
    name: "nk_date",
    onChange: () => {
    },
    onClick: () => setShowCalendar(!showCalendar),
    value: formatDate(date)
  }), /* @__PURE__ */ React.createElement(Popover, {
    open: showCalendar,
    onClose: () => setShowCalendar(false),
    size: isYearCalendar ? "lg" : "sm"
  }, /* @__PURE__ */ React.createElement(Toggle, {
    date,
    onSelectDate: (d) => {
      setDate(d);
      setShowCalendar(false);
      setIsYearCalendar(false);
      onChange(d);
    },
    onToggle: (b) => setIsYearCalendar(b)
  })));
};
