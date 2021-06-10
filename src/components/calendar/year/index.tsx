import React, { useState } from "react";

import Calendar from "../components/body";
import Header from "../components/header";
import * as C from "../utils/constants";
import * as U from "../utils";

import Row from "../../grid/row";
import Column from "../../grid/column";

interface Props {
  date?: Date;
  onSelectDate: (d: Date) => void;
  color?: string;
}

const colorDefault = "#ef476f";
export default (props: Props) => {
  const { mobile } = U.useWindowDimensions();
  const { onSelectDate, color } = props;
  const [date, setDate] = useState<Date>(props.date || new Date());
  const [day, setDay] = useState<number>(date.getDate());
  const [year, setYear] = useState<number>(date.getFullYear());

  const handleDayChange = (d: number, m: number) => {
    setDay(d);
    const newD = new Date(year, m, d);
    setDate(newD);
    onSelectDate(newD);
  };

  const handleYearChange = (y: number) => {
    setYear(y);
  };

  return (
    <>
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
              color: color || colorDefault,
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
            <Column size={mobile ? 4 : 3}>
              <Header
                color={color || colorDefault}
                year={year}
                month={i}
                showYear={false}
                enableControls={false}
                onMonthChange={() => {}}
                onYearChange={() => {}}
              />
              <table>
                <Calendar
                  rows={rows}
                  daySelected={getSelectedDay()}
                  onDayChange={(d) => handleDayChange(d, i)}
                  color={color || colorDefault}
                  shrinked
                />
              </table>
            </Column>
          );
        })}
      </Row>
    </>
  );
};
