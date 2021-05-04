/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function Greeting(props) {
  return React.createElement('i', null, props.greeting, ' ', props.name, '!');
}

export default Greeting;
