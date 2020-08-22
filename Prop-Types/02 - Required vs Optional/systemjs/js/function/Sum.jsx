/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import PropTypes from 'prop-types';
import React from 'react';

function Sum({ first, second = 1 }) {
  return (
    <h1>
      {first} + {second} = {first + second}
    </h1>
  );
}
Sum.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number // Optional
};

export default Sum;
