/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

import App from './App';
import Home from './routes/Home';
import Page1 from './routes/Page1';
import Page2 from './routes/Page2';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="page1/*" element={<Page1 />} />
        <Route path="page2/*" element={<Page2 />} />

        {/* Prefer handling this on the server with HTTP code 301 (or 308) */}
        <Route path="oldpage2/*" element={<Navigate replace to="/page2" />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
