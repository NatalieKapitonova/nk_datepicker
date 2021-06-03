import React, {useState} from "../_snowpack/pkg/react.js";
import Datepicker from "../components/datepicker/index.js";
export default () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (d) => {
    console.log(d);
    setDate(d);
  };
  return /* @__PURE__ */ React.createElement("div", {
    style: {padding: 100, width: "40%"}
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      verticalAlign: "center",
      marginBottom: 50,
      color: "gray"
    }
  }, /* @__PURE__ */ React.createElement("i", null, date && date.toDateString())), /* @__PURE__ */ React.createElement(Datepicker, {
    date,
    onChange: handleChange
  }));
};
