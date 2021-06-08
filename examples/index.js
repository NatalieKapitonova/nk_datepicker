import React from "../_snowpack/pkg/react.js";
import {Switch, Route, Redirect} from "../_snowpack/pkg/react-router-dom.js";
import Button from "./button.js";
import Calendar from "./calendars.js";
import CalendarYear from "./calendar-year.js";
import Popover from "./popover.js";
import Input from "./input.js";
import Datepicker from "./date.js";
import Layout from "./layout.js";
export default () => {
  return /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Redirect, {
    from: "/",
    to: "/examples/date"
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/examples/button",
    component: Button
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/examples/calendar",
    component: Calendar
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/examples/calendar-year",
    component: CalendarYear
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/examples/popover",
    component: Popover
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/examples/input",
    component: Input
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/examples/date",
    component: Datepicker
  })));
};
