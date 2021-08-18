/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './Greeting';

ReactDOM.render(
  React.createElement(Greeting, {
    style: { background: 'orange', color: 'blue' }
  }),
  document.getElementById('root')
);
