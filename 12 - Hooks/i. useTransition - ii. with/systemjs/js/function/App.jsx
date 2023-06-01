/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import React from 'react';

import { slowAdd } from './utils/index';

function App() {
  const [count, setCount] = React.useState(0);
  const [isPending, startTransition] = React.useTransition();

  function handleClick() {
    // Slow operation, but useTransition() prevents blocking the UI
    startTransition(() => setCount(c => slowAdd(c)));
  }

  return (
    <button onClick={handleClick}>
      Change count {isPending ? '[calculating...]' : count}
    </button>
  );
}

export default App;
