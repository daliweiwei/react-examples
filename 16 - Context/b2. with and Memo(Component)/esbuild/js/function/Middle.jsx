/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

import Bottom from './Bottom.jsx';

function Middle() {
  return <Bottom />;
}

export default React.memo(Middle);
