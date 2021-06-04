import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
const calcWidth = (size) => 100 / 12 * size;
export default (props) => {
  const {size} = props;
  return /* @__PURE__ */ React.createElement(Column, {
    width: calcWidth(size)
  }, props.children);
};
const Column = styled.div`
  flow: left;
  display: inline-block;
  flex-grow: 1;
  width: ${(props) => props.width}%;
  vertical-align: top;
`;
