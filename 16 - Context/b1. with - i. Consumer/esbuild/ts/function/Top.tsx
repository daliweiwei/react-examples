/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import ColorContext from './ColorContext.ts';
import Middle from './Middle.tsx';

interface TopProps {
  color: string;
}

function Top({ color }: TopProps) {
  return (
    <ColorContext.Provider value={{ color }}>
      <Middle />
    </ColorContext.Provider>
  );
}

export default Top;
