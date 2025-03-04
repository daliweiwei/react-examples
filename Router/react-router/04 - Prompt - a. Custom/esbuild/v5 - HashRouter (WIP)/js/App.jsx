/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/
import { HashRouter, Route, Link } from 'react-router-dom';

import Home from './Home.jsx';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';

export default function App() {
  return (
    <HashRouter>
      <header>
        <h1>App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/page1">Page 1 (with prompt)</Link>
          <Link to="/page2">Page 2</Link>
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
    </HashRouter>
  );
}
