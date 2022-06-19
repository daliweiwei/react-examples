/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './Greeting';
import SpecialList from './SpecialList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SpecialList>
    <Greeting name="Alexandra" />
    <Greeting name="Benjamin" />
    <Greeting name="Charlotte" />
  </SpecialList>
);
