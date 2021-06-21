import React, { useState } from "react";

import Calendar from "../components/calendar/month";
import Input from "../components/input";
import Overlay from "../components/popover";

import { Types, CorePicker } from "nk_datepicker_core";

const DatepickerWithCore = (props: Types.CoreProps) =>
  CorePicker({ Input, Calendar, Overlay })(props);

export default () => {
  const [date, setDate] = useState<Types.DateValue>(null);
  return (
    <DatepickerWithCore
      name="myDate"
      onChange={(v) => setDate(v)}
      value={date}
    />
  );
};
