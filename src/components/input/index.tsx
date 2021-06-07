import React from "react";
import styled from "styled-components";

type Field = {
  name: string;
  value?: string;
};
interface Props {
  name: string;
  value?: string;
  onChange: (field: Field) => void;
  placeholder?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default (props: Props) => {
  const { name, value, onChange, placeholder, onClick, disabled } = props;

  return (
    <Input
      name={name}
      value={value}
      onChange={(e) => onChange({ name, value: e.currentTarget.value })}
      placeholder={placeholder}
      onClick={onClick}
      disabled={disabled}
    />
  );
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
