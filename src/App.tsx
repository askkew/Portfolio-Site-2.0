import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";
import Navbar from "./components/navbar";
import All from "./pages/all";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

const darkTheme = createTheme({
  palette: {
    background: {
      default: "rgb(34,34,34)"
    },
    mode: 'dark',
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
    background: {
      default: "#e4f0e2"
    },
    mode: 'light',
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
    if (theme?.palette?.mode === 'light') setTheme(darkTheme);
    else setTheme(lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar theme={theme} handleToggleTheme={handleToggleTheme} />
        <Routes>
          <Route path='/' element={<All />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>

    </ThemeProvider>
  );
}

export default App;