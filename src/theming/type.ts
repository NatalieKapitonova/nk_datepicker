import * as T from "./type";

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    default: string;
    background: string;
  };
}

export interface State {
  // dark: boolean;
  theme: T.Theme;
  // toggle: () => void;
}

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Init = "INIT",
}

export type Payload = {
  [Types.Init]: {
    theme?: T.Theme;
  };
};

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>];
