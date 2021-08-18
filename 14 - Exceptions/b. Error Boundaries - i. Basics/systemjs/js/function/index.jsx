/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from './ErrorBoundary';
import GreetingEditor from './GreetingEditor';

ReactDOM.render(
  <ErrorBoundary>
    <GreetingEditor />
  </ErrorBoundary>,
  document.getElementById('root')
);
