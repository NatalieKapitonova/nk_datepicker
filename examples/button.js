import React from "../_snowpack/pkg/react.js";
import Button from "../components/button/index.js";
export default () => {
  return /* @__PURE__ */ React.createElement("div", {
    style: {marginLeft: 50}
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Default button"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => alert("Clicked!")
  }, "Click me")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Round button"), /* @__PURE__ */ React.createElement(Button, {
    round: true,
    onClick: () => alert("Clicked!")
  }, "Click me")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Small button"), /* @__PURE__ */ React.createElement(Button, {
    size: "sm",
    onClick: () => alert("Clicked!")
  }, "Click me"), /* @__PURE__ */ React.createElement(Button, {
    size: "sm",
    round: true,
    onClick: () => alert("Clicked!")
  }, "Click me")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Custom color button"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => alert("Clicked!"),
    color: "#892b64"
  }, "Click me"), /* @__PURE__ */ React.createElement(Button, {
    round: true,
    onClick: () => alert("Clicked!"),
    color: "#5c4d7d"
  }, "Click me"), /* @__PURE__ */ React.createElement(Button, {
    size: "sm",
    onClick: () => alert("Clicked!"),
    color: "#455e89"
  }, "Click me"), /* @__PURE__ */ React.createElement(Button, {
    size: "sm",
    round: true,
    onClick: () => alert("Clicked!"),
    color: "#0091ad"
  }, "Click me")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Button filled"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => alert("Clicked!"),
    color: "#892b64",
    variant: "filled"
  }, "Click me"), /* @__PURE__ */ React.createElement(Button, {
    round: true,
    onClick: () => alert("Clicked!"),
    color: "#5c4d7d",
    variant: "filled"
  }, "Click me"), /* @__PURE__ */ React.createElement(Button, {
    size: "sm",
    onClick: () => alert("Clicked!"),
    color: "#455e89",
    variant: "filled"
  }, "Click me"), /* @__PURE__ */ React.createElement(Button, {
    size: "sm",
    round: true,
    onClick: () => alert("Clicked!"),
    color: "#0091ad",
    variant: "filled"
  }, "Click me")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Button with no border"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => alert("Clicked!"),
    color: "#892b64",
    variant: "no-border"
  }, "Click me"), /* @__PURE__ */ React.createElement(Button, {
    round: true,
    onClick: () => alert("Clicked!"),
    color: "#5c4d7d",
    variant: "no-border"
  }, "Click me"), /* @__PURE__ */ React.createElement(Button, {
    size: "sm",
    onClick: () => alert("Clicked!"),
    color: "#455e89",
    variant: "no-border"
  }, "Click me"), /* @__PURE__ */ React.createElement(Button, {
    size: "sm",
    round: true,
    onClick: () => alert("Clicked!"),
    color: "#0091ad",
    variant: "no-border"
  }, "Click me")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Large buttons"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => alert("Clicked!"),
    color: "#892b64",
    size: "lg"
  }, "Click me"), /* @__PURE__ */ React.createElement(Button, {
    round: true,
    onClick: () => alert("Clicked!"),
    color: "#5c4d7d",
    size: "lg"
  }, "Click me"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => alert("Clicked!"),
    color: "#455e89",
    size: "lg",
    variant: "filled"
  }, "Click me"), /* @__PURE__ */ React.createElement(Button, {
    round: true,
    onClick: () => alert("Clicked!"),
    color: "#0091ad",
    size: "lg",
    variant: "filled"
  }, "Click me")));
};
