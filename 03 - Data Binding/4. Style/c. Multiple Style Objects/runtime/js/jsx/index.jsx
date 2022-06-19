/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* global React, ReactDOM */

function App() {
  const style1 = {
    color: 'blue',
    fontStyle: 'italic'
  };
  const style2 = {
    color: 'red',
    textDecoration: 'underline'
  };

  // Pure JS, nothing specific React.
  // Some frameworks (like Vue) need special syntax.
  return <h1 style={{ ...style1, ...style2 }}>Hello React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
