/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019-2021 Rick Beerendonk     !*/

import React from 'react';

function AsyncResult({ name, time }) {
  const data = React.useRef();

  // Initialize data with Promise
  if (data.current === undefined) {
    // eslint-disable-next-line no-debugger
    debugger;
    data.current = new Promise(function (resolve) {
      setTimeout(() => resolve(`Result ${name}!`), time);
    }).then(value => {
      // eslint-disable-next-line no-debugger
      debugger;
      data.current = value;
      // eslint-disable-next-line no-debugger
      debugger;
    });
  }

  if (data.current instanceof Promise) {
    // "Return" the promise
    throw data.current;
  } else {
    // Return result if we already have one
    return data.current;
  }
}

export default AsyncResult;
