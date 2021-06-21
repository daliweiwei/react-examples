/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.createRoot(app).render(<h1>Hello React {React.version}!</h1>);
