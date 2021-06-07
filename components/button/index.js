import React, {useContext} from "../../_snowpack/pkg/react.js";
import {ThemeContext} from "../../theming/context.js";
import styled from "../../_snowpack/pkg/styled-components.js";
const colorDefault = "#313d5a";
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
  const sizeClassName = size === "sm" ? "small" : size === "lg" ? "large" : "";
  const roundedClassName = round ? "rounded" : void 0;
  return /* @__PURE__ */ React.createElement(ButtonStyled, {
    ...props,
    onClick: handleClick,
    className: [sizeClassName, roundedClassName].join(" ")
  });
};
const ButtonBase = (props) => {
  return /* @__PURE__ */ React.createElement("a", {
    onClick: props.onClick,
    className: props.className
  }, props.children);
};
const getBorder = (variant, color, size) => {
  if (variant === "no-border") {
    return "none";
  }
  if (size === "sm") {
    return `1px solid ${color || colorDefault}`;
  }
  return `3px solid ${color || colorDefault}`;
};
const getBackground = (variant, color) => {
  if (variant === "filled") {
    return color || colorDefault;
  }
  return null;
};
const getColor = (variant, color) => {
  return variant === "filled" ? "#fff" : color || colorDefault;
};
const getBrightness = (variant) => {
  return variant === "filled" ? "120%" : "none";
};
const ButtonStyled = styled(ButtonBase)`
  padding: 10px 15px;
  margin: 3px;
  border: ${(props) => {
  const b = getBorder(props.variant, props.color, props.size);
  console.log(b);
  return b;
}};
  color: ${(props) => getColor(props.variant, props.color)};
  cursor: pointer;
  background-color: ${(props) => getBackground(props.variant, props.color)};

  &:hover {
    background-color: ${(props) => props.color || colorDefault};
    color: #fff;
    transition: 0.5s ease-in ease-out;
    filter: brightness(${(props) => getBrightness(props.variant)});
  }

  &:active {
    filter: brightness(90%);
  }
  &.small {
    padding: 5px 7px;
    font-size: 0.8em;
  }

  &.large {
    padding: 10px 17px;
    font-size: 1.3em;
    font-weight: 300;
  }

  &.rounded {
    border-radius: 25px;
  }
`;
export default Button;
