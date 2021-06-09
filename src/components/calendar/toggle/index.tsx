import React, { useState, useEffect } from "react";

import MonthCalendar from "../month";
import YearCalendar from "../year";

import styled from "styled-components";

interface Props {
  date: Date;
  onSelectDate: (d: Date) => void;
  onToggle: (isYear: boolean) => void;
  color?: string;
}

export default (props: Props) => {
  const { onSelectDate, onToggle, color } = props;
  const [isYearCalendar, setIsYearCalendar] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(props.date || new Date());

  useEffect(() => {
    if (props.date !== date) {
      console.log("here?");
      setDate(props.date);
    }
  }, [props.date]);

  if (isYearCalendar) {
    return (
      <>
        <ToggleIcon
          onClick={() => {
            setIsYearCalendar(!isYearCalendar);
            onToggle(false);
          }}
        >
          &#8601;
        </ToggleIcon>
        <YearCalendar
          date={date}
          color={color}
          onSelectDate={(d) => {
            setDate(d);
            onSelectDate(d);
          }}
        />
      </>
    );
  }
  return (
    <>
      <ToggleIcon
        onClick={() => {
          setIsYearCalendar(!isYearCalendar);
          onToggle(true);
        }}
      >
        &#8599;
      </ToggleIcon>
      <MonthCalendar
        date={date}
        onSelectDate={(d) => {
          setDate(d);
          onSelectDate(d);
        }}
        color={color}
      />
    </>
  );
};

const ToggleIcon = styled.span`
  color: #aaa;
  float: right;
  margin-top: -15px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 1.5em;
  margin-top: -16px;
`;
