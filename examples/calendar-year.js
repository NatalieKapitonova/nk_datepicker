import React from "../_snowpack/pkg/react.js";
import YearCalendar from "../components/calendar/year/index.js";
export default () => {
  return /* @__PURE__ */ React.createElement("div", {
    style: {padding: 40, flexDirection: "row"}
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(YearCalendar, {
    date: new Date(),
    onSelectDate: () => {
    }
  })));
};
