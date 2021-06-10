import React from "react";

import WeekDays from "./week-days";
import styled from "styled-components";
import { useWindowDimensions } from "../utils";

interface Props {
  rows: number[][];
  daySelected: number | null;
  onDayChange: (i: number) => void;
  shrinked?: boolean;
  color: string;
}

export default (props: Props) => {
  const { mobile } = useWindowDimensions();
  const { rows, onDayChange, daySelected, shrinked, color } = props;
  return (
    <tbody>
      <WeekDays shrinked={shrinked} />
      {rows.map((row) => (
        <tr>
          {row.map((r, i) => (
            <Day
              color={daySelected === r ? color : "black"}
              shrinked={shrinked}
              onClick={() => onDayChange(r)}
              mobile={mobile}
            >
              {r === 0 ? "" : r}
            </Day>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

interface StyledProps {
  color: string;
  shrinked?: boolean;
  mobile: boolean;
}

const getPadding = (shrinked: boolean, mobile: boolean) => {
  // if (!shrinked) {
  //   return "10px";
  // }
  // if (mobile) {
  //   return "1px";
  // }
  // return "8px";
  return "2px";
};

const getFontSize = (shrinked: boolean, mobile: boolean) => {
  if (!shrinked) {
    return "0.9em";
  }
  if (mobile) {
    return "0.5em";
  }

  return "0.8em";
};

const getWidth = (shrinked: boolean, mobile: boolean) => {
  if (!shrinked) {
    return "40px";
  }
  if (mobile) {
    return "3px";
  }
  return "25px";
};
const Day = styled.td`
  margin: 2px;
  // padding: ${(props: StyledProps) =>
    getPadding(props.shrinked, props.mobile)};
  width: ${(props: StyledProps) => getWidth(props.shrinked, props.mobile)};
  height: ${(props: StyledProps) => getWidth(props.shrinked, props.mobile)};
  text-align: center;
  cursor: pointer;
  font-size: ${(props: StyledProps) =>
    getFontSize(props.shrinked, props.mobile)};
  color: ${(props: StyledProps) => props.color};

  transition: width 1.5s ease, max-width 1.5s ease;
`;
