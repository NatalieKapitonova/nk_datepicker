import React from "react";
import { Link, matchPath } from "react-router-dom";

import styled from "styled-components";

export default (props: { children: React.ReactNode }) => {
  const routes: { path: string; divide?: boolean; label: string }[] = [
    { path: "date", divide: true, label: "Datepicker" },
    { path: "calendar", divide: false, label: "Month calendar" },
    { path: "calendar-year", divide: true, label: "Year calendar" },
    { path: "popover", divide: false, label: "Popover" },
    { path: "button", divide: false, label: "Button" },
    { path: "input", divide: false, label: "Input" },
  ];
  return (
    <>
      <Nav>
        {routes.map((r, i) => {
          const isPathActive = !!matchPath(
            window.location.pathname,
            `/examples/${r.path}`
          );
          return (
            <>
              <NavLink key={i} to={`/examples/${r.path}`} active={isPathActive}>
                {r.label}
              </NavLink>
              {r.divide && <hr />}
            </>
          );
        })}
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
  color: ${(props) => (props.active ? "#ef476f" : "#fff")};
  padding: 10px;
  padding-left: 25px;
  text-decoration: none;
  display: block;
`;
