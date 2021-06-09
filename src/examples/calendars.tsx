import React from "react";

import Calendar from "../components/calendar/month";

export default () => {
  return (
    <div style={{ padding: 40, flexDirection: "row" }}>
      <div style={{ width: "50%" }}>
        <Calendar date={new Date()} onSelectDate={(i) => {}} />
      </div>
    </div>
  );
};
