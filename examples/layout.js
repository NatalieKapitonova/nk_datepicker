import React from "../_snowpack/pkg/react.js";
import {Link} from "../_snowpack/pkg/react-router-dom.js";
import styled from "../_snowpack/pkg/styled-components.js";
export default (props) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Nav, null, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/examples/date"
  }, "Datepicker"), /* @__PURE__ */ React.createElement("hr", {
    style: {color: "gray"}
  }), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/examples/calendar"
  }, "Month calendar"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/examples/calendar-year"
  }, "Year calendar"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/examples/popover"
  }, "Popover"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/examples/calendar"
  }, "Month calendar"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/examples/input"
  }, "Input")), /* @__PURE__ */ React.createElement("div", {
    style: {marginLeft: "250px"}
  }, props.children));
};
const Nav = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #003049;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  width: 250px;
`;
const NavLink = styled(Link)`
  color: #fff;
  padding: 10px;
  padding-left: 25px;
  text-decoration: none;
  display: block;
`;
