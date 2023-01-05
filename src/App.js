import {ColorModeContext,useMode } from "./theme"
import {CssBaseline,ThemeProvider } from "@mui/material"
import Topbar from "./sences/global/Topbar";
import Sidebar from "./sences/global/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./sences/dashborad";
import Team from "./sences/contacts";
import Contacts from "./sences/team";
import Invoices from "./sences/invoices";


function App() {
  const [theme,colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
            <Sidebar />
            <main className="content">
                <Topbar />
                <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              {/*<Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
            </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
