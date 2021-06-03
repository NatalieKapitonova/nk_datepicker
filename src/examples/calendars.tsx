import React from "react";
import D from "../components/datepicker";

import Calendar from "../components/calendar";
import YearCalendar from "../components/calendar/year-view";

export default () => {
  return (
    <div style={{ padding: 40, flexDirection: "row" }}>
      <div style={{ width: "50%" }}>
        <Calendar date={new Date()} onSelectDate={(i) => {}} />
      </div>
    </div>
  );
};
