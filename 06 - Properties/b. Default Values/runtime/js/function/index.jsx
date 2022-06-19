/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting(props) {
  return <h1>Hello {props.name}!</h1>;
}
Greeting.defaultProps = { name: 'World' };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
