/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import React from 'react';

import Child from './Child';

class Parent extends React.Component {
  state = { count: 0 };
  handleClick = () => {
    // Batched:
    this.setState(
      state => {
        console.log('getValue: Parent');
        return { count: state.count + 1 };
      },
      () => console.log('Parent')
    );
  };

  render() {
    return <Child count={this.state.count} onClick={this.handleClick} />;
  }
}

export default Parent;
