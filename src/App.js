import React, { useEffect } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import cardiologyTheme from "./themes/cardiology";
import dermatologyTheme from "./themes/dermatology";

const themeMap = {
  cardiology: cardiologyTheme,
  dermatology: dermatologyTheme,
};

const ThemedApp = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const specialty = params.get("specialty") || "cardiology";
    setTheme(themeMap[specialty]);
  }, [setTheme]);

  if (!theme.primaryColor) return <div>Loading Theme...</div>;

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        fontFamily: theme.fontFamily,
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1 style={{ color: theme.primaryColor }}>GoGetWell - Themed Store</h1>
      <p>This is a themed page based on {theme.fontFamily.includes("Georgia") ? "Dermatology" : "Cardiology"}</p>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemedApp />
  </ThemeProvider>
);

export default App;
