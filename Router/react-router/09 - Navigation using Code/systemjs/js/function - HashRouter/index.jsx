/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('app')
);
