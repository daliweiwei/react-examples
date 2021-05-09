/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", no-console:"off" */

import React from 'react';

import Child from './Child';

const ChildMemo = React.memo(Child);

export default ChildMemo;
