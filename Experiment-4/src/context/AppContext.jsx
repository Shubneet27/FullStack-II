import { createContext, useReducer, useState } from "react";
import appReducer from "../reducer/appReducer";

export const AppContext = createContext();

const initialState = {
  cart: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppContext.Provider
      value={{ state, dispatch, darkMode, toggleTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};
