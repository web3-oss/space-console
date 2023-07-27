import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/topbar"
import Dashboard from "./scenes/dashboard"
//import Overview from "./scenes/overview"
//import Bitcoin from "./scenes/bitcoin"
//import Ethereum from "./scenes/ethereum"
//import Tether from "./scenes/tether"
//import Xrp from "./scenes/xrp"
//import Binance from "./scenes/binance"

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <main className="content">
            <TopBar/>
            <Dashboard/>
            <Routes>
              <Route path="/" />
              {/*<Route path="/bitcoin" element={<Bitcoin/>}/>
              <Route path="/ethereum" element={<Ethereum/>}/>
              <Route path="/tether" element={<Tether/>}/>
              <Route path="/xrp" element={<Xrp/>}/>
              <Route path="/binance" element={<Binance/>}/>*/}
              </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
