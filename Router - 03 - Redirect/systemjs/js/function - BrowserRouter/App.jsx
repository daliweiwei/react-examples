/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  return (
    <BrowserRouter basename="Router%20-%2003%20-%20Redirect/systemjs/js/function%20-%20BrowserRouter">
      <header>
        <h1>App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/page1">Page 1</Link>
          <Link to="/page2">Page 2</Link>
          <Link to="/oldpage2">Old Page 2</Link>
        </nav>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          {/* Redirect from can only be used inside Switch */}
          <Redirect from="/oldpage2" to="/page2" />
        </Switch>
      </main>

      <footer>My copyright</footer>
    </BrowserRouter>
  );
}

export default App;
