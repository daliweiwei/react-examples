/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import Greeting from './Greeting';
import List from './List';

function SpecialList(props) {
  return React.createElement(List, null, [
    React.createElement(Greeting, { key: 'special_first', name: 'first' }),
    ...props.children,
    React.createElement(Greeting, { key: 'special_last', name: 'last' })
  ]);
}

export default SpecialList;
