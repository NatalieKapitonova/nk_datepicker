import React, { useState, useEffect } from "react";

import Toggle from "../calendar/toggle";
import Input from "../input";
import Popover from "../popover";
import Btn from "./components/ok-button";

import * as T from "./type";
import * as U from "./utils";

import { CorePicker, Types, UITypes } from "nk_datepicker_core";

const colorDefault = "#ef476f";

const CalendarOverlayBasic = (
  props: UITypes.CalendarOverlayProps & {
    children?: JSX.Element;
    color?: string;
  }
) => {
  const [isYear, setIsYear] = useState<boolean>(false);

  const handleSelect = (d: Date) => {
    props.onSelectDate(d);
  };

  return (
    <Popover
      open={props.open}
      size={isYear ? "lg" : "sm"}
      onClose={props.onClose}
    >
      <Toggle
        date={props.date}
        onSelectDate={handleSelect}
        onToggle={() => setIsYear(!isYear)}
        color={props.color || colorDefault}
      />
      {props.children}
    </Popover>
  );
};

const CalendarCustom = (outerProps: {
  color?: string;
  showClear?: boolean;
  showToday?: boolean;
  selectMethod: T.SelectMethod;
}) => (props: UITypes.CalendarOverlayProps): JSX.Element => {
  const [date, setDate] = useState<Date | null>(props.date);

  useEffect(() => {
    if (props.date && props.date !== date) {
      setDate(U.getDate(props.date));
    }
  }, [props.date]);

  const handleChange = () => {
    if (date === null) {
      props.onSelectDate(null);
    }

    props.onSelectDate(date);
  };
  const handleSelectDate = (d: Date | null) => {
    setDate(d);
    if (outerProps.selectMethod === "click_and_close") {
      props.onSelectDate(d);
    }
  };

  const handleClear = () => {
    setDate(null);
    props.onSelectDate(null);
  };
  return (
    <CalendarOverlayBasic
      onClose={props.onClose}
      open={props.open}
      date={date}
      onSelectDate={handleSelectDate}
      color={outerProps.color}
    >
      <>
        {(outerProps.selectMethod === "ok_button" ||
          !outerProps.selectMethod) && (
          <Btn
            onClick={() => handleChange()}
            color={outerProps.color || colorDefault}
            label="OK"
          />
        )}
        {outerProps.showClear && (
          <Btn
            onClick={() => handleClear()}
            color={outerProps.color || colorDefault}
            label="Clear"
          />
        )}
        {outerProps.showToday && (
          <Btn
            onClick={() => handleSelectDate(new Date())}
            label="Today"
            color={outerProps.color || colorDefault}
          />
        )}
      </>
    </CalendarOverlayBasic>
  );
};

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

  useEffect(() => {
    if (props.date && props.date !== date) {
      setDate(U.getDate(props.date));
    }
  }, [props.date]);

  const handleChange = (d: Date, name: string) => {
    onChange(d, name);
  };

  const CalendarOverlay = CalendarCustom({
    showClear,
    showToday,
    selectMethod,
    color,
  });

  const Datepicker = (props: Types.CoreProps) =>
    CorePicker({ Input, CalendarOverlay })(props);

  return (
    <Datepicker
      name={name}
      value={date}
      onChange={handleChange}
      disabled={disabled}
      outputDateFormat={outputDateFormat}
    />
  );
};
