import React, { useState, useEffect } from "react";

import Toggle from "../calendar/toggle";
import Input from "../input";
import Popover from "../popover";
import Btn from "./components/ok-button";

import * as T from "./type";
import * as U from "./utils";

const colorDefault = "#ef476f";

export default (props: T.DatepickerProps) => {
  const {
    onChange,
    selectMethod,
    disabled,
    name,
    outputDateFormat,
    color,
    showClear,
    showToday,
  } = props;
  const [date, setDate] = useState<Date | null>(
    props.date ? U.getDate(props.date) : null
  );
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [isYearCalendar, setIsYearCalendar] = useState<boolean>(false);
  const [dateFormatted, setDateFormatted] = useState<string>(
    U.formatDate(date, props.pattern)
  );

  useEffect(() => {
    if (props.date && props.date !== date) {
      setDate(U.getDate(props.date));
    }
  }, [props.date]);

  const handleSelectDate = (d: Date | null) => {
    setDate(d);

    console.log(d);
    if (selectMethod === "click_and_close") {
      if (d === null) {
        onChange(null, name);
      }
      if (outputDateFormat === "ISO") {
        onChange(U.dateToIso(d), name);
      } else {
        onChange(d, name);
      }
      setDateFormatted(U.formatDate(d, props.pattern));
      setShowCalendar(false);
      setIsYearCalendar(false);
    }
  };

  const handleChange = () => {
    if (date === null) {
      onChange(null, name);
    }
    if (outputDateFormat === "ISO") {
      onChange(U.dateToIso(date), name);
    } else {
      onChange(date, name);
    }
    setDateFormatted(U.formatDate(date, props.pattern));
    setShowCalendar(false);
    setIsYearCalendar(false);
  };

  const handleClear = () => {
    setDate(null);
    setDateFormatted("");
    onChange(null, name);
    setShowCalendar(false);
    setIsYearCalendar(false);
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
        value={dateFormatted}
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
          color={color || colorDefault}
        />
        {showClear && (
          <Btn
            onClick={() => handleClear()}
            color={color || colorDefault}
            label="Clear"
          />
        )}
        {showToday && (
          <Btn
            onClick={() => handleSelectDate(new Date())}
            label="Today"
            color={color || colorDefault}
          />
        )}
        {(selectMethod === "ok_button" || selectMethod === undefined) && (
          <Btn
            onClick={() => handleChange()}
            color={color || colorDefault}
            label="OK"
          />
        )}
      </Popover>
    </>
  );
};
