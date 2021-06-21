import React, {useState} from "../_snowpack/pkg/react.js";
import Calendar from "../components/calendar/month/index.js";
import Input from "../components/input/index.js";
import Overlay from "../components/popover/index.js";
import {CorePicker} from "../_snowpack/pkg/nk_datepicker_core.js";
const DatepickerWithCore = (props) => CorePicker({Input, Calendar, Overlay})(props);
export default () => {
  const [date, setDate] = useState(null);
  return /* @__PURE__ */ React.createElement(DatepickerWithCore, {
    name: "myDate",
    onChange: (v) => setDate(v),
    value: date
  });
};
