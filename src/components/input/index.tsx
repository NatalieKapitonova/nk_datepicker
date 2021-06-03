import React from 'react';
import styled from 'styled-components';

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
}

export default (props: Props) => {
  const { name, value, onChange, placeholder, onClick } = props;

  return (
    <Input
      name={name}
      value={value}
      onChange={e => onChange({ name, value: e.currentTarget.value })}
      placeholder={placeholder}
      onClick={onClick}
    />
  );
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
