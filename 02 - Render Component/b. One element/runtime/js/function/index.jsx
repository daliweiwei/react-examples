/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global ReactDOM */

function Greeting() {
  return <h1>Hello World!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
