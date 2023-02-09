/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

/* eslint no-console: 0 */

function GreetingEditor() {
  const [name, setName] = React.useState('World');
  const [other, setOther] = React.useState('Other');

  // 2nd parameter:
  // - None: Always updates
  // - []: Only updates first time (wrong)
  // - [name]: Only updates if name changes
  React.useEffect(() => {
    console.count('effect');
    document.title = name;
  }, [name]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeOther(e) {
    setOther(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChangeName} value={name} />
      <h1>Hello {name}!</h1>
      <input onChange={handleChangeOther} value={other} />
      <h2>Hello {other}!</h2>
    </React.Fragment>
  );
}

export default GreetingEditor;
