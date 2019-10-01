import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/Global';
import PaletteStyle from './styles/Palette';
import Home from './pages/Home';

const App = () => (
  <ThemeProvider theme={PaletteStyle}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
);

export default App;
