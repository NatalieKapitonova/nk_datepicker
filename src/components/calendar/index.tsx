import React, { useState } from 'react';
import Header from '../calendar/components/header';
import Body from '../calendar/components/body';
import * as U from './utils';
import styled from 'styled-components';
import OK from './components/ok-button';

// const color = "#1a759f"; // todo: have default and accept from props
const color = '#ef476f';

interface Props {
  date?: Date;
  day?: number;
  month?: number;
  year?: number;
  onSelectDate: (date: Date) => void;
}

export default (props: Props) => {
  const { onSelectDate } = props;
  const [date, setDate] = useState<Date>(props.date || new Date());
  const [day, setDay] = useState<number>(props.day || date.getDate());
  const [month, setMonth] = useState<number>(
    props.month === undefined ? date.getMonth() : props.month
  );
  const [year, setYear] = useState<number>(props.year || date.getFullYear());

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
        <OK onClick={() => onSelectDate(date)} />
      </Table>
    </>
  );
};

const Table = styled.table`
  border: none;
`;
