import { useMemo } from "react";
import {createTheme} from '@mui/material/styles'
import {themeSettings} from './theme'
function App() {
  const theme = useMemo(()=>createTheme(themeSettings), [])
  return <div className="app">aff</div>;
}

export default App;
