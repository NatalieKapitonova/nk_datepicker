import React from "../_snowpack/pkg/react.js";
import Button from "../components/button/index.js";
export default () => {
  return /* @__PURE__ */ React.createElement("div", {
    style: {padding: 50}
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => alert("Thank you for clicking!"),
    color: "primary"
  }, "Button primary"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => alert("Thank you for clicking!"),
    color: "secondary"
  }, "Button secondary"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => alert("Thank you for clicking!"),
    color: "success"
  }, "Button success"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => alert("Thank you for clicking!"),
    color: "error"
  }, "Button error"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => alert("Thank you for clicking!"),
    color: "warning"
  }, "Button warning"));
};
