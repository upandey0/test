import { useState } from "react";
import { themeContext } from "./mycontext"; // Corrected the casing here

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const changeTheme = (value) => {
    console.log(value);
    setTheme(value ? "dark" : "light");
  };
  return (
    <themeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
