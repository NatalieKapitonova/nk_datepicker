import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
export default (props) => {
  const {name, value, onChange, placeholder, onClick} = props;
  return /* @__PURE__ */ React.createElement(Input, {
    name,
    value,
    onChange: (e) => onChange({name, value: e.currentTarget.value}),
    placeholder,
    onClick
  });
};
const Input = styled.input`
  width: 100%;
  height: 40px;
  border-top: none;
  border-right: none;
  border-left: none;

  &:focus {
    outline: none;
    border-bottom: 3px solid #61a5c2;
    box-shadow: 0 6px 4px -6px grey;
  }

  &::placeholder {
    font-style: italic;
  }
`;
