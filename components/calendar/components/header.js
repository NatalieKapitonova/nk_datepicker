import React from "../../../_snowpack/pkg/react.js";
import * as C from "../utils/constants.js";
import {useWindowDimensions} from "../utils/index.js";
export const Year = (props) => {
  const {year, onYearChange, color} = props;
  const {mobile} = useWindowDimensions();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("tr", {
    style: {textAlign: "center"}
  }, /* @__PURE__ */ React.createElement("td", {
    colSpan: 1,
    style: {fontSize: mobile ? "0.5em" : "0.7em", color: "gray"}
  }, /* @__PURE__ */ React.createElement("span", {
    style: {cursor: "pointer"},
    onClick: () => onYearChange(year - 1)
  }, year - 1)), /* @__PURE__ */ React.createElement("td", {
    colSpan: 5,
    style: {color, fontSize: mobile ? "1.1em" : "1.4em"}
  }, year), /* @__PURE__ */ React.createElement("td", {
    colSpan: 1,
    style: {fontSize: mobile ? "0.5em" : "0.7em", color: "gray"}
  }, /* @__PURE__ */ React.createElement("span", {
    style: {cursor: "pointer"},
    onClick: () => onYearChange(year + 1)
  }, year + 1))));
};
const Month = (props) => {
  const {month, onMonthChange, enableControls, color} = props;
  const {mobile} = useWindowDimensions();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("tr", {
    style: {textAlign: "center"}
  }, /* @__PURE__ */ React.createElement("td", {
    colSpan: 1,
    style: {fontSize: mobile ? "0.5em" : "0.7em", color: "gray"}
  }, enableControls && /* @__PURE__ */ React.createElement("span", {
    style: {cursor: "pointer"},
    onClick: () => onMonthChange(month - 1)
  }, (C.months[month - 1] || C.months[C.months.length - 1]).substring(0, 3))), /* @__PURE__ */ React.createElement("td", {
    colSpan: 5,
    style: {padding: 10, color, fontSize: mobile ? "1.1em" : "1.4em"}
  }, C.months[month]), /* @__PURE__ */ React.createElement("td", {
    colSpan: 1,
    style: {fontSize: mobile ? "0.5em" : "0.7em", color: "gray"}
  }, enableControls && /* @__PURE__ */ React.createElement("span", {
    style: {cursor: "pointer"},
    onClick: () => onMonthChange(month + 1)
  }, (C.months[month + 1] || C.months[0]).substring(0, 3)))));
};
export default (props) => {
  const {
    year,
    month,
    onYearChange,
    onMonthChange,
    showYear,
    enableControls,
    color
  } = props;
  return /* @__PURE__ */ React.createElement("thead", {
    style: {fontWeight: "initial"}
  }, showYear && /* @__PURE__ */ React.createElement(Year, {
    onYearChange,
    year,
    color
  }), /* @__PURE__ */ React.createElement(Month, {
    month,
    onMonthChange,
    enableControls,
    color
  }));
};
