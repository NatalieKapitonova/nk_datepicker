import React, { useState } from 'react';

import Toggle from '../calendar/toggle';
import Input from '../input';
import Popover from '../popover';

interface Props {
  date?: Date;
  onChange: (d: Date) => void;
  pattern?: DateFormat;
}

type DateFormat = 'DD/MM/YYYY' | 'DD.MM.YYYY';
const formatDate = (d: Date, pattern?: DateFormat): string => {
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  switch (pattern) {
    case 'DD.MM.YYYY':
      return [getPadding(day), getPadding(month), year].join('.');
    case 'DD/MM/YYYY':
      return [getPadding(day), getPadding(month), year].join('/');
    default:
      return [getPadding(day), getPadding(month), year].join('.');
  }
};

const getPadding = (n: number) => {
  if (n < 10) {
    return `0${n}`;
  }
  return n;
};
export default (props: Props) => {
  const { onChange } = props;
  const [date, setDate] = useState<Date>(props.date || new Date());
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [isYearCalendar, setIsYearCalendar] = useState<boolean>(false);

  return (
    <>
      <Input
        name="nk_date"
        onChange={() => {}}
        onClick={() => setShowCalendar(!showCalendar)}
        value={formatDate(date)}
      />
      <Popover
        open={showCalendar}
        onClose={() => setShowCalendar(false)}
        size={isYearCalendar ? 'lg' : 'sm'}
      >
        <Toggle
          date={date}
          onSelectDate={d => {
            setDate(d);
            setShowCalendar(false);
            setIsYearCalendar(false);
            onChange(d);
          }}
          onToggle={b => setIsYearCalendar(b)}
        />
      </Popover>
    </>
  );
};
