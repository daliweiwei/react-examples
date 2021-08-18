/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

function App() {
  return (
    <React.Fragment>
      This is the React App.
      <Portal />
    </React.Fragment>
  );
}

function Portal() {
  return ReactDOM.createPortal(<Visible />, document.getElementById('portal'));
}

function Visible() {
  return (
    <h3>
      I am a visible portal, shown outside the react root by an invisible
      component!
    </h3>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
