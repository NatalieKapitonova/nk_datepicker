import React, { useState } from "react";
import Popover from "../components/popover";

import MonthCalendar from "../components/calendar/month";
import YearCalendar from "../components/calendar/year";
import ToggleCalendars from "../components/calendar/toggle";

import Button from "../components/button";

export default () => {
  const [openMonth, setOpenMonth] = useState<boolean>(false);
  const [openYear, setOpenYear] = useState<boolean>(false);
  const [openZoom, setOpenZoom] = useState<boolean>(false);
  const [isYearCalendar, setIsYearCalendar] = useState<boolean>(false);

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  return (
    <div
      style={{
        padding: 50,
        paddingTop: 200,
        textAlign: "center",
        verticalAlign: "middle",
      }}
    >
      <div style={{ verticalAlign: "center", marginBottom: 50, color: "gray" }}>
        <i>{selectedDate && selectedDate.toDateString()}</i>
      </div>
      <Button onClick={() => setOpenMonth(true)}>Month calendar</Button>
      <Button onClick={() => setOpenYear(true)}>Year calendar</Button>
      <Button onClick={() => setOpenZoom(true)}>Zoom in/out</Button>
      <Popover open={openMonth} onClose={() => setOpenMonth(false)} size="sm">
        <MonthCalendar
          date={selectedDate}
          onSelectDate={(d) => {
            setSelectedDate(d);
            setOpenMonth(false);
          }}
        />
      </Popover>
      <Popover open={openYear} onClose={() => setOpenYear(false)} size="lg">
        <YearCalendar
          date={selectedDate}
          onSelectDate={(d) => {
            setSelectedDate(d);
            setOpenYear(false);
          }}
        />
      </Popover>
      <Popover
        open={openZoom}
        onClose={() => setOpenZoom(false)}
        size={isYearCalendar ? "lg" : "sm"}
      >
        <ToggleCalendars
          date={selectedDate}
          onSelectDate={(d) => {
            setSelectedDate(d);
            setOpenZoom(false);
          }}
          onToggle={(b) => setIsYearCalendar(b)}
        />
      </Popover>
    </div>
  );
};
