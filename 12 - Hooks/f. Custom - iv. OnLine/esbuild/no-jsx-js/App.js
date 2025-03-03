/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createElement } from 'react';

import useIsOnLine from './hooks/online';

function App() {
  const isOnLine = useIsOnLine();
  return createElement(
    'h1',
    null,
    'Browser is ',
    isOnLine ? 'OnLine' : 'OffLine',
    '!'
  );
}

export default App;
