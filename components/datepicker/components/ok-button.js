import React from "../../../_snowpack/pkg/react.js";
import Button from "../../button/index.js";
export default (props) => {
  const {onClick, label} = props;
  return /* @__PURE__ */ React.createElement(Button, {
    onClick,
    size: "sm",
    variant: "no-border",
    color: props.color
  }, label);
};
