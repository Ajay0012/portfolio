import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Projects from './components/Projects';
import Lessons from './components/Lessons';
import Contact from './components/Contact';
import './styles/App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2a9d8f',
    },
    secondary: {
      main: '#e9c46a',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Hero />
        <Story />
        <Projects />
        <Lessons />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
