/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

const HelloWorld = () =>
  React.createElement(
    'h1',
    { ref: ref => (ref.innerHTML = 'Hello <i>React</i>!!!') },
    'Hello World!'
  );

export default HelloWorld;
