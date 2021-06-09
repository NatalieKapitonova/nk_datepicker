import React from "../_snowpack/pkg/react.js";
import {Link, matchPath} from "../_snowpack/pkg/react-router-dom.js";
import styled from "../_snowpack/pkg/styled-components.js";
export default (props) => {
  const routes = [
    {path: "date", divide: true, label: "Datepicker"},
    {path: "calendar", divide: false, label: "Month calendar"},
    {path: "calendar-year", divide: true, label: "Year calendar"},
    {path: "popover", divide: false, label: "Popover"},
    {path: "button", divide: false, label: "Button"},
    {path: "input", divide: false, label: "Input"}
  ];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Nav, null, routes.map((r, i) => {
    const isPathActive = !!matchPath(window.location.pathname, `/examples/${r.path}`);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NavLink, {
      key: i,
      to: `/examples/${r.path}`,
      active: isPathActive
    }, r.label), r.divide && /* @__PURE__ */ React.createElement("hr", null));
  })), /* @__PURE__ */ React.createElement("div", {
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
  color: ${(props) => props.active ? "#ef476f" : "#fff"};
  padding: 10px;
  padding-left: 25px;
  text-decoration: none;
  display: block;
`;
