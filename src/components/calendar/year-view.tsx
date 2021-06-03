import React, { useState } from 'react';

import Calendar from '../calendar/components/body';
import Header from '../calendar/components/header';
import * as C from './utils/constants';
import * as U from './utils';
import OK from './components/ok-button';
import Row from '../grid/row';
import Column from '../grid/column';

interface Props {
  date?: Date;
  onSelectDate: (d: Date) => void;
}

export default (props: Props) => {
  const { onSelectDate } = props;
  const [date, setDate] = useState<Date>(props.date || new Date());
  const [day, setDay] = useState<number>(date.getDate());
  const year = date.getFullYear();

  const handleDayChange = (d: number, m: number) => {
    setDay(d);
    setDate(new Date(year, m, d));
  };

  return (
    <>
      <Row>
        {C.months.map((m, i) => {
          const weekStart = new Date(year, i, 1).getDay();
          const daysInMonth = new Date(year, i + 1, 0).getDate();
          const days = U.getArrOfNumber(daysInMonth);
          const daysWithFrontPadding = [
            ...U.getPadding(weekStart - 1),
            ...days
          ];
          const rows = U.splitDaysInWeekRows(daysWithFrontPadding);

          const getSelectedDay = (): number | null => {
            if (i === date.getMonth()) {
              return day;
            }
            return null;
          };

          return (
            <Column>
              <Header
                color=""
                year={year}
                month={i}
                showYear={false}
                enableControls={false}
                onMonthChange={() => {}}
                onYearChange={() => {}}
              />
              <Calendar
                rows={rows}
                daySelected={getSelectedDay()}
                onDayChange={d => handleDayChange(d, i)}
                shrinked
              />
            </Column>
          );
        })}
        <OK onClick={() => onSelectDate(date)} />
      </Row>
    </>
  );
};
