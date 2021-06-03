import React from "react";

import WeekDays from "./week-days";
import styled from "styled-components";

interface Props {
  rows: number[][];
  daySelected: number | null;
  onDayChange: (i: number) => void;
  shrinked?: boolean;
}
const color = "#ef476f";
export default (props: Props) => {
  const { rows, onDayChange, daySelected, shrinked } = props;
  return (
    <>
      <WeekDays shrinked={shrinked} />
      {rows.map((row) => (
        <tr>
          {row.map((r, i) => (
            <Day
              color={daySelected === r ? color : "black"}
              shrinked={shrinked}
              onClick={() => onDayChange(r)}
            >
              {r === 0 ? "" : r}
            </Day>
          ))}
        </tr>
      ))}
    </>
  );
};

interface StyledProps {
  color: string;
  shrinked?: boolean;
}
const Day = styled.td`
  margin: 2px;
  padding: ${(props: StyledProps) => (props.shrinked ? "8px" : "10px")};
  text-align: center;
  cursor: pointer;
  font-size: ${(props: StyledProps) => (props.shrinked ? "0.8em" : "inherit")};
  color: ${(props: StyledProps) => props.color};

  transition: width 1.5s ease, max-width 1.5s ease;
`;
