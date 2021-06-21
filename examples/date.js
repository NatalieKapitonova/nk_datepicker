import React, {useState} from "../_snowpack/pkg/react.js";
import Datepicker from "../components/datepicker/index.js";
import {useWindowDimensions} from "../components/calendar/utils/index.js";
const Box = (props) => {
  const {title, description, date} = props;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, title), /* @__PURE__ */ React.createElement("p", {
    style: {color: "gray"}
  }, description), /* @__PURE__ */ React.createElement("br", null), props.children, /* @__PURE__ */ React.createElement("i", {
    style: {color: "gray"}
  }, /* @__PURE__ */ React.createElement("small", null, date)), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null));
};
export default () => {
  const {mobile} = useWindowDimensions();
  const [date, setDate] = useState(new Date());
  const [dateNullable, setDateNullable] = useState(null);
  const [isoStringDate, setIsoStringDate] = useState(new Date().toISOString());
  const [dateInThePast, setDateInThePast] = useState(new Date(2019, 1, 1));
  const handleChange = (d) => {
    console.log(d);
    setDate(d);
  };
  return /* @__PURE__ */ React.createElement("div", {
    style: {padding: mobile ? 10 : 40, width: mobile ? "100%" : "50%"}
  }, /* @__PURE__ */ React.createElement("h2", null, "Datepicker"), /* @__PURE__ */ React.createElement("p", {
    style: {color: "gray"}
  }, "A simple React-CSS component"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Box, {
    title: "Standard usage",
    description: /* @__PURE__ */ React.createElement(React.Fragment, null, "Default behavior of the datepicker: input format is", " ", /* @__PURE__ */ React.createElement("code", null, "DD.MM.YYYY"), ",", /* @__PURE__ */ React.createElement("br", null), "output date format is Date object"),
    date: date.toString()
  }, /* @__PURE__ */ React.createElement(Datepicker, {
    name: "date1",
    date,
    onChange: handleChange
  })), /* @__PURE__ */ React.createElement(Box, {
    title: "Nullable date input",
    description: /* @__PURE__ */ React.createElement(React.Fragment, null, "Datepicker allows predefined null or undefined date", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "It is also possible to erase the date from the field, for this pass", " ", /* @__PURE__ */ React.createElement("code", null, "showClear"), " prop, and the Clear button will appear which will set the date to null"),
    date: dateNullable?.toString()
  }, /* @__PURE__ */ React.createElement(Datepicker, {
    name: "date2",
    date: dateNullable,
    onChange: (d) => setDateNullable(d),
    showClear: true
  })), /* @__PURE__ */ React.createElement(Box, {
    title: "ISO string output format",
    description: /* @__PURE__ */ React.createElement(React.Fragment, null, "Default output date format is Date object, but it possible to request an ISO string.", /* @__PURE__ */ React.createElement("br", null), "Prop ", /* @__PURE__ */ React.createElement("code", null, "outputDateFormat"), " can take one of the two values:", /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("code", null, "Date"), ": default"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("code", null, "ISO"), ": ISO string"))),
    date: isoStringDate.toString()
  }, /* @__PURE__ */ React.createElement(Datepicker, {
    name: "date4",
    date: isoStringDate,
    onChange: (d) => setIsoStringDate(d),
    outputDateFormat: "ISO"
  })), /* @__PURE__ */ React.createElement(Box, {
    title: "Select Today",
    description: /* @__PURE__ */ React.createElement(React.Fragment, null, "To be able to always select current date without searching, it is possible to pass ", /* @__PURE__ */ React.createElement("code", null, "showToday"), " prop, ", /* @__PURE__ */ React.createElement("br", null), "which will add the Today button."),
    date: dateInThePast?.toString()
  }, /* @__PURE__ */ React.createElement(Datepicker, {
    name: "dateInThePast",
    date: dateInThePast,
    onChange: (d) => setDateInThePast(d),
    showToday: true
  })), /* @__PURE__ */ React.createElement(Box, {
    title: "Date select methods",
    description: /* @__PURE__ */ React.createElement(React.Fragment, null, "By default there is an OK button which will close the calendar and select the date.", /* @__PURE__ */ React.createElement("br", null), "Prop ", /* @__PURE__ */ React.createElement("code", null, "selectMethod"), " can be of 3 possible types:", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("code", null, "ok_button"), ": will render OK (default)"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("code", null, "click_and_close"), ": will close the calendar once the day is selected"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("code", null, "focus_lost"), ": will close the calendar on the outside click on pressing Enter (not implemented yet)"))),
    date: date?.toString()
  }, /* @__PURE__ */ React.createElement(Datepicker, {
    name: "dateInThePast",
    date,
    onChange: (d) => {
      console.log(d);
      setDate(d);
    },
    selectMethod: "click_and_close"
  })), /* @__PURE__ */ React.createElement(Box, {
    title: "Custom color",
    description: /* @__PURE__ */ React.createElement(React.Fragment, null, "To change the default accent color of the datepicker, the", " ", /* @__PURE__ */ React.createElement("code", null, "color"), " prop needs to be populated with a string color."),
    date: isoStringDate.toString()
  }, /* @__PURE__ */ React.createElement(Datepicker, {
    name: "date4",
    date: isoStringDate,
    onChange: (d) => setIsoStringDate(d),
    outputDateFormat: "ISO",
    color: "#5e60ce"
  })), /* @__PURE__ */ React.createElement(Box, {
    title: "Disabled",
    description: /* @__PURE__ */ React.createElement(React.Fragment, null, "Standard ", /* @__PURE__ */ React.createElement("code", null, "disabled"), " boolean prop can be passed to disabled the input field"),
    date: date.toString()
  }, /* @__PURE__ */ React.createElement(Datepicker, {
    name: "date1",
    date,
    onChange: handleChange,
    disabled: true
  })));
};
