/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class Greeting extends React.Component {
  render() {
    return (
      <h1 style={this.props.highlight ? { color: 'red' } : null}>
        Hello {this.props.name}!
      </h1>
    );
  }
}

export default Greeting;
