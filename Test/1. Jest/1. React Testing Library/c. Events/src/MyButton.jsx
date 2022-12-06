/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';

function MyButton({ onClick }) {
  function handleClick(e) {
    return onClick(e.target.value);
  }

  return <button onClick={handleClick}>Click me!</button>;
}

export default MyButton;
