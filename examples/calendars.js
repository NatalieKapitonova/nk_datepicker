import React from "../_snowpack/pkg/react.js";
import Calendar from "../components/calendar/index.js";
export default () => {
  return /* @__PURE__ */ React.createElement("div", {
    style: {padding: 40, flexDirection: "row"}
  }, /* @__PURE__ */ React.createElement("div", {
    style: {width: "50%"}
  }, /* @__PURE__ */ React.createElement(Calendar, {
    date: new Date(),
    onSelectDate: (i) => {
    }
  })));
};
