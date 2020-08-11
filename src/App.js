import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Header from './components/Header';
import AppRouter from './AppRouter';
import GlobalStyles from './styles/GlobalStyles';


export default function App() {
  return (
      <BrowserRouter >
        <Header />
        <AppRouter />
        <GlobalStyles />
      </BrowserRouter >  
  );
}

