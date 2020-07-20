import React from 'react';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";

import api from "./services/api";

import Header from './components/Header';
import Main from './components/Main';
import Hot from './components/Hot';
import News from './components/News';
import Rising from './components/Rising';
import GlobalStyles from './styles/GlobalStyles';

export default function App() {
  return (
      <BrowserRouter >
        <Header />
        <Switch>
          <Route path="/" component={Main} exact></Route>
          <Route path="/hot" component={Hot} exact></Route>
          <Route path="/new" component={News} exact></Route>
          <Route path="/rising" component={Rising} exact></Route>
        </Switch>
        <GlobalStyles />
      </BrowserRouter >  
  );
}

