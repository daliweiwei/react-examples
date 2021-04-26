/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function App() {
  const show = true;

  return (
    <React.Fragment>
      <h3>Conditional:</h3>
      {
        // Only render when a name is truthy:
        show && <div>Visible</div>
      }
    </React.Fragment>
  );
}

export default App;
