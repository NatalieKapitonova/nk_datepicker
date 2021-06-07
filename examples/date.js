import React, {useState} from "../_snowpack/pkg/react.js";
import Datepicker from "../components/datepicker/index.js";
export default () => {
  const [date, setDate] = useState(new Date());
  const [dateNullable, setDateNullable] = useState(null);
  const [isoStringDate, setIsoStringDate] = useState(new Date().toISOString());
  const [dateObj, setDateObj] = useState(new Date());
  const handleChange = (d) => {
    console.log(d);
    setDate(d);
  };
  return /* @__PURE__ */ React.createElement("div", {
    style: {padding: 40, width: "40%"}
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("i", {
    style: {color: "gray"}
  }, "Datepicker with pre-selected date (DD.MM.YYYY)"), /* @__PURE__ */ React.createElement(Datepicker, {
    name: "date1",
    date,
    onChange: handleChange,
    pattern: "DD.MM.YYYY"
  })), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("i", {
    style: {color: "gray"}
  }, "Datepicker initialized with null date (DD/MM/YYYY)"), /* @__PURE__ */ React.createElement(Datepicker, {
    name: "date2",
    date: dateNullable,
    onChange: (d) => setDateNullable(d),
    pattern: "DD/MM/YYYY"
  })), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("i", {
    style: {color: "gray"}
  }, "Datepicker disabled (DD-MM-YYYY)"), /* @__PURE__ */ React.createElement(Datepicker, {
    name: "date3",
    date,
    onChange: handleChange,
    pattern: "DD-MM-YYYY",
    disabled: true
  })), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("i", {
    style: {color: "gray"}
  }, "ISO string: ", /* @__PURE__ */ React.createElement("strong", null, isoStringDate.toString())), /* @__PURE__ */ React.createElement(Datepicker, {
    name: "date4",
    date: isoStringDate,
    onChange: (d) => setIsoStringDate(d),
    outputDateFormat: "ISO"
  })), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("i", {
    style: {color: "gray"}
  }, "Date object: ", /* @__PURE__ */ React.createElement("strong", null, dateObj.toString())), /* @__PURE__ */ React.createElement(Datepicker, {
    name: "date5",
    date: dateObj,
    onChange: (d) => setDateObj(d),
    outputDateFormat: "Date"
  })), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("i", {
    style: {color: "gray"}
  }, "MM-DD-YYYY"), /* @__PURE__ */ React.createElement(Datepicker, {
    name: "date6",
    date,
    onChange: handleChange,
    pattern: "MM-DD-YYYY"
  })), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("i", {
    style: {color: "gray"}
  }, "YYYY.MM.DD"), /* @__PURE__ */ React.createElement(Datepicker, {
    name: "date7",
    date,
    onChange: handleChange,
    pattern: "YYYY.MM.DD"
  })), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("i", {
    style: {color: "gray"}
  }, "YYYY/MM/DD"), /* @__PURE__ */ React.createElement(Datepicker, {
    name: "date8",
    date,
    onChange: handleChange,
    pattern: "YYYY/MM/DD"
  })), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("i", {
    style: {color: "gray"}
  }, "YYYY-MM-DD - disabled"), /* @__PURE__ */ React.createElement(Datepicker, {
    name: "date9",
    date,
    onChange: handleChange,
    pattern: "YYYY-MM-DD",
    disabled: true
  })));
};
