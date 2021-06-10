import React, {useState, useEffect} from "../../_snowpack/pkg/react.js";
import Toggle from "../calendar/toggle/index.js";
import Input from "../input/index.js";
import Popover from "../popover/index.js";
import Btn from "./components/ok-button.js";
import * as U from "./utils.js";
const colorDefault = "#ef476f";
export default (props) => {
  const {
    onChange,
    selectMethod,
    disabled,
    name,
    outputDateFormat,
    color,
    showClear,
    showToday
  } = props;
  const [date, setDate] = useState(props.date ? U.getDate(props.date) : null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isYearCalendar, setIsYearCalendar] = useState(false);
  const [dateFormatted, setDateFormatted] = useState(U.formatDateString(date, props.pattern));
  useEffect(() => {
    if (props.date && props.date !== date) {
      setDate(U.getDate(props.date));
    }
  }, [props.date]);
  const handleSelectDate = (d) => {
    setDate(d);
    console.log(d);
    if (selectMethod === "click_and_close") {
      if (d === null) {
        onChange(null, name);
      }
      if (outputDateFormat === "ISO") {
        onChange(U.dateToIso(d), name);
      } else {
        onChange(d, name);
      }
      setDateFormatted(U.formatDateString(d, props.pattern));
      setShowCalendar(false);
      setIsYearCalendar(false);
    }
  };
  const handleChange = () => {
    if (date === null) {
      onChange(null, name);
    }
    if (outputDateFormat === "ISO") {
      onChange(U.dateToIso(date), name);
    } else {
      onChange(date, name);
    }
    setDateFormatted(U.formatDateString(date, props.pattern));
    setShowCalendar(false);
    setIsYearCalendar(false);
  };
  const handleClear = () => {
    setDate(null);
    setDateFormatted("");
    onChange(null, name);
    setShowCalendar(false);
    setIsYearCalendar(false);
  };
  const handleToggle = (b) => {
    setIsYearCalendar(b);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Input, {
    name,
    onChange: () => {
    },
    onClick: () => setShowCalendar(!showCalendar),
    value: dateFormatted,
    disabled,
    placeholder: props.pattern
  }), /* @__PURE__ */ React.createElement(Popover, {
    open: showCalendar,
    onClose: () => setShowCalendar(false),
    size: isYearCalendar ? "lg" : "sm"
  }, /* @__PURE__ */ React.createElement(Toggle, {
    date,
    onSelectDate: handleSelectDate,
    onToggle: handleToggle,
    color: color || colorDefault
  }), /* @__PURE__ */ React.createElement("br", null), showClear && /* @__PURE__ */ React.createElement(Btn, {
    onClick: () => handleClear(),
    color: color || colorDefault,
    label: "Clear"
  }), showToday && /* @__PURE__ */ React.createElement(Btn, {
    onClick: () => handleSelectDate(new Date()),
    label: "Today",
    color: color || colorDefault
  }), (selectMethod === "ok_button" || selectMethod === void 0) && /* @__PURE__ */ React.createElement(Btn, {
    onClick: () => handleChange(),
    color: color || colorDefault,
    label: "OK"
  })));
};
