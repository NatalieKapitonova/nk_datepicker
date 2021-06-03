import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./router";
import { ThemeProvider } from "./theming/context";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
