import React, { createContext, useState, useReducer } from 'react';
import * as T from './type';
import { reducer } from './reducer';

import { themeLight } from './theme';

const initialState: T.State = {
  theme: themeLight
};

const ThemeContext = createContext<{
  state: T.State;
  dispatch: React.Dispatch<T.Actions>;
}>({
  state: initialState,
  dispatch: () => null
});

const ThemeProvider = (props: {
  children: React.ReactNode;
  theme?: T.Theme;
}) => {
  const [theme] = useState<T.Theme>(props.theme || themeLight); // Default theme is light

  const [state, dispatch] = useReducer(reducer, { theme });
  const value = { state, dispatch };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
