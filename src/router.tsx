import React from "react";
import * as History from "history";

import { Router, Switch, Route } from "react-router-dom";

import Examples from "./examples";

const history = History.createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Examples} />
      </Switch>
    </Router>
  );
}

export default App;
