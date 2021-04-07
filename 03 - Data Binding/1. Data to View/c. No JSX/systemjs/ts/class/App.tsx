/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

class App extends React.Component {
  render() {
    const name = 'React';

    return React.createElement(
      React.Fragment,
      null,
      React.createElement('input', { value: name }),
      React.createElement('h1', null, 'Hello ', name, '!')
    );
  }
}

export default App;
