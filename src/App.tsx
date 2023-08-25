import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useGlobalTheme } from "./styles/theme";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import Login from "./features/Login";
import Register from "./features/Register";

const path = {
  dashboard: "/",
  login: "/login",
  register: "/register",
};

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

const App: React.FC = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const theme = useGlobalTheme({ colorScheme });

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path={path.login} element={<Login />} />
            <Route path={path.register} element={<Register />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
