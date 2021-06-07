import React, {useState, useEffect} from "../../_snowpack/pkg/react.js";
import Toggle from "../calendar/toggle.js";
import Input from "../input/index.js";
import Popover from "../popover/index.js";
import * as U from "./utils.js";
const getDate = (d) => {
  if (!d) {
    return null;
  }
  if (typeof d === "string") {
    return new Date(d);
  }
  return d;
};
export default (props) => {
  const {onChange, selectMethod, disabled, name, outputDateFormat} = props;
  const [date, setDate] = useState(props.date ? getDate(props.date) : null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isYearCalendar, setIsYearCalendar] = useState(false);
  useEffect(() => {
    if (props.date && props.date !== date) {
      setDate(getDate(props.date));
    }
  }, [props.date]);
  const handleSelectDate = (d) => {
    setDate(d);
    setShowCalendar(false);
    setIsYearCalendar(false);
    if (outputDateFormat === "ISO") {
      onChange(new Date(U.formatDate(d, "YYYY-MM-DD")).toISOString(), name);
    } else {
      onChange(d, name);
    }
  };
  const handleToggle = (b) => {
    setIsYearCalendar(b);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Input, {
    name,
    onChange: () => {
    },
    onClick: () => setShowCalendar(!showCalendar),
    value: U.formatDate(date, props.pattern),
    disabled,
    placeholder: props.pattern
  }), /* @__PURE__ */ React.createElement(Popover, {
    open: showCalendar,
    onClose: () => setShowCalendar(false),
    size: isYearCalendar ? "lg" : "sm"
  }, /* @__PURE__ */ React.createElement(Toggle, {
    date,
    onSelectDate: handleSelectDate,
    onToggle: handleToggle
  })));
};
