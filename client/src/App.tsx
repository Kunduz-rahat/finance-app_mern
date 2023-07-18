import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { themeSettings } from "./theme";
import { Dashboard } from "./pages/Dashboard.tsx";
import { Navbar } from "./scenes/navbar/index.tsx";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding='1rem 2rem 4rem 2rem'>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
