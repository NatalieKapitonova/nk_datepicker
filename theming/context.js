import React, {createContext, useState, useReducer} from "../_snowpack/pkg/react.js";
import {reducer} from "./reducer.js";
import {themeLight} from "./theme.js";
const initialState = {
  theme: themeLight
};
const ThemeContext = createContext({
  state: initialState,
  dispatch: () => null
});
const ThemeProvider = (props) => {
  const [theme] = useState(props.theme || themeLight);
  const [state, dispatch] = useReducer(reducer, {theme});
  const value = {state, dispatch};
  return /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value
  }, props.children);
};
export {ThemeProvider, ThemeContext};
