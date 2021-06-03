import React from 'react';

import * as C from '../utils/constants';

interface Props {
  color: string;
  year: number;
  month: number;
  showYear: boolean;
  enableControls: boolean;
  onYearChange: (y: number) => void;
  onMonthChange: (m: number) => void;
}

const color = '#ef476f';

const Year = (props: { year: number; onYearChange: (i: number) => void }) => {
  const { year, onYearChange } = props;
  return (
    <>
      <tr style={{ textAlign: 'center' }}>
        <td colSpan={1} style={{ fontSize: '0.7em', color: 'gray' }}>
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => onYearChange(year - 1)}
          >
            {year - 1}
          </span>
        </td>
        <td colSpan={5} style={{ color, fontSize: '1.4em' }}>
          {year}
        </td>
        <td colSpan={1} style={{ fontSize: '0.7em', color: 'gray' }}>
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => onYearChange(year + 1)}
          >
            {year + 1}
          </span>
        </td>
      </tr>
    </>
  );
};

const Month = (props: {
  month: number;
  onMonthChange: (i: number) => void;
  enableControls: boolean;
}) => {
  const { month, onMonthChange, enableControls } = props;
  return (
    <>
      <tr style={{ textAlign: 'center' }}>
        <td colSpan={1} style={{ fontSize: '0.7em', color: 'gray' }}>
          {enableControls && (
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => onMonthChange(month - 1)}
            >
              {(C.months[month - 1] || C.months[C.months.length - 1]).substring(
                0,
                3
              )}
            </span>
          )}
        </td>
        <td colSpan={5} style={{ padding: 10, color, fontSize: '1.4em' }}>
          {C.months[month]}
        </td>
        <td colSpan={1} style={{ fontSize: '0.7em', color: 'gray' }}>
          {enableControls && (
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => onMonthChange(month + 1)}
            >
              {(C.months[month + 1] || C.months[0]).substring(0, 3)}
            </span>
          )}
        </td>
      </tr>
    </>
  );
};
export default (props: Props) => {
  const { year, month, onYearChange, onMonthChange, showYear, enableControls } =
    props;
  return (
    <thead style={{ fontWeight: 'initial' }}>
      {showYear && <Year onYearChange={onYearChange} year={year} />}
      <Month
        month={month}
        onMonthChange={onMonthChange}
        enableControls={enableControls}
      />
    </thead>
  );
};
