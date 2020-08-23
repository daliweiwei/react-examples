/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  const history = useHistory();

  function navigate(e) {
    e.preventDefault();
    history.push(e.target.dataset.url);
  }

  return (
    <React.Fragment>
      <header>
        <h1>App</h1>
        <nav>
          <a href="" onClick={navigate} data-url="/">
            Home
          </a>
          <a href="" onClick={navigate} data-url="/page1">
            Page 1
          </a>
          <a href="" onClick={navigate} data-url="/page2">
            Page 2
          </a>
        </nav>
      </header>

      <main>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </main>

      <footer>My copyright</footer>
    </React.Fragment>
  );
}

export default App;
