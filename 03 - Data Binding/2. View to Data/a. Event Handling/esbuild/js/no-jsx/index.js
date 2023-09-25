/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.js';

const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));
