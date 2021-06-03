import React from "../../../_snowpack/pkg/react.js";
import Button from "../../button/index.js";
export default (props) => {
  const {onClick} = props;
  return /* @__PURE__ */ React.createElement("div", {
    style: {display: "table-row", position: "relative", height: "40px"}
  }, /* @__PURE__ */ React.createElement("span", {
    style: {position: "absolute", right: "10%", bottom: "30px"}
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick,
    color: "error",
    size: "sm",
    round: true
  }, "OK")));
};
