import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Body from "../components/body";
import * as U from "../utils";
import * as T from "../type";
import styled from "styled-components";

// todo
const colorDefault = "#ef476f";

export default (props: T.CalemdarProps) => {
  const color = props.color;
  const { onSelectDate } = props;

  const [date, setDate] = useState<Date | null>(props.date);

  const [day, setDay] = useState<number>(U.getDay(props.date, props.day));
  const [month, setMonth] = useState<number>(
    U.getMonth(props.date, props.month)
  );
  const [year, setYear] = useState<number>(U.getYear(props.date, props.year));

  const [weekStart, setWeekStart] = useState<number>(
    new Date(year, month, 1).getDay()
  );

  useEffect(() => {
    if (props.date !== date && props.date !== null) {
      setDate(props.date);
      const d = U.getDay(props.date);
      const m = U.getMonth(props.date);
      const y = props.date.getFullYear();
      setDay(d);
      setMonth(m);
      setYear(y);
      setWeekStart(new Date(y, m, 1).getDay());
    }
  }, [props.date]);

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = U.getArrOfNumber(daysInMonth);
  const daysWithFrontPadding = [...U.getPadding(weekStart - 1), ...days];

  const rows = U.splitDaysInWeekRows(daysWithFrontPadding);

  const handleDayChange = (i: number) => {
    setDay(i);
    const d = new Date(year, month, i);
    setDate(d);
    onSelectDate(d);
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
          color={color || colorDefault}
          showYear={true}
          enableControls={true}
        />
        <Body
          rows={rows}
          daySelected={getSelectedDay()}
          onDayChange={handleDayChange}
          color={color || colorDefault}
        />
      </Table>
    </>
  );
};

const Table = styled.table`
  border: none;
  width: 100%;
`;
