import React, { useContext } from 'react';
import { ThemeContext } from '../../theming/context';
import * as T from './type';

import styled from 'styled-components';

const Button = (props: T.ButtonProps) => {
  const { size, round } = props;
  const {
    state: { theme }
  } = useContext(ThemeContext);
  const { onClick } = props;

  const handleClick = (e: any) => {
    e.preventDefault();

    onClick && onClick(e);
  };

  const sizeClassName = size === 'sm' ? 'small' : undefined;
  const roundedClassName = round ? 'rounded' : undefined;

  return (
    <ButtonStyled
      {...props}
      onClick={handleClick}
      theme={theme}
      className={[sizeClassName, roundedClassName].join(' ')}
    />
  );
};

const ButtonBase = (props: T.ButtonProps) => {
  return (
    <a onClick={props.onClick} className={props.className}>
      {props.children}
    </a>
  );
};

const ButtonStyled = styled(ButtonBase)`
  padding: 10px 15px;
  margin: 3px;
  border: 3px double
    ${props =>
      props.color
        ? props.theme.colors[props.color]
        : props.theme.colors.primary};
  color: ${props =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.color
        ? props.theme.colors[props.color]
        : props.theme.colors.primary};
    color: #fff;
    transition: 0.5s ease-in ease-out;
  }

  &.small {
    padding: 5px 7px;
    font-size: 0.8em;
    border: 1px solid
      ${props =>
        props.color
          ? props.theme.colors[props.color]
          : props.theme.colors.primary};
    color: ${props =>
      props.color
        ? props.theme.colors[props.color]
        : props.theme.colors.primary};

    &:hover {
      background-color: "#aaa"; !important
      transition: 0.5s ease-in ease-out;
    }
  }

  &.rounded {
    border-radius: 25px;
  }

  &:hover {
    background-color: ${props =>
      props.color
        ? props.theme.colors[props.color]
        : props.theme.colors.primary};
    color: #fff;
    transition: 0.5s ease-in ease-out;
  }
`;

export default Button;
