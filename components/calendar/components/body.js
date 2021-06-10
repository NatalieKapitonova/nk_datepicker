import React from "../../../_snowpack/pkg/react.js";
import WeekDays from "./week-days.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import {useWindowDimensions} from "../utils/index.js";
export default (props) => {
  const {mobile} = useWindowDimensions();
  const {rows, onDayChange, daySelected, shrinked, color} = props;
  return /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement(WeekDays, {
    shrinked
  }), rows.map((row) => /* @__PURE__ */ React.createElement("tr", null, row.map((r, i) => /* @__PURE__ */ React.createElement(Day, {
    color: daySelected === r ? color : "black",
    shrinked,
    onClick: () => onDayChange(r),
    mobile
  }, r === 0 ? "" : r)))));
};
const getPadding = (shrinked, mobile) => {
  return "2px";
};
const getFontSize = (shrinked, mobile) => {
  if (!shrinked) {
    return "0.9em";
  }
  if (mobile) {
    return "0.5em";
  }
  return "0.8em";
};
const getWidth = (shrinked, mobile) => {
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
  // padding: ${(props) => getPadding(props.shrinked, props.mobile)};
  width: ${(props) => getWidth(props.shrinked, props.mobile)};
  height: ${(props) => getWidth(props.shrinked, props.mobile)};
  text-align: center;
  cursor: pointer;
  font-size: ${(props) => getFontSize(props.shrinked, props.mobile)};
  color: ${(props) => props.color};

  transition: width 1.5s ease, max-width 1.5s ease;
`;
