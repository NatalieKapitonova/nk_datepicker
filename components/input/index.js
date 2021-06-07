import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
export default (props) => {
  const {name, value, onChange, placeholder, onClick, disabled} = props;
  return /* @__PURE__ */ React.createElement(Input, {
    name,
    value,
    onChange: (e) => onChange({name, value: e.currentTarget.value}),
    placeholder,
    onClick,
    disabled
  });
};
const Input = styled.input`
  width: 100%;
  height: 40px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid gray;
  padding-left: 10px;

  &:focus {
    outline: none;
    border-bottom: 2px solid #313d5a;
    box-shadow: 0 6px 4px -6px grey;
    margin-bottom: -1px;
  }

  &::placeholder {
    font-style: italic;
  }

  &::disabled {
    background: #dddddd;
  }
`;
