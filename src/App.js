import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from '../src/components/ResponsiveAppBar'
import Advertisers from './pages/Advertisers';


const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },

});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/advertisers" element={<Advertisers />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
