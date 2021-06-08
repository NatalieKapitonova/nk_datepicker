import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Button from "./button";
import Calendar from "./calendars";
import CalendarYear from "./calendar-year";
import Popover from "./popover";
import Input from "./input";
import Datepicker from "./date";

import Layout from "./layout";

export default () => {
  return (
    <Switch>
      <Layout>
        <Redirect from={"/"} to={"/examples/date"} />
        <Route path={"/examples/button"} component={Button} />
        <Route path={"/examples/calendar"} component={Calendar} />
        <Route path={"/examples/calendar-year"} component={CalendarYear} />
        <Route path={"/examples/popover"} component={Popover} />
        <Route path={"/examples/input"} component={Input} />
        <Route path={"/examples/date"} component={Datepicker} />
      </Layout>
    </Switch>
  );
};
