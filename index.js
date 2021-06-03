import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import "./index.css.proxy.js";
import App from "./router.js";
import {ThemeProvider} from "./theming/context.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(ThemeProvider, null, /* @__PURE__ */ React.createElement(App, null))), document.getElementById("root"));
