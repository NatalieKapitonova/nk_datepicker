import * as T from "./type.js";
import {themeLight} from "./theme.js";
export const initTheme = (theme) => {
  return theme || themeLight;
};
export const reducer = (data, actions) => {
  switch (actions.type) {
    case T.Types.Init:
      return {...data, theme: initTheme(actions.payload.theme)};
    default:
      return data;
  }
};
