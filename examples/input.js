import React, {useState} from "../_snowpack/pkg/react.js";
import Input from "../components/input/index.js";
export default () => {
  const [value, setValue] = useState("");
  return /* @__PURE__ */ React.createElement("div", {
    style: {padding: 50}
  }, /* @__PURE__ */ React.createElement("div", {
    style: {width: "50%"}
  }, /* @__PURE__ */ React.createElement("p", null, "Input field"), /* @__PURE__ */ React.createElement(Input, {
    onChange: (o) => setValue(o.value),
    name: "demo",
    value,
    placeholder: "Enter your text here"
  }), /* @__PURE__ */ React.createElement("p", null, "Disabled input"), /* @__PURE__ */ React.createElement(Input, {
    onChange: (o) => setValue(o.value),
    name: "demo2",
    value: "",
    placeholder: "Disabled",
    disabled: true
  })));
};
