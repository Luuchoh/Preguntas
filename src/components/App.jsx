import React from 'react';
import MainRouter from '../routers/MainRouter';
import { GlobalStyle } from '../assets/styles/style.js';

const App = () => {
  return <>
    <GlobalStyle />
    <MainRouter />
  </>
};

export default App;
