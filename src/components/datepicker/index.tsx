import React, { useState, useEffect } from "react";

import Toggle from "../calendar/toggle";
import Input from "../input";
import Popover from "../popover";

import * as T from "./type";
import * as U from "./utils";

const getDate = (d?: string | Date | null): Date | null => {
  if (!d) {
    return null;
  }
  if (typeof d === "string") {
    return new Date(d);
  }

  return d;
};
export default (props: T.Props) => {
  const { onChange, selectMethod, disabled, name, outputDateFormat } = props;
  const [date, setDate] = useState<Date | null>(
    props.date ? getDate(props.date) : null
  );
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [isYearCalendar, setIsYearCalendar] = useState<boolean>(false);

  useEffect(() => {
    if (props.date && props.date !== date) {
      setDate(getDate(props.date));
    }
  }, [props.date]);

  const handleSelectDate = (d: Date) => {
    setDate(d);
    setShowCalendar(false);
    setIsYearCalendar(false);
    if (outputDateFormat === "ISO") {
      onChange(U.dateToIso(d), name);
    } else {
      onChange(d, name);
    }
  };

  const handleToggle = (b: boolean) => {
    setIsYearCalendar(b);
  };

  return (
    <>
      <Input
        name={name}
        onChange={() => {}}
        onClick={() => setShowCalendar(!showCalendar)}
        value={U.formatDate(date, props.pattern)}
        disabled={disabled}
        placeholder={props.pattern}
      />
      <Popover
        open={showCalendar}
        onClose={() => setShowCalendar(false)}
        size={isYearCalendar ? "lg" : "sm"}
      >
        <Toggle
          date={date}
          onSelectDate={handleSelectDate}
          onToggle={handleToggle}
        />
      </Popover>
    </>
  );
};
