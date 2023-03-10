/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import Bottom from './Bottom';

interface MiddleProps {
  color: string;
}

function Middle({ color }: MiddleProps) {
  return <Bottom color={color} />;
}

export default Middle;
