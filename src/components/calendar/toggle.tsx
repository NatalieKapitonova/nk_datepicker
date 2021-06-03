import React, { useState } from 'react';

import MonthCalendar from '.';
import YearCalendar from './year-view';

import styled from 'styled-components';

interface Props {
  date: Date;
  onSelectDate: (d: Date) => void;
  onToggle: (isYear: boolean) => void;
}

export default (props: Props) => {
  const { onSelectDate, onToggle } = props;
  const [isYearCalendar, setIsYearCalendar] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(props.date || new Date());

  if (isYearCalendar) {
    return (
      <>
        <ToggleIcon
          className="toggle-collapse"
          onClick={() => {
            setIsYearCalendar(!isYearCalendar);
            onToggle(false);
          }}
        >
          &#8601;
        </ToggleIcon>
        <YearCalendar
          date={date}
          onSelectDate={d => {
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
        className="toggle-expand"
        onClick={() => {
          setIsYearCalendar(!isYearCalendar);
          onToggle(true);
        }}
      >
        &#10535;
      </ToggleIcon>
      <MonthCalendar
        date={date}
        onSelectDate={d => {
          setDate(d);
          onSelectDate(d);
        }}
      />
    </>
  );
};

const ToggleIcon = styled.span`
  color: #aaa;
  float: right;
  margin-top: -14px;
  margin-right: 10px;
  cursor: pointer;

  &.toggle-expand {
    font-weight: bolder;
  }

  &.toggle-collapse {
    font-size: 1.5em;
    margin-top: -16px;
  }
`;
