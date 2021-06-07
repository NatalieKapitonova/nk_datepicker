import React, { useState } from "react";
import Header from "../calendar/components/header";
import Body from "../calendar/components/body";
import * as U from "./utils";
import styled from "styled-components";
import OK from "./components/ok-button";

// const color = "#1a759f"; // todo: have default and accept from props
const colorDefault = "#ef476f";

interface Props {
  date?: Date | null;
  day?: number;
  month?: number;
  year?: number;
  color?: string;
  onSelectDate: (date: Date) => void;
}

const getDay = (d: Date | null, day?: number): number => {
  if (day) {
    return day;
  }
  if (d) {
    return d.getDate();
  }

  return new Date().getDate();
};

const getMonth = (d: Date | null, month?: number): number => {
  if (month !== undefined) {
    return month;
  }
  if (d) {
    return d.getMonth();
  }
  return new Date().getMonth();
};

const getYear = (d: Date | null, year?: number) => {
  if (year) {
    return year;
  }
  if (d) {
    return d.getFullYear();
  }
  return new Date().getFullYear();
};

export default (props: Props) => {
  const color = props.color || colorDefault;
  const { onSelectDate } = props;

  const [date, setDate] = useState<Date | null>(props.date);

  const [day, setDay] = useState<number>(getDay(props.date, props.day));
  const [month, setMonth] = useState<number>(getMonth(props.date, props.month));
  const [year, setYear] = useState<number>(getYear(props.date, props.year));

  const [weekStart, setWeekStart] = useState<number>(
    new Date(year, month, 1).getDay()
  );

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = U.getArrOfNumber(daysInMonth);
  const daysWithFrontPadding = [...U.getPadding(weekStart - 1), ...days];

  const rows = U.splitDaysInWeekRows(daysWithFrontPadding);

  const handleDayChange = (i: number) => {
    setDay(i);
    setDate(new Date(year, month, i));
  };

  const handleMonthChange = (i: number) => {
    const m = i < 0 ? 11 : i > 11 ? 0 : i;
    const y = i < 0 ? year - 1 : i > 11 ? year + 1 : year;
    setMonth(m);
    setYear(y);
    setWeekStart(new Date(y, m, 1).getDay());
  };

  const handleYearChange = (i: number) => {
    setYear(i);
    setWeekStart(new Date(i, month, 1).getDay());
  };

  const getSelectedDay = (): number | null => {
    if (month === date.getMonth() && year === date.getFullYear()) {
      return day;
    }
    return null;
  };

  return (
    <>
      <Table cellPadding={0} cellSpacing={0}>
        <Header
          year={year}
          month={month}
          onMonthChange={handleMonthChange}
          onYearChange={handleYearChange}
          color={color}
          showYear={true}
          enableControls={true}
        />
        <Body
          rows={rows}
          daySelected={getSelectedDay()}
          onDayChange={handleDayChange}
        />
        <OK onClick={() => onSelectDate(date)} color={color} />
      </Table>
    </>
  );
};

const Table = styled.table`
  border: none;
`;
