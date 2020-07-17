import React from 'react';

import api from "./services/api";

import Header from './components/Header/index.jsx';
import Main from './components/Main/index.jsx';
import GlobalStyles from './styles/GlobalStyles';

export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <GlobalStyles />
      {/* <>
        <ul>
          { subreddit.map( banana => (
            <li key={banana.id}>{banana.name}</li>
          )) }
        </ul>
      </> */}
    </div>
  );
}

