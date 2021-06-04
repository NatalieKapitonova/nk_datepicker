import React, { useState } from "react";

import Calendar from "../calendar/components/body";
import Header from "../calendar/components/header";
import * as C from "./utils/constants";
import * as U from "./utils";
import OK from "./components/ok-button";
import Row from "../grid/row";
import Column from "../grid/column";
import { Year } from "./components/header";

interface Props {
  date?: Date;
  onSelectDate: (d: Date) => void;
}

// todo
const color = "#ef476f";
export default (props: Props) => {
  const { onSelectDate } = props;
  const [date, setDate] = useState<Date>(props.date || new Date());
  const [day, setDay] = useState<number>(date.getDate());
  const [year, setYear] = useState<number>(date.getFullYear());

  const handleDayChange = (d: number, m: number) => {
    setDay(d);
    setDate(new Date(year, m, d));
  };

  const handleYearChange = (y: number) => {
    setYear(y);
  };

  return (
    <>
      {/* <div style={{ alignContent: "center", display: "block" }}></div> */}
      <Row>
        <Column size={4}>
          <div
            style={{ cursor: "pointer", textAlign: "center", color: "gray" }}
            onClick={() => handleYearChange(year - 1)}
          >
            {year - 1}
          </div>
        </Column>
        <Column size={4}>
          <div
            style={{
              color,
              fontSize: "1.4em",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            {year}
          </div>
        </Column>
        <Column size={4}>
          <div
            style={{ cursor: "pointer", textAlign: "center", color: "gray" }}
            onClick={() => handleYearChange(year + 1)}
          >
            {year + 1}
          </div>
        </Column>
      </Row>
      <hr
        style={{
          backgroundColor: "#dee2e6",
          border: "none",
          marginRight: 20,
          height: "1px",
        }}
      />
      <Row>
        {C.months.map((m, i) => {
          const weekStart = new Date(year, i, 1).getDay();
          const daysInMonth = new Date(year, i + 1, 0).getDate();
          const days = U.getArrOfNumber(daysInMonth);
          const daysWithFrontPadding = [
            ...U.getPadding(weekStart - 1),
            ...days,
          ];
          const rows = U.splitDaysInWeekRows(daysWithFrontPadding);

          const getSelectedDay = (): number | null => {
            if (i === date.getMonth()) {
              return day;
            }
            return null;
          };

          return (
            <Column size={3}>
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
                onDayChange={(d) => handleDayChange(d, i)}
                shrinked
              />
            </Column>
          );
        })}
        <OK onClick={() => onSelectDate(date)} color={color} />
      </Row>
    </>
  );
};
