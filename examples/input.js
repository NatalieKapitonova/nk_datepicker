import React, {useState} from "../_snowpack/pkg/react.js";
import Input from "../components/input/index.js";
export default () => {
  const [value, setValue] = useState("");
  return /* @__PURE__ */ React.createElement("div", {
    style: {padding: 50}
  }, /* @__PURE__ */ React.createElement("div", {
    style: {width: "50%"}
  }, /* @__PURE__ */ React.createElement(Input, {
    onChange: (o) => setValue(o.value),
    name: "demo",
    value,
    placeholder: "khgjhg"
  })));
};
