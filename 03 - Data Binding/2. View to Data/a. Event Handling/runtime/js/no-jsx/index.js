/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

function App() {
  function changed(e) {
    alert(`Event handled.
Target: ${e.target}
Value: ${e.target.value}`);
  }

  return React.createElement('input', {
    onChange: changed,
    value: 'Hello React!'
  });
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
