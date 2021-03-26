/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello {'{name}'}!</h1>
        <h1>Hello &#123;name&#125;!</h1>
      </>
    );
  }
}

export default App;
