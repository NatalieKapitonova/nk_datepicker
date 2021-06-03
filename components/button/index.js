import React, {useContext} from "../../_snowpack/pkg/react.js";
import {ThemeContext} from "../../theming/context.js";
import styled from "../../_snowpack/pkg/styled-components.js";
const Button = (props) => {
  const {size, round} = props;
  const {
    state: {theme}
  } = useContext(ThemeContext);
  const {onClick} = props;
  const handleClick = (e) => {
    e.preventDefault();
    onClick && onClick(e);
  };
  const sizeClassName = size === "sm" ? "small" : void 0;
  const roundedClassName = round ? "rounded" : void 0;
  return /* @__PURE__ */ React.createElement(ButtonStyled, {
    ...props,
    onClick: handleClick,
    theme,
    className: [sizeClassName, roundedClassName].join(" ")
  });
};
const ButtonBase = (props) => {
  return /* @__PURE__ */ React.createElement("a", {
    onClick: props.onClick,
    className: props.className
  }, props.children);
};
const ButtonStyled = styled(ButtonBase)`
  padding: 10px 15px;
  margin: 3px;
  border: 3px double
    ${(props) => props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
  color: ${(props) => props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
    color: #fff;
    transition: 0.5s ease-in ease-out;
  }

  &.small {
    padding: 5px 7px;
    font-size: 0.8em;
    border: 1px solid
      ${(props) => props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
    color: ${(props) => props.color ? props.theme.colors[props.color] : props.theme.colors.primary};

    &:hover {
      background-color: "#aaa"; !important
      transition: 0.5s ease-in ease-out;
    }
  }

  &.rounded {
    border-radius: 25px;
  }

  &:hover {
    background-color: ${(props) => props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
    color: #fff;
    transition: 0.5s ease-in ease-out;
  }
`;
export default Button;
