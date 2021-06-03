import React from "../../../_snowpack/pkg/react.js";
import * as C from "../utils/constants.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
export default (props) => {
  const {shrinked} = props;
  return /* @__PURE__ */ React.createElement("tr", null, C.weekDays.map((wd) => /* @__PURE__ */ React.createElement(WeekDay, {
    shrinked
  }, wd.substring(0, 2))));
};
const WeekDay = styled.td`
  color: gray;
  text-align: center;
  font-size: ${(props) => props.shrinked ? "0.6em" : "0.8em"};
  padding: ${(props) => props.shrinked ? 5 : 10};
`;
