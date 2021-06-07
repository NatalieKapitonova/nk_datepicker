import React from "react";
import * as History from "history";

import { Router, Switch, Route } from "react-router-dom";

import Examples from "./examples";

const basename: string = import.meta.env.SNOWPACK_PUBLIC_URL || "";

console.log(`basename: ${basename}`);

const history = History.createBrowserHistory({
  basename,
});

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
