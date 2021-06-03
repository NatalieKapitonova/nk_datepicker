import * as T from "./type";
import { themeLight } from "./theme";

export const initTheme = (theme?: T.Theme | undefined): T.Theme => {
  return theme || themeLight;
};

export const reducer = (data: T.State, actions: T.Actions) => {
  switch (actions.type) {
    case T.Types.Init:
      return { ...data, theme: initTheme(actions.payload.theme) };
    default:
      return data;
  }
};
