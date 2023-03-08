import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";
import Navbar from "./components/navbar";
import All from "./pages/all";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";
import Resume from "./pages/resume";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "rgb(34,34,34)"
    },
    primary: {
      main: 'rgb(189,46,46)',
    },
    secondary: {
      main: '#00e676',
    },
  }
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: "rgb(245,245,245)"
    },
    primary: {
      main: 'rgb(189,46,46)',
    },
    secondary: {
      main: '#00e676',
    },
  }
})

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const handleToggleTheme = () => {
    if (theme?.palette?.mode === 'dark') setTheme(lightTheme);
    else setTheme(darkTheme)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar theme={theme} handleToggleTheme={handleToggleTheme} />
        <Routes>
          <Route path='/' element={<All />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Router>

    </ThemeProvider>
  );
}

export default App;