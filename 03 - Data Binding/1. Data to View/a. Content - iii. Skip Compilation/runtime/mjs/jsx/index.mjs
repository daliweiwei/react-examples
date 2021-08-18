/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from './react.development.mjs';
import ReactDOM from './react-dom.development.mjs';

function App() {
  return (
    <>
      <h1>Hello {'{name}'}!</h1>
      <h1>Hello &#123;name&#125;!</h1>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
