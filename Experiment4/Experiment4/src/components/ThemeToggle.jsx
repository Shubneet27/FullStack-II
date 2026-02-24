import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Button } from "@mui/material";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(AppContext);

  return (
    <Button color="inherit" onClick={toggleTheme}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
};

export default ThemeToggle;
