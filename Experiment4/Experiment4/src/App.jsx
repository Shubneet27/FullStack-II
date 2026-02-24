import { Routes, Route } from "react-router-dom";
import { useContext, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { AppContext } from "./context/AppContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Cart from "./pages/Cart";

function App() {
  const { darkMode } = useContext(AppContext);

  // 🔥 Create dynamic theme
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
