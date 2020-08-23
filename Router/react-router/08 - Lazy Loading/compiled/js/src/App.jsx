/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './Home';
const Page1 = React.lazy(() => import('./Page1'));
const Page2 = React.lazy(() => import('./Page2'));

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/page1">Page 1</Link>
          <Link to="/page2">Page 2</Link>
        </nav>
      </header>

      <main>
        <div style={{ color: 'lightgray' }}>
          <em>Show this example with a Network Latency.</em>
        </div>

        <React.Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
        </React.Suspense>
      </main>

      <footer>My copyright</footer>
    </BrowserRouter>
  );
}

export default App;
