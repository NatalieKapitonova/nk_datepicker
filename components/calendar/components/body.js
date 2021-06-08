import React from "../../../_snowpack/pkg/react.js";
import WeekDays from "./week-days.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
export default (props) => {
  const {rows, onDayChange, daySelected, shrinked, color} = props;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(WeekDays, {
    shrinked
  }), rows.map((row) => /* @__PURE__ */ React.createElement("tr", null, row.map((r, i) => /* @__PURE__ */ React.createElement(Day, {
    color: daySelected === r ? color : "black",
    shrinked,
    onClick: () => onDayChange(r)
  }, r === 0 ? "" : r)))));
};
const Day = styled.td`
  margin: 2px;
  padding: ${(props) => props.shrinked ? "8px" : "10px"};
  text-align: center;
  cursor: pointer;
  font-size: ${(props) => props.shrinked ? "0.8em" : "inherit"};
  color: ${(props) => props.color};

  transition: width 1.5s ease, max-width 1.5s ease;
`;
