import React from "react";

import YearCalendar from "../components/calendar/year";

export default () => {
  return (
    <div style={{ padding: 40, flexDirection: "row" }}>
      <div>
        <YearCalendar date={new Date()} onSelectDate={() => {}} />
      </div>
    </div>
  );
};
