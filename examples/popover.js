import React, {useState} from "../_snowpack/pkg/react.js";
import Popover from "../components/popover/index.js";
import MonthCalendar from "../components/calendar/index.js";
import YearCalendar from "../components/calendar/year-view.js";
import ToggleCalendars from "../components/calendar/toggle.js";
import Button from "../components/button/index.js";
export default () => {
  const [openMonth, setOpenMonth] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const [openZoom, setOpenZoom] = useState(false);
  const [isYearCalendar, setIsYearCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      padding: 50,
      paddingTop: 200,
      textAlign: "center",
      verticalAlign: "middle"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {verticalAlign: "center", marginBottom: 50, color: "gray"}
  }, /* @__PURE__ */ React.createElement("i", null, selectedDate && selectedDate.toDateString())), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpenMonth(true)
  }, "Month calendar"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpenYear(true)
  }, "Year calendar"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpenZoom(true)
  }, "Zoom in/out"), /* @__PURE__ */ React.createElement(Popover, {
    open: openMonth,
    onClose: () => setOpenMonth(false),
    size: "sm"
  }, /* @__PURE__ */ React.createElement(MonthCalendar, {
    date: selectedDate,
    onSelectDate: (d) => {
      setSelectedDate(d);
      setOpenMonth(false);
    }
  })), /* @__PURE__ */ React.createElement(Popover, {
    open: openYear,
    onClose: () => setOpenYear(false),
    size: "lg"
  }, /* @__PURE__ */ React.createElement(YearCalendar, {
    date: selectedDate,
    onSelectDate: (d) => {
      setSelectedDate(d);
      setOpenYear(false);
    }
  })), /* @__PURE__ */ React.createElement(Popover, {
    open: openZoom,
    onClose: () => setOpenZoom(false),
    size: isYearCalendar ? "lg" : "sm"
  }, /* @__PURE__ */ React.createElement(ToggleCalendars, {
    date: selectedDate,
    onSelectDate: (d) => {
      setSelectedDate(d);
      setOpenZoom(false);
    },
    onToggle: (b) => setIsYearCalendar(b)
  })));
};
