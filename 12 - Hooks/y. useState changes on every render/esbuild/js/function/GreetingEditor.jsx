/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

let oldName, oldSetName;

function GreetingEditor() {
  const [name, setName] = useState('World');

  /* eslint no-console: 0 */
  console.log(
    '[sameName, sameSetName]: [',
    oldName === name,
    ', ',
    oldSetName === setName,
    ']'
  );
  oldName = name;
  oldSetName = setName;

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
    </>
  );
}

export default GreetingEditor;
