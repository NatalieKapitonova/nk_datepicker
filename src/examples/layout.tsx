import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export default (props: { children: React.ReactNode }) => {
  return (
    <>
      <Nav>
        <NavLink to="/examples/date">Datepicker</NavLink>
        <hr style={{ color: "gray" }} />
        <NavLink to="/examples/calendar">Month calendar</NavLink>
        <NavLink to="/examples/calendar-year">Year calendar</NavLink>
        <hr style={{ color: "gray" }} />
        <NavLink to="/examples/popover">Popover</NavLink>
        <NavLink to="/examples/button">Button</NavLink>
        <NavLink to="/examples/input">Input</NavLink>
      </Nav>
      <div style={{ marginLeft: "250px" }}>{props.children}</div>
    </>
  );
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
