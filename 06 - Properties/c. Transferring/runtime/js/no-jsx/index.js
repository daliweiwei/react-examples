/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM */

function ImportantAnchor({ children, ...otherProps }) {
  return React.createElement('a', otherProps, '!!! ', children, ' !!!');
}

ReactDOM.render(
  React.createElement(
    ImportantAnchor,
    {
      href: 'https://react.dev',
      rel: 'noopener',
      target: '_blank',
      title: 'Everything about React'
    },
    'React website'
  ),
  document.getElementById('root')
);
