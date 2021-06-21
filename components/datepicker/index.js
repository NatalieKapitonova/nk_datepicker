import React, {useState, useEffect} from "../../_snowpack/pkg/react.js";
import Toggle from "../calendar/toggle/index.js";
import Input from "../input/index.js";
import Popover from "../popover/index.js";
import Btn from "./components/ok-button.js";
import * as U from "./utils.js";
import {CorePicker} from "../../_snowpack/pkg/nk_datepicker_core.js";
const colorDefault = "#ef476f";
const CalendarOverlayBasic = (props) => {
  const [isYear, setIsYear] = useState(false);
  const handleSelect = (d) => {
    props.onSelectDate(d);
  };
  return /* @__PURE__ */ React.createElement(Popover, {
    open: props.open,
    size: isYear ? "lg" : "sm",
    onClose: props.onClose
  }, /* @__PURE__ */ React.createElement(Toggle, {
    date: props.date,
    onSelectDate: handleSelect,
    onToggle: () => setIsYear(!isYear),
    color: props.color || colorDefault
  }), props.children);
};
const CalendarCustom = (outerProps) => (props) => {
  const [date, setDate] = useState(props.date);
  useEffect(() => {
    if (props.date && props.date !== date) {
      setDate(U.getDate(props.date));
    }
  }, [props.date]);
  const handleChange = () => {
    if (date === null) {
      props.onSelectDate(null);
    }
    props.onSelectDate(date);
  };
  const handleSelectDate = (d) => {
    setDate(d);
    if (outerProps.selectMethod === "click_and_close") {
      props.onSelectDate(d);
    }
  };
  const handleClear = () => {
    setDate(null);
    props.onSelectDate(null);
  };
  return /* @__PURE__ */ React.createElement(CalendarOverlayBasic, {
    onClose: props.onClose,
    open: props.open,
    date,
    onSelectDate: handleSelectDate,
    color: outerProps.color
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, (outerProps.selectMethod === "ok_button" || !outerProps.selectMethod) && /* @__PURE__ */ React.createElement(Btn, {
    onClick: () => handleChange(),
    color: outerProps.color || colorDefault,
    label: "OK"
  }), outerProps.showClear && /* @__PURE__ */ React.createElement(Btn, {
    onClick: () => handleClear(),
    color: outerProps.color || colorDefault,
    label: "Clear"
  }), outerProps.showToday && /* @__PURE__ */ React.createElement(Btn, {
    onClick: () => handleSelectDate(new Date()),
    label: "Today",
    color: outerProps.color || colorDefault
  })));
};
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
  useEffect(() => {
    if (props.date && props.date !== date) {
      setDate(U.getDate(props.date));
    }
  }, [props.date]);
  const handleChange = (d, name2) => {
    onChange(d, name2);
  };
  const CalendarOverlay = CalendarCustom({
    showClear,
    showToday,
    selectMethod,
    color
  });
  const Datepicker = (props2) => CorePicker({Input, CalendarOverlay})(props2);
  return /* @__PURE__ */ React.createElement(Datepicker, {
    name,
    value: date,
    onChange: handleChange,
    disabled,
    outputDateFormat
  });
};
