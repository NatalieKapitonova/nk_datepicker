import React from "./_snowpack/pkg/react.js";
import * as History from "./_snowpack/pkg/history.js";
import {Router, Switch, Route} from "./_snowpack/pkg/react-router-dom.js";
import Examples from "./examples/index.js";
const history = History.createBrowserHistory();
function App() {
  return /* @__PURE__ */ React.createElement(Router, {
    history
  }, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    component: Examples
  })));
}
export default App;
