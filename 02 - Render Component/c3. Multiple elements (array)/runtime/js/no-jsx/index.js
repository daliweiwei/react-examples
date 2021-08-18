/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting() {
  return [
    React.createElement('h1', { key: 'heading' }, 'Hello World!'),
    'What do you think about React?',
    React.createElement('div', { key: 'enthusiasm' }, 'It looks amazing.')
  ];
}

ReactDOM.render(React.createElement(Greeting), document.getElementById('root'));
