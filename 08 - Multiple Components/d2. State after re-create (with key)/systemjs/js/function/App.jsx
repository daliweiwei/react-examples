/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import ClickMe from './ClickMe';

// Observe that after clicking the button, the ClickMe component
// is recreated, due to having a different key, with its initial state.

function App() {
  const [id, setId] = React.useState(0);

  function handleClick() {
    setId(i => i + 1);
  }

  return (
    <React.Fragment>
      <button onClick={handleClick}>Change ID</button>
      <br />
      <ClickMe key={id} />
    </React.Fragment>
  );
}

export default App;
