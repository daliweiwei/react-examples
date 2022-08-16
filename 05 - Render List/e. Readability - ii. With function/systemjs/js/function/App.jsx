/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function App() {
  const names = ['Alexandra', 'Benjamin', 'Charlotte'];

  function getNameListItems() {
    let result = [];
    for (const name of names) {
      result.push(<li key={name}>Hello {name}</li>);
    }
    return result;
  }

  return (
    <>
      <h1>Greetings</h1>
      <ul>{getNameListItems()}</ul>
    </>
  );
}

export default App;
