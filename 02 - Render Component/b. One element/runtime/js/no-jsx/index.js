/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting() {
  return React.createElement('h1', null, 'Hello World!');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Greeting));
